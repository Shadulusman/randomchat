'use client';

// ─── Fake profile data for the animated marquee ───
// Each "person" has a name, country flag, and gradient colors for their avatar
const PROFILES_ROW1 = [
  { name: 'Emma', flag: '🇺🇸', from: '#7c3aed', to: '#a78bfa' },
  { name: 'Yuki', flag: '🇯🇵', from: '#ec4899', to: '#f472b6' },
  { name: 'Lucas', flag: '🇧🇷', from: '#06b6d4', to: '#67e8f9' },
  { name: 'Priya', flag: '🇮🇳', from: '#f59e0b', to: '#fbbf24' },
  { name: 'Liam', flag: '🇬🇧', from: '#10b981', to: '#6ee7b7' },
  { name: 'Sofia', flag: '🇪🇸', from: '#ef4444', to: '#f87171' },
  { name: 'Noah', flag: '🇩🇪', from: '#8b5cf6', to: '#c4b5fd' },
  { name: 'Aisha', flag: '🇳🇬', from: '#f97316', to: '#fb923c' },
  { name: 'Mia', flag: '🇫🇷', from: '#e11d48', to: '#fb7185' },
  { name: 'Omar', flag: '🇦🇪', from: '#0891b2', to: '#22d3ee' },
  { name: 'Chloe', flag: '🇨🇦', from: '#7c3aed', to: '#a78bfa' },
  { name: 'Jin', flag: '🇰🇷', from: '#2563eb', to: '#60a5fa' },
];

const PROFILES_ROW2 = [
  { name: 'Zara', flag: '🇵🇰', from: '#059669', to: '#34d399' },
  { name: 'Mateo', flag: '🇲🇽', from: '#dc2626', to: '#f87171' },
  { name: 'Lily', flag: '🇦🇺', from: '#7c3aed', to: '#c4b5fd' },
  { name: 'Ahmed', flag: '🇪🇬', from: '#d97706', to: '#fbbf24' },
  { name: 'Hannah', flag: '🇸🇪', from: '#06b6d4', to: '#67e8f9' },
  { name: 'Ren', flag: '🇨🇳', from: '#e11d48', to: '#fb7185' },
  { name: 'Isla', flag: '🇮🇪', from: '#16a34a', to: '#86efac' },
  { name: 'Felix', flag: '🇨🇭', from: '#9333ea', to: '#c084fc' },
  { name: 'Nina', flag: '🇮🇹', from: '#ec4899', to: '#f9a8d4' },
  { name: 'Kai', flag: '🇿🇦', from: '#0284c7', to: '#38bdf8' },
  { name: 'Eva', flag: '🇳🇱', from: '#ea580c', to: '#fb923c' },
  { name: 'Leo', flag: '🇦🇷', from: '#4f46e5', to: '#818cf8' },
];

function AvatarCard({ name, flag, from, to }: { name: string; flag: string; from: string; to: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-3 py-2.5 shrink-0 min-w-0">
      {/* Avatar circle with gradient and initial */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        {name[0]}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white/80 truncate">{name}</p>
        <p className="text-[11px] text-gray-500 flex items-center gap-1">
          <span>{flag}</span> Online
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
        </p>
      </div>
    </div>
  );
}

export default function AvatarMarquee() {
  return (
    <div className="w-full overflow-hidden space-y-3 py-4 opacity-60">
      {/* Row 1 — scrolls left */}
      <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
        {/* Duplicate the set so it loops seamlessly */}
        {[...PROFILES_ROW1, ...PROFILES_ROW1].map((p, i) => (
          <div key={`r1-${i}`} className="px-1.5">
            <AvatarCard {...p} />
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
        {[...PROFILES_ROW2, ...PROFILES_ROW2].map((p, i) => (
          <div key={`r2-${i}`} className="px-1.5">
            <AvatarCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
}
