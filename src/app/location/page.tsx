"use client";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "@/components/motion";

import { ReactElement } from "react";

// SVG icon map — keys used in the data objects below
const LandmarkIcons: Record<string, ReactElement> = {
  fortress: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M3 21V9l2-2h14l2 2v12H3z" />
      <path d="M3 9V5h2v2h2V5h2v4M13 5v4h2V5h2v2h2V5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  mosque: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M12 3C9.5 3 7.5 5 7.5 7.5c0 1.2.5 2.3 1.3 3.1L7 12h10l-1.8-1.4A4.5 4.5 0 0 0 16.5 7.5C16.5 5 14.5 3 12 3z" />
      <rect x="3" y="12" width="18" height="9" rx="1" />
      <path d="M3 17h18M9 17v4M15 17v4" />
      <path d="M12 3V1M10 2h4" />
    </svg>
  ),
  cathedral: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M12 2v4M10 4h4" />
      <path d="M6 21V11l6-5 6 5v10H6z" />
      <path d="M10 21v-5h4v5" />
      <path d="M3 21h18" />
    </svg>
  ),
  river: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
      <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
      <path d="M7 7l5-5 5 5" />
    </svg>
  ),
  museum: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M3 21h18M3 10h18M5 10V7l7-4 7 4v3" />
      <path d="M7 10v11M11 10v11M13 10v11M17 10v11" />
    </svg>
  ),
  culture: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  ),
  plane: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M21 16l-9-9-1 5-5 1 9 9 1-5 5-1z" />
      <path d="M3.5 20.5l3-3" />
    </svg>
  ),
  bus: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M3 10h18M8 19v2M16 19v2M3 15h18" />
      <circle cx="7.5" cy="17" r="1" />
      <circle cx="16.5" cy="17" r="1" />
    </svg>
  ),
  car: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
      <circle cx="7.5" cy="17" r="2.5" />
      <circle cx="16.5" cy="17" r="2.5" />
      <path d="M5 12h14" />
    </svg>
  ),
};

const content = {
  sr: {
    hero: {
      eyebrow: "INIT 2026 — Lokacija",
      title: "Banja Luka",
      subtitle: "Banski dvor, 12. septembar 2026.",
      intro:
        "Konferencija INIT 2026 se održava u srcu Banje Luke — u Banskom dvoru, jednoj od najljepših kulturnih institucija u Bosni i Hercegovini.",
    },
    venue: {
      tag: "Venue",
      title: "Banski dvor",
      body: [
        "Banski dvor je reprezentativna kulturno-poslovna zgrada izgrađena 1930-ih godina u doba Kraljevine Jugoslavije. Smješten uz obale rijeke Vrbas, u samom centru Banje Luke, ovaj objekat je jedna od najprepoznatljivijih građevina grada.",
        "Danas Banski dvor služi kao suvremeni kulturni centar koji ugošćuje konferencije, izložbe i kulturne manifestacije. Sa modernom infrastrukturom i impresivnom arhitekturom, idealno je mjesto za jedno od najvećih IT okupljanja u regionu.",
      ],
      address: "Banski dvor, Trg srpskih vladara 1, Banja Luka 78000",
      mapsLabel: "Otvori u Google Maps",
      mapsUrl: "https://maps.google.com/?q=Banski+dvor,+Banja+Luka",
    },
    city: {
      tag: "O gradu",
      title: "Banja Luka — grad na Vrbasu",
      body: [
        "Banja Luka je drugi po veličini grad u Bosni i Hercegovini i administrativni centar Republike Srpske. Smješten u sjeverozapadnom dijelu zemlje, grad broji preko 185.000 stanovnika i dom je brojnih visokoobrazovnih institucija, IT kompanija i startupa.",
        "Grad je poznat po svom zelenilu, mirnoj atmosferi i bogatoj historiji. Vrbas koji protiče kroz sam centar grada nudi spektakularne vidike i mogućnosti za outdoor aktivnosti poput raftinga i kajakinga.",
      ],
    },
    landmarks: {
      tag: "Znamenitosti",
      title: "Šta posjetiti u Banjoj Luci",
      items: [
        {
          name: "Kastel tvrđava",
          desc: "Rimska tvrđava iz antičkog doba, pregrađena od strane Osmanlija u 16. vijeku. Smještena uz samu rijeku Vrbas, Kastel je simbol grada i omiljeno šetalište Banjalučana. Noću je spektakularno osvijetljen.",
          url: "https://banjaluka.city/en/explore/place/kastel",
          urlLabel: "Saznaj više",
          icon: "fortress",
        },
        {
          name: "Ferhat-pašina džamija",
          desc: "Jedna od najljepših džamija na Balkanu, sagrađena u 16. vijeku. Srušena 1993. godine, a potom brižljivo rekonstruisana i otvorena 2016. Remek-djelo osmanskog graditeljstva pod zaštitom UNESCO-a.",
          url: "https://banjaluka.city/en/explore/place/ferhadija",
          urlLabel: "Saznaj više",
          icon: "mosque",
        },
        {
          name: "Katedrala Hrista Spasitelja",
          desc: "Najveća pravoslavna crkva u Bosni i Hercegovini, sagrađena između 1925. i 1939. Monumentalna građevina srpsko-vizantijskog stila dominira centralnim dijelom grada.",
          url: "https://lll.ba/cathedral-of-christ-the-saviour-in-banja-luka/",
          urlLabel: "Saznaj više",
          icon: "cathedral",
        },
        {
          name: "Kanjon rijeke Vrbas",
          desc: "Jedan od najljepših kanjona u Jugoistočnoj Evropi, koji pruža idealnu kulisu za rafting, kajaking i pješačenje. Rijeka Vrbas je domaćin međunarodnih takmičenja u kajaku na divljim vodama.",
          url: "https://vrbas-rafting.com/",
          urlLabel: "Rafting i kajak",
          icon: "river",
        },
        {
          name: "Muzej Republike Srpske",
          desc: "Najveći muzej u Republici Srpskoj s bogatim kolekcijama koje pokrivaju historiju, prirodu i kulturu regije. Smješten u historijskoj zgradi u centru grada.",
          url: "https://muzejrs.com/en",
          urlLabel: "Posjeti muzej",
          icon: "museum",
        },
        {
          name: "Petar Kočić kulturni centar",
          desc: "Kulturni centar posvećen srpskom piscu Petru Kočiću. Dom mnogih književnih večeri, izložbi i kulturnih dešavanja u gradu.",
          url: "https://www.virtualtourist.com/travel/Europe/Bosnia_and_Herzegovina/Republika_Srpska/Banja_Luka-361535/Things_To_Do-Banja_Luka-Petar_Kocic_Park-BR-1.html",
          urlLabel: "Banjaluka.rs.ba",
          icon: "culture",
        },
      ],
    },
    howToGet: {
      tag: "Dolazak",
      title: "Kako doći",
      items: [
        {
          icon: "plane",
          title: "Avionom",
          desc: "Najbliži međunarodni aerodrom je Sarajevo (180 km) i Zagreb (250 km). Banja Luka ima vlastiti aerodrom s povremenim letovima.",
          url: "https://www.banjaluka-airport.com/",
          urlLabel: "Aerodrom Banja Luka",
        },
        {
          icon: "bus",
          title: "Autobusom",
          desc: "Banja Luka je dobro povezana autobuskim linijama s Beogradom (3h), Sarajevom (3h), Zagrebom (4h) i brojnim drugim gradovima regije.",
          url: "https://www.as-banjaluka.com/",
          urlLabel: "Autobuska stanica",
        },
        {
          icon: "car",
          title: "Automobilom",
          desc: "Banja Luka je smještena na koridoru 5C koji spaja Budimpeštu s Jadranskim morem. Lako je dostupna s autoceste M-17.",
          url: "https://maps.google.com/?q=Banski+dvor,+Banja+Luka",
          urlLabel: "Navigiraj",
        },
      ],
    },
    map: {
      title: "Pronađi nas",
      cta: "Otvori u Google Maps",
    },
  },
  en: {
    hero: {
      eyebrow: "INIT 2026 — Location",
      title: "Banja Luka",
      subtitle: "Banski Dvor, September 12, 2026",
      intro:
        "INIT 2026 takes place in the heart of Banja Luka — at Banski Dvor, one of the most beautiful cultural institutions in Bosnia and Herzegovina.",
    },
    venue: {
      tag: "Venue",
      title: "Banski Dvor",
      body: [
        "Banski Dvor is a prestigious cultural and business building constructed in the 1930s during the Kingdom of Yugoslavia era. Situated on the banks of the Vrbas river in the very centre of Banja Luka, it is one of the city's most recognisable landmarks.",
        "Today Banski Dvor serves as a modern cultural centre hosting conferences, exhibitions and cultural events. With contemporary infrastructure and impressive architecture, it is the ideal setting for one of the region's largest IT gatherings.",
      ],
      address: "Banski Dvor, Trg srpskih vladara 1, Banja Luka 78000",
      mapsLabel: "Open in Google Maps",
      mapsUrl: "https://maps.google.com/?q=Banski+dvor,+Banja+Luka",
    },
    city: {
      tag: "About the city",
      title: "Banja Luka — City on the Vrbas",
      body: [
        "Banja Luka is the second-largest city in Bosnia and Herzegovina and the administrative centre of Republika Srpska. Located in the north-western part of the country, the city has a population of over 185,000 and is home to numerous universities, IT companies and startups.",
        "The city is known for its greenery, relaxed atmosphere and rich history. The Vrbas river flowing through the city centre offers spectacular scenery and outdoor activities such as rafting and kayaking.",
      ],
    },
    landmarks: {
      tag: "Landmarks",
      title: "What to see in Banja Luka",
      items: [
        {
          name: "Kastel Fortress",
          desc: "A Roman-era fortress rebuilt by the Ottomans in the 16th century. Situated right on the Vrbas river, Kastel is the city's symbol and a favourite promenade. Spectacularly lit at night.",
          url: "https://www.banjaluka.rs.ba/turizam/kulturno-historijsko-nasledje/kastel/",
          urlLabel: "Learn more",
          icon: "fortress",
        },
        {
          name: "Ferhat Pasha Mosque",
          desc: "One of the finest mosques in the Balkans, built in the 16th century. Destroyed in 1993 and meticulously reconstructed, reopening in 2016. A UNESCO-protected masterpiece of Ottoman architecture.",
          url: "https://srb.turizam.com/tourist-attraction/ferhat-pasin-mosque/",
          urlLabel: "Learn more",
          icon: "mosque",
        },
        {
          name: "Cathedral of Christ the Saviour",
          desc: "The largest Orthodox church in Bosnia and Herzegovina, built between 1925 and 1939. A monumental Serbian-Byzantine style building that dominates the city centre.",
          url: "https://www.banjaluka.rs.ba/turizam/sakralna-arhitektura/hram-hrista-spasitelja/",
          urlLabel: "Learn more",
          icon: "cathedral",
        },
        {
          name: "Vrbas River Canyon",
          desc: "One of the most beautiful canyons in South-Eastern Europe, offering ideal conditions for rafting, kayaking and hiking. The Vrbas hosts international whitewater kayak competitions.",
          url: "https://www.banjalukakayak.com/",
          urlLabel: "Rafting & kayak",
          icon: "river",
        },
        {
          name: "Museum of Republika Srpska",
          desc: "The largest museum in Republika Srpska with rich collections covering the history, nature and culture of the region. Housed in a historic building in the city centre.",
          url: "https://muzejrs.com/",
          urlLabel: "Visit museum",
          icon: "museum",
        },
        {
          name: "Petar Kočić Cultural Centre",
          desc: "A cultural centre dedicated to Serbian writer Petar Kočić. Home to many literary evenings, exhibitions and cultural happenings in the city.",
          url: "https://www.banjaluka.rs.ba/",
          urlLabel: "Banjaluka.rs.ba",
          icon: "culture",
        },
      ],
    },
    howToGet: {
      tag: "Getting there",
      title: "How to get here",
      items: [
        {
          icon: "plane",
          title: "By plane",
          desc: "The nearest international airports are Sarajevo (180 km) and Zagreb (250 km). Banja Luka has its own airport with occasional flights.",
          url: "https://www.banjaluka-airport.com/",
          urlLabel: "Banja Luka Airport",
        },
        {
          icon: "bus",
          title: "By bus",
          desc: "Banja Luka is well connected by bus to Belgrade (3h), Sarajevo (3h), Zagreb (4h) and many other regional cities.",
          url: "https://www.autobusnikolodvor-banjaluka.com/",
          urlLabel: "Bus station",
        },
        {
          icon: "car",
          title: "By car",
          desc: "Banja Luka is located on Corridor 5C linking Budapest to the Adriatic Sea. Easily accessible from the M-17 motorway.",
          url: "https://maps.google.com/?q=Banski+dvor,+Banja+Luka",
          urlLabel: "Navigate",
        },
      ],
    },
    map: {
      title: "Find us",
      cta: "Open in Google Maps",
    },
  },
};

export default function LocationPage() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <main className="overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="relative bg-[#010254] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-bg-overlay z-0" />
        <FadeUp className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-[#1FC7D8] text-sm font-bold uppercase tracking-widest mb-4">
            {c.hero.eyebrow}
          </span>
          <h1 className="gradient-text text-6xl md:text-7xl font-extrabold leading-tight mb-4">
            {c.hero.title}
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-semibold mb-6">
            {c.hero.subtitle}
          </p>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {c.hero.intro}
          </p>
        </FadeUp>
        {/* Bottom gradient bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg" />
      </section>

      {/* Venue */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <span className="inline-block text-[#D3165A] text-sm font-bold uppercase tracking-widest mb-3">
                  {c.venue.tag}
                </span>
                <h2 className="text-[#010254] text-4xl md:text-5xl font-extrabold mb-6">
                  {c.venue.title}
                </h2>
                {c.venue.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[#4A5565] text-lg leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="shrink-0 mt-0.5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 11.25C11.7259 11.25 13.125 9.85089 13.125 8.125C13.125 6.39911 11.7259 5 10 5C8.27411 5 6.875 6.39911 6.875 8.125C6.875 9.85089 8.27411 11.25 10 11.25Z"
                        stroke="#D3165A"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 1.875C8.17727 1.875 6.42956 2.59955 5.13864 3.89047C3.84771 5.18139 3.12317 6.9291 3.12317 8.75183C3.12317 10.3777 3.57558 11.7737 4.45158 12.9369L10 18.125L15.5484 12.9369C16.4244 11.7737 16.8768 10.3777 16.8768 8.75183C16.8768 6.9291 16.1523 5.18139 14.8614 3.89047C13.5704 2.59955 11.8227 1.875 10 1.875Z"
                        stroke="#D3165A"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-[#4A5565] font-medium">
                      {c.venue.address}
                    </span>
                  </div>
                  <a
                    href={c.venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#D3165A] font-bold hover:underline"
                  >
                    {c.venue.mapsLabel}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Google Maps embed */}
            <FadeUp delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 border border-gray-100">
                <iframe
                  title="Banski Dvor map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.6946898987165!2d17.18559531553!3d44.77441957909865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f5a0e0a57e29b%3A0x8b8b97a5b964fa07!2sBanski%20Dvor!5e0!3m2!1sen!2sba!4v1710000000000!5m2!1sen!2sba"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About the city */}
      <section className="bg-[#010254] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <span className="inline-block text-[#1FC7D8] text-sm font-bold uppercase tracking-widest mb-3">
              {c.city.tag}
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8">
              {c.city.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="grid md:grid-cols-2 gap-8">
              {c.city.body.map((p, i) => (
                <p key={i} className="text-white/70 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Landmarks */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <span className="inline-block text-[#D3165A] text-sm font-bold uppercase tracking-widest mb-3">
              {c.landmarks.tag}
            </span>
            <h2 className="text-[#010254] text-4xl md:text-5xl font-extrabold mb-12">
              {c.landmarks.title}
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.landmarks.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-[#f9f9ff] rounded-2xl p-6 border border-[#e8e8f5] hover:border-[#D3165A]/30 transition-colors flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#010254]/8 flex items-center justify-center text-[#D3165A] mb-4">
                    {LandmarkIcons[item.icon]}
                  </div>
                  <h3 className="text-[#010254] font-bold text-xl mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[#4A5565] text-sm leading-relaxed flex-1 mb-4">
                    {item.desc}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D3165A] text-sm font-bold hover:underline"
                  >
                    {item.urlLabel}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How to get there */}
      <section className="bg-[#010254] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <span className="inline-block text-[#1FC7D8] text-sm font-bold uppercase tracking-widest mb-3">
              {c.howToGet.tag}
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-12">
              {c.howToGet.title}
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {c.howToGet.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-[#0c0d72]/60 rounded-2xl p-8 border border-white/10 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#1FC7D8] mb-4">
                    {LandmarkIcons[item.icon]}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">
                    {item.desc}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#1FC7D8] text-sm font-bold hover:underline"
                  >
                    {item.urlLabel}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
