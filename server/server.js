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
});

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// ──────────────────────────────────────────────
// DATA STRUCTURES
// ──────────────────────────────────────────────

// Queue of socket IDs waiting to be matched
const waitingQueue = [];

// Map: socketId -> { partnerId, recentPartners[] }
const users = new Map();

// Map: socketId -> number of reports received
const reportCounts = new Map();

// ──────────────────────────────────────────────
// REST ENDPOINTS
// ──────────────────────────────────────────────

// Health check – also returns how many users are online
app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    usersOnline: io.engine.clientsCount,
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
// HELPER: remove a socket from the waiting queue
// ──────────────────────────────────────────────
function removeFromQueue(socketId) {
  const idx = waitingQueue.indexOf(socketId);
  if (idx !== -1) waitingQueue.splice(idx, 1);
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
// ──────────────────────────────────────────────
function tryMatch(socketId) {
  const userData = users.get(socketId);
  if (!userData) return;

  for (let i = 0; i < waitingQueue.length; i++) {
    const candidateId = waitingQueue[i];

    // Skip self
    if (candidateId === socketId) continue;

    // Avoid re-pairing with someone you just chatted with
    if (userData.recentPartners.includes(candidateId)) continue;

    const candidateData = users.get(candidateId);
    if (!candidateData) continue;
    if (candidateData.recentPartners.includes(socketId)) continue;

    // ── Match found ──
    waitingQueue.splice(i, 1);
    removeFromQueue(socketId);

    // Link partners
    userData.partnerId = candidateId;
    candidateData.partnerId = socketId;

    // Track recent partners (keep last 5)
    userData.recentPartners.push(candidateId);
    if (userData.recentPartners.length > 5) userData.recentPartners.shift();
    candidateData.recentPartners.push(socketId);
    if (candidateData.recentPartners.length > 5) candidateData.recentPartners.shift();

    // Tell the initiator to create the WebRTC offer
    io.to(socketId).emit('matched', { partnerId: candidateId, initiator: true });
    io.to(candidateId).emit('matched', { partnerId: socketId, initiator: false });

    return;
  }

  // No match – add to queue
  if (!waitingQueue.includes(socketId)) {
    waitingQueue.push(socketId);
  }
  io.to(socketId).emit('waiting');
}

// ──────────────────────────────────────────────
// SOCKET.IO EVENTS
// ──────────────────────────────────────────────

io.on('connection', (socket) => {
  console.log(`+ connected: ${socket.id}`);

  users.set(socket.id, {
    partnerId: null,
    recentPartners: [],
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
    disconnectPartner(socket.id);
    tryMatch(socket.id);
  });

  // ── Stop chatting (go back to idle) ──
  socket.on('stop', () => {
    disconnectPartner(socket.id);
    removeFromQueue(socket.id);
  });

  // ── Disconnect ──
  socket.on('disconnect', () => {
    console.log(`- disconnected: ${socket.id}`);
    removeFromQueue(socket.id);
    disconnectPartner(socket.id);
    users.delete(socket.id);
  });
});

// ──────────────────────────────────────────────
// START SERVER
// ──────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Signaling server running on http://localhost:${PORT}`);
});
