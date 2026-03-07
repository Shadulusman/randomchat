import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Talk to Strangers Online Free | Omeelo',
  description:
    'Talk to strangers online for free with Omeelo. Instant video chat with random people worldwide — no registration, no downloads. Start a conversation with a stranger now.',
  keywords:
    'talk to strangers, talk to strangers online, chat with strangers, meet strangers online, stranger chat, talk to random people, talk to strangers free, omeelo',
  openGraph: {
    title: 'Talk to Strangers Online Free | Omeelo',
    description:
      'Want to talk to strangers? Omeelo connects you with random people via live video chat. Free, anonymous, and available on any device.',
    url: 'https://omeelo.com/talk-to-strangers',
    siteName: 'Omeelo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://omeelo.com/talk-to-strangers',
  },
};

export default function TalkToStrangersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            <span className="text-violet-400">Talk to Strangers</span> Online for Free
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Sometimes the best conversations happen with people you have never met. Omeelo makes it
            effortless to talk to strangers from every corner of the world through instant, free
            video chat.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            Talk to a Stranger Now
          </Link>
        </section>

        {/* Why talk to strangers */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Talk to Strangers Online?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Talking to strangers might sound counterintuitive in an age when we are told to be
            cautious online. But the reality is that some of the most rewarding, eye-opening
            conversations come from people outside your existing social circle. Strangers bring
            fresh perspectives, unexpected stories, and viewpoints you would never encounter in
            your day-to-day life.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Research in behavioral science has consistently shown that conversations with strangers
            tend to be more enjoyable and meaningful than people expect. We overestimate the
            awkwardness and underestimate the reward. Platforms like Omeelo lower the barrier even
            further by removing the need for introductions, profiles, or small talk about who you
            are.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you want to practice a language, learn about another culture, fight boredom, or
            simply have a genuine human interaction, talking to strangers on Omeelo is one of the
            fastest and most satisfying ways to do it.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Benefits of Talking to Strangers
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Expand Your Worldview',
                desc: 'When you talk to people from different backgrounds, you gain insights that books and documentaries cannot provide. Every stranger carries a unique life story.',
              },
              {
                title: 'Build Confidence',
                desc: 'Initiating conversations with unknown people strengthens your social skills and reduces the anxiety that comes with meeting new people in real life.',
              },
              {
                title: 'Practice Languages',
                desc: 'There is no better way to learn a language than speaking with a native speaker. Omeelo connects you to people from over 190 countries for authentic practice.',
              },
              {
                title: 'Fight Isolation',
                desc: 'Loneliness affects millions of people worldwide. A quick video chat with a friendly stranger can lift your mood and remind you that genuine connection is always within reach.',
              },
              {
                title: 'Discover New Interests',
                desc: 'Strangers introduce you to music, hobbies, books, and ideas you would never stumble upon in your own social bubble.',
              },
              {
                title: 'No Commitment Required',
                desc: 'Unlike adding someone on social media, talking to strangers on Omeelo has zero strings attached. Enjoy the conversation and move on whenever you choose.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-white/5 border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-1">{b.title}</h3>
                <p className="text-sm text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Omeelo works for talking to strangers */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Omeelo Helps You Talk to Strangers
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omeelo removes every friction point between you and a conversation with a stranger. Here
            is how the experience works from start to finish.
          </p>
          <ol className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <strong className="text-white">No Barriers to Entry</strong> — There are no
                accounts, no forms, and no downloads. You visit omeelo.com and you are ready. This
                is intentional. The fewer steps between you and a conversation, the more likely you
                are to have one.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <strong className="text-white">Truly Random Matching</strong> — Omeelo pairs you
                with a completely random person. There are no algorithms trying to guess your
                preferences. This randomness is the magic — it creates encounters that would never
                happen through curated matching.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <strong className="text-white">Video Plus Text</strong> — You can chat face-to-face
                through live video while also sending text messages. This dual-channel approach
                makes conversations richer and gives you flexibility in how you communicate.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                4
              </span>
              <div>
                <strong className="text-white">Skip Without Guilt</strong> — If the conversation is
                not working out, press Next. There is no social penalty, no notification to the
                other person, and no hard feelings. You will be matched with someone new in seconds.
              </div>
            </li>
          </ol>
        </section>

        {/* Tips for talking to strangers */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Tips for Great Conversations with Strangers
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Talking to strangers is a skill, and like any skill, it improves with practice. Here
            are some tips to make your conversations on Omeelo more enjoyable and memorable.
          </p>
          <div className="space-y-3">
            {[
              {
                tip: 'Start with a Genuine Greeting',
                detail: 'A simple, warm hello goes a long way. Smile, wave, and introduce yourself naturally. First impressions set the tone for the entire conversation.',
              },
              {
                tip: 'Ask Open-Ended Questions',
                detail: 'Instead of yes-or-no questions, ask things like "What is the most interesting thing that happened to you this week?" Open questions invite storytelling and create deeper exchanges.',
              },
              {
                tip: 'Share Something About Yourself',
                detail: 'Conversations are a two-way street. Offering a piece of your own story encourages the other person to open up as well.',
              },
              {
                tip: 'Be Respectful and Patient',
                detail: 'Remember that the person on the other side is also a stranger to you. Treat them with the same respect you would want in return. Language barriers may exist, so patience is key.',
              },
              {
                tip: 'Know When to Move On',
                detail: 'Not every conversation will click, and that is perfectly normal. If the energy is not there, gracefully press Next and try again. The next great conversation is always one click away.',
              },
            ].map((t) => (
              <div key={t.tip} className="bg-white/5 border border-white/5 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-1">{t.tip}</h3>
                <p className="text-sm text-gray-400">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety when talking to strangers */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Staying Safe When You Talk to Strangers Online
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Omeelo provides tools and architecture to protect your safety, but being mindful of
            personal boundaries is always important when interacting with unknown individuals.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Keep personal details private. Never share your full name, home address, workplace,
              school, or financial information.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Use the report button immediately if someone behaves inappropriately or makes you
              uncomfortable.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Remember that you are always in control. You can end any conversation instantly by
              pressing Next or closing the tab.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Omeelo uses peer-to-peer video that is never recorded or stored. Your privacy is
              protected at the platform level.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              Be cautious of anyone who asks you to move the conversation to another platform or
              share links.
            </li>
          </ul>
        </section>

        {/* CTA Banner */}
        <section className="mb-14">
          <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Next Great Conversation Awaits
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Thousands of strangers are online right now, ready to chat. All it takes is one click
              to start a conversation that could surprise you.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Meet a Stranger Now
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About Talking to Strangers
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is it safe to talk to strangers on Omeelo?',
                a: 'Omeelo is designed with safety as a priority. Your video is never recorded, no personal data is collected, and you can report or skip any user with a single click. However, you should always exercise personal caution and avoid sharing sensitive information.',
              },
              {
                q: 'Do I need to sign up to talk to strangers?',
                a: 'No. Omeelo requires zero registration. Open the website, allow camera access, and start chatting immediately.',
              },
              {
                q: 'Can I talk to strangers from specific countries?',
                a: 'Currently, Omeelo uses fully random matching without geographic filters. This means you could be connected to anyone from any country, which is part of what makes the experience exciting.',
              },
              {
                q: 'Is talking to strangers on Omeelo free?',
                a: 'Yes, completely free. There are no charges, no premium upgrades, and no coin-based systems. Every feature is accessible to all users at no cost.',
              },
              {
                q: 'What if I do not want to show my face?',
                a: 'While Omeelo is primarily a video chat platform, you can choose to keep your camera off and communicate through the text chat feature instead. However, video conversations tend to create stronger connections.',
              },
              {
                q: 'How do I end a conversation with a stranger?',
                a: 'Press the Next button to immediately disconnect from the current person and be matched with someone new. You can also close the browser tab to exit entirely.',
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
            Explore Omeelo
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/random-video-chat', label: 'Random Video Chat' },
              { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
              { href: '/omegle-alternative', label: 'Omegle Alternative' },
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
