'use client';

import { useEffect, useRef } from 'react';

interface JuicyAdsUnitProps {
  zoneId: number;
  width: number;
  height: number;
  className?: string;
}

declare global {
  interface Window {
    adsbyjuicy: unknown[];
  }
}

export default function JuicyAdsUnit({ zoneId, width, height, className = '' }: JuicyAdsUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      window.adsbyjuicy = window.adsbyjuicy || [];
      window.adsbyjuicy.push({ adzone: zoneId });
    } catch {}
  }, [zoneId]);

  return (
    <ins
      id={String(zoneId)}
      data-width={width}
      data-height={height}
      className={className}
    />
  );
}
