"use client";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const { t } = useLanguage();
  return (
    <main className="overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <section className="bg-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-3">
            {t.blog.title}
          </h1>
          <p className="text-gray-600 text-lg mb-12 max-w-xl">
            {t.blog.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.09)] overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain p-6"
                  />
                  <span className="absolute bottom-3 left-3 bg-linear-to-r from-[#9333EA] to-[#E32066] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M5 1v2M11 1v2M2 6h12M3 3h10a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#9333EA] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#D3165A] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {t.blog.readMore}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
