import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import AgeVerification from '@/components/AgeVerification';
import { Analytics } from '@vercel/analytics/next';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: {
    default: 'Omeelo – Free Random Video Chat | Talk to Strangers Online',
    template: '%s | Omeelo',
  },
  description:
    'Omeelo is a free random video chat platform where you can talk to strangers online anonymously. No sign-up required. The best Omegle alternative for meeting new people worldwide.',
  keywords: [
    'random video chat',
    'talk to strangers',
    'omegle alternative',
    'anonymous video chat',
    'video chat with strangers',
    'random chat',
    'free video chat',
    'meet strangers online',
    'anonymous chat',
    'online video chat',
  ],
  openGraph: {
    title: 'Omeelo – Free Random Video Chat with Strangers',
    description:
      'Connect instantly with random people through live video chat. No accounts, no tracking. Just press start.',
    url: 'https://omeelo.com',
    siteName: 'Omeelo',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omeelo – Free Random Video Chat',
    description: 'Talk to strangers from around the world via live video. No sign-up required.',
  },
  alternates: {
    canonical: 'https://omeelo.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Omeelo',
  url: 'https://omeelo.com',
  description:
    'Free random video chat platform to talk to strangers online anonymously.',
  applicationCategory: 'CommunicationApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Omeelo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omeelo is a free random video chat platform that connects you with strangers from around the world instantly. No sign-up or personal information is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Omeelo free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Omeelo is completely free. You can start video chatting with strangers without creating an account or paying anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Omeelo safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omeelo prioritizes user safety with features like a report button, automatic banning of reported users, and anonymous connections. No personal data is stored.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Omeelo work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply visit omeelo.com, click Start Chatting, allow camera access, and you will be randomly matched with another user for a live video chat. You can skip to the next person at any time.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5078446623390820"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={nunito.className}>
        <AgeVerification />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
