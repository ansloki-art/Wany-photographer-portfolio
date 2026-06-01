import { useState } from "react";
import { services } from "../data/services";

export default function Services({ onPesan }) {
  const [active, setActive] = useState(services[0].category);
  const activeService = services.find((s) => s.category === active);

  return (
    <section id="services" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6 text-[#C9A84C]">
          Layanan
        </p>
        <h2 className="font-serif text-4xl font-bold text-stone-100 mb-10">
          Paket & Harga.
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {services.map((s) => (
            <button
              key={s.category}
              onClick={() => setActive(s.category)}
              className={`px-4 py-1.5 text-sm transition-colors ${
                active === s.category
                  ? "bg-[#C9A84C] text-stone-950"
                  : "border border-stone-700 text-stone-400 hover:border-stone-400"
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeService.packages.map((pkg) => (
            <div key={pkg.name} className="border border-stone-800 bg-stone-900 p-6 flex flex-col">
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-2">Paket</p>
              <h3 className="font-serif text-2xl font-bold text-stone-100 mb-2">{pkg.name}</h3>
              <p className="text-2xl font-bold mb-6 text-[#C9A84C]">{pkg.price}</p>
              <ul className="space-y-2 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="text-sm text-stone-400 flex gap-2">
                    <span className="text-[#C9A84C]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onPesan?.(activeService.category)}
                className="mt-6 block text-center px-4 py-2.5 text-sm font-medium tracking-widest uppercase bg-[#C9A84C] text-stone-950 transition-opacity hover:opacity-80"
              >
                Pesan Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}