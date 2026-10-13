import React from 'react';

interface OurStoryScreenProps {
  onOpenReservation: () => void;
  onViewMenu: () => void;
}

export const OurStoryScreen: React.FC<OurStoryScreenProps> = ({ onOpenReservation, onViewMenu }) => {
  return (
    <div className="w-full bg-[#fef9f0] min-h-screen pt-12 pb-24">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Tradition, Craft &amp; Community
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#1b2519] tracking-tight mb-4">
            Our Story &amp; Heritage
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#444842] leading-relaxed">
            From our founding on Main Street in 2010 to an inspired new era under Executive Chef Michael Garcia, Questa Lasagna is dedicated to the unhurried craft of regional Italian gastronomy.
          </p>
        </div>
      </div>

      {/* Narrative Section 1: The Chef's Homecoming */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#e7e2d9] aspect-[4/5]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWjWIBXAnj-fXucN9tMkwHD4ksnPncRdY3aytufA_x8WCjtYZAoQkID4CRnU3pmBjb2iQ_aGTzw158pzhcA3Lw0jeR33T3viZuZ3DhMhtFbGGHrUDmHqjTNGu0yEF5NKNTgawT9QZmNhiQlQJSdCqnZ2ApkSovr0zBwZ-cDxJvtdzVvsuPnUwABr6DLtQcs0x17LI9-WlfbVfA2_bw-kGguPD_mPzEO9IWwrb0LsAHvmspBAZvtFv"
                alt="Executive Chef Michael Garcia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 rounded-xl bg-[#303b2d] text-[#fef9f0] shadow-xl max-w-xs hidden sm:block">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#dae6d2] block mb-1">
                Executive Chef &amp; Owner
              </span>
              <p className="font-serif text-base leading-snug">
                “Italian food is about reverence for ingredients. You cannot rush what requires patience.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2">
              The Journey Home
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b2519] mb-6">
              Executive Chef Michael Garcia
            </h2>
            <div className="space-y-4 font-sans text-base text-[#444842] leading-relaxed">
              <p>
                Raised right here in Livingston County as a Geneseo High School graduate, Michael Garcia developed an early appreciation for the bounty of upstate New York’s agrarian roots. His desire to master the culinary arts took him to the prestigious <strong>Johnson &amp; Wales University</strong>, earning his degree in Culinary Arts &amp; Food Service Management.
              </p>
              <p>
                Over the next two decades, Chef Garcia honed his craft in demanding luxury environments—running high-volume culinary programs across top-tier ski resorts in the American West, orchestrating fine dining brigades, and leading the executive hotel operations of a premier Alaska cruise line.
              </p>
              <p>
                In 2024, Michael returned home to Mount Morris to take the helm at Questa Lasagna, marrying classical culinary rigor with the comforting, generational Italian recipes that locals have cherished for over a decade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section 2: The Pasta Workshop */}
      <div className="w-full bg-[#f2ede4] py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
                Il Laboratorio della Pasta
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1b2519] mb-6">
                The Sacred Ritual of Hand-Rolled Dough
              </h2>
              <div className="space-y-4 font-sans text-base text-[#444842] leading-relaxed">
                <p>
                  At Questa Lasagna, pasta is never an afterthought. Every morning at dawn, our cooks begin with raw ingredients: golden unbleached durum semolina, whole farm-fresh eggs, and cold spring water.
                </p>
                <p>
                  The dough is worked by hand until it achieves a supple, silky elasticity. For our signature lasagnas, sheets are rolled paper-thin, blanched briefly in salted water, and layered with 4-hour simmered ragù and whipped ricotta before being baked in our deck stone ovens.
                </p>
                <p>
                  Extruded pastas like our ribbed rigatoni and fettuccine are drawn through traditional bronze dies, giving the noodles a porous, matte texture that clings effortlessly to every drop of sauce.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white aspect-[4/3]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTNycsi-0E5JKzBl3gaAEiCbSfrzp2avmOGHLCxh0cOkjnHKE2ufCm2wwPddhqwjBLAk84Zjkk3Cpjq43axtLdPgE1D1gU0bEbh-QY3wJ2xUHM2F23lXIdevOc_NRkTPSBw8XYTszCi7WqFwYOv5UO1cfwbfqc4_NcIPT21lL5WwUCgG1oUrkg-0I_p5O9XhLBlvpBCMnJ5HNgv0047fm1ZeXVMP1vrrPZNtvtLkh70eykZCqpPoFO"
                  alt="Fresh pasta rolling at Questa Lasagna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-2 block">
            Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1b2519]">
            A Decade and a Half of Culinary Dedication
          </h2>
        </div>

        <div className="space-y-8 border-l-2 border-[#95464a]/30 pl-6 sm:pl-8 ml-4 sm:ml-8">
          <div className="relative">
            <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-4 h-4 rounded-full bg-[#95464a] ring-4 ring-[#fef9f0]" />
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-bold">
              2010 · The Foundation
            </span>
            <h3 className="font-serif text-xl text-[#1b2519] mt-1 mb-2">
              Questa Lasagna Opens in Mount Morris
            </h3>
            <p className="font-sans text-sm text-[#444842]">
              Opened its doors at 55 Main Street as a boutique Italian trattoria centered on authentic scratch lasagna and warm community hospitality.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-4 h-4 rounded-full bg-[#95464a] ring-4 ring-[#fef9f0]" />
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-bold">
              2016 · Regional Destination
            </span>
            <h3 className="font-serif text-xl text-[#1b2519] mt-1 mb-2">
              Gatherings Across the Finger Lakes
            </h3>
            <p className="font-sans text-sm text-[#444842]">
              Became a beloved gathering place for locals, travelers visiting Letchworth State Park (the "Grand Canyon of the East"), and Finger Lakes wine enthusiasts.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-4 h-4 rounded-full bg-[#95464a] ring-4 ring-[#fef9f0]" />
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#95464a] font-bold">
              2024 – Present · A New Chapter
            </span>
            <h3 className="font-serif text-xl text-[#1b2519] mt-1 mb-2">
              Chef Michael Garcia Takes Ownership
            </h3>
            <p className="font-sans text-sm text-[#444842]">
              Executive Chef Michael Garcia returns to his hometown roots, refreshing the culinary program with artisanal pasta techniques, seasonal regional tasting menus, and expanded private dining.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#303b2d] text-[#fef9f0] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl mb-2">
              Experience Our Table in Person
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#e7e2d9]">
              Join us this Thursday through Monday for a celebration of handcrafted regional Italian cuisine.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs font-semibold uppercase tracking-widest shadow-md transition-colors cursor-pointer"
            >
              Reserve a Table
            </button>
            <button
              onClick={onViewMenu}
              className="px-6 py-3.5 rounded bg-transparent hover:bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-widest border border-[#c5c8bf] transition-colors cursor-pointer"
            >
              Browse Today’s Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
