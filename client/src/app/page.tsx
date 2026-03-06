'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getSocket } from '@/lib/socket';

export default function Home() {
  const [onlineCount, setOnlineCount] = useState<number | null>(null);

  useEffect(() => {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001';
    fetch(serverUrl)
      .then((r) => r.json())
      .then((data) => setOnlineCount(data.usersOnline))
      .catch(() => setOnlineCount(null));
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        {/* Background gradient blobs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Meet <span className="gradient-text">Strangers</span> <br />
            From Anywhere
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            One click connects you to a random person through live video.
            No sign-up. No profiles. Just real conversations.
          </p>

          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Start Chatting
          </Link>

          {onlineCount !== null && (
            <p className="mt-6 text-sm text-gray-500">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              {onlineCount} {onlineCount === 1 ? 'person' : 'people'} online now
            </p>
          )}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-5xl mx-auto px-4 pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: '🎥',
            title: 'Live Video',
            desc: 'Crystal-clear peer-to-peer video powered by WebRTC.',
          },
          {
            icon: '💬',
            title: 'Text Chat',
            desc: 'Send messages alongside your video call.',
          },
          {
            icon: '🔒',
            title: 'Anonymous',
            desc: 'No accounts, no tracking. Just press start.',
          },
          {
            icon: '🌍',
            title: 'Global',
            desc: 'Connect with people from every corner of the world.',
          },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Omeelo. All rights reserved.</p>
      </footer>
    </main>
  );
}
