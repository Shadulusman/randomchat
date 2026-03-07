'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold gradient-text">
          <Logo size={30} />
          Omeelo
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/omegle-alternative" className="hover:text-white transition-colors">
            Omegle Alternative
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link
            href="/chat"
            className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Start Chat
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 px-4 pb-4 space-y-3 text-sm">
          <Link href="/omegle-alternative" className="block text-gray-400 hover:text-white py-1" onClick={() => setMenuOpen(false)}>Omegle Alternative</Link>
          <Link href="/blog" className="block text-gray-400 hover:text-white py-1" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/privacy" className="block text-gray-400 hover:text-white py-1" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link href="/chat" className="block bg-violet-600 text-white text-center px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>Start Chat</Link>
        </div>
      )}
    </nav>
  );
}
