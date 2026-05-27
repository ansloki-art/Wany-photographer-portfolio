import { useState } from "react";
import { categories, photos } from "../data/portfolio";

export default function Portfolio() {
    const [active, setActive] = useState("Semua");
    const filtered = active === "Semua" ? photos : photos.filter((p) => p.category === active);

    return (
        <section id="portfolio" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6" style={{ color: "#C99BA1" }}>
          Karya
        </p>
        <h2 className="font-serif text-4xl font-bold text-stone-100 mb-10">
          Portfolio.
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm transition-colors ${
                active === cat
                  ? "bg-[#C99BA1] text-stone-950"
                  : "border border-stone-700 text-stone-400 hover:border-stone-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filtered.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full aspect-4/5 object-cover"
            />
          ))}
        </div>   
    </div>
</section>
);
}
