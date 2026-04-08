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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to talk to strangers on Omeelo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omeelo is designed with safety as a priority. Your video is never recorded, no personal data is collected, and you can report or skip any user with a single click. Always exercise personal caution and avoid sharing sensitive information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to sign up to talk to strangers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Omeelo requires zero registration. Open the website, allow camera access, and start chatting immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to strangers from specific countries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, Omeelo uses fully random matching without geographic filters. This means you could be connected to anyone from any country, which is part of what makes the experience exciting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is talking to strangers on Omeelo free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free. There are no charges, no premium upgrades, and no coin-based systems. Every feature is accessible to all users at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not want to show my face?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can choose to keep your camera off and communicate through the text chat feature instead. However, video conversations tend to create stronger connections.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I end a conversation with a stranger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press the Next button to immediately disconnect from the current person and be matched with someone new. You can also close the browser tab to exit entirely.',
      },
    },
  ],
};

const conversationStarters = [
  {
    category: 'Icebreakers',
    starters: [
      'If you could have dinner with anyone alive or dead, who would it be?',
      'What is the most interesting thing that happened to you this week?',
      'If you could instantly learn any skill, what would you choose?',
      'What is a movie or show you have watched more than three times?',
      'What would you do with a completely free day tomorrow?',
    ],
  },
  {
    category: 'Deep Questions',
    starters: [
      'What is something you believe that most people around you do not?',
      'What has been the biggest turning point in your life so far?',
      'What does success look like to you personally?',
      'If you could change one thing about how the world works, what would it be?',
      'What is something you wish people understood about you?',
    ],
  },
  {
    category: 'Fun & Lighthearted',
    starters: [
      'What is the strangest food you have ever tried?',
      'If you had to describe your personality as a weather pattern, what would it be?',
      'What superpower would be most useful in everyday life?',
      'What is the most embarrassing thing you are willing to admit right now?',
      'If your life were a TV show, what genre would it be?',
    ],
  },
  {
    category: 'Cultural Exchange',
    starters: [
      'What is a tradition in your country that outsiders would find surprising?',
      'What is a food from your culture that everyone should try?',
      'How do people typically spend a weekend where you are from?',
      'What is something about your hometown that you miss when you travel?',
      'What is a common misconception people have about your country?',
    ],
  },
];

export default function TalkToStrangersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            awkwardness and underestimate the reward. A University of Chicago study found that
            commuters who talked to strangers reported significantly higher positive emotions than
            those who sat in silence — even though they predicted the opposite beforehand.
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
                title: 'Build Social Confidence',
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

        {/* Conversation Starters */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            20 Conversation Starters for Talking to Strangers
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Not sure what to say when you first connect? Use these proven conversation starters to
            break the ice immediately. Grouped by mood so you can pick the right tone.
          </p>
          <div className="space-y-6">
            {conversationStarters.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="space-y-2">
                  {group.starters.map((starter) => (
                    <div
                      key={starter}
                      className="flex items-start gap-3 bg-white/5 border border-white/5 rounded-lg px-4 py-3"
                    >
                      <span className="text-violet-400 mt-0.5 flex-shrink-0">&#8220;</span>
                      <p className="text-sm text-gray-300">{starter}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Omeelo works */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Omeelo Helps You Talk to Strangers
          </h2>
          <ol className="space-y-4 text-gray-400">
            {[
              {
                label: 'No Barriers to Entry',
                desc: 'There are no accounts, no forms, and no downloads. Visit omeelo.com and you are ready. The fewer steps between you and a conversation, the more likely you are to have one.',
              },
              {
                label: 'Truly Random Matching',
                desc: 'Omeelo pairs you with a completely random person. No algorithms guessing your preferences. This randomness creates encounters that would never happen through curated matching.',
              },
              {
                label: 'Video Plus Text',
                desc: 'Chat face-to-face through live video while also sending text messages. This dual-channel approach makes conversations richer and more flexible.',
              },
              {
                label: 'Skip Without Guilt',
                desc: 'If the conversation is not working out, press Next. No social penalty, no notification to the other person. You will be matched with someone new in seconds.',
              },
            ].map((step, i) => (
              <li key={step.label} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-violet-600/20 text-violet-400 rounded-lg flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-white">{step.label}</strong> — {step.desc}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Safety */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Staying Safe When You Talk to Strangers Online
          </h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              'Keep personal details private. Never share your full name, home address, workplace, school, or financial information.',
              'Use the report button immediately if someone behaves inappropriately or makes you uncomfortable.',
              'Remember that you are always in control. End any conversation instantly by pressing Next or closing the tab.',
              'Omeelo uses peer-to-peer video that is never recorded or stored. Your privacy is protected at the platform level.',
              'Be cautious of anyone who asks you to move the conversation to another platform or share links.',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">&#10003;</span>
                {tip}
              </li>
            ))}
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
            {faqSchema.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="bg-white/5 border border-white/5 rounded-xl group"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium">
                  {faq.name}
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-400">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-white text-center mb-6">Explore Omeelo</h2>
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

      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/random-video-chat" className="hover:text-white transition-colors">Random Video Chat</Link>
          <Link href="/omegle-alternative" className="hover:text-white transition-colors">Omegle Alternative</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
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
