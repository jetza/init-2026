"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  // Track scroll for transparent → solid transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page, track which section is in view
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ["home", "conference", "speakers", "gallery", "contact"];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const navLinks = [
    { anchor: "home", label: t.nav.home },
    { anchor: "conference", label: t.nav.conference },
    { anchor: "speakers", label: t.nav.speakers },
    { anchor: "gallery", label: t.nav.gallery },
    { anchor: "contact", label: t.nav.contact },
  ];

  // After navigating to home from another page, scroll to the stored target
  useEffect(() => {
    if (!isHome) return;
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      // Wait a frame for the DOM to be ready
      requestAnimationFrame(() => {
        if (target === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(target);
          if (el) {
            const headerH = window.innerWidth >= 1024 ? 109 : 80;
            const top = el.getBoundingClientRect().top + window.scrollY - headerH;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      });
    }
  }, [isHome]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
      e.preventDefault();
      setMobileOpen(false);

      if (isHome) {
        if (anchor === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(anchor);
          if (el) {
            const headerH = window.innerWidth >= 1024 ? 109 : 80;
            const top = el.getBoundingClientRect().top + window.scrollY - headerH;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      } else {
        sessionStorage.setItem("scrollTarget", anchor);
        router.push("/");
      }
    },
    [isHome, router],
  );

  const isActive = (link: { anchor: string }) => {
    if (!isHome) return false;
    if (activeSection) return activeSection === link.anchor;
    return link.anchor === "home";
  };

  const baseCls =
    "text-lg px-3 py-7 whitespace-nowrap transition-all duration-300";
  const activeCls = `${baseCls} font-semibold text-[#1FC7D8]`;
  const inactiveCls = `${baseCls} font-medium text-[#4A5565] hover:text-[#1FC7D8]`;

  const activeStyle: React.CSSProperties = {
    backgroundColor: "rgba(31, 199, 216, 0.09)",
    borderBottom: "3px solid #1FC7D8",
  };
  const inactiveStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    borderBottom: "3px solid transparent",
  };

  const showSolid = scrolled || mobileOpen || !isHome;

  return (
    <nav
      className={`transition-all duration-300 ${
        showSolid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
      style={
        showSolid
          ? {
              borderBottom: "1px solid transparent",
              borderImageSource: "linear-gradient(90deg, #9333EA, #E32066)",
              borderImageSlice: 1,
            }
          : {
              borderBottom: "1px solid transparent",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-19.75">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "home")}
              aria-label="INIT 2026 — Home"
            >
              <Image src="/images/logo.svg" alt="INIT" width={117} height={43} />
            </a>
          </div>

          {/* Desktop nav — centered */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <a
                  key={link.anchor}
                  href={link.anchor === "home" ? "/" : `/#${link.anchor}`}
                  onClick={(e) => handleNavClick(e, link.anchor)}
                  className={active ? activeCls : inactiveCls}
                  style={active ? activeStyle : inactiveStyle}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Spacer to balance logo width for centering */}
          <div className="hidden lg:block w-29.25 shrink-0" />

          {/* Mobile hamburger — animated */}
          <button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              } ${!showSolid ? "text-white" : "text-gray-800"}`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : "opacity-100"
              } ${!showSolid ? "text-white" : "text-gray-800"}`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              } ${!showSolid ? "text-white" : "text-gray-800"}`}
            />
          </button>
        </div>

        {/* Mobile menu — slide down */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = isActive(link);
                return (
                  <a
                    key={link.anchor}
                    href={link.anchor === "home" ? "/" : `/#${link.anchor}`}
                    onClick={(e) => handleNavClick(e, link.anchor)}
                    className={`text-base font-medium transition-colors duration-300 ${
                      active ? "font-semibold text-[#1FC7D8]" : "text-[#4A5565]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
