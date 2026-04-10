const schedule = [
  {
    time: "08:00am - 09:00am",
    hall1: "Prijava i registracija",
    hall2: "Prijava i registracija",
    hall3: "Prijava i registracija",
  },
  {
    time: "08:00am - 09:00am",
    hall1: "Prijava i registracija",
    hall2: "-",
    hall3: "-",
  },
  {
    time: "08:00am - 09:00am",
    hall1: "Prijava i registracija",
    hall2: "-",
    hall3: "Prijava i registracija",
  },
  {
    time: "08:00am - 09:00am",
    hall1: "Prijava i registracija",
    hall2: "Prijava i registracija",
    hall3: "-",
  },
  {
    time: "08:00am - 09:00am",
    hall1: "Prijava i registracija",
    hall2: "Prijava i registracija",
    hall3: "Prijava i registracija",
  },
  {
    time: "08:00am - 09:00am",
    hall1: "Prijava i registracija",
    hall2: "Prijava i registracija",
    hall3: "-",
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="gradient-text text-4xl md:text-5xl font-bold text-center mb-4">
          Agenda
        </h2>
        <p className="text-center text-gray-600 font-bold text-2xl mb-12">
          Banja Luka - Banski Dvor, September 12, 2026
        </p>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-bold text-gray-600 text-base">
                  Vrijeme
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-600 text-base">
                  Sala 1
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-600 text-base">
                  Sala 2
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-600 text-base">
                  Sala 3
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={i}
                  className="bg-[#f6fbff] border-b border-gray-100 hover:brightness-95 transition-all"
                >
                  <td className="py-4 px-4 text-gray-600 font-medium text-sm whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {row.hall1}
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {row.hall2}
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {row.hall3}
                  </td>
                </tr>
              ))}
              {/* Special rows */}
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="py-4 px-4">
                  <span className="gradient-text font-bold text-base">
                    Pauza za rucak - druzenje sa predstavnicima sponzora
                    konferencije
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="py-4 px-4">
                  <span className="gradient-text font-bold text-base">
                    Ceremonija zatvaranja i koktel zabava
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="gradient-bg rounded-xl p-8">
            <h3 className="text-white font-bold text-2xl mb-3">
              Banja Luka - Banski Dvor, September 12, 2026
            </h3>
            <p className="text-white/80 text-base mb-6">
              INIT 2026 predstavlja jedinstvenu priliku da cujete misljenja
              direktno od vise od cetrdeset istaknutih govornika iz razvojne
              zajednice, o stanju i buducnosti razvoja softvera.
            </p>
            <a
              href="#tickets"
              className="inline-flex items-center px-6 py-2.5 bg-[#FFF0F5] text-[#D3165A] font-bold text-base rounded-lg hover:bg-white transition-colors"
            >
              Kupi kartu
            </a>
          </div>
          <div className="gradient-bg rounded-xl p-8">
            <h3 className="text-white font-bold text-2xl mb-3">
              Banja Luka - Banski Dvor, September 12, 2026
            </h3>
            <p className="text-white/80 text-base mb-6">
              INIT 2025 is a unique opportunity to hear directly from 40
              prominent speakers from the development community.
            </p>
            <a
              href="#tickets"
              className="inline-flex items-center px-6 py-2.5 bg-[#FFF0F5] text-[#D3165A] font-bold text-base rounded-lg hover:bg-white transition-colors"
            >
              Kupi kartu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
