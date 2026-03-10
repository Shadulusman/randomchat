'use client';

import { useState } from 'react';

const SHARE_URL = 'https://omeelo.com';
const SHARE_TEXT = 'Just had an amazing random video chat on Omeelo! Try it out \u2014 no sign-up needed \ud83c\udf10\ud83c\udfa5';

export default function ShareButton({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // Use Web Share API on mobile if available
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Omeelo \u2013 Free Random Video Chat',
          text: SHARE_TEXT,
          url: SHARE_URL,
        });
        return;
      } catch {
        // User cancelled or not supported, fall through to copy
      }
    }

    // Fallback: copy link
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-1.5 transition-all ${className}`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      {copied ? 'Link Copied!' : 'Share'}
    </button>
  );
}
