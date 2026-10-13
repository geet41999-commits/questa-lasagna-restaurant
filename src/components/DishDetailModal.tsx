import React from 'react';
import { Dish } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onReserveForDish: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onReserveForDish }) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#fef9f0] rounded-2xl shadow-2xl overflow-hidden border border-[#c5c8bf]/40 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Dish Details"
        >
          ✕
        </button>

        {/* Dish Hero Image */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#ece8df]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          {dish.badge && (
            <div className="absolute top-4 left-4 bg-[#1b2519]/90 backdrop-blur-md text-[#fef9f0] font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded">
              {dish.badge}
            </div>
          )}
          <div className="absolute bottom-4 right-4 bg-[#fef9f0]/95 backdrop-blur-md text-[#1b2519] font-serif font-bold text-2xl px-4 py-1.5 rounded shadow-lg">
            {dish.price}
          </div>
        </div>

        {/* Dish Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            {dish.italianName && (
              <span className="font-serif italic text-sm text-[#95464a] block mb-1">
                {dish.italianName}
              </span>
            )}
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1b2519] mb-2">
              {dish.name}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#444842] leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Prep Note */}
          {dish.prepNote && (
            <div className="p-4 rounded-xl bg-[#f2ede4] border border-[#c5c8bf]/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#95464a] text-[22px] shrink-0">
                restaurant
              </span>
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#1b2519] font-bold block">
                  Artisanal Technique
                </span>
                <p className="font-sans text-xs text-[#444842] leading-relaxed mt-0.5">
                  {dish.prepNote}
                </p>
              </div>
            </div>
          )}

          {/* Key Ingredients */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-[#757871] mb-2 font-semibold">
              Components &amp; Fresh Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded bg-[#ece8df] text-[#1b2519] font-sans text-xs"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Wine Pairing Recommendation */}
          {dish.winePairing && (
            <div className="p-4 rounded-xl bg-[#303b2d] text-[#fef9f0] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffdada] text-[24px]">
                  wine_bar
                </span>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#dae6d2] block">
                    Sommelier Pairing
                  </span>
                  <span className="font-serif text-base text-white">
                    {dish.winePairing}
                  </span>
                </div>
              </div>
              <span className="font-sans text-xs text-[#c5c8bf]">
                Served by the glass or bottle
              </span>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onReserveForDish();
              }}
              className="flex-1 py-3.5 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-md cursor-pointer text-center"
            >
              Reserve a Table for This Dish
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded bg-[#f2ede4] hover:bg-[#e7e2d9] text-[#1b2519] font-sans text-xs uppercase tracking-wider font-semibold border border-[#c5c8bf] cursor-pointer"
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
