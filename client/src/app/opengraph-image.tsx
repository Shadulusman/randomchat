import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Omeelo – Free Random Video Chat';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 40%, #0a1a2e 100%)',
          position: 'relative',
        }}
      >
        {/* Gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90px',
            height: '90px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            marginBottom: '30px',
          }}
        >
          <svg
            width="56"
            height="42"
            viewBox="0 0 120 90"
            fill="none"
          >
            <rect x="0" y="5" width="82" height="80" rx="16" fill="white" />
            <path d="M88 25L115 10V80L88 65V25Z" fill="white" />
            <circle cx="41" cy="45" r="20" fill="#7c3aed" />
            <circle cx="41" cy="45" r="9" fill="white" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          Omeelo
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '12px',
          }}
        >
          Free Random Video Chat
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '20px',
            color: '#94a3b8',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          Talk to strangers from around the world. No sign-up required.
        </div>

        {/* Bottom URL badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '10px 24px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          <div style={{ fontSize: '18px', color: '#e2e8f0', fontWeight: 600 }}>
            omeelo.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
