import React, { useState } from 'react';

interface HeaderProps {
  activeScreen: 'home' | 'our-story' | 'menu' | 'private-dining' | 'contact';
  onNavigate: (screen: 'home' | 'our-story' | 'menu' | 'private-dining' | 'contact') => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeScreen, onNavigate, onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; id: 'home' | 'our-story' | 'menu' | 'private-dining' | 'contact' }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Our Story', id: 'our-story' },
    { label: 'Menu', id: 'menu' },
    { label: 'Private Dining', id: 'private-dining' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#fef9f0]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#ece8df]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group text-left cursor-pointer transition-opacity hover:opacity-90"
          >
            <span className="font-serif text-2xl lg:text-3xl font-medium text-[#1b2519] tracking-tight">
              Questa Lasagna
            </span>
            <span className="hidden sm:inline-block font-sans text-[11px] uppercase tracking-widest text-[#757871] pt-1">
              | Mount Morris
            </span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-sans text-[13px] uppercase tracking-widest transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#95464a] font-bold underline underline-offset-8 decoration-1 decoration-[#95464a]'
                    : 'text-[#444842] hover:text-[#95464a]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded bg-[#95464a] text-white font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-widest hover:bg-[#5e280c] transition-all duration-150 shadow-[0_4px_12px_-2px_rgba(37,35,31,0.08)] cursor-pointer whitespace-nowrap"
          >
            Reserve a Table
          </button>

          <div className="hidden sm:flex items-center pl-2">
            <img
              alt="Questa Lasagna Patron"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#c5c8bf]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Qp5z08dBScLlqy_XA52JCcKwJAa9KRPM65AtUxRZFGmJN3TS-PMqktF3lF3j95jqN8b4ShcTLwN0BCWk1hEAoopLXGiov9vijne3Va2b3lIagCOI8UpmENbabiK9mf2Ja-nUjzxbszBUz6r29YV1OIr-ALuuwFYill5v8yogjRLQZVkL2pVyDLgDJ0UKUpKdkt95gJmwKRTjePiUNkCxPb1xQtSu5TdjR2YhW6PxbU5Pg8o8lk7s"
            />
          </div>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1b2519] hover:text-[#95464a] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fef9f0] border-b border-[#ece8df] px-6 py-4 flex flex-col gap-3 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left py-2 font-sans text-sm uppercase tracking-widest transition-colors ${
                activeScreen === item.id
                  ? 'text-[#95464a] font-bold border-l-2 border-[#95464a] pl-3'
                  : 'text-[#444842] pl-3 hover:text-[#95464a]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#ece8df] flex items-center justify-between text-xs text-[#757871]">
            <span>Dinner: Thu – Mon 5:00 – 9:00 PM</span>
            <a href="tel:+15856581002" className="text-[#95464a] font-semibold underline">
              (585) 658-1002
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
