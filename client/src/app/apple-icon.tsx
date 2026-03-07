import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Video camera icon */}
        <svg
          width="120"
          height="90"
          viewBox="0 0 120 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Camera body */}
          <rect x="0" y="5" width="82" height="80" rx="16" fill="white" />
          {/* Camera lens triangle */}
          <path d="M88 25L115 10V80L88 65V25Z" fill="white" />
          {/* Connection ring */}
          <circle cx="41" cy="45" r="20" fill="#7c3aed" />
          <circle cx="41" cy="45" r="9" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
