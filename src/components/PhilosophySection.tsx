import React from 'react';

interface PhilosophySectionProps {
  onLearnMore?: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onLearnMore }) => {
  return (
    <section className="w-full bg-[#fef9f0] py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text & Badges Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-3">
              Our Culinary Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#1b2519] tracking-tight mb-6">
              Good Food Takes Time.
            </h2>
            <p className="font-sans text-lg text-[#444842] leading-relaxed mb-10">
              From handmade pasta rolled each morning to carefully prepared house desserts, every plate reflects an unwavering belief in fresh ingredients, unhurried technique, and the simple celebration of a meal worth lingering over.
            </p>

            {/* 3 Luxury Highlight Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-[#f2ede4] flex items-start gap-5 transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center shrink-0 text-[#95464a] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">restaurant</span>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] text-[#1b2519] mb-1">Made In-House</h3>
                  <p className="font-sans text-sm text-[#444842] leading-relaxed">
                    From delicate hand-folded ravioli to slow-simmered sauces and signature desserts. Crafted fresh every single morning.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[#f2ede4] flex items-start gap-5 transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center shrink-0 text-[#95464a] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">spa</span>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] text-[#1b2519] mb-1">Thoughtfully Sourced</h3>
                  <p className="font-sans text-sm text-[#444842] leading-relaxed">
                    Partnering with local Finger Lakes and Genesee Valley farms, featuring curated imported Italian regional wines and rich Guatemalan coffee.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[#f2ede4] flex items-start gap-5 transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center shrink-0 text-[#95464a] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">history_edu</span>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] text-[#1b2519] mb-1">Rooted in Italian Tradition</h3>
                  <p className="font-sans text-sm text-[#444842] leading-relaxed">
                    Hand-rolled sheets, whole milk ricotta emulsions, and generational recipes executed with modern culinary precision.
                  </p>
                </div>
              </div>
            </div>

            {onLearnMore && (
              <div className="mt-8">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#95464a] hover:text-[#411400] underline underline-offset-8 transition-colors cursor-pointer"
                >
                  <span>Read our story & craft</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            )}
          </div>

          {/* Visual Artistry Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-xl shadow-2xl bg-[#e7e2d9] aspect-[4/5]">
                <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  alt="Close-up culinary portrait of an Italian chef's hands dusting flour over golden freshly extruded fettuccine pasta strands on an antique butcher block table"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTNycsi-0E5JKzBl3gaAEiCbSfrzp2avmOGHLCxh0cOkjnHKE2ufCm2wwPddhqwjBLAk84Zjkk3Cpjq43axtLdPgE1D1gU0bEbh-QY3wJ2xUHM2F23lXIdevOc_NRkTPSBw8XYTszCi7WqFwYOv5UO1cfwbfqc4_NcIPT21lL5WwUCgG1oUrkg-0I_p5O9XhLBlvpBCMnJ5HNgv0047fm1ZeXVMP1vrrPZNtvtLkh70eykZCqpPoFO"
                />
              </div>

              {/* Inset Floated Accent Image */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-3/5 rounded-xl overflow-hidden shadow-2xl bg-[#fef9f0] p-2 ring-1 ring-[#c5c8bf]/30">
                <img
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                  alt="Overhead view of an artisanal baked terracotta dish filled with golden bubbling ricotta manicotti garnished with shaved parmesan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5f5VBfahZNpSXnKIR9mmWvW7jm3PxJu7m0d7tSo4RIZZDuZn323Pw_koK_ayEW_RUkGrP4n3Oy9jigy4zdBPB4QM7jAe5N_S9Ct9ldX8wpyTC_BPbVAWVWsCjH0V-mYx9dsPgBQ3koJN1yEwoVeB2lzgIqdzj1VQJtRAoNSZoFKPKULcD9wPAr98WlRrSxjYeG1NVAjFVkAruquAdS9K7mX_3Q5M72XLz3tmqF_1hJlXwzRII19Y"
                />
              </div>

              {/* Vertical Quote Accent */}
              <div className="absolute -right-4 top-12 hidden xl:flex items-center gap-2 [writing-mode:vertical-rl] text-[#757871] font-sans text-[11px] tracking-widest uppercase">
                Artigianale • Mount Morris, NY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
