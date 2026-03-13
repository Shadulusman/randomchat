// ─── AdSense Slot IDs ─────────────────────────────────────────────────────────
// To get these:
//   1. Go to https://adsense.google.com
//   2. Click Ads → By ad unit → Display ads → + New ad unit
//   3. Name it, click Create, copy the data-ad-slot number
//   4. Replace the placeholder strings below with your real slot IDs

export const AD_SLOTS = {
  // Shown on the homepage between "How It Works" and "Features"
  HOME_MID: '0000000001',

  // Shown on the homepage just before the CTA banner
  HOME_BOTTOM: '0000000002',

  // Shown on the chat page while waiting for a match (highest traffic)
  CHAT_WAITING: '0000000003',

  // Shown at the top of the blog listing page
  BLOG: '0000000004',
} as const;
