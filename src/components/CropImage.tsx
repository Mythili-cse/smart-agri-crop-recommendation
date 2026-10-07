import React, { useState } from 'react';
import { Sprout, ImageOff } from 'lucide-react';

interface CropImageProps {
  src: string;
  alt: string;
  cropName: string;
  className?: string;
}

export const CropImage: React.FC<CropImageProps> = ({ src, alt, cropName, className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div className={`w-full h-full bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}>
        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-2">
          <ImageOff className="w-6 h-6 text-slate-400" />
        </div>
        <span className="text-xs font-bold text-slate-300 block">
          Crop image unavailable
        </span>
        <span className="text-[11px] text-slate-500 font-serif italic mt-0.5">
          {cropName}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-950 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center text-slate-600">
          <Sprout className="w-8 h-8 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt || cropName}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
