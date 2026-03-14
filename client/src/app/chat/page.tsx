'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { io, Socket } from 'socket.io-client';
import Logo from '@/components/Logo';
import ShareButton from '@/components/ShareButton';
import AdUnit from '@/components/AdUnit';
import { AD_SLOTS } from '@/config/ads';

// ─── Constants ───────────────────────────────
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001';

const ICE_CONFIG: RTCConfiguration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    // TURN relay servers — needed for restrictive networks (UAE, corporate, etc.)
    {
      urls: 'turn:openrelay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject',
    },
    {
      urls: 'turn:openrelay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject',
    },
    {
      urls: 'turn:openrelay.metered.ca:443?transport=tcp',
      username: 'openrelayproject',
      credential: 'openrelayproject',
    },
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
  const [chatCount, setChatCount] = useState(0);
  const [showSharePrompt, setShowSharePrompt] = useState(false);

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

      localStreamRef.current?.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current!);
      });

      pc.ontrack = (e) => {
        if (remoteVideoRef.current && e.streams[0]) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };

      pc.onicecandidate = (e) => {
        if (e.candidate) {
          socketRef.current?.emit('ice-candidate', {
            to: partnerId,
            candidate: e.candidate,
          });
        }
      };

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
      setMessages([]);
      setChatCount((prev) => {
        const next = prev + 1;
        // Show share prompt at 3, 10, 20 chats
        if (next === 3 || next === 10 || next === 20) {
          setShowSharePrompt(true);
        }
        return next;
      });
      // Auto-search for next partner (server already re-queued us)
      setStatus('waiting');
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
    <div className="h-[100dvh] flex flex-col bg-[#0a0a0f] overflow-hidden relative">

      {/* ── Top Header ── */}
      <header className="flex items-center justify-between px-3 py-2 shrink-0 bg-[#0a0a0f] border-b border-white/10 z-10">
        <Link href="/" className="flex items-center gap-1.5 text-lg font-bold gradient-text">
          <Logo size={24} />
          Omeelo
        </Link>
        <div className="flex items-center gap-2">
          {status === 'connected' && (
            <span className="text-xs text-green-400 flex items-center gap-1 mr-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Connected
            </span>
          )}
          {status === 'waiting' && (
            <span className="text-xs text-yellow-400 flex items-center gap-1 mr-1">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
              Searching
            </span>
          )}
          <ShareButton className="bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-lg" />
          {status === 'connected' && (
            <button
              onClick={reportUser}
              disabled={reported}
              className="bg-red-600 hover:bg-red-500 disabled:opacity-30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              Report
            </button>
          )}
        </div>
      </header>

      {/* ── Video Area: forced 50/50 ── */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">

        {/* Remote Video (Stranger) — top on mobile, left on desktop */}
        <div className="basis-1/2 shrink-0 grow-0 md:basis-auto md:flex-1 relative bg-[#111118] border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center overflow-hidden">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Stranger label */}
          {status === 'connected' && (
            <span className="absolute top-2 left-2 text-[10px] bg-black/60 text-gray-300 px-2 py-0.5 rounded">
              Stranger
            </span>
          )}

          {/* Watermark */}
          <span className="absolute bottom-2 right-2 text-[11px] text-white/40 font-semibold tracking-wide pointer-events-none select-none z-10">
            omeelo.com
          </span>

          {/* Overlay: idle */}
          {status === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111118] px-4">
              <svg className="w-12 h-12 text-gray-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-400 text-sm mb-3">No partner connected</p>
              <button
                onClick={findMatch}
                disabled={!!cameraError}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                Start Matching
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {cameraError && (
                <p className="text-red-400 text-xs mt-3 text-center">{cameraError}</p>
              )}
            </div>
          )}

          {/* Overlay: waiting */}
          {status === 'waiting' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111118] px-4">
              <div className="relative mb-4">
                <div className="w-12 h-12 bg-violet-600/30 rounded-full animate-pulse-ring absolute" />
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center relative">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-1">Looking for someone...</p>
              <p className="text-gray-500 text-xs mb-4">This usually takes a few seconds</p>
              <div className="w-full max-w-sm">
                <AdUnit slot={AD_SLOTS.CHAT_WAITING} format="rectangle" />
              </div>
            </div>
          )}

          {/* Overlay: disconnected */}
          {status === 'disconnected' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111118] px-4">
              <p className="text-gray-300 text-sm mb-3">Stranger disconnected</p>
              <button
                onClick={findMatch}
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all flex items-center gap-2"
              >
                Start Matching
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Local Video (You) — bottom on mobile, right on desktop */}
        <div className="basis-1/2 shrink-0 grow-0 md:basis-auto md:flex-1 relative bg-[#111118] flex items-center justify-center overflow-hidden">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover mirror"
          />
          <span className="absolute top-2 left-2 text-[10px] bg-black/60 text-gray-300 px-2 py-0.5 rounded">
            You
          </span>
        </div>
      </div>

      {/* ── Share Prompt Overlay ── */}
      {showSharePrompt && (
        <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111118] border border-white/10 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-lg font-bold text-white mb-2">Enjoying Omeelo?</h3>
            <p className="text-sm text-gray-400 mb-5">
              You&apos;ve had {chatCount} chats! Share Omeelo with friends and make it even more fun.
            </p>
            <div className="flex flex-col gap-2">
              <ShareButton className="w-full justify-center bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-xl text-sm" />
              <button
                onClick={() => setShowSharePrompt(false)}
                className="text-gray-500 hover:text-gray-300 text-xs py-2 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Chat Box ── */}
      {showChat && (
        <div className="absolute bottom-16 right-2 w-72 max-w-[calc(100vw-16px)] h-72 bg-[#111118]/95 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col shadow-2xl z-50">
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <h3 className="font-semibold text-xs text-white">Chat Box</h3>
            <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 hide-scrollbar">
            {messages.length === 0 && (
              <p className="text-gray-500 text-xs text-center mt-4">
                {status === 'connected' ? 'Say hello!' : 'Connect to chat'}
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className="text-xs">
                <span className={`font-semibold ${m.from === 'me' ? 'text-violet-400' : 'text-red-400'}`}>
                  {m.from === 'me' ? 'You' : 'Stranger'}
                </span>
                <span className="text-gray-300"> : {m.text}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={sendMessage} className="p-2 border-t border-white/10">
            <div className="flex gap-1.5">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Type your message..."
                disabled={status !== 'connected'}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status !== 'connected'}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white p-1.5 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── Bottom Controls: always visible END | controls | SKIP ── */}
      <div className="flex items-center justify-center gap-2 px-3 py-2 shrink-0 bg-[#0a0a0f] border-t border-white/10 z-10">
        {/* END */}
        <button
          onClick={status !== 'idle' ? endChat : () => window.location.href = '/'}
          className="bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          END
        </button>

        {/* Camera */}
        <button
          onClick={toggleVideo}
          className={`p-2 rounded-lg transition-colors ${
            isVideoOff ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-gray-300'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isVideoOff ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            )}
          </svg>
        </button>

        {/* Chat */}
        <button
          onClick={() => setShowChat(!showChat)}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors text-sm ${
            showChat ? 'bg-violet-600/20 text-violet-400' : 'bg-white/10 text-gray-300'
          }`}
        >
          Chat
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {messages.length > 0 && !showChat && (
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
          )}
        </button>

        {/* SKIP */}
        <button
          onClick={skipNext}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          SKIP
        </button>
      </div>
    </div>
  );
}
