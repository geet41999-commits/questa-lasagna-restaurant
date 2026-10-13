import React, { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState('2026-10-16'); // Friday
  const [time, setTime] = useState('6:30 PM');
  const [seating, setSeating] = useState('Main Trattoria Floor');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dietary, setDietary] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const times = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];
  const seatings = ['Main Trattoria Floor', 'Window Table', 'Chef’s View Alcove'];
  const occasions = ['Casual Dining', 'Anniversary Celebration', 'Birthday', 'Date Night', 'Business Dinner'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'QL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#fef9f0] rounded-2xl shadow-2xl overflow-hidden border border-[#c5c8bf]/40 animate-scaleIn">
        {/* Header */}
        <div className="bg-[#303b2d] text-[#fef9f0] px-6 sm:px-8 py-6 flex items-center justify-between">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdada] font-semibold block">
              Questa Lasagna · Mount Morris, NY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              {step === 'form' ? 'Reserve Your Table' : 'Table Confirmed'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#fef9f0] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Quick Phone Banner */}
            <div className="p-4 rounded-xl bg-[#f2ede4] border border-[#c5c8bf]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#95464a] text-[22px]">call</span>
                <span className="font-sans text-xs text-[#444842]">
                  Prefer telephone booking? Call host desk directly at{' '}
                  <strong className="text-[#1b2519]">(585) 658-1002</strong>
                </span>
              </div>
              <a
                href="tel:+15856581002"
                className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-bold hover:underline shrink-0"
              >
                Call Now
              </a>
            </div>

            {/* Guests selection */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-2 font-semibold">
                Party Size
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`py-2.5 rounded font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      guests === num
                        ? 'bg-[#1b2519] text-white shadow-sm'
                        : 'bg-[#f2ede4] text-[#444842] hover:bg-[#e7e2d9]'
                    }`}
                  >
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </button>
                ))}
              </div>
              {guests >= 8 && (
                <p className="font-sans text-xs text-[#95464a] mt-2 italic">
                  * Parties of 8 or more may also consider our Private Dining Room for up to 33 guests.
                </p>
              )}
            </div>

            {/* Date & Time selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-2 font-semibold">
                  Dining Date (Thu – Mon)
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-2 font-semibold">
                  Preferred Seating Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                >
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Seating & Occasion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-2 font-semibold">
                  Seating Area
                </label>
                <select
                  value={seating}
                  onChange={(e) => setSeating(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                >
                  {seatings.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-2 font-semibold">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                >
                  {occasions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert Rossi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(585) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="robert@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                Dietary Requests or Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Anniversary dessert candle, vegetarian preference, high chair needed"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                className="w-full bg-[#f2ede4] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] focus:outline-none focus:ring-1 focus:ring-[#95464a]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
              >
                Confirm Table Reservation
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#dae6d2] text-[#1b2519] flex items-center justify-center mx-auto shadow-sm">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-bold block mb-1">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-3xl text-[#1b2519]">
                We Look Forward to Welcoming You
              </h3>
              <p className="font-sans text-sm text-[#444842] mt-2">
                A confirmation has been sent to <strong>{email}</strong> and SMS confirmation to <strong>{phone}</strong>.
              </p>
            </div>

            {/* Digital Dining Pass Voucher */}
            <div className="p-6 rounded-2xl bg-[#f2ede4] border border-[#c5c8bf] text-left max-w-md mx-auto space-y-3">
              <div className="flex justify-between items-center border-b border-[#c5c8bf]/40 pb-3">
                <div>
                  <span className="font-serif text-lg font-bold text-[#1b2519]">Questa Lasagna</span>
                  <span className="block font-sans text-[11px] text-[#757871]">55 Main Street, Mount Morris, NY</span>
                </div>
                <div className="text-right">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-bold">
                    Ref
                  </span>
                  <span className="font-serif text-base font-bold text-[#1b2519] block">{bookingCode}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans text-[#1b2519] pt-1">
                <div>
                  <span className="text-[11px] text-[#757871] block">Primary Guest</span>
                  <strong>{name}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#757871] block">Party Size</span>
                  <strong>{guests} {guests === 1 ? 'Guest' : 'Guests'}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#757871] block">Date &amp; Time</span>
                  <strong>{date} · {time}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#757871] block">Seating Area</span>
                  <strong>{seating}</strong>
                </div>
              </div>

              {dietary && (
                <div className="pt-2 text-xs font-sans text-[#444842] border-t border-[#c5c8bf]/40">
                  <span className="text-[11px] text-[#757871] block">Special Notes</span>
                  {dietary}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded bg-[#1b2519] hover:bg-[#95464a] text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                Close &amp; Return to Trattoria
              </button>
              <a
                href="tel:+15856581002"
                className="px-6 py-3 rounded bg-[#f2ede4] hover:bg-[#e7e2d9] text-[#1b2519] font-sans text-xs uppercase tracking-wider font-semibold border border-[#c5c8bf]"
              >
                Call Host Desk
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
