import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'About Omeelo | Free Random Video Chat Platform',
  description:
    'Learn about Omeelo — the free, anonymous random video chat platform connecting people from around the world. No sign-up required. Our mission, values, and commitment to safety.',
  keywords:
    'about omeelo, random video chat platform, anonymous video chat, omeelo mission, omeelo team',
  alternates: {
    canonical: 'https://omeelo.com/about',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'About Omeelo | Free Random Video Chat Platform',
    description:
      'Learn about Omeelo — the free, anonymous random video chat platform connecting people worldwide. No sign-up, no downloads.',
    url: 'https://omeelo.com/about',
    siteName: 'Omeelo',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        {/* Hero */}
        <section className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo size={48} />
            <span className="text-4xl font-extrabold gradient-text">Omeelo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            About Omeelo
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Omeelo is a free, anonymous video chat platform that connects strangers from every
            corner of the world — instantly, privately, and without any sign-up.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We believe that meaningful human connection should be accessible to everyone, regardless
            of where they live, who they know, or how large their social circle is. The internet has
            made the world smaller, yet many people still feel isolated within it.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omeelo was built with one goal: to make genuine, spontaneous conversation with another
            human being as effortless as possible. No algorithms curating who you meet. No profile
            required. No followers, no reputation points. Just two people, face to face, talking.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you are looking to practice a language, learn about a different culture, find
            someone to talk to at 2am, or simply beat boredom — Omeelo is always ready.
          </p>
        </section>

        {/* What makes us different */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What Makes Omeelo Different</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Truly Anonymous',
                desc: 'No account, no email, no personal information required. You are just a face on a screen, which is exactly how we designed it.',
              },
              {
                title: 'Zero Cost, Forever',
                desc: 'Omeelo is completely free. No premium tiers, no coin systems, no paywalls. Every feature is available to every user at no charge.',
              },
              {
                title: 'Privacy First',
                desc: 'Video streams travel peer-to-peer via WebRTC — they never pass through our servers. We cannot see, record, or store your conversations.',
              },
              {
                title: 'No Download Needed',
                desc: 'Omeelo runs entirely in your browser. No app to install, no plugin required. Visit the site and you are ready to chat.',
              },
              {
                title: 'Global Reach',
                desc: 'Our users come from over 100 countries. Every session is a chance to meet someone whose life looks completely different from yours.',
              },
              {
                title: 'Safety Tools Built In',
                desc: 'One-click skip and report buttons put you in control at all times. You can exit any conversation instantly, no explanation needed.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How Omeelo Works</h2>
          <ol className="space-y-4">
            {[
              {
                step: 'Open the website',
                desc: 'Visit omeelo.com in any modern browser on your phone, tablet, or computer.',
              },
              {
                step: 'Allow camera access',
                desc: 'Grant your browser permission to use your camera and microphone when prompted.',
              },
              {
                step: 'Click Start Matching',
                desc: 'Our system instantly searches for another user who is also ready to chat.',
              },
              {
                step: 'Start talking',
                desc: 'Once matched, you are connected via live video. Chat, laugh, learn — or press Next to meet someone new.',
              },
            ].map((item, i) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-white">{item.step}</strong>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Safety commitment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Safety</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omeelo takes user safety seriously. We have built multiple layers of protection into the
            platform:
          </p>
          <ul className="space-y-3 text-gray-400">
            {[
              'Instant skip — disconnect from any chat in one click with no social consequences.',
              'Report button — flag inappropriate users who are then reviewed for bans.',
              'No data storage — your video and text content is never saved to any server.',
              'No account means no profile to harvest — bad actors cannot target you between sessions.',
              'Peer-to-peer architecture — your media stream never touches Omeelo\'s infrastructure.',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">&#10003;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed mt-4">
            We are continuously working to improve our moderation systems and safety tools. If you
            encounter anything that violates our community standards, please use the report button or{' '}
            <Link href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">
              contact our team directly
            </Link>
            .
          </p>
        </section>

        {/* Technology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Technology Behind Omeelo</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omeelo is built on WebRTC, the open web standard for real-time peer-to-peer communication.
            When you connect with another user, a direct encrypted channel is established between your
            two browsers. Your video and audio data travels this direct route — it does not pass
            through Omeelo's servers.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our signaling infrastructure (which handles matching users and establishing connections)
            uses WebSockets for low-latency pairing. The entire system is designed for speed:
            most users are matched within two seconds of clicking Start.
          </p>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Have a question, a suggestion, or want to report an issue? We would love to hear from
              you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Internal links */}
        <section>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/chat', label: 'Start Chatting' },
              { href: '/random-video-chat', label: 'Random Video Chat' },
              { href: '/blog', label: 'Blog' },
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Service' },
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

      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
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
