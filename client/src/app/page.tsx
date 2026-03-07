'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import AvatarMarquee from '@/components/AvatarMarquee';

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

      {/* ── Hero Section with Floating Profile Background ── */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        {/* Animated profile cards as background */}
        <AvatarMarquee />

        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 z-[1] bg-[#0a0a0f]/60" />

        {/* Radial vignette: dark edges, lighter center */}
        <div className="absolute inset-0 z-[2]" style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, #0a0a0f 75%)',
        }} />

        {/* Hero content on top */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 min-h-[100dvh]">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
              Free Random <span className="gradient-text">Video Chat</span> <br />
              With Strangers
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto drop-shadow-lg">
              Omeelo connects you instantly with random people from around the world
              through live video. No sign-up. No profiles. The best Omegle alternative.
            </p>

            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Start Chatting — It&apos;s Free
            </Link>

            {onlineCount !== null && (
              <p className="mt-6 text-sm text-gray-400">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <strong className="text-green-400">{onlineCount}</strong> {onlineCount === 1 ? 'person' : 'people'} online right now
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          How Omeelo Works
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Start a random video chat with strangers in three simple steps. No registration, no downloads.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Open Omeelo', desc: 'Visit omeelo.com from any device — desktop, tablet, or phone. No app install needed.' },
            { step: '2', title: 'Allow Camera', desc: 'Grant camera and microphone access when your browser asks. Your feed stays private until you connect.' },
            { step: '3', title: 'Start Chatting', desc: 'Click "Start Chatting" and you\'ll be matched with a random stranger instantly. Skip anytime.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 bg-violet-600/20 text-violet-400 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Omeelo?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🎥', title: 'HD Video Chat', desc: 'Crystal-clear peer-to-peer video powered by WebRTC technology.' },
            { icon: '💬', title: 'Text Chat', desc: 'Send messages alongside your video call for a richer experience.' },
            { icon: '🔒', title: '100% Anonymous', desc: 'No accounts, no tracking, no data stored. Your privacy comes first.' },
            { icon: '🌍', title: 'Global Community', desc: 'Talk to people from every corner of the world, 24/7.' },
            { icon: '⚡', title: 'Instant Matching', desc: 'Get connected with a stranger in under 3 seconds. No waiting.' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Works perfectly on phones, tablets, and desktops. No app required.' },
            { icon: '🛡️', title: 'Report & Safety', desc: 'One-click report button. Abusive users are automatically banned.' },
            { icon: '⏭️', title: 'Skip Anytime', desc: 'Not vibing? Press Next and instantly match with someone new.' },
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
        </div>
      </section>

      {/* ── What Makes Omeelo Different ── */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          The Modern Omegle Alternative
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          After Omegle shut down in 2023, millions of users searched for a replacement.
          Omeelo was built from scratch to be cleaner, faster, and safer.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">Omeelo vs Others</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> No forced sign-ups or email verification</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Direct peer-to-peer video — we never see your stream</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Works on every modern browser, no plugins</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Built-in report system for safety</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Completely free with no hidden paywalls</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">Built for Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">&#9679;</span> Zero personal data collected or stored</li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">&#9679;</span> Video streams are never recorded</li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">&#9679;</span> Chat messages are not logged</li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">&#9679;</span> No cookies for tracking or ads</li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">&#9679;</span> Open connection, anonymous by design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Safety Features ── */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Your Safety Matters
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We take safety seriously. Every feature is designed to protect your experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🚩', title: 'One-Click Report', desc: 'See something inappropriate? Hit the report button and the user is flagged instantly.' },
            { icon: '🚫', title: 'Auto-Ban System', desc: 'Users who receive multiple reports are automatically banned from the platform.' },
            { icon: '👤', title: 'No Data Stored', desc: 'We don\'t store videos, chats, or personal info. When you leave, everything disappears.' },
          ].map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Alex R.', text: 'I was looking for an Omegle replacement for months. Omeelo is exactly what I needed — fast, clean, and no annoying sign-ups.' },
            { name: 'Sarah K.', text: 'The video quality is amazing and I love how easy it is to skip to the next person. Met some really interesting people!' },
            { name: 'James L.', text: 'Finally a random chat that works on my phone without downloading an app. The interface is super clean.' },
          ].map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-sm text-gray-300 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="text-sm font-semibold text-white">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: 'What is Omeelo?', a: 'Omeelo is a free random video chat platform that connects you with strangers from around the world. Think of it as a modern, safer alternative to Omegle.' },
            { q: 'Do I need to create an account?', a: 'No. Omeelo requires zero sign-up. Just visit the website, click Start Chatting, and you\'re connected.' },
            { q: 'Is Omeelo free?', a: 'Yes, Omeelo is 100% free to use. There are no hidden charges or premium paywalls.' },
            { q: 'Is my video chat private?', a: 'Yes. Video and audio travel directly between you and the other person using peer-to-peer WebRTC technology. We never see or record your streams.' },
            { q: 'Can I use Omeelo on my phone?', a: 'Absolutely. Omeelo works on any modern browser — Chrome, Safari, Firefox — on both mobile and desktop.' },
            { q: 'How do I skip someone?', a: 'During a chat, press the Next button and you\'ll be instantly matched with a new random person.' },
          ].map((faq) => (
            <details key={faq.q} className="bg-white/5 border border-white/5 rounded-xl group">
              <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium">
                {faq.q}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Meet Someone New?</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Thousands of people are waiting to chat right now. One click is all it takes.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Start Video Chat Now
          </Link>
        </div>
      </section>

      {/* ── SEO Internal Links ── */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-lg font-semibold text-white text-center mb-6">Explore Omeelo</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { href: '/random-video-chat', label: 'Random Video Chat' },
            { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
            { href: '/omegle-alternative', label: 'Omegle Alternative' },
            { href: '/talk-to-strangers', label: 'Talk to Strangers' },
            { href: '/video-chat-with-strangers', label: 'Video Chat with Strangers' },
            { href: '/blog', label: 'Blog' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white/5 border border-white/10 hover:border-violet-500/30 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size={24} />
          <span className="font-bold gradient-text text-base">Omeelo</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/random-video-chat" className="hover:text-white transition-colors">Random Video Chat</Link>
          <Link href="/omegle-alternative" className="hover:text-white transition-colors">Omegle Alternative</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Omeelo. All rights reserved.</p>
      </footer>
    </main>
  );
}
