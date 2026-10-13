import React, { useState } from 'react';
import { FULL_MENU_ITEMS, WINE_LIST, Dish } from '../data/restaurantData';

interface FullMenuScreenProps {
  onSelectDish: (dish: Dish) => void;
  onOpenReservation: () => void;
}

export const FullMenuScreen: React.FC<FullMenuScreenProps> = ({ onSelectDish, onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'food' | 'wine'>('food');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'lasagne', label: 'Lasagne al Forno' },
    { id: 'pasta', label: 'Pasta Fresca Fatta a Mano' },
    { id: 'primi', label: 'Antipasti & Primi' },
    { id: 'secondi', label: 'Secondi Piatti' },
    { id: 'dolci', label: 'Dolci della Casa' },
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Dishes' },
    { id: 'Vegetarian', label: 'Vegetarian' },
    { id: 'House Specialty', label: 'House Specialty' },
    { id: 'Seafood', label: 'Seafood' },
  ];

  const toggleWishlist = (dishId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (wishlist.includes(dishId)) {
      setWishlist(wishlist.filter((id) => id !== dishId));
    } else {
      setWishlist([...wishlist, dishId]);
    }
  };

  const filteredDishes = FULL_MENU_ITEMS.filter((dish) => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesDietary = selectedDietary === 'all' || dish.dietary === selectedDietary;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dish.italianName && dish.italianName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDietary && matchesSearch;
  });

  return (
    <div className="w-full bg-[#fef9f0] min-h-screen pt-12 pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Questa Lasagna · Carta del Giorno
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#1b2519] tracking-tight mb-4">
            Our Culinary Offerings
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed">
            Every dish begins with raw ingredients transformed by hand: fresh whole egg pasta rolled each morning, simmered heritage ragùs, and Italian DOC/DOCG wines.
          </p>
        </div>

        {/* Wishlist Bar if items selected */}
        {wishlist.length > 0 && (
          <div className="mt-8 p-4 rounded-xl bg-[#dae6d2] border border-[#becab7] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#1b2519]">bookmark</span>
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1b2519]">
                Your Dining Wishlist: {wishlist.length} item{wishlist.length > 1 ? 's' : ''} saved
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenReservation}
                className="px-4 py-2 rounded bg-[#1b2519] text-[#fef9f0] font-sans text-[11px] uppercase tracking-widest font-semibold hover:bg-[#95464a] transition-colors cursor-pointer"
              >
                Reserve Table for These Dishes
              </button>
              <button
                onClick={() => setWishlist([])}
                className="text-xs text-[#757871] hover:text-[#1b2519] underline cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Tab switch between Food Menu and Wine List */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex p-1 rounded-lg bg-[#f2ede4] border border-[#c5c8bf]/30">
            <button
              onClick={() => setActiveTab('food')}
              className={`px-6 py-2.5 rounded-md font-sans text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'food'
                  ? 'bg-[#1b2519] text-white shadow-sm'
                  : 'text-[#444842] hover:text-[#1b2519]'
              }`}
            >
              Cucina (Food Menu)
            </button>
            <button
              onClick={() => setActiveTab('wine')}
              className={`px-6 py-2.5 rounded-md font-sans text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'wine'
                  ? 'bg-[#1b2519] text-white shadow-sm'
                  : 'text-[#444842] hover:text-[#1b2519]'
              }`}
            >
              Carta dei Vini (Italian Cellar)
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'food' ? (
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Controls: Search & Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#ece8df]">
            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#757871] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes or ingredients..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#f2ede4] rounded text-xs font-sans text-[#1b2519] placeholder:text-[#757871] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#757871]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#757871] font-semibold mr-1">
                Dietary:
              </span>
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDietary(opt.id)}
                  className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-colors cursor-pointer ${
                    selectedDietary === opt.id
                      ? 'bg-[#95464a] text-white'
                      : 'bg-[#f2ede4] text-[#444842] hover:bg-[#e7e2d9]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded font-sans text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#303b2d] text-white shadow-sm'
                    : 'bg-[#f2ede4] text-[#444842] hover:bg-[#e7e2d9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((dish) => {
                const isWishlisted = wishlist.includes(dish.id);
                return (
                  <div
                    key={dish.id}
                    onClick={() => onSelectDish(dish)}
                    className="flex flex-col rounded-xl overflow-hidden bg-[#fef9f0] border border-[#c5c8bf]/40 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden bg-[#ece8df]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {dish.badge && (
                        <div className="absolute top-3 left-3 bg-[#1b2519]/90 backdrop-blur-md text-[#fef9f0] font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded">
                          {dish.badge}
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-[#fef9f0]/95 backdrop-blur-md text-[#1b2519] font-serif font-semibold text-lg px-3 py-1 rounded shadow-sm">
                        {dish.price}
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => toggleWishlist(dish.id, e)}
                        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-md ${
                          isWishlisted
                            ? 'bg-[#95464a] text-white'
                            : 'bg-[#fef9f0]/90 text-[#1b2519] hover:bg-white'
                        }`}
                        aria-label="Save to Wishlist"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {isWishlisted ? 'bookmark' : 'bookmark_border'}
                        </span>
                      </button>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        {dish.italianName && (
                          <span className="font-serif italic text-xs text-[#95464a] block mb-1">
                            {dish.italianName}
                          </span>
                        )}
                        <h3 className="font-serif text-xl text-[#1b2519] group-hover:text-[#95464a] transition-colors mb-2">
                          {dish.name}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#444842] leading-relaxed mb-4">
                          {dish.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#ece8df] space-y-2">
                        {dish.winePairing && (
                          <div className="flex items-center gap-1.5 text-xs text-[#5e280c]">
                            <span className="material-symbols-outlined text-[16px] text-[#95464a]">
                              wine_bar
                            </span>
                            <span className="font-sans text-[11px]">
                              Pair with: <em>{dish.winePairing}</em>
                            </span>
                          </div>
                        )}
                        <div className="flex items-center justify-between text-[11px] text-[#757871] pt-1">
                          <span>Click for full preparation details</span>
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#f8f3ea] rounded-xl">
              <span className="material-symbols-outlined text-[48px] text-[#757871] mb-2">
                restaurant
              </span>
              <h3 className="font-serif text-xl text-[#1b2519] mb-2">No matching dishes found</h3>
              <p className="font-sans text-sm text-[#757871] mb-6">
                Try adjusting your search query or dietary filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDietary('all');
                }}
                className="px-6 py-2.5 rounded bg-[#95464a] text-white font-sans text-xs uppercase tracking-widest font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Carta dei Vini (Italian Cellar) */
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10 p-8 rounded-2xl bg-[#303b2d] text-[#fef9f0] shadow-xl">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdada] block mb-2 font-semibold">
              Curated by Chef Michael Garcia
            </span>
            <h2 className="font-serif text-3xl mb-4">The Italian Wine Cellar</h2>
            <p className="font-sans text-sm sm:text-base text-[#e7e2d9] max-w-2xl leading-relaxed">
              Our wine program highlights iconic Italian appellations—from the structured Sangiovese hills of Chianti Classico to the crisp Alpine breezes of Friuli and Piedmont. Each vintage is chosen to elevate our rich ragùs, fresh pasta sheets, and hearth-baked specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WINE_LIST.map((wine) => (
              <div
                key={wine.id}
                className="p-6 rounded-xl bg-[#f2ede4] border border-[#c5c8bf]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-sans text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#fef9f0] text-[#95464a] font-bold">
                          {wine.type} · {wine.appellation}
                        </span>
                        <span className="font-sans text-xs text-[#757871]">{wine.region}</span>
                      </div>
                      <h3 className="font-serif text-xl text-[#1b2519]">{wine.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg font-bold text-[#1b2519] block">
                        {wine.glassPrice} / glass
                      </span>
                      <span className="font-sans text-xs text-[#757871]">
                        {wine.bottlePrice} / bottle
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-[#444842] leading-relaxed mt-3">
                    {wine.notes}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#c5c8bf]/40 flex items-center justify-between text-xs text-[#757871]">
                  <span>Serving by glass or bottle</span>
                  <button
                    onClick={onOpenReservation}
                    className="text-[#95464a] hover:underline font-semibold cursor-pointer"
                  >
                    Reserve Table &amp; Pair →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reservation Callout Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#f2ede4] border border-[#c5c8bf]/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1b2519] mb-2">
              Ready to Join Us for Dinner?
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#444842]">
              Dinner service runs Thursday through Monday from 5:00 PM to 9:00 PM. Tables fill quickly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs font-semibold uppercase tracking-widest shadow-md transition-colors cursor-pointer"
            >
              Reserve Table Online
            </button>
            <a
              href="tel:+15856581002"
              className="px-6 py-3.5 rounded bg-[#fef9f0] hover:bg-white text-[#1b2519] font-sans text-xs font-semibold uppercase tracking-widest border border-[#c5c8bf] transition-colors"
            >
              Call (585) 658-1002
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
