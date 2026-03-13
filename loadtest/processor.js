'use strict';

/**
 * Artillery custom processor for Omeelo / randomchat load test.
 *
 * Handles bidirectional Socket.io events that Artillery's YAML DSL
 * can't express on its own:
 *   - Storing the matched partnerId on the VU context
 *   - Sending WebRTC offer/answer/ICE stubs so the signaling path is tested
 *   - Sending chat messages to the correct partner
 *   - Tracking per-VU metrics
 */

// ─── Counters (reported as custom metrics) ──────────────────────────────────
let matchedCount  = 0;
let waitingCount  = 0;
let messageCount  = 0;
let skipCount     = 0;
let errorCount    = 0;

// ─── Lifecycle hook: called once per Artillery worker process ────────────────
function beforeScenario(context, events, done) {
  // Per-VU state stored on the context object
  context.vars.partnerId   = null;
  context.vars.isInitiator = false;
  context.vars.chatCount   = 0;
  return done();
}

// ─── Handler: server emitted 'matched' ──────────────────────────────────────
function onMatched(context, events, done) {
  const socket = context._socket;

  socket.once('matched', (data) => {
    if (!data || !data.partnerId) {
      errorCount++;
      return done();
    }

    context.vars.partnerId   = data.partnerId;
    context.vars.isInitiator = data.initiator;
    matchedCount++;

    events.emit('counter', 'matched', 1);

    // If we are the initiator, send a stub WebRTC offer so the signaling
    // path (offer → answer → ice-candidate) is exercised under load.
    if (data.initiator) {
      socket.emit('offer', {
        to:    data.partnerId,
        offer: {
          type: 'offer',
          sdp:  'v=0\r\no=- 0 0 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n',
        },
      });

      // Simulate sending a few ICE candidates
      for (let i = 0; i < 3; i++) {
        socket.emit('ice-candidate', {
          to: data.partnerId,
          candidate: {
            candidate:     `candidate:${i} 1 UDP 2122252543 192.168.1.${i + 1} 5000${i} typ host`,
            sdpMLineIndex: 0,
          },
        });
      }
    }

    done();
  });

  // If the server puts us in the waiting queue instead of matching,
  // listen for 'waiting' and record the stat.
  socket.once('waiting', () => {
    waitingCount++;
    events.emit('counter', 'waiting', 1);
    done();
  });
}

// ─── Helper: send a chat message to current partner ─────────────────────────
function sendChatMessage(context, events, done) {
  const socket    = context._socket;
  const partnerId = context.vars.partnerId;

  if (!partnerId) return done();

  const messages = [
    'Hey there!',
    'How are you doing?',
    'Where are you from?',
    'Nice to meet you!',
    'What are you up to?',
    'This is a load test :)',
    'Hello from the other side',
    'ASL?',
    'Cool chat app!',
    'lol ok',
  ];

  const message = messages[Math.floor(Math.random() * messages.length)];

  socket.emit('chat-message', { to: partnerId, message });

  context.vars.chatCount++;
  messageCount++;
  events.emit('counter', 'chat_messages_sent', 1);

  done();
}

// ─── Aggregate stats: called at end of each Artillery interval ───────────────
function afterScenario(context, events, done) {
  events.emit('counter', 'scenarios_completed', 1);
  events.emit('counter', 'chat_messages_total', context.vars.chatCount || 0);
  return done();
}

module.exports = {
  beforeScenario,
  afterScenario,
  onMatched,
  sendChatMessage,
};
