import React from 'react';

interface StorySectionProps {
  onReadFullStory: () => void;
  onOpenReservation: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onReadFullStory, onOpenReservation }) => {
  return (
    <section className="w-full bg-[#fef9f0] py-28 relative overflow-hidden" id="our-story-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Story Imagery Composite (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#f2ede4]">
              <img
                className="w-full aspect-[3/4] object-cover"
                alt="Portrait of Executive Chef Michael Garcia in professional dark culinary coat smiling warmly in the open kitchen of Questa Lasagna"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWjWIBXAnj-fXucN9tMkwHD4ksnPncRdY3aytufA_x8WCjtYZAoQkID4CRnU3pmBjb2iQ_aGTzw158pzhcA3Lw0jeR33T3viZuZ3DhMhtFbGGHrUDmHqjTNGu0yEF5NKNTgawT9QZmNhiQlQJSdCqnZ2ApkSovr0zBwZ-cDxJvtdzVvsuPnUwABr6DLtQcs0x17LI9-WlfbVfA2_bw-kGguPD_mPzEO9IWwrb0LsAHvmspBAZvtFv"
              />
            </div>
            {/* Editorial Float Tag */}
            <div className="absolute -bottom-6 -right-6 bg-[#303b2d] text-[#fef9f0] p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#dae6d2] block mb-1">
                New Chapter · Est. 2010
              </span>
              <p className="font-serif text-[18px] leading-snug">
                “Rooted in local craft, refined through decades of culinary passion.”
              </p>
            </div>
          </div>

          {/* Chef Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#95464a] font-semibold mb-3">
              Culinary Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#1b2519] tracking-tight mb-6">
              Tradition, With a New Perspective.
            </h2>
            <p className="font-sans text-lg text-[#444842] leading-relaxed mb-6">
              Questa Lasagna has been a beloved staple in Mount Morris since 2010. Today, we are proud to begin an inspired new era under the culinary leadership and ownership of{' '}
              <strong className="text-[#1b2519] font-semibold">Executive Chef Michael Garcia</strong>.
            </p>
            <p className="font-sans text-base text-[#444842] leading-relaxed mb-10">
              A Geneseo High School graduate, Chef Garcia brings over two decades of culinary mastery back to his home community. His career has taken him through premier luxury ski resorts across the country, acclaimed fine dining kitchens, and the executive hotel division of a prestigious Alaska cruise line.
            </p>

            {/* Verified Experience Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-lg bg-[#f2ede4] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#95464a] text-[22px] shrink-0">
                  workspace_premium
                </span>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#1b2519] font-bold block">
                    20+ Years Experience
                  </span>
                  <span className="font-sans text-sm text-[#444842]">
                    Fine dining & luxury resort kitchens
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#f2ede4] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#95464a] text-[22px] shrink-0">
                  school
                </span>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#1b2519] font-bold block">
                    Johnson & Wales Alum
                  </span>
                  <span className="font-sans text-sm text-[#444842]">
                    B.S. in Culinary Arts & Food Service
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#f2ede4] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#95464a] text-[22px] shrink-0">
                  home_pin
                </span>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#1b2519] font-bold block">
                    Geneseo Native
                  </span>
                  <span className="font-sans text-sm text-[#444842]">
                    Deep local roots & community pride
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#f2ede4] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#95464a] text-[22px] shrink-0">
                  skateboarding
                </span>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#1b2519] font-bold block">
                    Bold Flavors
                  </span>
                  <span className="font-sans text-sm text-[#444842]">
                    Precision craft & operational excellence
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#95464a] hover:bg-[#95464a]/90 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                <span>Meet the Chef at Dinner</span>
              </button>
              <button
                onClick={onReadFullStory}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded border border-[#757871]/30 hover:border-[#95464a] text-[#1b2519] hover:text-[#95464a] font-sans text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                <span>Full Chef Biography</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <span className="font-sans text-xs text-[#757871] hidden sm:inline">
                Open Thursday – Monday
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
