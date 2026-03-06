import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Anonymous Video Chat - Private & Secure | Omeelo',
  description:
    'Chat anonymously with strangers via HD video on Omeelo. No accounts, no tracking, no data stored. Enjoy private and secure anonymous video chat for free.',
  keywords:
    'anonymous video chat, anonymous chat, private video chat, secure video chat, anonymous stranger chat, chat anonymously, no sign up video chat, omeelo',
  openGraph: {
    title: 'Anonymous Video Chat - Private & Secure | Omeelo',
    description:
      'Enjoy fully anonymous video conversations with strangers. No sign-up, no data collection, no recordings. Just real human connection.',
    url: 'https://omeelo.com/anonymous-video-chat',
    siteName: 'Omeelo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://omeelo.com/anonymous-video-chat',
  },
};

export default function AnonymousVideoChatPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Anonymous <span className="text-violet-400">Video Chat</span> — Private &amp; Secure
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Omeelo lets you have genuine conversations with strangers while keeping your identity
            completely private. No usernames, no profiles, no footprint. Just pure, anonymous video
            chat.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            Chat Anonymously Now
          </Link>
        </section>

        {/* What is anonymous video chat */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is Anonymous Video Chat?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Anonymous video chat is a way to connect with other people face-to-face over the internet
            without revealing who you are. There are no accounts to create, no profiles to fill out,
            and no personal details exchanged through the platform. You appear on screen, have a
            conversation, and when you disconnect, there is no trace left behind.
          </p>
          <p className="text-gray-400 leading-relaxed">
            This style of communication appeals to people who value their privacy or simply want to
            interact without the social pressure that comes with a known identity. On Omeelo, every
            chat is a clean slate. The person on the other end knows nothing about you except what
            you choose to share in the moment.
          </p>
        </section>

        {/* Why anonymity matters */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Anonymity Matters in Video Chat
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            In a world where every online platform tracks your behavior, sells your data, and
            requires a profile, anonymous video chat offers a refreshing alternative. Here is why
            anonymity matters more than ever.
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Freedom of Expression',
                desc: 'When your identity is not attached to a conversation, you feel free to be yourself. Share your genuine thoughts, ask bold questions, and explore topics you might avoid on platforms where your name and photo are on display.',
              },
              {
                title: 'No Digital Footprint',
                desc: 'Every message you send on social media becomes a permanent record. Anonymous video chat is the opposite. Nothing is saved, indexed, or searchable. Your conversation exists only in the moment.',
              },
              {
                title: 'Protection from Judgement',
                desc: 'Without profiles, follower counts, or bios, people interact based on the conversation itself rather than superficial markers. This often leads to more honest, meaningful exchanges.',
              },
              {
                title: 'Data Safety',
                desc: 'When a platform collects no data, there is nothing to breach. Omeelo cannot leak your information because it never had it in the first place.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Omeelo protects privacy */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Omeelo Keeps Your Video Chat Anonymous
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Anonymity on Omeelo is not just a marketing claim. It is built into the technical
            architecture from the ground up. Here is how the platform protects your privacy at every
            layer.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold text-sm">
                P2P
              </span>
              <div>
                <strong className="text-white">Peer-to-Peer Video Streams</strong> — Your video and
                audio travel directly from your browser to the other person&apos;s browser via WebRTC.
                Omeelo&apos;s servers never see, process, or store your media streams.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold text-sm">
                0
              </span>
              <div>
                <strong className="text-white">Zero Data Collection</strong> — We do not ask for
                your name, email, phone number, or any personal identifier. There is nothing to
                create an account with because accounts do not exist.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold text-sm">
                NL
              </span>
              <div>
                <strong className="text-white">No Chat Logs</strong> — Text messages sent during a
                conversation are relayed in real time and discarded. They are never written to a
                database, never backed up, and never accessible after the session ends.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold text-sm">
                NR
              </span>
              <div>
                <strong className="text-white">No Recordings</strong> — Omeelo does not record video
                or audio. The platform has no mechanism to capture or replay any part of your
                conversation.
              </div>
            </li>
          </ul>
        </section>

        {/* Anonymous vs traditional */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Anonymous Video Chat vs. Traditional Video Calls
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Traditional Video Calls</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&times;</span>
                  Require accounts with real names and emails
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&times;</span>
                  Store call history and metadata
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&times;</span>
                  May scan or analyze conversation content
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&times;</span>
                  Tied to your social or professional identity
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Omeelo Anonymous Chat</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#10003;</span>
                  No account, no identity required
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#10003;</span>
                  Zero history or metadata retention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#10003;</span>
                  No content analysis or surveillance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#10003;</span>
                  Completely detached from your real identity
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who uses anonymous video chat */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Who Uses Anonymous Video Chat?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Anonymous video chat attracts a diverse range of users from all over the world. The
            common thread is a desire for genuine, pressure-free conversation without the baggage
            of online identity.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              {
                title: 'Introverts and Shy Individuals',
                desc: 'People who find it difficult to initiate conversations in real life often thrive in anonymous video chat, where the stakes feel lower and every interaction is a fresh start.',
              },
              {
                title: 'Travelers and Expats',
                desc: 'Those living abroad or planning trips use anonymous chat to connect with locals, learn about culture, and practice language skills without commitment.',
              },
              {
                title: 'Privacy Advocates',
                desc: 'People who are conscious about their digital footprint choose anonymous platforms specifically because they leave no trace.',
              },
              {
                title: 'Anyone Seeking Genuine Connection',
                desc: 'Without the filters of social media, anonymous video chat strips interaction down to its most authentic form — two people simply talking.',
              },
            ].map((u) => (
              <div key={u.title} className="bg-white/5 border border-white/5 rounded-xl p-5">
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
              Start an Anonymous Video Chat Now
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              No sign-up. No tracking. No records. Just click the button and start talking to a
              real person, with your privacy fully intact.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Start Anonymous Chat
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Anonymous Video Chat FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is anonymous video chat on Omeelo truly private?',
                a: 'Yes. Omeelo uses peer-to-peer WebRTC connections so your video never passes through our servers. We collect no personal information and store no conversation data whatsoever.',
              },
              {
                q: 'Can the other person find out my identity?',
                a: 'Omeelo does not share any identifying information between users. There are no usernames, no profile photos, and no location data. The other person only knows what you voluntarily tell them during the chat.',
              },
              {
                q: 'Do I need to create an account for anonymous video chat?',
                a: 'No. Omeelo has no accounts, no registration forms, and no login pages. You simply open the website and start chatting.',
              },
              {
                q: 'Are my video chats recorded?',
                a: 'No. Omeelo does not have the ability to record your video or audio streams. They are transmitted directly between browsers and are not stored anywhere.',
              },
              {
                q: 'What should I do if someone behaves inappropriately?',
                a: 'Click the report button during the chat. The user will be flagged for review. You can also press Next to immediately disconnect and match with someone else.',
              },
              {
                q: 'Does Omeelo use cookies to track me?',
                a: 'Omeelo does not use tracking cookies, advertising pixels, or analytics tools that identify individual users. Your browsing session is not monitored.',
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
            Discover More on Omeelo
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/random-video-chat', label: 'Random Video Chat' },
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
        <p>&copy; {new Date().getFullYear()} Omeelo. All rights reserved.</p>
      </footer>
    </main>
  );
}
