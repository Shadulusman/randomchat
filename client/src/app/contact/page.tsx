import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Contact Us | Omeelo',
  description:
    'Get in touch with the Omeelo team. Report issues, ask questions, or send feedback about our free random video chat platform.',
  keywords: 'contact omeelo, omeelo support, omeelo help, report issue omeelo',
  alternates: {
    canonical: 'https://omeelo.com/contact',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Contact Us | Omeelo',
    description:
      'Get in touch with the Omeelo team for support, feedback, or to report an issue.',
    url: 'https://omeelo.com/contact',
    siteName: 'Omeelo',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <article className="max-w-2xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a question, a bug report, or a suggestion? We are here to help. Reach out and we
            will get back to you as soon as possible.
          </p>
        </section>

        {/* Email card */}
        <section className="mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-violet-500/30 transition-colors">
            <div className="w-14 h-14 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Email Us</h2>
            <p className="text-gray-400 mb-4 text-sm">
              Send us an email and we will respond within 1–2 business days.
            </p>
            <a
              href="mailto:shadulccj@gmail.com"
              className="text-violet-400 hover:text-violet-300 transition-colors font-semibold text-lg break-all"
            >
              shadulccj@gmail.com
            </a>
          </div>
        </section>

        {/* What to include */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">What to Include in Your Message</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            To help us respond quickly and accurately, please include as much relevant detail as
            possible:
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              'A clear description of your question or issue',
              'The browser and device you are using (e.g. Safari on iPhone, Chrome on Windows)',
              'Any error messages you saw on screen',
              'Approximate date and time the issue occurred',
              'Steps to reproduce the problem if it is a bug',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-violet-400 mt-0.5 flex-shrink-0">&#8250;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common topics */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Common Topics</h2>
          <div className="space-y-3">
            {[
              {
                topic: 'Camera or microphone not working',
                desc: 'Tell us your browser, device, and operating system. Make sure you have allowed camera and microphone permissions in your browser settings.',
              },
              {
                topic: 'Connection issues / stuck on searching',
                desc: 'Let us know if you are on mobile data or Wi-Fi, and which country you are connecting from. This helps us diagnose network-related problems.',
              },
              {
                topic: 'Reporting a user',
                desc: 'Use the in-chat report button for the fastest response. For serious incidents, email us with as much context as possible.',
              },
              {
                topic: 'Advertising and business inquiries',
                desc: 'For partnership, advertising, or business-related questions, email us at the address above with "Business Inquiry" in the subject line.',
              },
              {
                topic: 'Privacy or data requests',
                desc: 'For questions about your data or privacy rights, include "Privacy Request" in the subject line of your email.',
              },
            ].map((item) => (
              <details
                key={item.topic}
                className="bg-white/5 border border-white/5 rounded-xl group"
              >
                <summary className="flex items-center justify-between cursor-pointer p-4 text-white font-medium text-sm">
                  {item.topic}
                  <svg
                    className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-sm text-gray-400">{item.desc}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Response time notice */}
        <section className="mb-10">
          <div className="bg-violet-600/10 border border-violet-500/20 rounded-xl p-5 text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Response time:</strong> We typically respond to emails
              within 1–2 business days. For urgent issues, please include &ldquo;Urgent&rdquo; in
              the subject line of your email.
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
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
