import React from 'react';

/**
 * Stylized flat-and-softly-textured botanical monstera leaf motif
 * derived from the CHAPEL anniversary poster (#6C9A8B / #8DB3A5).
 */
export const MonsteraFoliageAccent: React.FC<{ className?: string }> = ({
  className = 'w-44 h-44',
}) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M168 24C122 20 76 42 52 82C46 92 42 104 40 116L74 106L42 132C44 146 52 158 64 166L92 142L78 174C96 180 118 176 136 164C172 138 186 78 168 24Z"
      fill="#6C9A8B"
      fillOpacity="0.32"
    />
    <path
      d="M166 26C134 64 102 106 72 158"
      stroke="#134A4B"
      strokeOpacity="0.25"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M118 176C142 182 168 172 182 150C192 134 192 112 184 94L158 112L178 82C168 70 152 64 136 66L142 96L122 70C106 76 96 92 96 110C96 138 104 164 118 176Z"
      fill="#8DB3A5"
      fillOpacity="0.35"
    />
  </svg>
);

/**
 * Warm festive string-light arc in ochre (#D98A3C) & deep petrol (#134A4B),
 * echoing the outdoor stage & courtyard lights on the CHAPEL anniversary poster.
 */
export const StringLightsDivider: React.FC<{ className?: string }> = ({
  className = 'w-full h-10',
}) => (
  <svg
    viewBox="0 0 1200 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M0 6 Q 300 36, 600 10 T 1200 12"
      stroke="#134A4B"
      strokeOpacity="0.35"
      strokeWidth="2"
      fill="none"
    />
    {[90, 210, 330, 450, 570, 690, 810, 930, 1050, 1140].map((cx, idx) => {
      const cy = idx % 2 === 0 ? 20 : 16;
      return (
        <g key={cx}>
          <circle cx={cx} cy={cy} r="7" fill="#D98A3C" fillOpacity="0.25" />
          <circle cx={cx} cy={cy} r="3.5" fill="#D98A3C" />
        </g>
      );
    })}
  </svg>
);
