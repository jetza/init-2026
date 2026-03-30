"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { HamburgerIcon, CloseIcon } from "@/components/icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

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
          document
            .getElementById(target)
            ?.scrollIntoView({ behavior: "smooth" });
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
          document
            .getElementById(anchor)
            ?.scrollIntoView({ behavior: "smooth" });
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

  return (
    <nav
      className="bg-white"
      style={{
        borderBottom: "1px solid transparent",
        borderImage: "linear-gradient(90deg, #9333EA, #E32066) 1",
        borderImageSlice: 1,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-19.75">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Image src="/images/logo.svg" alt="INIT" width={117} height={43} />
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

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
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
        )}
      </div>
    </nav>
  );
}
