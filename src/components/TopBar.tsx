"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";
import {
  FacebookIcon,
  TwitterXIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  BlueskyIcon,
} from "@/components/icons";

export default function TopBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="gradient-bg text-white h-7.5 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/initBL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href="https://x.com/InitConfBL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:opacity-80 transition-opacity"
          >
            <TwitterXIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/company/initconf/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="https://www.youtube.com/@initconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:opacity-80 transition-opacity"
          >
            <YouTubeIcon size={16} />
          </a>
          <a
            href="https://www.instagram.com/initconfbl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href="https://bsky.app/profile/initconf.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky"
            className="hover:opacity-80 transition-opacity"
          >
            <BlueskyIcon size={16} />
          </a>
        </div>

        {/* Contact info + language switcher */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a
            href="tel:+38765767702"
            className="hover:opacity-80 transition-opacity"
          >
            +387 65 767 702
          </a>
          <a
            href="mailto:info@initconf.org"
            className="hover:opacity-80 transition-opacity"
          >
            info@initconf.org
          </a>
          <a href="/location" className="hover:opacity-80 transition-opacity">
            {t.topbar.location}
          </a>

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2">
            {(["sr", "en"] as Lang[]).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="opacity-40 select-none">/</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`text-sm font-bold transition-opacity cursor-pointer ${
                    lang === l
                      ? "opacity-100 underline underline-offset-2"
                      : "opacity-60 hover:opacity-90"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
