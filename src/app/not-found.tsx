"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#010254] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 rounded-full bg-[#9333EA] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-[#E32066] opacity-10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
        <Link href="/">
          <Image src="/images/logo.svg" alt="INIT" width={120} height={44} />
        </Link>

        <h1
          className="font-extrabold leading-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 12rem)",
            background: "linear-gradient(90deg, #9333EA, #E32066)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        <p className="text-white font-bold text-2xl md:text-3xl -mt-4">
          Stranica nije pronađena
        </p>
        <p className="text-white/60 text-base md:text-lg leading-relaxed">
          Izgleda da ova stranica ne postoji. Možda je promijenjen URL ili je
          stranica uklonjena.
        </p>

        <Link
          href="/"
          className="btn-shimmer mt-4 inline-flex items-center gap-2 px-8 py-3.5 bg-[#D3165A] text-white font-bold text-lg rounded-xl hover:bg-[#B8134E] transition-colors"
        >
          ← Vrati se na početnu
        </Link>
      </div>
    </main>
  );
}
