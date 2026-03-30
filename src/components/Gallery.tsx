"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "@/components/motion";
import { galleryYears } from "@/data/gallery";

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section
      id="gallery"
      className="bg-white min-h-screen flex flex-col justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-3 text-center">
            {t.gallery.title}
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-xl text-center mx-auto">
            {t.gallery.subtitle}
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px] md:auto-rows-[308px]">
            {/* Top-left (INIT 2019) */}
            <div className="group">
              {galleryYears[0].link ? (
                <a
                  href={galleryYears[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.09)] h-full hover:scale-[1.02] transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={galleryYears[0].placeholder}
                      alt={`INIT ${galleryYears[0].year}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#010254]/40 flex items-end p-5">
                      <span className="text-white font-bold text-xl">
                        INIT {galleryYears[0].year}
                      </span>
                      <span className="ml-auto text-white/80 text-sm underline">
                        {t.gallery.viewGallery} →
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.09)] h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={galleryYears[0].placeholder}
                    alt={`INIT ${galleryYears[0].year}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#010254]/50 flex items-end p-5">
                    <span className="text-white font-bold text-xl">
                      INIT {galleryYears[0].year}
                    </span>
                    {/* TODO: add Flickr link for this year when available */}
                    <span className="ml-auto text-white/50 text-sm italic">
                      {t.gallery.comingSoon}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right — spans 2 rows on md+ (INIT 2025) */}
            <div className="md:row-span-2 group">
              {galleryYears[2].link ? (
                <a
                  href={galleryYears[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.09)] h-full hover:scale-[1.02] transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={galleryYears[2].placeholder}
                      alt={`INIT ${galleryYears[2].year}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#010254]/40 flex items-end p-5">
                      <span className="text-white font-bold text-xl">
                        INIT {galleryYears[2].year}
                      </span>
                      <span className="ml-auto text-white/80 text-sm underline">
                        {t.gallery.viewGallery} →
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.09)] h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={galleryYears[2].placeholder}
                    alt={`INIT ${galleryYears[2].year}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#010254]/50 flex items-end p-5">
                    <span className="text-white font-bold text-xl">
                      INIT {galleryYears[2].year}
                    </span>
                    {/* TODO: add Flickr link for 2025 gallery when available */}
                    <span className="ml-auto text-white/50 text-sm italic">
                      {t.gallery.comingSoon}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom-left (INIT 2022) */}
            <div className="group">
              {galleryYears[1].link ? (
                <a
                  href={galleryYears[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.09)] h-full hover:scale-[1.02] transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={galleryYears[1].placeholder}
                      alt={`INIT ${galleryYears[1].year}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#010254]/40 flex items-end p-5">
                      <span className="text-white font-bold text-xl">
                        INIT {galleryYears[1].year}
                      </span>
                      <span className="ml-auto text-white/80 text-sm underline">
                        {t.gallery.viewGallery} →
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.09)] h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={galleryYears[1].placeholder}
                    alt={`INIT ${galleryYears[1].year}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#010254]/50 flex items-end p-5">
                    <span className="text-white font-bold text-xl">
                      INIT {galleryYears[1].year}
                    </span>
                    {/* TODO: add Flickr link for this year when available */}
                    <span className="ml-auto text-white/50 text-sm italic">
                      {t.gallery.comingSoon}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
