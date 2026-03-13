#!/usr/bin/env node
'use strict';

/**
 * Omeelo Signaling Server – Load Test
 *
 * Usage:
 *   node loadtest.js [--users N] [--ramp SECONDS] [--url URL]
 *
 * Defaults:
 *   --users  10000
 *   --ramp   120     (ramp-up period in seconds)
 *   --url    http://localhost:3001
 *
 * What each virtual user does:
 *   1. Connect via WebSocket
 *   2. Emit 'find-match'
 *   3. If matched: exchange a WebRTC offer + ICE candidates + chat messages
 *   4. Skip to next partner (1-3 times)
 *   5. Disconnect
 */

// ── Parse CLI args ────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(name, fallback) {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
}

const TARGET_USERS  = parseInt(getArg('--users', '10000'), 10);
const RAMP_SECONDS  = parseInt(getArg('--ramp',  '120'),   10);
const SERVER_URL    = getArg('--url', process.env.SERVER_URL || 'http://localhost:3001');
const REPORT_INTERVAL_MS = 5000;

// ── Metrics ───────────────────────────────────────────────────────────────────
const metrics = {
  connected:    0,
  disconnected: 0,
  errors:       0,
  matched:      0,
  waiting:      0,
  messages:     0,
  skips:        0,
  latencies:    [],   // ms from find-match → matched
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function percentile(arr, p) {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const idx    = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, idx)];
}

// ── One virtual user ──────────────────────────────────────────────────────────
async function runUser(userId) {
  return new Promise((resolve) => {
    let resolved = false;
    function done() {
      if (!resolved) {
        resolved = true;
        metrics.disconnected++;
        resolve();
      }
    }

    const socket = require('socket.io-client')(SERVER_URL, {
      transports:      ['websocket'],
      extraHeaders:    { origin: 'http://localhost:3000' },
      reconnection:    false,
      timeout:         10000,
    });

    // State for this VU
    let partnerId     = null;
    let matchStart    = null;
    let skipsDone     = 0;
    const maxSkips    = rand(1, 3);

    // ── Connection error ──────────────────────────────────────────────────────
    socket.on('connect_error', () => {
      metrics.errors++;
      done();
    });

    // ── Connected ─────────────────────────────────────────────────────────────
    socket.on('connect', () => {
      metrics.connected++;
      matchStart = Date.now();
      socket.emit('find-match');
    });

    // ── Matched ───────────────────────────────────────────────────────────────
    socket.on('matched', async (data) => {
      if (!data || !data.partnerId) return;

      partnerId = data.partnerId;
      metrics.matched++;

      if (matchStart) {
        metrics.latencies.push(Date.now() - matchStart);
        matchStart = null;
      }

      // Initiator sends a stub WebRTC offer
      if (data.initiator) {
        socket.emit('offer', {
          to:    partnerId,
          offer: { type: 'offer', sdp: 'v=0\r\no=- 0 0 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n' },
        });

        // Send 2-4 ICE candidates
        for (let i = 0; i < rand(2, 4); i++) {
          socket.emit('ice-candidate', {
            to:        partnerId,
            candidate: { candidate: `candidate:${i} 1 UDP 2122252543 10.0.0.${i + 1} 5000${i} typ host`, sdpMLineIndex: 0 },
          });
        }
      }

      // Send a few chat messages
      await sleep(rand(500, 2000));
      const msgCount = rand(0, 4);
      const msgs = ['Hey!', 'Hello', 'How are you?', 'asl?', 'hi there', 'what\'s up?', 'bye!'];
      for (let i = 0; i < msgCount; i++) {
        if (!socket.connected) break;
        socket.emit('chat-message', {
          to:      partnerId,
          message: msgs[rand(0, msgs.length - 1)],
        });
        metrics.messages++;
        await sleep(rand(300, 1500));
      }

      // Skip or stop
      if (!socket.connected) return;
      if (skipsDone < maxSkips) {
        skipsDone++;
        metrics.skips++;
        matchStart = Date.now();
        socket.emit('skip');
      } else {
        socket.emit('stop');
        await sleep(rand(1000, 5000));
        socket.disconnect();
      }
    });

    // ── Waiting (no match found yet) ──────────────────────────────────────────
    socket.on('waiting', () => {
      metrics.waiting++;
      // Will be matched eventually as more users connect – just stay connected
    });

    // ── Partner disconnected ──────────────────────────────────────────────────
    socket.on('partner-disconnected', () => {
      partnerId = null;
      // Re-queue automatically
      matchStart = Date.now();
      socket.emit('find-match');
    });

    // ── Disconnected ──────────────────────────────────────────────────────────
    socket.on('disconnect', done);

    // ── Safety timeout: disconnect after max 3 min ────────────────────────────
    setTimeout(() => {
      if (socket.connected) socket.disconnect();
      done();
    }, 180_000);
  });
}

// ── Reporting ─────────────────────────────────────────────────────────────────
function printReport(elapsed) {
  const active = metrics.connected - metrics.disconnected;
  const p50    = percentile(metrics.latencies, 50);
  const p95    = percentile(metrics.latencies, 95);
  const p99    = percentile(metrics.latencies, 99);

  console.log(
    `[${String(elapsed).padStart(4)}s]` +
    `  active: ${String(active).padStart(6)}` +
    `  connected: ${String(metrics.connected).padStart(7)}` +
    `  matched: ${String(metrics.matched).padStart(7)}` +
    `  waiting: ${String(metrics.waiting).padStart(6)}` +
    `  msgs: ${String(metrics.messages).padStart(6)}` +
    `  errors: ${String(metrics.errors).padStart(5)}` +
    `  latency p50/p95/p99: ${p50}/${p95}/${p99} ms`
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  // Raise the max number of sockets (only works if run as root or with privileges)
  try { require('net').setDefaultAutoSelectFamilyAttemptTimeout?.(2500); } catch {}

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(` Omeelo Load Test`);
  console.log(` Target : ${SERVER_URL}`);
  console.log(` Users  : ${TARGET_USERS.toLocaleString()}`);
  console.log(` Ramp   : ${RAMP_SECONDS}s`);
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('');

  const startTime    = Date.now();
  const delayPerUser = (RAMP_SECONDS * 1000) / TARGET_USERS;  // ms between each spawn

  // Periodic report
  const reporter = setInterval(() => {
    printReport(Math.round((Date.now() - startTime) / 1000));
  }, REPORT_INTERVAL_MS);

  // Spawn all VUs with a ramp delay
  const promises = [];
  for (let i = 0; i < TARGET_USERS; i++) {
    promises.push(runUser(i));
    if (delayPerUser > 0) await sleep(delayPerUser);
  }

  console.log(`\n>>> All ${TARGET_USERS.toLocaleString()} users spawned. Waiting for sessions to finish...\n`);

  await Promise.allSettled(promises);
  clearInterval(reporter);

  const totalSec = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('');
  console.log('═══════════════════════════════════════════════════════ RESULTS');
  console.log(` Duration          : ${totalSec} s`);
  console.log(` Total connected   : ${metrics.connected.toLocaleString()}`);
  console.log(` Total matched     : ${metrics.matched.toLocaleString()}`);
  console.log(` Total waiting     : ${metrics.waiting.toLocaleString()}`);
  console.log(` Chat messages     : ${metrics.messages.toLocaleString()}`);
  console.log(` Skips             : ${metrics.skips.toLocaleString()}`);
  console.log(` Errors            : ${metrics.errors.toLocaleString()}`);
  console.log(` Error rate        : ${((metrics.errors / TARGET_USERS) * 100).toFixed(2)} %`);
  console.log('');
  console.log(` Latency (find-match → matched):`);
  console.log(`   p50  : ${percentile(metrics.latencies, 50)} ms`);
  console.log(`   p95  : ${percentile(metrics.latencies, 95)} ms`);
  console.log(`   p99  : ${percentile(metrics.latencies, 99)} ms`);
  console.log(`   max  : ${Math.max(...metrics.latencies, 0)} ms`);
  console.log('═══════════════════════════════════════════════════════════════');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
