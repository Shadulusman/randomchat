'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import AvatarMarquee from '@/components/AvatarMarquee';
import StatsCounter from '@/components/StatsCounter';
import AdUnit from '@/components/AdUnit';
import { AD_SLOTS } from '@/config/ads';

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
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Free Random <span className="gradient-text">Video Chat</span> <br />
            With Strangers
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
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

          <p className="mt-6 text-sm text-gray-500">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <strong className="text-green-400">{(onlineCount ?? 0) + 400}</strong> people online right now
          </p>
        </div>
      </section>

      {/* ── Animated Profile Marquee ── */}
      <section className="pb-16 -mt-4">
        <AvatarMarquee />
      </section>

      {/* ── Stats Counter ── */}
      <StatsCounter />

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

      {/* ── Ad: Mid-page ── */}
      <section className="max-w-3xl mx-auto px-4 pb-10">
        <AdUnit slot={AD_SLOTS.HOME_MID} format="horizontal" />
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

      {/* ── Ad: Bottom ── */}
      <section className="max-w-3xl mx-auto px-4 pb-10">
        <AdUnit slot={AD_SLOTS.HOME_BOTTOM} format="horizontal" />
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Meet Someone New?</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Thousands of people are waiting to chat right now. One click is all it takes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Start Video Chat Now
            </Link>
          </div>
          {/* Social share links */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xs text-gray-500">Share with friends:</span>
            <a
              href="https://twitter.com/intent/tweet?text=Just%20found%20Omeelo%20%E2%80%93%20free%20random%20video%20chat%20with%20strangers!%20No%20sign-up%20needed%20%F0%9F%8E%A5%F0%9F%8C%8D&url=https://omeelo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-gray-300 p-2 rounded-lg transition-colors"
              aria-label="Share on X/Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a
              href="https://wa.me/?text=Check%20out%20Omeelo%20%E2%80%93%20free%20random%20video%20chat!%20https://omeelo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-gray-300 p-2 rounded-lg transition-colors"
              aria-label="Share on WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
            <a
              href="https://t.me/share/url?url=https://omeelo.com&text=Free%20random%20video%20chat%20%E2%80%93%20no%20sign-up!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-gray-300 p-2 rounded-lg transition-colors"
              aria-label="Share on Telegram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </a>
            <a
              href="https://www.reddit.com/submit?url=https://omeelo.com&title=Omeelo%20%E2%80%93%20Free%20Random%20Video%20Chat%20(Omegle%20Alternative)"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-gray-300 p-2 rounded-lg transition-colors"
              aria-label="Share on Reddit"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 000-.462.342.342 0 00-.462 0c-.545.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.205-.095z" /></svg>
            </a>
          </div>
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
