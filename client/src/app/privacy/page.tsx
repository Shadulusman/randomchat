import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-gray-300 leading-relaxed">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2>
            <p>
              Omeelo is designed to be anonymous. We do <strong>not</strong> require you to
              create an account or provide any personal information. When you use our service we may
              temporarily process:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Your IP address (for abuse prevention only)</li>
              <li>Browser type and device information</li>
              <li>Connection timestamps</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. Video &amp; Chat Data</h2>
            <p>
              Video and audio streams are transmitted directly between users via peer-to-peer WebRTC
              connections. We do <strong>not</strong> record, store, or monitor your video calls or
              text messages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Cookies</h2>
            <p>
              We use minimal cookies required for the website to function. We do not use tracking or
              advertising cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. Data Retention</h2>
            <p>
              Temporary data such as IP addresses used for abuse prevention is automatically deleted
              within 24 hours. We do not maintain long-term records of user activity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. Third Parties</h2>
            <p>
              We do not sell, trade, or share any user data with third parties. We may use Google
              STUN servers to facilitate peer-to-peer connections.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">6. Children</h2>
            <p>
              Omeelo is intended for users aged 18 and older. We do not knowingly collect
              information from anyone under 18.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">7. Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{' '}
              <span className="text-violet-400">privacy@omeelo.com</span>.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Link href="/" className="text-violet-400 hover:text-violet-300 transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
