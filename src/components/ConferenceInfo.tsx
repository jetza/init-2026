"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeUp, StaggerChildren } from "@/components/motion";
import {
  StatVisitorsIcon,
  StatHallsIcon,
  StatSpeakersIcon,
  LocationPinIcon,
  CalendarIcon,
  PersonArrowDownIcon,
  PersonPlusIcon,
  ArrowRightIcon,
  FacebookIcon,
  TwitterXIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  BlueskyIcon,
} from "@/components/icons";

export default function ConferenceInfo() {
  const { t } = useLanguage();
  const ci = t.conferenceInfo;
  return (
    <>
      <section
        id="conference"
        className="bg-[#010254] relative overflow-hidden"
      >
        <div className="relative z-10">
          {/* Stats section with background photo */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden"
              style={{ minHeight: "440px" }}
            >
              {/* Conference photo background */}
              <Image
                src="/images/conference-venue-bg.png"
                alt="INIT Conference"
                fill
                className="object-cover object-center"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Stats content */}
              <div
                className="relative z-10 flex items-center justify-center py-16"
                style={{ minHeight: "440px" }}
              >
                <StaggerChildren className="max-w-300 mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Stat 1 - Visitors */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <StatVisitorsIcon />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {ci.visitorsTitle}
                    </h3>
                    <p className="text-white font-medium text-xl leading-relaxed">
                      {ci.visitorsDesc}
                    </p>
                  </div>

                  {/* Stat 2 - Halls */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <StatHallsIcon />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {ci.hallsTitle}
                    </h3>
                    <p className="text-white font-medium text-xl leading-relaxed">
                      {ci.hallsDesc}
                    </p>
                  </div>

                  {/* Stat 3 - Speakers */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <StatSpeakersIcon />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {ci.speakersTitle}
                    </h3>
                    <p className="text-white font-medium text-xl leading-relaxed">
                      {ci.speakersDesc}
                    </p>
                  </div>
                </StaggerChildren>
              </div>
            </div>
          </div>
          {/* "INIT is back!" + Location & Team links — text left, links right */}
          <div className="max-w-300 mx-auto px-6 pt-14 pb-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left: text */}
              <FadeUp className="flex-1">
                <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-5 leading-tight">
                  {ci.backTitle}
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-4">
                  {ci.backP1}
                </p>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                  {ci.backP2}
                </p>
              </FadeUp>

              {/* Right: link cards stacked */}
              <FadeUp
                delay={0.15}
                className="flex flex-col gap-4 lg:w-105 shrink-0 w-full"
              >
                <Link
                  href="/location"
                  className="flex items-center gap-4 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 hover:border-[#1FC7D8] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1FC7D8]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1FC7D8]/30 transition-colors">
                    <LocationPinIcon size={24} stroke="#1FC7D8" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">
                      {ci.locationLink}
                    </p>
                    <p className="text-white/50 text-sm mt-0.5">
                      Banski Dvor, Banja Luka
                    </p>
                  </div>
                  <ArrowRightIcon
                    size={20}
                    className="ml-auto text-white/40 group-hover:text-[#1FC7D8] transition-colors shrink-0"
                  />
                </Link>
                <Link
                  href="/team"
                  className="flex items-center gap-4 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 hover:border-[#1FC7D8] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1FC7D8]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1FC7D8]/30 transition-colors">
                    <PersonPlusIcon size={24} stroke="#1FC7D8" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">
                      {ci.teamLink}
                    </p>
                    <p className="text-white/50 text-sm mt-0.5">
                      INIT 2026 tim
                    </p>
                  </div>
                  <ArrowRightIcon
                    size={20}
                    className="ml-auto text-white/40 group-hover:text-[#1FC7D8] transition-colors shrink-0"
                  />
                </Link>
              </FadeUp>
            </div>
          </div>

          {/* Conference info gradient card */}
          <div className="max-w-300 mx-auto px-6 pt-12 pb-8">
            <div className="gradient-bg rounded-xl p-8 md:px-10 md:py-9 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold text-2xl leading-tight mb-3">
                  {ci.cardTitle}
                </h3>
                <p className="text-white font-medium text-lg md:text-xl leading-relaxed">
                  {ci.cardDesc}
                </p>
              </div>
              <a
                href="mailto:info@initconf.org"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FEC73F] text-[#111111] font-bold text-xl rounded-lg hover:bg-[#e5b336] transition-colors whitespace-nowrap min-w-49.5 h-13 shrink-0"
              >
                {ci.becomeSponsor}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Konferencija card */}
      <section className="bg-white py-16">
        <div className="max-w-300 mx-auto px-6">
          <FadeUp>
            <div
              className="relative bg-[#010254] rounded-3xl overflow-hidden flex flex-col md:flex-row"
              style={{ minHeight: "517px" }}
            >
              {/* Decorative pink glow */}
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#d3165a] rounded-full opacity-10 blur-3xl pointer-events-none" />

              {/* Left content */}
              <div className="flex-1 px-6 md:px-10 py-12 flex flex-col justify-center relative z-10">
                <h2 className="gradient-text text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  {ci.confTitle}
                </h2>
                <p className="text-white font-bold text-base leading-relaxed mb-2">
                  {ci.confP1}
                </p>
                <p className="text-white font-medium text-base leading-relaxed mb-8">
                  {ci.confP2}
                </p>

                {/* Info rows */}
                <div className="space-y-3 mb-8">
                  <div className="bg-[#0c0d72] rounded-[9px] h-10 flex items-center px-4 gap-3">
                    <LocationPinIcon />
                    <span className="text-white font-semibold text-sm">
                      {ci.locationChip}
                    </span>
                  </div>
                  <div className="bg-[#0c0d72] rounded-[9px] h-10 flex items-center px-4 gap-3">
                    <CalendarIcon />
                    <span className="text-white font-semibold text-sm">
                      {ci.dateChip}
                    </span>
                  </div>
                  <div className="bg-[#0c0d72] rounded-[9px] h-10 flex items-center px-4 gap-3">
                    <PersonArrowDownIcon />
                    <span className="text-white font-semibold text-sm">
                      {ci.attendeesChip}
                    </span>
                  </div>
                </div>

                <a
                  href="mailto:info@initconf.org"
                  className="btn-shimmer inline-flex items-center justify-center w-49.5 h-13 bg-[#D3165A] text-white font-bold text-xl rounded-xl hover:bg-[#B8134E] transition-colors"
                >
                  {ci.becomeSponsor}
                </a>
              </div>

              {/* Right image */}
              <div className="md:w-96 relative min-h-72 shrink-0">
                <Image
                  src="/images/conference-image-138e74.png"
                  alt="INIT Konferencija"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Social media CTA */}
        <FadeUp className="max-w-300 mx-auto px-6 py-12 text-center">
          <p className="text-[#010254] font-semibold text-lg md:text-xl mb-6">
            {ci.socialCta}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/initBL"
              className="neon-icon w-11 h-11 rounded-full bg-[#010254] flex items-center justify-center hover:opacity-80"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/initconfbl/"
              className="neon-icon w-11 h-11 rounded-full bg-[#010254] flex items-center justify-center hover:opacity-80"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/initconf/"
              className="neon-icon w-11 h-11 rounded-full bg-[#010254] flex items-center justify-center hover:opacity-80"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="https://x.com/InitConfBL"
              className="neon-icon w-11 h-11 rounded-full bg-[#010254] flex items-center justify-center hover:opacity-80"
              aria-label="X"
            >
              <TwitterXIcon size={18} />
            </a>
            <a
              href="https://www.youtube.com/@initconf"
              className="neon-icon w-11 h-11 rounded-full bg-[#010254] flex items-center justify-center hover:opacity-80"
              aria-label="YouTube"
            >
              <YouTubeIcon size={20} />
            </a>
            <a
              href="https://bsky.app/profile/initconf.org"
              className="neon-icon w-11 h-11 rounded-full bg-[#010254] flex items-center justify-center hover:opacity-80"
              aria-label="Bluesky"
            >
              <BlueskyIcon size={20} />
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
