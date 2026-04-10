import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://init.ba"),
  title: {
    default: "INIT 2026 — Beyond the AI Hype",
    template: "%s | INIT 2026",
  },
  description:
    "INIT 2026 is a one-day tech conference in Banja Luka, BiH on September 12 2026. 40+ speakers, 3 halls, 500+ attendees — focused on AI, software development, and engineering craft.",
  keywords: [
    "INIT 2026",
    "tech conference",
    "Banja Luka",
    "BiH",
    "Bosnia",
    "AI",
    "software development",
    "developers",
    "Banski Dvor",
  ],
  openGraph: {
    type: "website",
    locale: "bs_BA",
    alternateLocale: "en_US",
    url: "https://init.ba",
    siteName: "INIT Conference",
    title: "INIT 2026 — Beyond the AI Hype",
    description:
      "One-day tech conference in Banja Luka, BiH — September 12, 2026. 40+ speakers on AI, software craft, architecture and more.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "INIT 2026 — Beyond the AI Hype",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INIT 2026 — Beyond the AI Hype",
    description:
      "One-day tech conference in Banja Luka, BiH — September 12, 2026. 40+ speakers on AI, software craft, architecture and more.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
