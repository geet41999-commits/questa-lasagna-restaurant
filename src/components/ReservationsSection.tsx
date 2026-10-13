import React, { useState } from 'react';

export const ReservationsSection: React.FC = () => {
  const [guests, setGuests] = useState('2 Guests (Intimate Table)');
  const [day, setDay] = useState('Friday (5 - 9 PM)');
  const [time, setTime] = useState('6:30 PM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'QL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#303b2d] text-[#fef9f0] py-28 relative" id="reservations">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Reservation Callout & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef9f0]/10 backdrop-blur-md w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ffdada]" />
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#dae6d2]">
                Dinner Service Thursday – Monday
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#fef9f0] tracking-tight mb-4">
              Your Table Is Waiting.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#e7e2d9] leading-relaxed mb-10">
              We welcome you to experience the warmth of our dining room in historic Mount Morris. Given our intimate capacity, telephone reservations are strongly encouraged to guarantee your table.
            </p>

            {/* Direct Phone CTA Banner */}
            <div className="p-8 rounded-2xl bg-[#1b2519] shadow-2xl mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 ring-1 ring-[#c5c8bf]/10">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#c5c8bf] block mb-1">
                  Direct Table Reservations
                </span>
                <a
                  className="font-serif text-2xl sm:text-3xl text-[#fef9f0] hover:text-[#ffdada] transition-colors"
                  href="tel:+15856581002"
                >
                  (585) 658-1002
                </a>
                <span className="block font-sans text-xs text-[#99a593] mt-1">
                  Tap to call our host stand directly
                </span>
              </div>
              <a
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#95464a] text-white hover:bg-[#95464a]/90 transition-transform hover:scale-105 shrink-0 shadow-lg"
                href="tel:+15856581002"
                aria-label="Call (585) 658-1002"
              >
                <span className="material-symbols-outlined text-[28px]">call</span>
              </a>
            </div>

            {/* Hours & Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#e7e2d9] font-sans text-sm">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#fef9f0] block mb-3 font-semibold">
                  Service Hours
                </span>
                <div className="space-y-1.5">
                  <p>
                    <span className="text-[#fef9f0] font-medium">Thursday – Monday:</span> 5:00 PM – 9:00 PM
                  </p>
                  <p className="text-[#c5c8bf]">
                    <span className="font-medium">Tuesday – Wednesday:</span> Closed
                  </p>
                </div>
              </div>
              <div>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#fef9f0] block mb-3 font-semibold">
                  Address &amp; Parking
                </span>
                <p className="text-[#fef9f0] font-medium mb-1">55 Main Street</p>
                <p>Mount Morris, NY 14510</p>
                <a
                  className="inline-flex items-center gap-1.5 text-[#ffdada] hover:underline mt-2 font-sans text-[11px] uppercase tracking-wider"
                  href="https://maps.google.com/?q=Questa+Lasagna+55+Main+St+Mount+Morris+NY+14510"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Get Directions</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map & Interactive Reservation Assistant */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Static Map Location Card */}
            <div
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8UHbP3Mq0VVVV63AP1iQdZjpuFX7BrSlm3K0oTebZKTdniZI_oDxcVZQt7K6knm4G4BMEkryRIY-N9YP51aw7ZK1bpLdOvti6uAbsyda8Y9PUZXHNi4V5NGTkOswobU641gC6GpEPP1TqXwD7kyF0NiFLXdxYmqtRmdzbRSl3HimtHJPiLbTt4DGFkE8TDR3Qx0Z0MGSSo-ad0Bs1MlD30etGM-wT9NyRpugzCKX4ehCNVZI4utot')`,
              }}
            >
              <div className="absolute inset-0 bg-[#1b2519]/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-[#fef9f0]/95 backdrop-blur-md p-4 rounded-lg shadow-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-[#95464a] text-[24px]">pin_drop</span>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#1b2519] block font-bold">
                    55 Main Street
                  </span>
                  <span className="font-sans text-xs text-[#444842]">Heart of Mount Morris, NY</span>
                </div>
              </div>
            </div>

            {/* Reservation Inquiry Card */}
            <div className="p-8 rounded-xl bg-[#fef9f0] text-[#1d1c16] shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1b2519]">Inquire Online</h3>
                  <span className="font-sans text-xs text-[#444842]">
                    Request preferred dining or event seating
                  </span>
                </div>
                <span className="material-symbols-outlined text-[#95464a] text-[28px]">
                  calendar_month
                </span>
              </div>

              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                      >
                        <option>2 Guests (Intimate Table)</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>8+ Guests (Celebration)</option>
                        <option>Private Event (Up to 33)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                        Preferred Day
                      </label>
                      <select
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                      >
                        <option>Thursday (5 - 9 PM)</option>
                        <option>Friday (5 - 9 PM)</option>
                        <option>Saturday (5 - 9 PM)</option>
                        <option>Sunday (5 - 9 PM)</option>
                        <option>Monday (5 - 9 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                        Seating Time
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                      >
                        <option>5:00 PM (Early Dinner)</option>
                        <option>5:30 PM</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                        Contact Phone
                      </label>
                      <input
                        className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] placeholder:text-[#c5c8bf] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                        placeholder="(585) 000-0000"
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                      Your Full Name
                    </label>
                    <input
                      className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] placeholder:text-[#c5c8bf] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                      placeholder="e.g. Maria Rossi"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                      Notes or Dietary Requests
                    </label>
                    <input
                      className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] placeholder:text-[#c5c8bf] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                      placeholder="e.g. Anniversary celebration, vegetarian menu preference"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <button
                    className="w-full mt-2 py-3.5 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs font-semibold uppercase tracking-widest transition-all shadow-md cursor-pointer"
                    type="submit"
                  >
                    Send Table Request
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-[#dae6d2] text-[#141e12] space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b2519] text-[24px]">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#1b2519]">
                        Table Request Received!
                      </h4>
                      <p className="font-sans text-xs text-[#3f4a3b] mt-1">
                        Reference: <span className="font-bold tracking-wider">{bookingRef}</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-[#141e12]">
                    Thank you, <strong>{name}</strong>. We have logged your request for <strong>{guests}</strong> on <strong>{day}</strong> at <strong>{time}</strong>. Our host stand will call you back shortly at <strong>{phone}</strong> to confirm your reservation.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="mt-2 text-xs font-semibold text-[#1b2519] underline uppercase tracking-wider cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
