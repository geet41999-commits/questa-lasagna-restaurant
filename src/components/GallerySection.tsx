import React from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';

interface GallerySectionProps {
  onPhotoClick: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPhotoClick }) => {
  return (
    <section className="w-full bg-[#f8f3ea] py-28 relative" id="gallery-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
              Atmosphere &amp; Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#1b2519] tracking-tight">
              Moments at Questa Lasagna
            </h2>
          </div>
          <p className="font-sans text-sm text-[#757871] max-w-sm">
            Snapshots of our craft, historic Mount Morris dining room, and the comforting dishes that define our table. Click any photo to expand.
          </p>
        </div>

        {/* Staggered Editorial Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px]">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(index)}
              className={`${photo.colSpan || ''} relative overflow-hidden rounded-xl shadow-md group cursor-pointer bg-[#ece8df]`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={photo.caption}
                src={photo.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2519]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#fef9f0] block">
                    {photo.title}
                  </span>
                  <span className="font-sans text-xs text-[#ffdada]/90">
                    {photo.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
