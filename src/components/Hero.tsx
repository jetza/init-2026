"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20 lg:pt-27.25 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#06021e]" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg-city.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-bg-overlay z-1" />

      {/* Content - fully centered */}
      <div className="relative z-10 max-w-267.25 mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          {...fadeUp(0.1)}
          className="gradient-text text-5xl md:text-6xl font-extrabold leading-tight"
        >
          INIT 2026
        </motion.h1>

        {/* Subtitle - teal, uppercase */}
        <motion.p
          {...fadeUp(0.22)}
          className="text-[#1FC7D8] text-xl md:text-[28px] font-extrabold uppercase tracking-wide mt-2"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Location */}
        <motion.p
          {...fadeUp(0.34)}
          className="text-white text-xl md:text-[32px] font-extrabold mt-8 capitalize"
        >
          {t.hero.location}
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.46)}
          className="text-white font-medium text-lg md:text-2xl leading-relaxed mt-6 max-w-267.25 mx-auto"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          {...fadeUp(0.58)}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="mailto:info@initconf.org"
            className="btn-shimmer inline-flex items-center justify-center px-10 h-13 bg-[#D3165A] text-white font-bold text-xl rounded-xl hover:bg-[#B8134E] transition-colors"
          >
            {t.hero.becomeSponsor}
          </a>
        </motion.div>

        {/* Countdown - below everything, centered */}
        <motion.div {...fadeUp(0.7)} className="mt-12 flex justify-center">
          <Countdown />
        </motion.div>
      </div>

      {/* White arc over the bottom of the video */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1765 185"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ display: "block" }}
        >
          <path
            d="M0.766,80.849C608.385,212.963 1196.47,211.428 1765.56,79.913L1764.93,184.261L0.247,184.26L0.766,80.849Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
