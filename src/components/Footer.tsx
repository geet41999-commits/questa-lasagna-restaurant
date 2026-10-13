import React from 'react';

interface FooterProps {
  onNavigate: (screen: 'home' | 'our-story' | 'menu' | 'private-dining' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#303b2d] text-[#f5f0e7] border-t border-[#1b2519]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#fef9f0]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <span className="font-serif text-3xl text-[#fef9f0]">Questa Lasagna</span>
              <span className="block font-sans text-[11px] uppercase tracking-widest text-[#99a593] mt-1">
                Trattoria · Mount Morris, NY
              </span>
            </div>
            <p className="font-sans text-sm text-[#99a593] max-w-sm mb-6 leading-relaxed">
              Fresh handmade pasta, thoughtful hospitality, and locally rooted fine dining in Mount Morris, New York.
            </p>
            <a
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#fef9f0] hover:text-[#ffdada] transition-colors duration-150"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
              <span>Follow on Facebook</span>
            </a>
          </div>

          {/* Hours & Location */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#fef9f0] mb-4">
              Hours &amp; Location
            </h3>
            <div className="font-sans text-xs sm:text-sm text-[#99a593] space-y-1 mb-4">
              <p className="text-[#fef9f0] font-medium">Dinner Service:</p>
              <p>Thursday – Monday</p>
              <p className="text-[#fef9f0]">5:00 PM – 9:00 PM</p>
              <p className="text-[#c5c8bf] pt-1">Tuesday – Wednesday: Closed</p>
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#99a593] pt-1">
              <p className="text-[#fef9f0]">55 Main Street</p>
              <p>Mount Morris, NY 14510</p>
              <p className="pt-2">
                <a
                  className="text-[#fef9f0] hover:text-[#ffdada] transition-colors underline font-medium"
                  href="tel:+15856581002"
                >
                  585-658-1002
                </a>
              </p>
            </div>
          </div>

          {/* The Experience Navigation */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#fef9f0] mb-4">
              The Experience
            </h3>
            <nav className="flex flex-col md:items-end space-y-2 font-sans text-xs uppercase tracking-widest text-[#99a593]">
              <button
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#fef9f0] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('our-story');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#fef9f0] transition-colors cursor-pointer"
              >
                Our Story
              </button>
              <button
                onClick={() => {
                  onNavigate('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#fef9f0] transition-colors cursor-pointer"
              >
                Culinary Offerings
              </button>
              <button
                onClick={() => {
                  onNavigate('private-dining');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#fef9f0] transition-colors cursor-pointer"
              >
                Private Gatherings
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#fef9f0] transition-colors cursor-pointer"
              >
                Reservations &amp; Inquiries
              </button>
            </nav>
          </div>
        </div>

        {/* Legal & Heritage */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#99a593] font-sans text-[11px] uppercase tracking-wider">
          <p>© 2025 Questa Lasagna. All Rights Reserved.</p>
          <p className="text-[#c5c8bf] text-center md:text-right">
            Crafted with reverence for regional Italian heritage
          </p>
        </div>
      </div>
    </footer>
  );
};
