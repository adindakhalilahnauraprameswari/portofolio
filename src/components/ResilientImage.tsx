import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackSub?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'NP',
  fallbackSub = 'PLATE ARCHIVE',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#221E1A] text-[#F7EFE6] border border-[#B85A3A]/50 select-none ${className}`}
      >
        <span className="font-editorial text-2xl font-bold tracking-wider text-[#D9724E]">
          {fallbackLabel}
        </span>
        {fallbackSub && (
          <span className="font-mono-stamp text-[10px] tracking-[0.2em] uppercase text-[#ccc6be] mt-1">
            {fallbackSub}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
