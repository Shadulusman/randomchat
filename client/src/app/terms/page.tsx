import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Terms of Service | Omeelo',
  description:
    'Read the Omeelo Terms of Service. Understand your rights and responsibilities when using our free random video chat platform, acceptable use policies, and community guidelines.',
  alternates: {
    canonical: 'https://omeelo.com/terms',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-gray-300 leading-relaxed">
        <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: April 2026</p>

        <p className="text-gray-400 mb-8">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Omeelo
          website at omeelo.com (the &ldquo;Service&rdquo;), operated by Omeelo (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using the Service, you agree to
          be bound by these Terms. If you do not agree, you must not use the Service.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing Omeelo, you confirm that you have read, understood, and agree to be
              legally bound by these Terms and our{' '}
              <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">
                Privacy Policy
              </Link>
              , which is incorporated herein by reference. These Terms apply to all visitors and
              users of the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
            <p className="mb-3">
              You must be at least <strong>18 years old</strong> to use Omeelo. By using the
              Service, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>You are at least 18 years of age</li>
              <li>You have the legal capacity to enter into a binding agreement</li>
              <li>You are not prohibited by any applicable law from accessing or using the Service</li>
              <li>Any information you provide is accurate and truthful</li>
            </ul>
            <p className="mt-3">
              If you are under 18, you are not permitted to use Omeelo under any circumstances. We
              reserve the right to terminate access for anyone we have reason to believe is under
              the minimum age.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Acceptable Use</h2>
            <p className="mb-3">
              Omeelo is designed for lawful, respectful communication between adults. You agree to
              use the Service only for its intended purpose and in compliance with all applicable
              laws and regulations. You agree <strong>not</strong> to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Transmit, share, or display any content that is illegal, harmful, threatening, abusive, harassing, defamatory, or obscene</li>
              <li>Display nudity, sexually explicit material, or pornographic content</li>
              <li>Solicit, exploit, or engage with minors in any manner</li>
              <li>Harass, bully, intimidate, or stalk other users</li>
              <li>Attempt to collect, harvest, or store personal information from other users</li>
              <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity</li>
              <li>Use bots, scripts, automated tools, or any non-human means to access or use the Service</li>
              <li>Circumvent, disable, or interfere with any safety, security, or moderation features</li>
              <li>Transmit viruses, malware, or any other malicious code</li>
              <li>Use the Service for commercial solicitation, spam, or advertising without prior written consent</li>
              <li>Engage in any activity that disrupts or interferes with the Service or its servers</li>
              <li>Attempt to gain unauthorised access to any part of the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Conduct and Responsibility</h2>
            <p className="mb-3">
              You are solely responsible for your conduct during video chats and all content you
              transmit through the Service. Omeelo does not monitor live video sessions in real
              time and cannot be held responsible for the behaviour of individual users.
            </p>
            <p>
              You acknowledge that you may be exposed to content from other users that you find
              offensive, indecent, or objectionable. You use the Service at your own risk. We
              strongly encourage you to use the skip and report features if you encounter
              inappropriate behaviour.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Reporting and Enforcement</h2>
            <p className="mb-3">
              Omeelo provides a report button within the chat interface. You are encouraged to use
              it immediately if you encounter behaviour that violates these Terms. Reports are
              reviewed and may result in:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Temporary suspension of the reported user</li>
              <li>Permanent ban from the Service</li>
              <li>Reporting to law enforcement where required by law</li>
            </ul>
            <p className="mt-3">
              We reserve the right to take any enforcement action we deem appropriate, in our sole
              discretion, without prior notice to the user.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p className="mb-3">
              The Omeelo name, logo, website design, and all original content created by us are our
              intellectual property and are protected by applicable copyright, trademark, and other
              intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable, revocable licence to
              access and use the Service for personal, non-commercial purposes only. You may not
              reproduce, distribute, modify, create derivative works of, or exploit any part of the
              Service without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Disclaimer of Warranties</h2>
            <p className="mb-3">
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY
              LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy or reliability of any content on the Service</li>
              <li>Warranties regarding the behaviour, conduct, or content of other users</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OMEELO AND ITS OPERATORS SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, INCLUDING BUT NOT
              LIMITED TO DAMAGES FOR LOSS OF DATA, LOSS OF PROFITS, EMOTIONAL DISTRESS, OR ANY
              OTHER INTANGIBLE LOSSES, REGARDLESS OF WHETHER WE HAVE BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
            <p>
              We may suspend or permanently terminate your access to the Service at any time, with
              or without cause, and with or without notice, including for violation of these Terms.
              Upon termination, your right to use the Service ceases immediately. All provisions of
              these Terms that by their nature should survive termination shall survive, including
              ownership, warranty disclaimers, and limitations of liability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Third-Party Links and Services</h2>
            <p>
              The Service may contain links to third-party websites or services. These links are
              provided for your convenience only. We have no control over and accept no
              responsibility for the content, privacy policies, or practices of any third-party
              websites. We encourage you to review the privacy policies of any third-party sites you
              visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law.
              Any disputes arising from these Terms or the Service shall be resolved through
              good-faith negotiation between the parties. If resolution is not possible, disputes
              may be referred to binding arbitration or the appropriate courts of competent
              jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make significant
              changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page.
              Your continued use of the Service after the effective date of any changes constitutes
              your acceptance of the revised Terms. If you do not agree to the updated Terms, you
              must stop using the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact Us</h2>
            <p className="mb-3">
              If you have any questions about these Terms or the Service, please contact us:
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
          <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">
            Privacy Policy &rarr;
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
