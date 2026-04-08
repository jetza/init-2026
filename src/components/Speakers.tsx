"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "@/components/motion";

/* TODO: restore when speakers are confirmed
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
*/

export default function Speakers() {
  const { t } = useLanguage();
  const s = t.speakers;
  // TODO: when speakers are confirmed, remove the coming soon block and restore the section below
  // const callForSpeakers = true;

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

        {/* TODO: remove coming soon block and restore the section below when speakers are confirmed */}
        <FadeUp delay={0.1}>
          <p className="text-white/60 text-center text-xl">{s.comingSoon}</p>
        </FadeUp>
      </div>
    </section>
  );
}
