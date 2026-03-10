'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: 150000, label: 'Chats This Month', suffix: '+' },
          { value: 89, label: 'Countries', suffix: '' },
          { value: 4.8, label: 'App Rating', suffix: '/5', isDecimal: true },
          { value: 98, label: 'Uptime %', suffix: '%' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
              {stat.isDecimal ? (
                stat.value.toString()
              ) : (
                <AnimatedNumber target={stat.value as number} />
              )}
              {stat.suffix}
            </div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
