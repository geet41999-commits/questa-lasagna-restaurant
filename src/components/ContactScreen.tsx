import React, { useState } from 'react';

export const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full bg-[#fef9f0] min-h-screen pt-12 pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Livingston County · Mount Morris, NY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#1b2519] tracking-tight mb-4">
            Visit &amp; Connect With Us
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed">
            Conveniently located on historic Main Street in Mount Morris, just minutes from the north entrance of Letchworth State Park and forty minutes south of Rochester.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Essential Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address & Phone Card */}
            <div className="p-8 rounded-2xl bg-[#f2ede4] border border-[#c5c8bf]/30">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold block mb-2">
                Trattoria Location
              </span>
              <h2 className="font-serif text-2xl text-[#1b2519] mb-4">55 Main Street</h2>
              <p className="font-sans text-sm text-[#444842] mb-6">
                Mount Morris, New York 14510
                <br />
                Livingston County · Genesee Valley
              </p>

              <div className="pt-4 border-t border-[#c5c8bf]/40 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#95464a] text-[20px]">call</span>
                  <a
                    href="tel:+15856581002"
                    className="font-serif text-lg font-bold text-[#1b2519] hover:text-[#95464a] transition-colors"
                  >
                    (585) 658-1002
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#95464a] text-[20px]">
                    directions
                  </span>
                  <a
                    href="https://maps.google.com/?q=Questa+Lasagna+55+Main+St+Mount+Morris+NY+14510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs uppercase tracking-wider text-[#95464a] hover:underline font-semibold"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Service Hours Card */}
            <div className="p-8 rounded-2xl bg-[#303b2d] text-[#fef9f0] shadow-xl">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdada] font-semibold block mb-2">
                Service Schedule
              </span>
              <h3 className="font-serif text-2xl mb-4">Dinner Hours</h3>
              <div className="space-y-2 font-sans text-sm text-[#e7e2d9]">
                <div className="flex justify-between py-1 border-b border-[#fef9f0]/10">
                  <span>Thursday</span>
                  <span className="text-[#fef9f0] font-medium">5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#fef9f0]/10">
                  <span>Friday</span>
                  <span className="text-[#fef9f0] font-medium">5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#fef9f0]/10">
                  <span>Saturday</span>
                  <span className="text-[#fef9f0] font-medium">5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#fef9f0]/10">
                  <span>Sunday</span>
                  <span className="text-[#fef9f0] font-medium">5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#fef9f0]/10">
                  <span>Monday</span>
                  <span className="text-[#fef9f0] font-medium">5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 text-[#c5c8bf]">
                  <span>Tuesday &amp; Wednesday</span>
                  <span>Closed (Pasta Prep &amp; Sourcing)</span>
                </div>
              </div>
            </div>

            {/* Travel Directions Note */}
            <div className="p-6 rounded-2xl bg-[#f2ede4] border border-[#c5c8bf]/30">
              <h4 className="font-serif text-lg text-[#1b2519] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#95464a]">explore</span>
                Regional Proximity
              </h4>
              <ul className="space-y-2 font-sans text-xs text-[#444842]">
                <li>• <strong>Letchworth State Park:</strong> 5 minutes from the Mount Morris Dam Entrance.</li>
                <li>• <strong>From Rochester:</strong> 40 minutes via I-390 South (Exit 7).</li>
                <li>• <strong>From Buffalo:</strong> Approx 60 minutes via US-20A East &amp; NY-63 South.</li>
                <li>• <strong>Parking:</strong> Ample free angled parking on Main Street, plus free public municipal parking directly behind the building.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Map & Message Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Visual Location Backdrop */}
            <div
              className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8UHbP3Mq0VVVV63AP1iQdZjpuFX7BrSlm3K0oTebZKTdniZI_oDxcVZQt7K6knm4G4BMEkryRIY-N9YP51aw7ZK1bpLdOvti6uAbsyda8Y9PUZXHNi4V5NGTkOswobU641gC6GpEPP1TqXwD7kyF0NiFLXdxYmqtRmdzbRSl3HimtHJPiLbTt4DGFkE8TDR3Qx0Z0MGSSo-ad0Bs1MlD30etGM-wT9NyRpugzCKX4ehCNVZI4utot')`,
              }}
            >
              <div className="absolute inset-0 bg-[#1b2519]/25 pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-[#fef9f0]/95 backdrop-blur-md p-5 rounded-xl shadow-lg flex items-center gap-4">
                <span className="material-symbols-outlined text-[#95464a] text-[32px]">
                  location_on
                </span>
                <div>
                  <span className="font-serif text-lg text-[#1b2519] font-bold block">
                    Questa Lasagna
                  </span>
                  <span className="font-sans text-xs text-[#444842]">
                    55 Main Street, Mount Morris, NY 14510
                  </span>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#f2ede4] border border-[#c5c8bf]/30">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold block mb-1">
                Direct Messaging
              </span>
              <h3 className="font-serif text-2xl text-[#1b2519] mb-6">
                Send a Note to Our Kitchen
              </h3>

              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#fef9f0] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] border border-[#c5c8bf]/40 focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#fef9f0] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] border border-[#c5c8bf]/40 focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#fef9f0] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] border border-[#c5c8bf]/40 focus:outline-none focus:ring-1 focus:ring-[#95464a] cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Table Reservation Assistance</option>
                      <option>Dietary / Allergy Inquiry</option>
                      <option>Private Dining Question</option>
                      <option>Compliments &amp; Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#757871] mb-1.5 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can Chef Garcia and our team assist you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#fef9f0] px-4 py-2.5 rounded font-sans text-xs text-[#1b2519] border border-[#c5c8bf]/40 focus:outline-none focus:ring-1 focus:ring-[#95464a]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-[#dae6d2] text-[#141e12] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#1b2519]">check_circle</span>
                    <h4 className="font-serif text-lg font-bold text-[#1b2519]">Message Dispatched</h4>
                  </div>
                  <p className="font-sans text-xs text-[#141e12] leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your message regarding <em>{subject}</em> has been forwarded directly to Executive Chef Michael Garcia and our hospitality desk. We will respond to <strong>{email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-[#1b2519] underline uppercase tracking-wider cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
