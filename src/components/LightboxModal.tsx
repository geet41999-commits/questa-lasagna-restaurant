import React, { useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';

interface LightboxModalProps {
  photoIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photoIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (photoIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photoIndex, onClose, onNext, onPrev]);

  if (photoIndex === null) return null;

  const currentPhoto = GALLERY_PHOTOS[photoIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer text-xl"
        aria-label="Close Lightbox"
      >
        ✕
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous Photo"
      >
        <span className="material-symbols-outlined text-[32px]">chevron_left</span>
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next Photo"
      >
        <span className="material-symbols-outlined text-[32px]">chevron_right</span>
      </button>

      {/* Content Container */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Caption Bar */}
        <div className="w-full mt-4 text-center text-[#fef9f0]">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdada] block">
            {photoIndex + 1} of {GALLERY_PHOTOS.length} · {currentPhoto.subtitle}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
            {currentPhoto.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#e7e2d9] max-w-xl mx-auto mt-1 leading-relaxed">
            {currentPhoto.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
