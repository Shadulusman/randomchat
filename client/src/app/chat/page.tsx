'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { io, Socket } from 'socket.io-client';

// ─── Constants ───────────────────────────────
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001';

const ICE_CONFIG: RTCConfiguration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
  ],
};

// ─── Types ───────────────────────────────────
interface ChatMessage {
  from: 'me' | 'stranger';
  text: string;
}

type Status = 'idle' | 'waiting' | 'connected' | 'disconnected';

// ─── Page Component ──────────────────────────
export default function ChatPage() {
  // UI state
  const [status, setStatus] = useState<Status>('idle');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMsg, setInputMsg] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [reported, setReported] = useState(false);

  // Refs
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const partnerIdRef = useRef<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ─── Camera ────────────────────────────────
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      setCameraError(null);
      return stream;
    } catch {
      setCameraError(
        'Could not access your camera or microphone. Please allow access and reload.'
      );
      return null;
    }
  }, []);

  // ─── Peer Connection ───────────────────────
  const closePeer = useCallback(() => {
    pcRef.current?.close();
    pcRef.current = null;
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
  }, []);

  const createPeer = useCallback(
    (partnerId: string, initiator: boolean) => {
      closePeer();

      const pc = new RTCPeerConnection(ICE_CONFIG);
      pcRef.current = pc;

      // Add local tracks
      localStreamRef.current?.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current!);
      });

      // Receive remote tracks
      pc.ontrack = (e) => {
        if (remoteVideoRef.current && e.streams[0]) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };

      // Send ICE candidates
      pc.onicecandidate = (e) => {
        if (e.candidate) {
          socketRef.current?.emit('ice-candidate', {
            to: partnerId,
            candidate: e.candidate,
          });
        }
      };

      // If initiator, create offer
      if (initiator) {
        pc.createOffer()
          .then((offer) => pc.setLocalDescription(offer))
          .then(() => {
            socketRef.current?.emit('offer', {
              to: partnerId,
              offer: pc.localDescription,
            });
          });
      }

      return pc;
    },
    [closePeer]
  );

  // ─── Socket Setup ──────────────────────────
  useEffect(() => {
    const socket = io(SERVER_URL);
    socketRef.current = socket;

    socket.on('waiting', () => setStatus('waiting'));

    socket.on('matched', ({ partnerId, initiator }) => {
      partnerIdRef.current = partnerId;
      setStatus('connected');
      setMessages([]);
      setReported(false);
      createPeer(partnerId, initiator);
    });

    socket.on('offer', async ({ from, offer }) => {
      const pc = pcRef.current;
      if (!pc) return;
      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      socket.emit('answer', { to: from, answer: pc.localDescription });
    });

    socket.on('answer', async ({ answer }) => {
      await pcRef.current?.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    socket.on('ice-candidate', async ({ candidate }) => {
      await pcRef.current?.addIceCandidate(new RTCIceCandidate(candidate));
    });

    socket.on('chat-message', ({ message }) => {
      setMessages((prev) => [...prev, { from: 'stranger', text: message }]);
    });

    socket.on('partner-disconnected', () => {
      closePeer();
      partnerIdRef.current = null;
      setStatus('disconnected');
    });

    socket.on('banned', () => {
      alert('You have been temporarily banned due to multiple reports.');
      window.location.href = '/';
    });

    return () => {
      socket.disconnect();
      closePeer();
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [createPeer, closePeer]);

  // Start camera on mount
  useEffect(() => {
    startCamera();
    return () => {
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [startCamera]);

  // ─── Actions ───────────────────────────────
  const findMatch = () => {
    socketRef.current?.emit('find-match');
    setStatus('waiting');
  };

  const skipNext = () => {
    closePeer();
    partnerIdRef.current = null;
    setMessages([]);
    socketRef.current?.emit('skip');
    setStatus('waiting');
  };

  const endChat = () => {
    closePeer();
    partnerIdRef.current = null;
    setMessages([]);
    socketRef.current?.emit('stop');
    setStatus('idle');
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMsg.trim();
    if (!text || !partnerIdRef.current) return;
    socketRef.current?.emit('chat-message', {
      to: partnerIdRef.current,
      message: text,
    });
    setMessages((prev) => [...prev, { from: 'me', text }]);
    setInputMsg('');
  };

  const toggleMute = () => {
    localStreamRef.current?.getAudioTracks().forEach((t) => (t.enabled = isMuted));
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    localStreamRef.current?.getVideoTracks().forEach((t) => (t.enabled = isVideoOff));
    setIsVideoOff(!isVideoOff);
  };

  const reportUser = () => {
    if (!partnerIdRef.current || reported) return;
    fetch(`${SERVER_URL}/api/report`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reportedId: partnerIdRef.current, reason: 'inappropriate' }),
    });
    setReported(true);
    skipNext();
  };

  // ─── Render ────────────────────────────────
  return (
    <div className="h-screen flex flex-col bg-[#0a0a0f]">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 h-14 border-b border-white/5 shrink-0">
        <Link href="/" className="text-lg font-bold gradient-text">
          Omeelo
        </Link>
        <div className="flex items-center gap-2">
          {status === 'connected' && (
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Connected
            </span>
          )}
          {status === 'waiting' && (
            <span className="text-xs text-yellow-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Searching...
            </span>
          )}
        </div>
      </header>

      {/* Main Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Video Section */}
        <div className="flex-1 flex flex-col sm:flex-row gap-2 p-2 min-h-0">
          {/* Remote Video */}
          <div className="flex-1 relative bg-[#111118] rounded-xl overflow-hidden flex items-center justify-center">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay states */}
            {status === 'idle' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111118]">
                <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-lg mb-4">Ready to meet someone new?</p>
                <button
                  onClick={findMatch}
                  disabled={!!cameraError}
                  className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105"
                >
                  Start Chatting
                </button>
                {cameraError && (
                  <p className="text-red-400 text-sm mt-4 max-w-xs text-center">{cameraError}</p>
                )}
              </div>
            )}

            {status === 'waiting' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111118]">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-violet-600/30 rounded-full animate-pulse-ring absolute" />
                  <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center relative">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-2">Looking for someone...</p>
                <p className="text-gray-500 text-sm">This usually takes a few seconds</p>
                <button
                  onClick={endChat}
                  className="mt-6 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}

            {status === 'disconnected' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111118]">
                <p className="text-gray-300 text-lg mb-4">Stranger disconnected</p>
                <div className="flex gap-3">
                  <button
                    onClick={findMatch}
                    className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                  >
                    Find Next
                  </button>
                  <button
                    onClick={endChat}
                    className="border border-white/10 hover:border-white/20 text-gray-300 px-6 py-3 rounded-xl transition-all"
                  >
                    Stop
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Local Video (picture-in-picture style) */}
          <div className="sm:w-56 lg:w-64 h-36 sm:h-auto relative bg-[#111118] rounded-xl overflow-hidden shrink-0">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover mirror"
            />
            <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-gray-300 px-2 py-1 rounded">
              You
            </span>
          </div>
        </div>

        {/* Text Chat Sidebar */}
        <div
          className={`${
            showChat ? 'flex' : 'hidden'
          } lg:flex flex-col w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/5 bg-[#0d0d14]`}
        >
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-300">Chat</h3>
            <button
              onClick={() => setShowChat(false)}
              className="lg:hidden text-gray-500 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 hide-scrollbar">
            {messages.length === 0 && status === 'connected' && (
              <p className="text-gray-500 text-sm text-center mt-8">
                Say hello!
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    m.from === 'me'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : 'bg-white/10 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-3 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder={status === 'connected' ? 'Type a message...' : 'Connect to chat'}
                disabled={status !== 'connected'}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status !== 'connected'}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white px-3 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-center gap-3 px-4 h-16 border-t border-white/5 shrink-0">
        {/* Toggle Chat (mobile) */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="lg:hidden p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
          title="Toggle chat"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        {/* Mute */}
        <button
          onClick={toggleMute}
          className={`p-3 rounded-full transition-colors ${
            isMuted
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>

        {/* Video Toggle */}
        <button
          onClick={toggleVideo}
          className={`p-3 rounded-full transition-colors ${
            isVideoOff
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
          title={isVideoOff ? 'Turn on camera' : 'Turn off camera'}
        >
          {isVideoOff ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>

        {/* Skip / Next */}
        {(status === 'connected' || status === 'waiting') && (
          <button
            onClick={skipNext}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
            title="Next person"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* End Call */}
        {status !== 'idle' && (
          <button
            onClick={endChat}
            className="p-3 rounded-full bg-red-600 hover:bg-red-500 text-white transition-colors"
            title="End chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Report */}
        {status === 'connected' && (
          <button
            onClick={reportUser}
            disabled={reported}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-orange-400 disabled:opacity-30 transition-colors"
            title="Report user"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
