import Image from "next/image";
import { zlatniSponzori, sponzori, prijatelji } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <>
      {/* Sponsors section - white background, directly after hero */}
      <section id="sponsors" className="bg-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Golden sponsors with gradient bar */}
          <div className="relative mb-16">
            {/* Gradient bar behind the cards */}
            <div className="gradient-bg rounded-xl mx-auto max-w-208.25 h-50 flex items-start justify-center pt-4">
              <h3 className="text-white font-extrabold text-2xl">
                Zlatni Sponzori
              </h3>
            </div>
            {/* Sponsor cards overlapping the gradient bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 -mt-35 relative z-10">
              {zlatniSponzori.map((s) => (
                <div
                  key={s.name}
                  className="bg-white rounded-xl p-8 w-95 h-48.75 flex items-center justify-center"
                  style={{ boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  <div className="relative w-50 h-20">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponzori (regular sponsors) */}
          <div className="text-center mb-12">
            <h3 className="gradient-text font-bold text-2xl mb-8">Sponzori</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {sponzori.map((s) => (
                <div
                  key={s.name}
                  className="bg-white rounded-xl p-6 w-69.25 h-34.25 flex items-center justify-center"
                  style={{ boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  <div className="relative w-40 h-14">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Friends of the conference */}
          <div className="text-center mb-12">
            <h3 className="text-[#656565] font-bold text-xl mb-8">
              Prijatelji konferencije
            </h3>
            <div
              className="bg-white rounded-xl flex flex-wrap items-center justify-center gap-8 px-8 py-6"
              style={{ boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.09)" }}
            >
              {prijatelji.map((p) => (
                <div key={p.name} className="relative w-32 h-14">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Become Partner CTA */}
          <div className="text-center mt-8">
            <a
              href="#partners"
              className="btn-shimmer inline-flex items-center justify-center w-60 h-13 bg-[#D3165A] text-white font-bold text-xl rounded-xl hover:bg-[#B8134E] transition-colors"
            >
              Postani Partner
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
