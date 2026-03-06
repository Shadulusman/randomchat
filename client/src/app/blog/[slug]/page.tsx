import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { blogPosts } from '@/data/blog-posts';

/* ── Static params for SSG ── */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/* ── Dynamic metadata ── */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Omeelo Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://omeelo.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://omeelo.com/blog/${post.slug}`,
      siteName: 'Omeelo',
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* ── Deterministic "related" posts (pick 3 others) ── */
function getRelatedPosts(currentSlug: string) {
  const others = blogPosts.filter((p) => p.slug !== currentSlug);
  // Simple deterministic selection based on slug hash
  const hash = currentSlug
    .split('')
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const related: typeof others = [];
  for (let i = 0; i < 3 && i < others.length; i++) {
    related.push(others[(hash + i * 7) % others.length]);
  }
  return related;
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Omeelo',
      url: 'https://omeelo.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Omeelo',
      url: 'https://omeelo.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://omeelo.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm text-gray-500 mb-3">{post.date}</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg">{post.excerpt}</p>
        </header>

        {/* Content */}
        <div
          className="prose prose-invert prose-violet max-w-none
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:text-white prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:mb-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Keywords / Tags */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Chatting?
          </h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Experience random video chat for yourself. No sign-up, no download
            — just click and connect.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Start Video Chat Now
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8">
          Related Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((rp) => (
            <Link
              key={rp.slug}
              href={`/blog/${rp.slug}`}
              className="group bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all hover:bg-white/[0.07]"
            >
              <p className="text-xs text-gray-500 mb-3">{rp.date}</p>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors leading-snug">
                {rp.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {rp.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Home
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
        <p>&copy; {new Date().getFullYear()} Omeelo. All rights reserved.</p>
      </footer>
    </main>
  );
}
