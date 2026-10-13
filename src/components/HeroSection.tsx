import React from 'react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu, onOpenReservation }) => {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-[#303b2d] text-[#fef9f0]">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAe_cbXbavZYlQE2xKojHmBOCpd_DdRasZQQwiBrFxFkw8BvoBWh59glETnBB9NJ0ewVUxwiTMF76eECjVPEUoSaegUI_-GjILKXPDrevN4ogEJTzgJ3zLnjSEQD5bAUEw-0MFB_In0vc-zlWUX-YkauPwTh7JjWz0whxd0OY00Sr5HwDC56689nsZD4KC2TJs9tssLBxVSOBOqRCJd67o1fZyPSg9kNog0NgwxYDN4NmmBvtVw0Sm')`,
        }}
        aria-hidden="true"
      />

      {/* Editorial Tint Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b2519] via-[#303b2d]/80 to-[#1b2519]/60" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fe9a9e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-28 lg:pt-48 lg:pb-36 flex flex-col justify-between min-h-[942px]">
        {/* Header eyebrow & badges */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#fef9f0]/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#fe9a9e] animate-pulse" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#dae6d2]">
              An Italian Table in Mount Morris, New York
            </span>
          </div>
          <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest text-[#c5c8bf]">
            <span className="px-3 py-1 rounded bg-[#fef9f0]/5">Est. 2010</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-[#fef9f0]/5">Handcrafted Daily</span>
          </div>
        </div>

        {/* Main Asymmetric Headline & Copy */}
        <div className="my-auto py-12 max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] lg:leading-[72px] tracking-tight text-[#fef9f0] leading-tight mb-6">
            Made by Hand.<br />
            <span className="italic font-normal text-[#ffdada]">Meant to Be Savored.</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#e7e2d9] max-w-2xl leading-relaxed mb-10">
            Fresh pasta crafted from raw flour and whole eggs, thoughtful ingredients, and the quiet pleasure of gathering around an exceptional regional Italian meal.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-200 shadow-xl group cursor-pointer"
            >
              <span>Explore Our Menu</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#ffffff]/10 hover:bg-[#ffffff]/20 backdrop-blur-md text-[#fef9f0] font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest transition-colors duration-150 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ffdada]">call</span>
              <span>Reserve Your Table</span>
            </button>
          </div>
        </div>

        {/* Foot of Hero / Location Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[#fef9f0]/10">
          <div className="flex items-center gap-3 text-[#e7e2d9] font-sans text-sm">
            <span className="material-symbols-outlined text-[#ffdada] text-[20px]">location_on</span>
            <span>55 Main Street · Mount Morris, NY 14510</span>
          </div>
          <div className="flex items-center gap-6 font-sans text-[11px] uppercase tracking-widest text-[#99a593]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#95464a]" />
              Dinner: Thu – Mon 5:00 – 9:00 PM
            </span>
            <span className="hidden md:inline text-[#c5c8bf]">|</span>
            <span className="hidden md:inline text-[#e7e2d9]">Executive Chef Michael Garcia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
