"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterXIcon,
  YouTubeIcon,
  BlueskyIcon,
} from "@/components/icons";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string,
  ) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTarget", anchor);
      router.push("/");
    }
  };
  return (
    <footer className="bg-[#010254] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* CTA Section */}
        <div className="gradient-bg rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <h2 className="text-white font-bold text-2xl mb-3">{f.date}</h2>
            <p className="text-white/80 text-base mb-6 max-w-lg mx-auto">
              {f.desc}
            </p>
            <a
              href="mailto:info@initconf.org"
              className="btn-shimmer-dark inline-flex items-center px-6 py-2.5 bg-[#FFF0F5] text-[#D3165A] font-bold text-base rounded-lg hover:bg-white transition-colors"
            >
              {f.becomeSponsor}
            </a>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="INIT" width={117} height={43} />
          </div>

          {/* <div className="flex items-center gap-6 text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              {f.nav.home}
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              {f.nav.blog}
            </Link>
            <Link href="/team" className="hover:text-white transition-colors">
              {f.nav.team}
            </Link>
            <a
              href="#conference"
              onClick={(e) => handleSectionClick(e, "conference")}
              className="hover:text-white transition-colors"
            >
              {f.nav.conference}
            </a>
          </div> */}

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/initBL"
              className="neon-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/initconfbl/"
              className="neon-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/initconf/"
              className="neon-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="https://x.com/InitConfBL"
              className="neon-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="X (Twitter)"
            >
              <TwitterXIcon size={18} />
            </a>
            <a
              href="https://www.youtube.com/@initconf"
              className="neon-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="YouTube"
            >
              <YouTubeIcon size={20} />
            </a>
            <a
              href="https://bsky.app/profile/initconf.org"
              className="neon-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              aria-label="Bluesky"
            >
              <BlueskyIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          {f.copyright}
        </div>
      </div>
    </footer>
  );
}
