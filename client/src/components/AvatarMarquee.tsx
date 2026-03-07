'use client';

// ─── v1.0 style: horizontal scrolling rows with profile images ───
// Uses randomuser.me for free-to-use placeholder portraits

interface Profile {
  name: string;
  flag: string;
  img: string;
}

const ROW1: Profile[] = [
  { name: 'Emma', flag: '🇺🇸', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Sakura', flag: '🇯🇵', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Priya', flag: '🇮🇳', img: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { name: 'Sofia', flag: '🇪🇸', img: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Mia', flag: '🇫🇷', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { name: 'Aisha', flag: '🇳🇬', img: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { name: 'Chloe', flag: '🇨🇦', img: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { name: 'Lily', flag: '🇦🇺', img: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { name: 'Olivia', flag: '🇬🇧', img: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { name: 'Zara', flag: '🇵🇰', img: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { name: 'Nina', flag: '🇮🇹', img: 'https://randomuser.me/api/portraits/women/11.jpg' },
  { name: 'Hannah', flag: '🇸🇪', img: 'https://randomuser.me/api/portraits/women/12.jpg' },
];

const ROW2: Profile[] = [
  { name: 'Isla', flag: '🇮🇪', img: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { name: 'Yuki', flag: '🇯🇵', img: 'https://randomuser.me/api/portraits/women/15.jpg' },
  { name: 'Eva', flag: '🇳🇱', img: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { name: 'Aaradhya', flag: '🇮🇳', img: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { name: 'Meimei', flag: '🇨🇳', img: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { name: 'Luna', flag: '🇲🇽', img: 'https://randomuser.me/api/portraits/women/19.jpg' },
  { name: 'Fatima', flag: '🇦🇪', img: 'https://randomuser.me/api/portraits/women/20.jpg' },
  { name: 'Aria', flag: '🇺🇸', img: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { name: 'Nadia', flag: '🇪🇬', img: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { name: 'Hana', flag: '🇰🇷', img: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { name: 'Amara', flag: '🇿🇦', img: 'https://randomuser.me/api/portraits/women/24.jpg' },
  { name: 'Elisa', flag: '🇧🇷', img: 'https://randomuser.me/api/portraits/women/25.jpg' },
];

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="flex items-center gap-3 bg-white/[0.05] border border-white/[0.08] rounded-2xl px-3 py-2.5 shrink-0">
      {/* Profile photo */}
      <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-violet-500/30">
        <img
          src={profile.img}
          alt={profile.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white/90 truncate">{profile.name}</p>
        <p className="text-[11px] text-gray-500 flex items-center gap-1">
          <span>{profile.flag}</span> Online
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
        </p>
      </div>
    </div>
  );
}

export default function AvatarMarquee() {
  return (
    <div className="w-full overflow-hidden space-y-3 py-4">
      {/* Row 1 — scrolls left */}
      <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
        {[...ROW1, ...ROW1].map((p, i) => (
          <div key={`r1-${i}`} className="px-1.5">
            <ProfileCard profile={p} />
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
        {[...ROW2, ...ROW2].map((p, i) => (
          <div key={`r2-${i}`} className="px-1.5">
            <ProfileCard profile={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
