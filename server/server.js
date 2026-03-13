const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Allow all frontend domains (Vercel, custom domain, localhost)
const allowedOrigins = [
  'http://localhost:3000',
  'https://randomchat-omega.vercel.app',
  'https://omeelo.com',
  'https://www.omeelo.com',
];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  },
  // ── Scale tuning ──────────────────────────────────────────────────────────
  // Increase the ping interval/timeout so the server isn't overwhelmed
  // by heartbeat chatter at 10k connections.
  pingInterval: 25000,   // default 25 000 ms – keep as-is
  pingTimeout:  20000,   // default 20 000 ms – keep as-is
  // Use only WebSocket transport; avoids the HTTP long-poll upgrade overhead
  // at the cost of older browser support (acceptable for this app).
  transports: ['websocket'],
});

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// ──────────────────────────────────────────────
// DATA STRUCTURES
// ──────────────────────────────────────────────

// Use a Set for O(1) add/has/delete instead of an array with indexOf/splice.
// We still need ordered iteration for matching, so we keep insertion order
// (Set preserves it) and convert to iterator when scanning.
const waitingSet = new Set();

// Map: socketId -> { partnerId, recentPartners: Set }
// recentPartners is a Set for O(1) lookup; we cap it at 5 entries manually.
const users = new Map();

// Map: socketId -> number of reports received
const reportCounts = new Map();

// ──────────────────────────────────────────────
// LOGGING  (throttled at scale)
// ──────────────────────────────────────────────

// At 10k connections a console.log per event creates serious I/O pressure.
// We only log every N-th connection event and key errors instead.
let connCount = 0;
const LOG_EVERY = 100; // log 1 in 100 connect/disconnect events

function logConn(dir, id) {
  connCount++;
  if (connCount % LOG_EVERY === 0) {
    console.log(`[${dir}] ${id}  |  online: ${io.engine.clientsCount}  |  waiting: ${waitingSet.size}`);
  }
}

// ──────────────────────────────────────────────
// REST ENDPOINTS
// ──────────────────────────────────────────────

// Health check – also returns how many users are online
app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    usersOnline: io.engine.clientsCount,
    usersWaiting: waitingSet.size,
  });
});

// Report a user for bad behaviour
app.post('/api/report', (req, res) => {
  const { reportedId, reason } = req.body;
  if (!reportedId) return res.status(400).json({ error: 'Missing reportedId' });

  const count = (reportCounts.get(reportedId) || 0) + 1;
  reportCounts.set(reportedId, count);

  // Auto-ban after 3 reports
  if (count >= 3) {
    const sock = io.sockets.sockets.get(reportedId);
    if (sock) {
      sock.emit('banned', { reason: 'Multiple users reported you.' });
      sock.disconnect(true);
    }
  }

  res.json({ success: true });
});

// ──────────────────────────────────────────────
// HELPER: remove a socket from the waiting set
// ──────────────────────────────────────────────
function removeFromQueue(socketId) {
  waitingSet.delete(socketId); // O(1)
}

// ──────────────────────────────────────────────
// HELPER: disconnect two partners
// ──────────────────────────────────────────────
function disconnectPartner(socketId) {
  const userData = users.get(socketId);
  if (!userData || !userData.partnerId) return;

  const partnerId = userData.partnerId;
  const partnerData = users.get(partnerId);

  // Clear partner references
  userData.partnerId = null;
  if (partnerData) partnerData.partnerId = null;

  // Notify the partner
  const partnerSocket = io.sockets.sockets.get(partnerId);
  if (partnerSocket) partnerSocket.emit('partner-disconnected');
}

// ──────────────────────────────────────────────
// HELPER: try to match a socket with someone
// O(n) scan of the waiting set – acceptable because the set only contains
// *waiting* users (a fraction of total connections) and the loop exits on
// the first valid candidate.
// ──────────────────────────────────────────────
function tryMatch(socketId) {
  const userData = users.get(socketId);
  if (!userData) return;

  const queueSize = waitingSet.size;

  for (const candidateId of waitingSet) {
    // Skip self
    if (candidateId === socketId) continue;

    const candidateData = users.get(candidateId);
    if (!candidateData) {
      // Stale entry – clean it up
      waitingSet.delete(candidateId);
      continue;
    }

    // Only avoid recent partners when there are enough people online
    if (queueSize >= 5) {
      if (userData.recentPartners.has(candidateId)) continue;
      if (candidateData.recentPartners.has(socketId)) continue;
    }

    // ── Match found ──
    waitingSet.delete(candidateId);
    waitingSet.delete(socketId);

    // Link partners
    userData.partnerId    = candidateId;
    candidateData.partnerId = socketId;

    // Track recent partners (keep last 5)
    // recentPartners is a plain array here for ordered eviction
    userData.recentPartners.push(candidateId);
    if (userData.recentPartners.length > 5) userData.recentPartners.shift();
    candidateData.recentPartners.push(socketId);
    if (candidateData.recentPartners.length > 5) candidateData.recentPartners.shift();

    // Tell the initiator to create the WebRTC offer
    io.to(socketId).emit('matched',   { partnerId: candidateId, initiator: true });
    io.to(candidateId).emit('matched', { partnerId: socketId,    initiator: false });

    return;
  }

  // No match – add to queue
  waitingSet.add(socketId);
  io.to(socketId).emit('waiting');
}

// ──────────────────────────────────────────────
// SOCKET.IO EVENTS
// ──────────────────────────────────────────────

io.on('connection', (socket) => {
  logConn('+', socket.id);

  users.set(socket.id, {
    partnerId:      null,
    recentPartners: [],   // plain array – max 5, for ordered eviction
  });

  // ── User wants to find a chat partner ──
  socket.on('find-match', () => {
    if (!users.has(socket.id)) return;
    removeFromQueue(socket.id);
    disconnectPartner(socket.id);
    tryMatch(socket.id);
  });

  // ── WebRTC signaling: offer ──
  socket.on('offer', ({ to, offer }) => {
    io.to(to).emit('offer', { from: socket.id, offer });
  });

  // ── WebRTC signaling: answer ──
  socket.on('answer', ({ to, answer }) => {
    io.to(to).emit('answer', { from: socket.id, answer });
  });

  // ── WebRTC signaling: ICE candidate ──
  socket.on('ice-candidate', ({ to, candidate }) => {
    io.to(to).emit('ice-candidate', { from: socket.id, candidate });
  });

  // ── Text chat message ──
  socket.on('chat-message', ({ to, message }) => {
    if (typeof message === 'string' && message.length <= 500) {
      io.to(to).emit('chat-message', { from: socket.id, message });
    }
  });

  // ── Skip to next user ──
  socket.on('skip', () => {
    const userData  = users.get(socket.id);
    const partnerId = userData?.partnerId;

    disconnectPartner(socket.id);
    tryMatch(socket.id);

    // Auto re-queue the skipped partner so they don't have to reload
    if (partnerId && users.has(partnerId)) {
      tryMatch(partnerId);
    }
  });

  // ── Stop chatting (go back to idle) ──
  socket.on('stop', () => {
    disconnectPartner(socket.id);
    removeFromQueue(socket.id);
  });

  // ── Disconnect ──
  socket.on('disconnect', () => {
    logConn('-', socket.id);
    const userData  = users.get(socket.id);
    const partnerId = userData?.partnerId;

    removeFromQueue(socket.id);
    disconnectPartner(socket.id);
    users.delete(socket.id);

    // Auto re-queue the remaining partner so they auto-search for someone new
    if (partnerId && users.has(partnerId)) {
      tryMatch(partnerId);
    }
  });
});

// ──────────────────────────────────────────────
// START SERVER
// ──────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Signaling server running on http://localhost:${PORT}`);
});
