import React from 'react';

interface ChapelLogoProps {
  variant?: 'light' | 'dark';
  size?: number;
}

/**
 * Official circular CHAPEL logo (/images/chapel-logo.jpg).
 * Retains the original typographic design and proportions without redrawing or regenerating.
 */
export const ChapelLogo: React.FC<ChapelLogoProps> = ({ variant = 'light', size = 38 }) => {
  return (
    <span className="inline-flex items-center gap-2.5 shrink-0">
      <img
        src="/images/chapel-logo.jpg"
        alt="CHAPEL – Raum für Stadtkultur Logo"
        width={size}
        height={size}
        className={`rounded-full object-cover shrink-0 ${
          variant === 'dark' ? 'ring-2 ring-[#FBF2E3]/50' : 'ring-2 ring-[#141414]'
        }`}
      />
      <span
        className={`font-poster text-2xl font-bold tracking-wide uppercase ${
          variant === 'light' ? 'text-[#141414]' : 'text-[#FBF2E3]'
        }`}
      >
        CHAPEL
      </span>
    </span>
  );
};
