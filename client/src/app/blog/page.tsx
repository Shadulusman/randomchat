import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import { blogPosts } from '@/data/blog-posts';
import AdUnit from '@/components/AdUnit';
import { AD_SLOTS } from '@/config/ads';

export const metadata: Metadata = {
  title: 'Blog | Omeelo - Random Video Chat Tips & Guides',
  description:
    'Read tips, guides, and insights about random video chat, online safety, anonymous communication, and making meaningful connections with strangers worldwide.',
  alternates: {
    canonical: 'https://omeelo.com/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Omeelo <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tips, guides, and insights about random video chat, online safety, and
          making meaningful connections with strangers around the world.
        </p>
      </section>

      {/* Ad: Blog top */}
      <section className="max-w-3xl mx-auto px-4 pb-10">
        <AdUnit slot={AD_SLOTS.BLOG} format="horizontal" />
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all hover:bg-white/[0.07]"
            >
              <p className="text-xs text-gray-500 mb-3">{post.date}</p>
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="text-sm text-violet-400 font-medium group-hover:underline">
                Read More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try Random Video Chat?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Stop reading about it and experience it. Connect with a stranger
            from anywhere in the world in seconds.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Start Chatting Now
          </Link>
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
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size={24} />
          <span className="font-bold gradient-text text-base">Omeelo</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Omeelo. All rights reserved.</p>
      </footer>
    </main>
  );
}
