import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Omeelo',
  description:
    'Read the Omeelo Privacy Policy. Learn how we protect your anonymity, what data we collect, how we use cookies, and your rights as a user of our free random video chat platform.',
  alternates: {
    canonical: 'https://omeelo.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-gray-300 leading-relaxed">
        <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: April 2026</p>

        <p className="text-gray-400 mb-8">
          At Omeelo (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), your privacy is
          fundamental to everything we build. This Privacy Policy explains what information we
          collect when you use omeelo.com (the &ldquo;Service&rdquo;), how we use it, and what
          rights you have regarding your personal data. Please read this policy carefully before
          using the Service.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-3">
              Omeelo is designed from the ground up to be anonymous. We do <strong>not</strong>{' '}
              require you to create an account, provide your name, email address, or any other
              personally identifying information to use the Service.
            </p>
            <p className="mb-3">
              When you access Omeelo, our servers and third-party infrastructure providers may
              automatically receive and temporarily process the following technical information:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
              <li>Your IP address (used solely for abuse prevention and geographic routing)</li>
              <li>Browser type, version, and rendering engine</li>
              <li>Operating system and device type</li>
              <li>Date and time of connection</li>
              <li>Referring URL (the page you came from, if any)</li>
              <li>Session duration</li>
            </ul>
            <p>
              This technical data is used exclusively to operate, secure, and improve the Service.
              It is not used to build user profiles or for targeted advertising.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Video, Audio, and Chat Data</h2>
            <p className="mb-3">
              Omeelo uses WebRTC (Web Real-Time Communication) technology to establish direct
              peer-to-peer connections between users. This means:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
              <li>Your video and audio streams travel directly between your browser and your chat partner&apos;s browser.</li>
              <li>Video and audio data does <strong>not</strong> pass through Omeelo&apos;s servers.</li>
              <li>We do <strong>not</strong> record, store, or monitor your video calls.</li>
              <li>Text messages sent during a chat session are not logged or retained after the session ends.</li>
            </ul>
            <p>
              Once a chat session ends — whether by pressing Next, closing the tab, or any other
              means — all communication data from that session is permanently gone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Omeelo uses a small number of cookies and similar tracking technologies to operate
              the Service:
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-1">Strictly Necessary Cookies</h3>
                <p className="text-sm text-gray-400">
                  These cookies are required for the website to function. They do not identify you
                  personally and cannot be disabled.
                </p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-1">Analytics Cookies</h3>
                <p className="text-sm text-gray-400">
                  We use Vercel Analytics to understand aggregate traffic patterns (e.g., how many
                  pages were viewed, which pages are most popular). This service collects anonymised,
                  aggregate data and does not use cross-site tracking cookies.
                </p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-1">Advertising Cookies</h3>
                <p className="text-sm text-gray-400">
                  Omeelo displays advertisements through third-party ad networks including Google
                  AdSense. These partners may use cookies to serve ads based on your prior visits
                  to this website or other websites. You can opt out of personalised advertising by
                  visiting{' '}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Google&apos;s Ad Settings
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    aboutads.info
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. How We Use Information</h2>
            <p className="mb-3">We use the limited technical information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Operate, maintain, and improve the Service</li>
              <li>Detect and prevent abuse, spam, and malicious activity</li>
              <li>Enforce our Terms of Service</li>
              <li>Analyse aggregate usage patterns to optimise performance</li>
              <li>Respond to legal requests from competent authorities</li>
              <li>Protect the security and integrity of our systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p className="mb-3">
              We retain technical logs (including IP addresses) for a maximum of <strong>30 days</strong> for
              security and abuse-prevention purposes. After this period, logs are automatically and
              permanently deleted.
            </p>
            <p>
              Chat content, video streams, and audio data are never stored and therefore have no
              retention period — they exist only during an active session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Sharing of Information</h2>
            <p className="mb-3">
              We do <strong>not</strong> sell, rent, or trade your personal data. We may share
              limited technical information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>
                <strong className="text-white">Service providers:</strong> Infrastructure providers
                (hosting, CDN, analytics) who process data on our behalf under strict data processing
                agreements.
              </li>
              <li>
                <strong className="text-white">Legal compliance:</strong> We may disclose information
                when required by applicable law, court order, or governmental authority.
              </li>
              <li>
                <strong className="text-white">Safety:</strong> To prevent imminent harm to users or
                third parties, or to protect the rights and safety of Omeelo and its users.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Third-Party Services</h2>
            <p className="mb-3">
              Omeelo integrates with the following third-party services. Each operates under its
              own privacy policy:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>
                <strong className="text-white">Google AdSense</strong> — Advertising platform.{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-white">Vercel Analytics</strong> — Privacy-focused web analytics.
              </li>
              <li>
                <strong className="text-white">Google STUN Servers</strong> — Used to facilitate
                peer-to-peer WebRTC connections. No user content is transmitted through these servers.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Omeelo is intended exclusively for users aged <strong>18 and older</strong>. We do not
              knowingly collect personal information from anyone under the age of 18. If you believe
              a minor has used the Service, please{' '}
              <Link href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">
                contact us
              </Link>{' '}
              immediately and we will take appropriate action.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your
              personal data:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Right of access:</strong> Request a copy of any personal data we hold about you.</li>
              <li><strong className="text-white">Right to erasure:</strong> Request deletion of your personal data.</li>
              <li><strong className="text-white">Right to object:</strong> Object to processing of your personal data for certain purposes.</li>
              <li><strong className="text-white">Right to restriction:</strong> Request that we restrict processing of your data.</li>
            </ul>
            <p className="mt-3">
              Because Omeelo does not require account creation, we hold minimal data linked to
              individuals. To exercise any of these rights, please{' '}
              <Link href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">
                contact us
              </Link>{' '}
              at{' '}
              <a href="mailto:shadulccj@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                shadulccj@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect the limited
              data we hold from unauthorised access, alteration, disclosure, or destruction. All data
              in transit is encrypted using HTTPS/TLS. WebRTC connections between users are
              encrypted by default using DTLS-SRTP. However, no method of transmission or storage
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">11. International Transfers</h2>
            <p>
              Omeelo is operated globally. Your technical data may be processed on servers located
              outside your country of residence. By using the Service, you consent to this transfer.
              We ensure that any such transfers are subject to appropriate safeguards in accordance
              with applicable data protection law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make significant changes,
              we will update the &ldquo;Last updated&rdquo; date at the top of this page. We
              encourage you to review this policy periodically. Your continued use of the Service
              after changes become effective constitutes your acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-semibold mb-1">Omeelo</p>
              <p className="text-gray-400 text-sm">
                Email:{' '}
                <a
                  href="mailto:shadulccj@gmail.com"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  shadulccj@gmail.com
                </a>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Website:{' '}
                <Link href="/" className="text-violet-400 hover:text-violet-300 transition-colors">
                  omeelo.com
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
          <Link href="/" className="text-violet-400 hover:text-violet-300 transition-colors">
            &larr; Back to home
          </Link>
          <Link href="/terms" className="text-violet-400 hover:text-violet-300 transition-colors">
            Terms of Service &rarr;
          </Link>
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
