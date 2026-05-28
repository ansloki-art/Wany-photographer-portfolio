import { useState } from "react";
import { categories, photos } from "../data/portfolio";

export default function Portfolio() {
    const [active, setActive] = useState("Semua");
    const filtered = active === "Semua" ? photos : photos.filter((p) => p.category === active);

    return (
        <section id="portfolio" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6" style={{ color: "#C9A84C" }}>
                    Karya
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 mb-10">
                    Portfolio.
                </h2>
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-1.5 text-sm tracking-wide transition-colors ${
                                active === cat
                                    ? "bg-[#C9A84C] text-stone-950"
                                    : "border border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="columns-2 sm:columns-3 gap-3 space-y-3">
                    {filtered.map((photo) => (
                        <div key={photo.src} className="group relative overflow-hidden break-inside-avoid">
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
