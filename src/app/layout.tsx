import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://init.ba"),
  title: {
    default: "INIT 2027 — Beyond the AI Hype",
    template: "%s | INIT 2027",
  },
  description:
    "INIT 2027 is a tech conference in Banja Luka, BiH planned for SPRING 2027. 40+ speakers, 3 halls, 500+ attendees — focused on AI, software development, and engineering craft.",
  keywords: [
    "INIT 2027",
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
    title: "INIT 2027 — Beyond the AI Hype",
    description:
      "Tech conference in Banja Luka, BiH — SPRING 2027. 40+ speakers on AI, software craft, architecture and more.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "INIT 2027 — Beyond the AI Hype",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INIT 2027 — Beyond the AI Hype",
    description:
      "Tech conference in Banja Luka, BiH — SPRING 2027. 40+ speakers on AI, software craft, architecture and more.",
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
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N6BVSHZL');`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6BVSHZL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
