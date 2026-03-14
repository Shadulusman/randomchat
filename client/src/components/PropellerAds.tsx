'use client';

import { useEffect } from 'react';
import { PROPELLER_ZONE_ID } from '@/config/ads';

export default function PropellerAds() {
  useEffect(() => {
    // Skip if zone ID hasn't been configured yet
    if (!PROPELLER_ZONE_ID) return;

    // Register service worker required for push notifications
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    // Inject PropellerAds push notification script
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://pl.propellerads.com/${PROPELLER_ZONE_ID}/invoke.js`;
    s.setAttribute('data-cfasync', 'false');
    (document.body || document.documentElement).appendChild(s);
  }, []);

  return null;
}
