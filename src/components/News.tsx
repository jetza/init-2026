import { articles } from "@/data/news";

export default function News() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-[#1a1a2e]">Vijesti</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-xl">
          Stay updated with the latest announcements and updates from INIT 2026
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.09)] overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
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
                  Procitaj vise
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
  );
}
