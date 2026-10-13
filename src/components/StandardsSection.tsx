import React from 'react';

export const StandardsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fef9f0] py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Our Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#1b2519] tracking-tight mb-4">
            Thoughtfully Chosen. Beautifully Prepared.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed">
            We honor the integrity of regional Italian recipes through authentic raw ingredients, artisanal beverages, and deep respect for our upstate New York agricultural heritage.
          </p>
        </div>

        {/* 4 Curated Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-xl bg-[#f2ede4] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center text-[#95464a] mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">bakery_dining</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#1b2519] mb-3">
                Fresh In-House Preparation
              </h3>
              <p className="font-sans text-sm text-[#444842] leading-relaxed">
                Every pasta sheet, extruded noodle, sauce reduction, and decadent dessert is created entirely in our Mount Morris kitchen.
              </p>
            </div>
            <div className="pt-6 mt-6 font-sans text-[11px] uppercase tracking-wider text-[#757871] font-semibold border-t border-[#c5c8bf]/30">
              01 · Scratch Made
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-xl bg-[#f2ede4] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center text-[#95464a] mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">agriculture</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#1b2519] mb-3">
                Locally Sourced Produce
              </h3>
              <p className="font-sans text-sm text-[#444842] leading-relaxed">
                We collaborate with regional Genesee Valley and Finger Lakes producers for seasonal vegetables, dairy, and farm-fresh herbs.
              </p>
            </div>
            <div className="pt-6 mt-6 font-sans text-[11px] uppercase tracking-wider text-[#757871] font-semibold border-t border-[#c5c8bf]/30">
              02 · Genesee Valley
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-xl bg-[#f2ede4] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center text-[#95464a] mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">wine_bar</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#1b2519] mb-3">
                Imported Italian Wines
              </h3>
              <p className="font-sans text-sm text-[#444842] leading-relaxed">
                Carefully curated DOC and DOCG selections of bold Chianti, velvety Brunello, crisp Pinot Grigio, and effervescent Prosecco.
              </p>
            </div>
            <div className="pt-6 mt-6 font-sans text-[11px] uppercase tracking-wider text-[#757871] font-semibold border-t border-[#c5c8bf]/30">
              03 · Old World Cellar
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-xl bg-[#f2ede4] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-[#fef9f0] flex items-center justify-center text-[#95464a] mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">coffee</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#1b2519] mb-3">
                Rich Guatemalan Coffee
              </h3>
              <p className="font-sans text-sm text-[#444842] leading-relaxed">
                Specialty roasted highland beans featuring deep cacao undertones and subtle citrus aromas to accompany house Italian dolci.
              </p>
            </div>
            <div className="pt-6 mt-6 font-sans text-[11px] uppercase tracking-wider text-[#757871] font-semibold border-t border-[#c5c8bf]/30">
              04 · Artisanal Roast
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
