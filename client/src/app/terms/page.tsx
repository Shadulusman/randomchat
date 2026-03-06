import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-gray-300 leading-relaxed">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance</h2>
            <p>
              By accessing or using Omeelo you agree to be bound by these terms. If you do not
              agree, do not use the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. Eligibility</h2>
            <p>
              You must be at least <strong>18 years old</strong> to use Omeelo. By using the
              service you confirm that you meet this requirement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Acceptable Use</h2>
            <p>You agree <strong>not</strong> to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Transmit illegal, harmful, threatening, or harassing content</li>
              <li>Display nudity or sexually explicit material</li>
              <li>Harass, bully, or intimidate other users</li>
              <li>Attempt to collect personal information from other users</li>
              <li>Use bots, scripts, or automated tools</li>
              <li>Circumvent any safety or moderation features</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. User Conduct</h2>
            <p>
              You are solely responsible for your behaviour during video chats. Omeelo reserves
              the right to ban users who violate these terms without notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. Reporting</h2>
            <p>
              Users may report inappropriate behaviour using the report button. Reported users who
              receive multiple reports will be automatically banned.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">6. Disclaimer</h2>
            <p>
              Omeelo is provided &quot;as is&quot; without warranties of any kind. We do not
              guarantee the behaviour of other users and are not liable for any interactions that
              occur on the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">7. Termination</h2>
            <p>
              We may suspend or terminate your access at any time for any reason, including violation
              of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">8. Changes</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service
              constitutes acceptance of updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">9. Contact</h2>
            <p>
              Questions about these terms can be directed to{' '}
              <span className="text-violet-400">legal@omeelo.com</span>.
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
