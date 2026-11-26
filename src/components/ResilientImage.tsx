import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-light-surface-container-low via-light-surface-container to-light-surface-variant p-6 text-center"
      >
        <div className="w-12 h-12 rounded-xl bg-light-surface-container-lowest/90 text-light-primary flex items-center justify-center shadow-sm">
          <ImageIcon className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="font-title text-title-md text-light-on-surface">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
