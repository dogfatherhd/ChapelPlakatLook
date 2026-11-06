import React, { useState } from 'react';

interface ResilientImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  expectedPath?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
  expectedPath,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F3E1C8] text-[#134A4B] border border-dashed border-[#134A4B]/35"
      >
        <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
          Platzhalter · Authentische Fotografie ausstehend
        </span>
        <p className="mt-2 font-poster text-xl font-bold uppercase text-[#134A4B] max-w-sm">
          {fallbackTitle || alt}
        </p>
        {expectedPath && (
          <p className="mt-1.5 text-xs text-[#134A4B]/80 tabular-nums">
            Erwarteter Pfad: {expectedPath}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
