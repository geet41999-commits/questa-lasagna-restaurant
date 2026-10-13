import React, { useState } from 'react';

export const PrivateDiningScreen: React.FC = () => {
  const [eventType, setEventType] = useState('Rehearsal Dinner');
  const [guestCount, setGuestCount] = useState<number>(20);
  const [selectedPackage, setSelectedPackage] = useState('Degustazione dello Chef');
  const [date, setDate] = useState('2026-11-15');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const packages = [
    {
      id: 'famiglia',
      name: 'Pranzo di Famiglia',
      courses: '3 Courses',
      price: '$48 / guest',
      description:
        'A warm, convivial family-style feast. Includes house antipasti misto, two handcrafted lasagnas or fresh pastas, and Venetian tiramisù.',
      highlights: ['Antipasto Misto', 'Choice of 2 Lasagnas', 'Venetian Tiramisù', 'Guatemalan Coffee'],
    },
    {
      id: 'degustazione',
      name: 'Degustazione dello Chef',
      courses: '4 Courses',
      price: '$68 / guest',
      description:
        'Chef Michael Garcia’s signature private tasting menu. Tailored primi, delicate handmade pasta, braised secondo, and decadent house dessert.',
      highlights: ['Burrata Pugliese', 'Handmade Ravioli Primi', 'Veal or Seafood Secondo', 'Classic Dolce'],
    },
    {
      id: 'gran-banchetto',
      name: 'Gran Banchetto Italiano',
      courses: '5 Courses with Wine Flight',
      price: '$95 / guest',
      description:
        'The ultimate celebratory culinary journey. 5 bespoke courses paired meticulously with curated DOC and DOCG Italian regional wines.',
      highlights: ['Sommelier-Paired Wines', '5 Curated Courses', 'Exclusive Dining Room Use', 'Chef Welcome'],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fef9f0] min-h-screen pt-12 pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Exclusive Gatherings &amp; Milestones
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#1b2519] tracking-tight mb-4">
            Private Dining &amp; Celebrations
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed">
            Host your wedding rehearsal, anniversary milestone, or executive dinner in our historic Mount Morris trattoria. Welcoming private parties for up to 33 guests.
          </p>
        </div>
      </div>

      {/* Hero Showcase with Photo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[480px]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7MD2y-syPScAw4tgXZIfIIzIwNbNwlCS6HIVWqlewUSqdR84i4herA0IYoX8jNWdtTklyxmG6t25gNbhXQLO5CgWiSXfGq0TGC0DSjSHRf06JtYesXOZiWACLXgZXXSneFJoEe_tbDjpZvHDScPfcK98HXdmVOdFngzZLDXN_LKTpYeM6V6iw-bWdx7nl6ZhINhbSg8ijo6ux2E8Q6xYYXWuHKi2Qx5rpmq2RclBah1K7Cj5p2Jr"
            alt="Private dining table at Questa Lasagna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2519]/90 via-[#1b2519]/30 to-transparent flex items-end p-8 sm:p-12">
            <div className="max-w-xl text-[#fef9f0]">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#dae6d2] font-semibold block mb-2">
                55 Main Street · Intimate Heritage Room
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl mb-3">
                Up to 33 Seated Guests
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#e7e2d9] leading-relaxed">
                Enjoy complete exclusivity of our dining room, dedicated culinary service from Chef Michael Garcia, and personalized wine pairings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banquet Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Banquet Formats
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1b2519]">
            Curated Event Menus
          </h2>
          <p className="font-sans text-sm text-[#444842] mt-2">
            Each menu is individually customized to accommodate your guests’ dietary preferences and wine pairings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 border ${
                selectedPackage === pkg.name
                  ? 'bg-[#f8f3ea] border-[#95464a] shadow-lg ring-1 ring-[#95464a]'
                  : 'bg-[#f2ede4] border-[#c5c8bf]/30 hover:border-[#95464a]/50'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-bold">
                    {pkg.courses}
                  </span>
                  <span className="font-serif text-xl font-bold text-[#1b2519]">
                    {pkg.price}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#1b2519] mb-3">{pkg.name}</h3>
                <p className="font-sans text-sm text-[#444842] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-[#c5c8bf]/40">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#1b2519]">
                      <span className="material-symbols-outlined text-[16px] text-[#95464a]">
                        check
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedPackage(pkg.name)}
                className={`w-full py-2.5 rounded font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedPackage === pkg.name
                    ? 'bg-[#95464a] text-white'
                    : 'bg-[#e7e2d9] text-[#1b2519] hover:bg-[#d8d3c9]'
                }`}
              >
                {selectedPackage === pkg.name ? 'Selected Package' : 'Select This Package'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#303b2d] text-[#fef9f0] shadow-2xl">
          <div className="mb-8">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdada] font-semibold block mb-1">
              Host Stand Direct Inquiry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Inquire About Your Date
            </h2>
            <p className="font-sans text-sm text-[#e7e2d9] mt-2">
              Fill out your preliminary event details below or call Chef Garcia directly at{' '}
              <a href="tel:+15856581002" className="text-[#ffdada] underline font-semibold">
                (585) 658-1002
              </a>
              .
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Occasion / Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#1b2519] text-[#fef9f0] border border-[#c5c8bf]/30 rounded px-4 py-3 text-xs focus:outline-none focus:border-[#ffdada]"
                  >
                    <option>Wedding Rehearsal Dinner</option>
                    <option>Milestone Birthday</option>
                    <option>Anniversary Celebration</option>
                    <option>Corporate Dinner &amp; Retreat</option>
                    <option>Family Reunion</option>
                    <option>Other Private Gathering</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Estimated Guests: {guestCount} (Max 33)
                  </label>
                  <input
                    type="range"
                    min="8"
                    max="33"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-[#ffdada] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#c5c8bf] mt-1">
                    <span>8 guests</span>
                    <span>20 guests</span>
                    <span>33 guests (full dining room)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-[#1b2519] text-[#fef9f0] border border-[#c5c8bf]/30 rounded px-4 py-3 text-xs focus:outline-none focus:border-[#ffdada]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Selected Menu Format
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={selectedPackage}
                    className="w-full bg-[#1b2519]/70 text-[#dae6d2] border border-[#c5c8bf]/20 rounded px-4 py-3 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Donato"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1b2519] text-[#fef9f0] border border-[#c5c8bf]/30 rounded px-4 py-3 text-xs focus:outline-none focus:border-[#ffdada]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1b2519] text-[#fef9f0] border border-[#c5c8bf]/30 rounded px-4 py-3 text-xs focus:outline-none focus:border-[#ffdada]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(585) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1b2519] text-[#fef9f0] border border-[#c5c8bf]/30 rounded px-4 py-3 text-xs focus:outline-none focus:border-[#ffdada]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#dae6d2] mb-2 font-semibold">
                  Event Vision &amp; Dietary Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your celebration, timing, wine preferences, or dietary needs..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1b2519] text-[#fef9f0] border border-[#c5c8bf]/30 rounded px-4 py-3 text-xs focus:outline-none focus:border-[#ffdada]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs font-semibold uppercase tracking-widest shadow-xl transition-all cursor-pointer"
              >
                Submit Private Event Inquiry
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-xl bg-[#dae6d2] text-[#141e12] space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px] text-[#1b2519]">
                  celebration
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1b2519]">
                    Inquiry Submitted to Chef Garcia
                  </h3>
                  <span className="font-sans text-xs text-[#3f4a3b]">
                    Reference: EVT-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm leading-relaxed">
                Thank you, <strong>{name}</strong>! We have recorded your request for a <strong>{eventType}</strong> with <strong>{guestCount} guests</strong> on <strong>{date}</strong> featuring the <strong>{selectedPackage}</strong> menu. Chef Michael Garcia or our events coordinator will reach out directly at <strong>{phone}</strong> / <strong>{email}</strong> within 24 hours to review menu options and room setup.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded bg-[#1b2519] text-white font-sans text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
