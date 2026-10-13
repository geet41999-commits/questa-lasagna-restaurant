import React from 'react';

interface PrivateDiningSectionProps {
  onOpenPrivateDining: () => void;
  onOpenReservation: () => void;
}

export const PrivateDiningSection: React.FC<PrivateDiningSectionProps> = ({
  onOpenPrivateDining,
  onOpenReservation,
}) => {
  return (
    <section className="w-full bg-[#ece8df] py-28 relative" id="private-dining-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl overflow-hidden bg-[#fef9f0] shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Private Dining Image (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full">
            <img
              className="w-full h-full object-cover"
              alt="Atmospheric private dining room table set for an intimate Italian feast with white linen tablecloths, crystal wine glasses, and warm ambient candle holders"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7MD2y-syPScAw4tgXZIfIIzIwNbNwlCS6HIVWqlewUSqdR84i4herA0IYoX8jNWdtTklyxmG6t25gNbhXQLO5CgWiSXfGq0TGC0DSjSHRf06JtYesXOZiWACLXgZXXSneFJoEe_tbDjpZvHDScPfcK98HXdmVOdFngzZLDXN_LKTpYeM6V6iw-bWdx7nl6ZhINhbSg8ijo6ux2E8Q6xYYXWuHKi2Qx5rpmq2RclBah1K7Cj5p2Jr"
            />
            <div className="absolute inset-0 bg-[#1b2519]/20" />
            <div className="absolute bottom-6 left-6 bg-[#fef9f0]/95 backdrop-blur-md px-4 py-2 rounded font-sans text-[11px] uppercase tracking-widest text-[#1b2519] font-semibold">
              Intimate Event Space · Mount Morris
            </div>
          </div>

          {/* Private Dining Details (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
                Events &amp; Gatherings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#1b2519] tracking-tight mb-6">
                Gather Around Something Special.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed mb-6">
                Bring your family milestone, rehearsal dinner, or corporate celebration to Questa Lasagna. Our historic dining room offers warmth, personal attention, and memorable culinary storytelling.
              </p>

              {/* Key Feature Box */}
              <div className="p-6 rounded-xl bg-[#f8f3ea] mb-8 border border-[#c5c8bf]/30">
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-[#95464a] text-[28px]">groups</span>
                  <span className="font-serif text-2xl text-[#1b2519]">Up to 33 Guests</span>
                </div>
                <p className="font-sans text-sm text-[#444842] leading-relaxed">
                  We comfortably host private seated gatherings for up to 33 guests with completely customized multi-course menus tailored to your preferences.
                </p>
              </div>

              <ul className="space-y-3 font-sans text-sm text-[#1d1c16] mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#95464a] text-[20px]">check_circle</span>
                  <span>Custom multi-course wine-paired tasting menus</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#95464a] text-[20px]">check_circle</span>
                  <span>Dedicated culinary and service team</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#95464a] text-[20px]">check_circle</span>
                  <span>Flexible arrangements for family &amp; executive milestones</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-[#ece8df]">
              <button
                onClick={onOpenPrivateDining}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#1b2519] text-[#fef9f0] hover:bg-[#95464a] font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">event_seat</span>
                <span>Enquire About Private Dining</span>
              </button>
              <a
                href="tel:+15856581002"
                className="font-sans text-xs text-[#757871] hover:text-[#95464a] transition-colors"
              >
                Direct Line: (585) 658-1002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
