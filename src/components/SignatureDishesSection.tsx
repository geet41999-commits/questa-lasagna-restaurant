import React from 'react';
import { SIGNATURE_DISHES, Dish } from '../data/restaurantData';

interface SignatureDishesSectionProps {
  onSelectDish: (dish: Dish) => void;
  onViewFullMenu: () => void;
  onOpenReservation: () => void;
}

export const SignatureDishesSection: React.FC<SignatureDishesSectionProps> = ({
  onSelectDish,
  onViewFullMenu,
  onOpenReservation,
}) => {
  return (
    <section className="w-full bg-[#f8f3ea] py-28 relative" id="signature-dishes">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
              Cucina Artigianale
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#1b2519] tracking-tight mb-4">
              A Taste Worth Gathering For.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed">
              Handmade pastas crafted daily from raw flour and whole eggs, paired with slow-simmered heritage sauces and finished with aged imported cheeses.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={onViewFullMenu}
              className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#95464a] hover:text-[#411400] underline underline-offset-8 transition-colors cursor-pointer"
            >
              <span>View Complete Menu</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </button>
          </div>
        </div>

        {/* Asymmetrical Editorial Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Beef Lasagna (Hero feature 7 cols) */}
          <div
            onClick={() => onSelectDish(SIGNATURE_DISHES[0])}
            className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden bg-[#fef9f0] shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden bg-[#f2ede4]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Decadent slice of handmade Beef Lasagna showing distinct multi-layered pasta sheets"
                src={SIGNATURE_DISHES[0].image}
              />
              <div className="absolute top-4 left-4 bg-[#1b2519] text-[#fef9f0] font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded">
                House Specialty
              </div>
              <div className="absolute top-4 right-4 bg-[#fef9f0]/95 backdrop-blur-md text-[#1b2519] font-serif font-medium text-lg px-3 py-1 rounded shadow-sm">
                {SIGNATURE_DISHES[0].price}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl text-[#1b2519] group-hover:text-[#95464a] transition-colors">
                    {SIGNATURE_DISHES[0].name}
                  </h3>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-semibold">
                    Tasting Highlight
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#444842] leading-relaxed">
                  {SIGNATURE_DISHES[0].description}
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between text-[#757871] font-sans text-[11px] uppercase tracking-wider border-t border-[#ece8df]">
                <span>Fresh Pasta · Slow Ragù</span>
                <span className="text-[#95464a] font-medium">Daily In-House Batch</span>
              </div>
            </div>
          </div>

          {/* Card 2: Cheese Lasagna (5 cols) */}
          <div
            onClick={() => onSelectDish(SIGNATURE_DISHES[1])}
            className="lg:col-span-5 flex flex-col rounded-xl overflow-hidden bg-[#fef9f0] shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden bg-[#f2ede4]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Golden baked four-cheese lasagna layered with delicate hand-rolled pasta"
                src={SIGNATURE_DISHES[1].image}
              />
              <div className="absolute top-4 left-4 bg-[#fef9f0] text-[#95464a] font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded shadow-sm">
                Vegetarian
              </div>
              <div className="absolute top-4 right-4 bg-[#fef9f0]/95 backdrop-blur-md text-[#1b2519] font-serif font-medium text-lg px-3 py-1 rounded shadow-sm">
                {SIGNATURE_DISHES[1].price}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl text-[#1b2519] group-hover:text-[#95464a] transition-colors">
                    {SIGNATURE_DISHES[1].name}
                  </h3>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-semibold">
                    Classic
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#444842] leading-relaxed">
                  {SIGNATURE_DISHES[1].description}
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between text-[#757871] font-sans text-[11px] uppercase tracking-wider border-t border-[#ece8df]">
                <span>Whole-Milk Ricotta</span>
                <span className="text-[#95464a] font-medium">Traditional</span>
              </div>
            </div>
          </div>

          {/* Card 3: Handmade Ravioli (5 cols) */}
          <div
            onClick={() => onSelectDish(SIGNATURE_DISHES[2])}
            className="lg:col-span-5 flex flex-col rounded-xl overflow-hidden bg-[#fef9f0] shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden bg-[#f2ede4]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Pillowy hand-pinched ravioli filled with fresh herb ricotta"
                src={SIGNATURE_DISHES[2].image}
              />
              <div className="absolute top-4 left-4 bg-[#fef9f0] text-[#1b2519] font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded shadow-sm">
                Hand-Pinched
              </div>
              <div className="absolute top-4 right-4 bg-[#fef9f0]/95 backdrop-blur-md text-[#1b2519] font-serif font-medium text-lg px-3 py-1 rounded shadow-sm">
                {SIGNATURE_DISHES[2].price}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl text-[#1b2519] group-hover:text-[#95464a] transition-colors">
                    {SIGNATURE_DISHES[2].name}
                  </h3>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-semibold">
                    Hand-Rolled
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#444842] leading-relaxed">
                  {SIGNATURE_DISHES[2].description}
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between text-[#757871] font-sans text-[11px] uppercase tracking-wider border-t border-[#ece8df]">
                <span>Fine Herbs · Cream Reduction</span>
                <span className="text-[#95464a] font-medium">Seasonal</span>
              </div>
            </div>
          </div>

          {/* Card 4: Gnocchi and Shrimp (7 cols) */}
          <div
            onClick={() => onSelectDish(SIGNATURE_DISHES[3])}
            className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden bg-[#fef9f0] shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden bg-[#f2ede4]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Tender hand-rolled potato gnocchi tossed with succulent pink wild sautéed shrimp"
                src={SIGNATURE_DISHES[3].image}
              />
              <div className="absolute top-4 left-4 bg-[#fef9f0] text-[#1b2519] font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded shadow-sm">
                Seafood Primi
              </div>
              <div className="absolute top-4 right-4 bg-[#fef9f0]/95 backdrop-blur-md text-[#1b2519] font-serif font-medium text-lg px-3 py-1 rounded shadow-sm">
                {SIGNATURE_DISHES[3].price}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl text-[#1b2519] group-hover:text-[#95464a] transition-colors">
                    {SIGNATURE_DISHES[3].name}
                  </h3>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-semibold">
                    Chef Selection
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#444842] leading-relaxed">
                  {SIGNATURE_DISHES[3].description}
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between text-[#757871] font-sans text-[11px] uppercase tracking-wider border-t border-[#ece8df]">
                <span>Potato Gnocchi · Gulf Shrimp</span>
                <span className="text-[#95464a] font-medium">Pan Sauté</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-[#1b2519] text-white hover:bg-[#95464a] transition-colors font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-md cursor-pointer"
          >
            <span>Inquire Today for Daily Seasonal Menu</span>
            <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
