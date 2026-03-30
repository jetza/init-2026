"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "@/components/motion";
import { PencilIcon, ArrowRightIcon } from "@/components/icons";

const speakers = [
  {
    name: "Name Surname",
    bio: "Short bio about the speaker, their background, and expertise.",
    session: "Session",
    photo: "/images/speakers/speaker-placeholder.jpg",
  },
  {
    name: "Name Surname",
    bio: "Short bio about the speaker, their background, and expertise.",
    session: "Session",
    photo: "/images/speakers/speaker-placeholder.jpg",
  },
  {
    name: "Name Surname",
    bio: "Short bio about the speaker, their background, and expertise.",
    session: "Session",
    photo: "/images/speakers/speaker-placeholder.jpg",
  },
  {
    name: "Name Surname",
    bio: "Short bio about the speaker, their background, and expertise.",
    session: "Session",
    photo: "/images/speakers/speaker-placeholder.jpg",
  },
];

export default function Speakers() {
  const { t } = useLanguage();
  const s = t.speakers;
  // TODO: when speakers are confirmed, restore the speakers grid and remove the Call for Speakers section
  const callForSpeakers = true;

  return (
    <section
      id="speakers"
      className="bg-[#010254] min-h-screen flex flex-col justify-center py-20"
    >
      <div className="max-w-300 mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <FadeUp>
            <h2 className="gradient-text text-4xl md:text-[48px] font-bold mb-4 leading-tight">
              {s.title}
            </h2>
            <p className="text-white/70 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {s.desc}
            </p>
          </FadeUp>
        </div>

        {callForSpeakers ? (
          /* Call for Speakers — full-width two-column card */
          <FadeUp delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden p-px bg-linear-to-b from-[#9333EA] to-[#E32066]">
              <div className="bg-[#000140] rounded-3xl px-10 py-12 md:px-14 md:py-14 flex flex-col lg:flex-row gap-12">
                {/* Left: CTA */}
                <div className="flex flex-col items-start gap-6 lg:w-96 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-linear-to-b from-[#9333EA] to-[#E32066] flex items-center justify-center">
                    <PencilIcon size={32} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
                      {s.callTitle}
                    </h3>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed">
                      {s.callDesc}
                    </p>
                  </div>
                  <a
                    href="https://sessionize.com/init-2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex items-center gap-3 px-10 py-4 bg-[#D3165A] text-white font-bold text-xl rounded-xl hover:bg-[#B8134E] transition-colors"
                  >
                    {s.submitTalk}
                    <ArrowRightIcon size={20} />
                  </a>
                  <p className="text-white/40 text-sm">{s.poweredBy}</p>
                </div>

                {/* Vertical divider */}
                <div className="hidden lg:block w-px bg-white/10 self-stretch" />

                {/* Right: Topics */}
                <div className="flex-1">
                  <h3 className="text-white/60 font-semibold text-sm uppercase tracking-widest mb-6">
                    {s.topicsTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#9333EA]/50 hover:bg-white/8 transition-all"
                      >
                        <span className="w-2 h-2 rounded-full bg-linear-to-b from-[#9333EA] to-[#E32066] shrink-0" />
                        <span className="text-white font-medium text-base">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        ) : (
          /* Speakers grid — shown when callForSpeakers = false */
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-240 mx-auto">
              {speakers.map((speaker, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-53 h-82 rounded-3xl overflow-hidden bg-[#000140] group">
                    <div className="absolute inset-0 rounded-3xl p-0.5 bg-linear-to-b from-[#9333EA] to-[#E32066] z-0">
                      <div className="w-full h-full rounded-3xl bg-[#000140]" />
                    </div>
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-43.5 h-43.5 rounded-xl overflow-hidden z-10">
                      <Image
                        src={speaker.photo}
                        alt={speaker.name}
                        width={174}
                        height={174}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 px-3 text-center z-10">
                      <h3 className="text-[#D3165A] font-bold text-base leading-snug">
                        {speaker.name}
                      </h3>
                      <p className="text-white font-bold text-sm leading-snug mt-1">
                        {speaker.bio}
                      </p>
                      <p className="text-white/60 text-xs mt-2">
                        {speaker.session}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="/team"
                className="btn-shimmer inline-flex items-center justify-center px-8 py-3.5 border border-[#D3165A] text-[#D3165A] font-bold text-xl rounded-xl hover:bg-[#D3165A] hover:text-white transition-colors min-w-49.5 h-13"
              >
                Svi Predavači
              </a>
              <a
                href="https://sessionize.com/init-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center px-8 py-3.5 bg-[#D3165A] text-white font-bold text-xl rounded-xl hover:bg-[#B8134E] transition-colors min-w-49.5 h-13"
              >
                Prijavi Predavanje
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
