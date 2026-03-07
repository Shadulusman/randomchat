import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Best Omegle Alternative in 2026 | Omeelo',
  description:
    'Looking for the best Omegle alternative? Omeelo offers free random video chat with strangers — no sign-up, HD video, and full anonymity. The top Omegle replacement in 2026.',
  keywords:
    'omegle alternative, omegle replacement, sites like omegle, omegle alternative 2026, best omegle alternative, free omegle alternative, omegle shut down, omeelo',
  openGraph: {
    title: 'Best Omegle Alternative in 2026 | Omeelo',
    description:
      'Omegle is gone, but Omeelo picks up where it left off. Free random video chat, no sign-up, and a safer experience.',
    url: 'https://omeelo.com/omegle-alternative',
    siteName: 'Omeelo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://omeelo.com/omegle-alternative',
  },
};

export default function OmegleAlternativePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            The Best <span className="text-violet-400">Omegle Alternative</span> in 2026
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Omegle closed in November 2023, leaving millions of users without their go-to platform
            for random video conversations. Omeelo was built from scratch to fill that void — with
            better technology, stronger privacy, and a cleaner experience.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            Try Omeelo Free
          </Link>
        </section>

        {/* What happened to Omegle */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Happened to Omegle?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omegle launched in 2009 and quickly became the defining platform for random video chat.
            For over fourteen years, it connected millions of strangers through one-on-one webcam
            conversations. The concept was simple: press a button, get matched with a random person,
            and start talking.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            In November 2023, Omegle&apos;s founder announced the permanent shutdown of the
            platform, citing mounting safety concerns and the operational burden of moderating
            millions of interactions. The closure left a massive gap in the market for people who
            relied on the platform for entertainment, social connection, language practice, and
            cultural exchange.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Since then, countless sites have claimed to be the next Omegle. Most of them are plagued
            by bots, intrusive ads, forced registrations, or poor video quality. Omeelo takes a
            different approach by focusing on what made Omegle great in the first place — instant,
            anonymous, human-to-human video connection — while solving the problems that led to its
            downfall.
          </p>
        </section>

        {/* Why Omeelo is the best alternative */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Omeelo Is the Best Omegle Alternative
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omeelo was not a quick copy of Omegle. It was designed to address the exact weaknesses
            that caused Omegle to shut down while preserving everything users loved. Here is what
            sets Omeelo apart from other Omegle alternatives.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Modern WebRTC Technology',
                desc: 'While Omegle relied on aging infrastructure, Omeelo is built on modern WebRTC protocols that deliver high-definition, low-latency video directly between browsers.',
              },
              {
                title: 'Built-In Safety Tools',
                desc: 'One-click reporting, automatic ban systems for repeat offenders, and active moderation practices make Omeelo significantly safer than Omegle ever was.',
              },
              {
                title: 'No Registration Barrier',
                desc: 'Just like Omegle, Omeelo requires zero sign-up. Unlike many competitors that force account creation, Omeelo stays true to the drop-in-and-chat philosophy.',
              },
              {
                title: 'No Ads, No Bots',
                desc: 'Many Omegle alternatives are overrun with fake users and intrusive advertisements. Omeelo maintains a clean, ad-free environment with real human connections.',
              },
              {
                title: 'Works Everywhere',
                desc: 'Desktop, tablet, smartphone — Omeelo runs on any modern browser without apps or plugins. Omegle often had compatibility issues on mobile devices that Omeelo has solved.',
              },
              {
                title: 'Privacy by Design',
                desc: 'Omeelo collects no personal data, stores no chat logs, and never records video streams. Your conversations vanish completely the moment you disconnect.',
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

        {/* Comparison table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Omeelo vs. Other Omegle Alternatives
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Not all Omegle alternatives are created equal. Here is how Omeelo compares to the
            typical alternatives you will find online.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-400 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left text-white">
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Omeelo</th>
                  <th className="py-3">Typical Alternatives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['No sign-up required', 'Yes', 'Often requires email or social login'],
                  ['HD video quality', 'Yes (WebRTC P2P)', 'Varies, often low quality'],
                  ['Mobile support', 'Full browser support', 'App download usually required'],
                  ['Ads and pop-ups', 'None', 'Heavy ad load'],
                  ['Bot-free', 'Yes', 'Frequently plagued by bots'],
                  ['Data collection', 'Zero personal data', 'Often collects extensive data'],
                  ['Video recording', 'Never recorded', 'Unclear policies'],
                  ['Cost', '100% free', 'Free tier with paid upsells'],
                ].map(([feature, omeelo, others]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-4 text-white font-medium">{feature}</td>
                    <td className="py-3 pr-4 text-green-400">{omeelo}</td>
                    <td className="py-3 text-gray-500">{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What people miss about Omegle */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            What People Missed About Omegle — And How Omeelo Brings It Back
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            The shutdown of Omegle was not just the loss of a website. It was the loss of a unique
            social experience. Here are the things people missed most and how Omeelo recreates
            them.
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'The Thrill of the Unknown',
                desc: 'Every click could lead to a fascinating conversation with someone from the other side of the world. Omeelo preserves this excitement with truly random matching that connects you to people from over 190 countries.',
              },
              {
                title: 'No Social Pressure',
                desc: 'On Omegle, you were free from the expectations of followers, likes, and curated profiles. Omeelo maintains this by keeping everything anonymous and profile-free.',
              },
              {
                title: 'Instant Gratification',
                desc: 'No swiping, no waiting for matches, no messaging back and forth. Click a button and you are face-to-face with another human being. Omeelo matches you in under three seconds.',
              },
              {
                title: 'The Skip Button',
                desc: 'The legendary Next button that let you move on instantly if the vibe was not right. Omeelo keeps this mechanic front and center — one click and you have a new partner.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/5 rounded-xl p-5"
              >
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting started */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Get Started with This Omegle Alternative
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Switching from Omegle to Omeelo takes about five seconds. There is nothing to install,
            nothing to configure, and nothing to sign up for.
          </p>
          <ol className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <strong className="text-white">Open Omeelo</strong> — Go to omeelo.com in your
                browser. The interface is clean and intuitive, just like Omegle was.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <strong className="text-white">Allow Camera &amp; Microphone</strong> — Your browser
                will ask for permission. Grant it and your preview will appear.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <strong className="text-white">Press Start</strong> — You will be matched with a
                random stranger within seconds. Chat as long as you like, or press Next for someone
                new.
              </div>
            </li>
          </ol>
        </section>

        {/* CTA Banner */}
        <section className="mb-14">
          <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Omegle Experience, Reimagined
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Omegle may be gone, but the spirit lives on. Omeelo gives you everything you loved
              about random video chat — faster, safer, and completely free.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Start Chatting on Omeelo
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Omegle Alternative FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is Omeelo a safe Omegle alternative?',
                a: 'Yes. Omeelo was specifically designed with safety improvements over Omegle, including a one-click report system, automatic banning of repeat offenders, and a privacy-first architecture that collects no personal data.',
              },
              {
                q: 'Is this Omegle alternative free to use?',
                a: 'Omeelo is 100% free with no premium tiers, no coin systems, and no hidden costs. Every feature is available to every user without payment.',
              },
              {
                q: 'Will Omegle ever come back?',
                a: 'As of 2026, Omegle has not reopened and its founder has stated the decision to close was final. Omeelo was built as a long-term successor that improves on the original concept.',
              },
              {
                q: 'Do I need to download an app to use this Omegle alternative?',
                a: 'No. Omeelo runs entirely in your web browser on both desktop and mobile devices. There is nothing to download or install.',
              },
              {
                q: 'Can I use Omeelo on my phone like I used Omegle?',
                a: 'Absolutely. Omeelo is fully responsive and works on iOS and Android through Safari, Chrome, Firefox, and other modern mobile browsers.',
              },
              {
                q: 'How does Omeelo compare to other Omegle alternatives like Chatroulette?',
                a: 'Omeelo differentiates itself with zero registration requirements, no advertisements, modern WebRTC video quality, and a strict no-data-collection policy. Many alternatives require sign-ups or are supported by heavy advertising.',
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
            More from Omeelo
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/random-video-chat', label: 'Random Video Chat' },
              { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
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
