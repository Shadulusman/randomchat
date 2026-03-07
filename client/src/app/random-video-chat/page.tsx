import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Free Random Video Chat Online | Omeelo',
  description:
    'Start a free random video chat with strangers worldwide on Omeelo. No sign-up required. Instant HD video connections, fully anonymous, and available on every device.',
  keywords:
    'random video chat, free random video chat, random video chat online, video chat random, random chat, random video call, random stranger video chat, omeelo',
  openGraph: {
    title: 'Free Random Video Chat Online | Omeelo',
    description:
      'Connect instantly with strangers through random video chat. No registration, no downloads — just press start and meet someone new.',
    url: 'https://omeelo.com/random-video-chat',
    siteName: 'Omeelo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://omeelo.com/random-video-chat',
  },
};

export default function RandomVideoChatPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Free Random <span className="text-violet-400">Video Chat</span> Online
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Omeelo is the fastest way to start a random video chat with real people around the
            globe. No accounts, no fees, no waiting. Click the button below and get matched with a
            stranger in seconds.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            Start Random Video Chat
          </Link>
        </section>

        {/* What is random video chat */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is Random Video Chat?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Random video chat is a form of online communication where you are paired with a
            completely unknown person for a live video conversation. Unlike social media or
            messaging apps where you interact with people you already know, random video chat
            introduces spontaneity and surprise into your online interactions. Every time you press
            the start button, you could be connected to someone from a different city, country, or
            continent.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The concept gained mainstream popularity with platforms like Omegle, which pioneered the
            idea of connecting two strangers via webcam. Since Omegle closed its doors in 2023,
            users have been searching for reliable alternatives that preserve the magic of random
            encounters while offering improved safety and a better user experience. That is exactly
            what Omeelo delivers.
          </p>
        </section>

        {/* Why choose Omeelo */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Choose Omeelo for Random Video Chat?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Instant Matching',
                desc: 'Our signaling server pairs you with another user in under three seconds. No queues, no loading screens.',
              },
              {
                title: 'Peer-to-Peer HD Video',
                desc: 'Omeelo uses WebRTC to stream video directly between browsers, giving you high-definition quality without any middleman server.',
              },
              {
                title: 'Zero Registration',
                desc: 'There is no account creation, no email verification, and no profile setup. Open the page and go.',
              },
              {
                title: 'Cross-Device Support',
                desc: 'Whether you are on a desktop, laptop, tablet, or smartphone, Omeelo works seamlessly in Chrome, Safari, Firefox, and Edge.',
              },
              {
                title: 'Complete Anonymity',
                desc: 'We never collect personal data, store chat logs, or record video streams. When you disconnect, every trace of the conversation vanishes.',
              },
              {
                title: 'One-Click Skip',
                desc: 'If the conversation is not clicking, press Next and you will be matched with a brand-new stranger within moments.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Random Video Chat Works on Omeelo
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Getting started with random video chat on Omeelo could not be simpler. The entire
            process takes less than ten seconds from opening the site to seeing another person on
            your screen.
          </p>
          <ol className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <strong className="text-white">Visit Omeelo</strong> — Navigate to omeelo.com on any
                modern browser. No downloads or installations are required.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <strong className="text-white">Grant Camera Access</strong> — When prompted, allow
                your browser to use your camera and microphone. Your video feed is not shared until
                you are matched.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <strong className="text-white">Get Matched</strong> — Click &ldquo;Start
                Chatting&rdquo; and our server will connect you with a random stranger. Enjoy your
                conversation or skip to the next person whenever you like.
              </div>
            </li>
          </ol>
        </section>

        {/* Safety */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Staying Safe During Random Video Chats
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            While random video chatting is exciting, safety should always come first. Omeelo
            provides built-in tools to help you have a secure experience, but personal awareness is
            equally important.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Never share personal information such as your full name, address, phone number, or
              financial details with strangers.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Use the one-click report button if another user behaves inappropriately. Reported users
              are reviewed and banned when necessary.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Trust your instincts. If a conversation feels uncomfortable, press Next immediately to
              move on.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Omeelo does not record or store video feeds. Your stream disappears the moment you
              disconnect.
            </li>
          </ul>
        </section>

        {/* Use cases */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Popular Ways People Use Random Video Chat
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Random video chat is not just about passing time. People use Omeelo for a wide variety of
            purposes that go beyond casual conversation.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              {
                title: 'Language Practice',
                desc: 'Connect with native speakers from different countries to practice a new language in a real conversation setting.',
              },
              {
                title: 'Making International Friends',
                desc: 'Break geographic barriers and build friendships with people you would never meet in your daily life.',
              },
              {
                title: 'Beating Loneliness',
                desc: 'Sometimes you just need someone to talk to. Random video chat offers instant human connection when you need it most.',
              },
              {
                title: 'Cultural Exchange',
                desc: 'Learn about traditions, food, music, and lifestyles from people living on the other side of the world.',
              },
            ].map((u) => (
              <div
                key={u.title}
                className="bg-white/5 border border-white/5 rounded-xl p-5"
              >
                <h3 className="font-semibold text-white mb-1">{u.title}</h3>
                <p className="text-gray-400">{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mb-14">
          <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start a Random Video Chat?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Thousands of people are online right now waiting to be matched. One click and you
              could be talking to someone on the other side of the planet.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Launch Video Chat Now
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About Random Video Chat
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is random video chat on Omeelo really free?',
                a: 'Yes, Omeelo is completely free. There are no premium tiers, no coin systems, and no hidden charges. Every feature is available to every user at no cost.',
              },
              {
                q: 'Do I need to download an app for random video chat?',
                a: 'No. Omeelo runs entirely in your web browser. It works on Chrome, Safari, Firefox, and Edge across desktop and mobile devices without any installation.',
              },
              {
                q: 'Can people find out who I am during a random video chat?',
                a: 'Omeelo does not reveal any identifying information. There are no usernames, no profiles, and no location sharing. You are completely anonymous unless you choose to share details yourself.',
              },
              {
                q: 'What happens if someone is inappropriate during a video chat?',
                a: 'You can report them with a single click. You can also press Next to immediately disconnect and be matched with someone new. Reported users are reviewed and banned when violations are confirmed.',
              },
              {
                q: 'How is Omeelo different from other random video chat sites?',
                a: 'Omeelo was built from the ground up with modern WebRTC technology, a privacy-first architecture, and a clean interface. Unlike many alternatives, there are no ads, no bots, and no forced sign-ups.',
              },
              {
                q: 'Is my video recorded during random chats?',
                a: 'Absolutely not. Video streams travel directly between your browser and the other person using peer-to-peer connections. Omeelo never records, stores, or monitors your video feed.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-white/5 border border-white/5 rounded-xl group"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-white text-center mb-6">
            Explore More on Omeelo
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
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
      </article>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/random-video-chat" className="hover:text-white transition-colors">
            Random Video Chat
          </Link>
          <Link href="/omegle-alternative" className="hover:text-white transition-colors">
            Omegle Alternative
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size={24} />
          <span className="font-bold gradient-text text-base">Omeelo</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Omeelo. All rights reserved.</p>
      </footer>
    </main>
  );
}
