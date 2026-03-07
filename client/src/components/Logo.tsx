'use client';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 28, className = '' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill="url(#logo-grad)" />
      {/* Video camera body */}
      <rect x="96" y="156" width="236" height="200" rx="32" fill="white" />
      {/* Video camera lens */}
      <polygon points="370,196 440,156 440,356 370,316" fill="white" />
      {/* Connection ring */}
      <circle cx="214" cy="256" r="48" fill="url(#logo-grad)" />
      {/* Live dot */}
      <circle cx="214" cy="256" r="20" fill="white" />
    </svg>
  );
}
