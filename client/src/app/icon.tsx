import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Video camera icon */}
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Camera body */}
          <rect x="0" y="1" width="15" height="14" rx="3" fill="white" />
          {/* Camera lens triangle */}
          <path d="M16 4.5L21 2V14L16 11.5V4.5Z" fill="white" />
          {/* Dot */}
          <circle cx="7.5" cy="8" r="3" fill="#7c3aed" />
          <circle cx="7.5" cy="8" r="1.2" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
