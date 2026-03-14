# Load Test – Omeelo Signaling Server

Simulates **10 000 concurrent users** against the Socket.io signaling server.

## Quick start

```bash
cd loadtest
npm install

# 1. Smoke test first (50 VUs) – make sure everything works
./run.sh smoke

# 2. Full load test (10 000 VUs)
./run.sh load

# 3. View HTML report
./run.sh report

# 4. Stress test – find the breaking point
./run.sh stress
```

## What the load test simulates

| Event | Description |
|---|---|
| `connect` | Socket.io WebSocket handshake |
| `find-match` | User requests a chat partner |
| `matched` | Server pairs two users |
| `waiting` | User added to queue (no partner yet) |
| `offer` / `ice-candidate` | WebRTC signaling (stub SDPs) |
| `chat-message` | Text messages between paired users |
| `skip` | User skips to next partner |
| `stop` | User stops chatting |
| `disconnect` | Connection dropped |

## User behaviour mix

| Scenario | Weight | Description |
|---|---|---|
| Regular chat user | 70 % | Connect → match → chat 1-5 msgs → skip → chat again → stop |
| Quick skipper | 20 % | Rapid skip loop (3-8 times) |
| Long session | 10 % | Stay connected 60-120 s, send 5-15 messages |

## Load phases

| Phase | Duration | VUs |
|---|---|---|
| Warm-up | 60 s | 0 → 200 |
| Ramp-up | 120 s | 200 → 2 000 |
| Peak ramp | 180 s | 2 000 → 10 000 |
| Sustain | 300 s | 10 000 (held) |
| Ramp-down | 60 s | 10 000 → 0 |

## Server requirements for 10k users

### On the **load test machine**

```bash
# Raise file descriptors (each WS connection = 1 FD)
ulimit -n 65536

# Give Node.js enough heap for 10k in-process coroutines
export NODE_OPTIONS="--max-old-space-size=4096"
```

### On the **server machine**

```bash
# Permanent FD increase
echo "* soft nofile 100000" | sudo tee -a /etc/security/limits.conf
echo "* hard nofile 100000" | sudo tee -a /etc/security/limits.conf

# Kernel TCP tuning
sudo sysctl -w net.core.somaxconn=65535
sudo sysctl -w net.ipv4.tcp_max_syn_backlog=65535
sudo sysctl -w net.ipv4.ip_local_port_range="1024 65535"

# Make persistent
echo "net.core.somaxconn=65535"           | sudo tee -a /etc/sysctl.conf
echo "net.ipv4.tcp_max_syn_backlog=65535" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Start the server with enough heap

```bash
cd server
NODE_OPTIONS="--max-old-space-size=2048" node server.js
```

## What was optimised in the server

| Before | After |
|---|---|
| `waitingQueue` array with O(n) `indexOf`/`splice` | `waitingSet` (Set) with O(1) add/delete |
| `console.log` on every connect/disconnect | Throttled: 1 log per 100 events |
| `recentPartners` as array searched with `includes()` (O(n)) | Search loop uses Set for O(1) `has()` checks |
| No transport preference | Forces `websocket` transport (skips long-poll upgrade) |

## Key metrics to watch

- **p95 / p99 latency** on `matched` event – should stay < 500 ms
- **Error rate** – target < 1 %
- **Server CPU** – a single Node.js process should handle ~5-8k before CPU saturates; use `cluster` module or PM2 cluster mode to go beyond that
- **Memory** – each connection uses ~10-20 KB; 10k = ~150-200 MB RSS

## Going beyond 10k

If you need > 10k concurrent users on a single server:

1. **PM2 cluster mode** – forks one process per CPU core
   ```bash
   pm2 start server.js -i max
   ```
   Requires a sticky-session load balancer (e.g. nginx with `ip_hash`) because Socket.io requires all requests from a client to hit the same process.

2. **Redis adapter** – allows multiple server processes to share state
   ```bash
   npm install @socket.io/redis-adapter ioredis
   ```

3. **Horizontal scaling** – run the server on multiple VMs behind a load balancer.
