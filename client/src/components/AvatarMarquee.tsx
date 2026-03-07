'use client';

// ─── Profile cards arranged in vertical columns, scrolling up/down ───
// Mimics the lotta.lol style: tall portrait cards floating behind the hero

interface Profile {
  name: string;
  flag: string;
  from: string;
  to: string;
  accent: string;
}

// 6 columns of profiles — each column gets 5 cards (duplicated for seamless loop)
const COLUMNS: Profile[][] = [
  [
    { name: 'Emma', flag: '🇺🇸', from: '#7c3aed', to: '#4c1d95', accent: '#a78bfa' },
    { name: 'Sakura', flag: '🇯🇵', from: '#be185d', to: '#831843', accent: '#f472b6' },
    { name: 'Liam', flag: '🇬🇧', from: '#0e7490', to: '#164e63', accent: '#22d3ee' },
    { name: 'Aaradhya', flag: '🇮🇳', from: '#b45309', to: '#78350f', accent: '#fbbf24' },
    { name: 'Zara', flag: '🇵🇰', from: '#047857', to: '#064e3b', accent: '#34d399' },
  ],
  [
    { name: 'Olivia', flag: '🇨🇦', from: '#9333ea', to: '#581c87', accent: '#c4b5fd' },
    { name: 'Mateo', flag: '🇲🇽', from: '#dc2626', to: '#7f1d1d', accent: '#f87171' },
    { name: 'Sofia', flag: '🇪🇸', from: '#0891b2', to: '#155e75', accent: '#67e8f9' },
    { name: 'Jin', flag: '🇰🇷', from: '#4338ca', to: '#312e81', accent: '#818cf8' },
    { name: 'Nina', flag: '🇮🇹', from: '#c026d3', to: '#701a75', accent: '#e879f9' },
  ],
  [
    { name: 'Priya', flag: '🇮🇳', from: '#ea580c', to: '#7c2d12', accent: '#fb923c' },
    { name: 'Noah', flag: '🇩🇪', from: '#7c3aed', to: '#4c1d95', accent: '#a78bfa' },
    { name: 'Hannah', flag: '🇸🇪', from: '#0d9488', to: '#134e4a', accent: '#2dd4bf' },
    { name: 'Lucas', flag: '🇧🇷', from: '#2563eb', to: '#1e3a8a', accent: '#60a5fa' },
    { name: 'Mia', flag: '🇫🇷', from: '#e11d48', to: '#881337', accent: '#fb7185' },
  ],
  [
    { name: 'Bharghavan', flag: '🇮🇳', from: '#059669', to: '#064e3b', accent: '#6ee7b7' },
    { name: 'Aisha', flag: '🇳🇬', from: '#d97706', to: '#78350f', accent: '#fbbf24' },
    { name: 'Omar', flag: '🇦🇪', from: '#7c3aed', to: '#4c1d95', accent: '#a78bfa' },
    { name: 'Lily', flag: '🇦🇺', from: '#ec4899', to: '#831843', accent: '#f9a8d4' },
    { name: 'Felix', flag: '🇨🇭', from: '#0284c7', to: '#0c4a6e', accent: '#38bdf8' },
  ],
  [
    { name: 'Meimei', flag: '🇨🇳', from: '#8b5cf6', to: '#4c1d95', accent: '#c4b5fd' },
    { name: 'Ahmed', flag: '🇪🇬', from: '#b91c1c', to: '#7f1d1d', accent: '#fca5a5' },
    { name: 'Isla', flag: '🇮🇪', from: '#16a34a', to: '#14532d', accent: '#86efac' },
    { name: 'Kai', flag: '🇿🇦', from: '#0891b2', to: '#155e75', accent: '#67e8f9' },
    { name: 'Eva', flag: '🇳🇱', from: '#9333ea', to: '#581c87', accent: '#d8b4fe' },
  ],
  [
    { name: 'Rahmat', flag: '🇮🇩', from: '#ca8a04', to: '#713f12', accent: '#facc15' },
    { name: 'Chloe', flag: '🇺🇸', from: '#e11d48', to: '#881337', accent: '#fb7185' },
    { name: 'Leo', flag: '🇦🇷', from: '#4f46e5', to: '#312e81', accent: '#818cf8' },
    { name: 'Kamal', flag: '🇲🇾', from: '#059669', to: '#064e3b', accent: '#34d399' },
    { name: 'Yuki', flag: '🇯🇵', from: '#be185d', to: '#831843', accent: '#f472b6' },
  ],
];

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shrink-0" style={{ aspectRatio: '3/4' }}>
      {/* Gradient background simulating a profile photo */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${profile.from} 0%, ${profile.to} 60%, #0a0a0f 100%)`,
        }}
      />
      {/* Subtle pattern overlay for depth */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${profile.accent}44 0%, transparent 60%)`,
        }}
      />
      {/* Large initial letter */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-6xl sm:text-7xl font-black opacity-15 select-none"
          style={{ color: profile.accent }}
        >
          {profile.name[0]}
        </span>
      </div>
      {/* Online badge */}
      <div className="absolute top-3 left-3">
        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-[10px] text-green-400 font-semibold px-2 py-1 rounded-md uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          Online
        </span>
      </div>
      {/* Name + flag at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{profile.flag}</span>
          <span className="text-white font-semibold text-sm truncate">{profile.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function AvatarMarquee() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="flex gap-3 sm:gap-4 h-full px-2 sm:px-4">
        {COLUMNS.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 min-w-0 overflow-hidden relative"
          >
            {/* The scrolling strip: duplicate cards for seamless loop */}
            <div
              className={`flex flex-col gap-3 sm:gap-4 ${
                colIdx % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
              }`}
            >
              {/* First set */}
              {col.map((profile, i) => (
                <ProfileCard key={`a-${i}`} profile={profile} />
              ))}
              {/* Duplicate set for seamless loop */}
              {col.map((profile, i) => (
                <ProfileCard key={`b-${i}`} profile={profile} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
