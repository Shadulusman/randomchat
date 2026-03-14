import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Video Chat with Strangers | Omeelo',
  description:
    'Video chat with strangers for free on Omeelo. Instant random video connections, HD quality, and full anonymity. Meet new people face-to-face from anywhere in the world.',
  keywords:
    'video chat with strangers, stranger video chat, video call strangers, chat with strangers video, free stranger video chat, random stranger video, meet strangers video, omeelo',
  openGraph: {
    title: 'Video Chat with Strangers | Omeelo',
    description:
      'Meet strangers face-to-face through free video chat. No sign-up, HD video, and instant connections on Omeelo.',
    url: 'https://omeelo.com/video-chat-with-strangers',
    siteName: 'Omeelo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://omeelo.com/video-chat-with-strangers',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is video chatting with strangers on Omeelo safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Omeelo uses peer-to-peer WebRTC connections that bypass our servers entirely, meaning your video is never seen or stored by the platform. You also have instant access to a report button and a skip button for full control over every interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to pay to video chat with strangers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Omeelo is completely free. There are no premium subscriptions, no virtual currencies, and no paywall-gated features. Every user gets the full experience at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I video chat with strangers on my phone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Omeelo works in mobile browsers on both iOS and Android. No app download is needed — just open the website and start chatting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will strangers be able to see my personal information?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Omeelo does not display any personal information because it does not collect any. There are no usernames, no location tags, and no profile cards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I be matched with a stranger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matching on Omeelo typically takes under three seconds. During peak hours with more users online, matching is even faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I get matched with someone I do not want to talk to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press the Next button. You will be disconnected from the current person and matched with a new stranger instantly. There is no limit to how many times you can skip.',
      },
    },
  ],
};

export default function VideoChatWithStrangersPage() {
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
            <span className="text-violet-400">Video Chat</span> with Strangers — Free &amp; Instant
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Omeelo connects you with strangers from around the world through live video chat. See
            their face, hear their voice, and experience real human connection without leaving your
            home. No accounts. No fees. No limits.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            Start Video Chat Now
          </Link>
        </section>

        {/* Why video chat with strangers */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Video Chat with Strangers?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Text-based chat rooms and messaging apps have their place, but nothing compares to the
            richness of a face-to-face conversation. Video chat with strangers takes online
            interaction to an entirely different level. You can read facial expressions, pick up on
            tone of voice, and experience the kind of nuance that text simply cannot convey.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            When you video chat with a stranger, the conversation feels real. There is a
            spontaneity and vulnerability that creates authentic moments. You might laugh together
            at an unexpected joke, share a genuine reaction to a story, or discover a surprising
            common interest. These micro-connections are what make video chatting with strangers so
            addictive and rewarding.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Omeelo was designed to make this experience as seamless as possible. No downloads, no
            profiles, no swiping. Just one click and you are face-to-face with someone new.
          </p>
        </section>

        {/* Video Chat Setup Tips - UNIQUE SECTION */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Look and Sound Great on Video Chat
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            A few simple adjustments make a huge difference in how you come across on video chat.
            You do not need expensive equipment — just follow these tips to make a strong first
            impression on every stranger you meet.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: '💡',
                title: 'Lighting: Face the Light',
                desc: 'Sit with a window or lamp in front of you, not behind you. Back-lighting silhouettes your face and makes you look dark on screen. A ring light or a simple desk lamp pointed at your face is ideal.',
              },
              {
                icon: '📷',
                title: 'Camera Height: Eye Level',
                desc: 'Position your camera at eye level or slightly above. Pointing the camera upward from a desk makes you look like you are staring down at people. Stack your laptop on books if needed.',
              },
              {
                icon: '🎧',
                title: 'Audio: Use Headphones',
                desc: 'Built-in laptop speakers create echo and feedback. Headphones eliminate this completely. Even basic earbuds give dramatically better audio than speakers. Your conversation partner will thank you.',
              },
              {
                icon: '🖼️',
                title: 'Background: Keep It Clean',
                desc: 'A tidy, neutral background keeps the focus on you. A plain wall, a neat bookshelf, or anything that is not cluttered works well. You do not need a professional setup — just avoid distracting messes.',
              },
              {
                icon: '👀',
                title: 'Eye Contact: Look at the Camera',
                desc: 'It feels natural to look at the screen, but looking at the camera lens creates the illusion of direct eye contact for the other person. Try to glance at the camera periodically during conversation.',
              },
              {
                icon: '🌐',
                title: 'Connection: Use Ethernet or Strong Wi-Fi',
                desc: 'Video quality drops dramatically on weak Wi-Fi. If your connection is unstable, try moving closer to your router or using an ethernet cable. Omeelo\'s WebRTC is efficient but needs a stable connection.',
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-white/5 border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tip.icon}</span>
                  <h3 className="font-semibold text-white text-sm">{tip.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video vs text comparison */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Video Chat vs. Text Chat: Why Face-to-Face Wins
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Text-Only Chat</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  'Easy to misinterpret tone and intent',
                  'High chance of bots and fake identities',
                  'Conversations can feel impersonal and shallow',
                  'No body language or vocal cues',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Video Chat on Omeelo</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  'Facial expressions and tone convey real emotion',
                  'Verified real humans — not bots',
                  'Conversations feel genuine and engaging',
                  'Full nonverbal communication included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Best times to chat */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Best Times to Video Chat with Strangers
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            More users online means faster matching and more diverse conversations. Here is when
            traffic on Omeelo tends to peak based on global time zones.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                time: '12:00 PM – 2:00 PM UTC',
                label: 'European Peak',
                desc: 'Afternoon in Europe overlaps with morning in the Americas, creating a large active user base across both continents.',
                color: 'text-yellow-400',
              },
              {
                time: '6:00 PM – 10:00 PM UTC',
                label: 'Global Prime Time',
                desc: 'Evening in Europe, afternoon in the US East Coast, and late morning on the US West Coast. The highest overall traffic window.',
                color: 'text-green-400',
              },
              {
                time: '10:00 PM – 2:00 AM UTC',
                label: 'Asia-Pacific Active',
                desc: 'Morning to midday across Southeast Asia, India, and Australia. Great for connecting with people from the Asia-Pacific region.',
                color: 'text-violet-400',
              },
            ].map((window) => (
              <div key={window.label} className="bg-white/5 border border-white/5 rounded-xl p-5 text-center">
                <p className={`text-xs font-semibold mb-1 ${window.color}`}>{window.time}</p>
                <h3 className="font-semibold text-white mb-2">{window.label}</h3>
                <p className="text-xs text-gray-400">{window.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Omeelo has users online 24/7 — these are simply the highest-traffic windows for faster matching.
          </p>
        </section>

        {/* Features */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-4">
            Features That Make Stranger Video Chat Better on Omeelo
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'High-Definition Video',
                desc: 'Omeelo uses WebRTC peer-to-peer technology to deliver crisp, smooth video. No grainy feeds, no stuttering.',
              },
              {
                title: 'Instant Stranger Matching',
                desc: 'Our lightweight signaling server connects you with another person in under three seconds.',
              },
              {
                title: 'Text Chat Alongside Video',
                desc: 'While your video call is active, you can also exchange text messages. Share links or spell out names without interrupting the flow.',
              },
              {
                title: 'One-Click Next Button',
                desc: 'The conversation not working? Press Next and you are instantly paired with a different stranger.',
              },
              {
                title: 'Works on Every Device',
                desc: 'Fully responsive on desktops, laptops, tablets, and smartphones. No app download needed.',
              },
              {
                title: 'Zero Data Collection',
                desc: 'Omeelo does not ask for your name, email, or any personal information. Every session is a clean slate.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-colors">
                <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mb-14">
          <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet a Stranger Face-to-Face
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Right now, someone on the other side of the world is waiting to meet you. One click
              and you will be face-to-face in a live video chat.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Start Video Chat with Strangers
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Stranger Video Chat FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <details key={faq.name} className="bg-white/5 border border-white/5 rounded-xl group">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium">
                  {faq.name}
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h2 className="text-lg font-semibold text-white text-center mb-6">Browse Omeelo</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/random-video-chat', label: 'Random Video Chat' },
              { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
              { href: '/omegle-alternative', label: 'Omegle Alternative' },
              { href: '/talk-to-strangers', label: 'Talk to Strangers' },
              { href: '/blog', label: 'Blog' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white/5 border border-white/10 hover:border-violet-500/30 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors">
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
