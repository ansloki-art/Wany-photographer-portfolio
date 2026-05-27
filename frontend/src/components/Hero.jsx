export default function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center scroll-mt-24"
            style={{ backgroundImage: "url('/wany-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />

            <div className="relative z-10 px-12 max-w-lg flex flex-col gap-6" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
                <p className="text-xs font-medium tracking-[0.35em] uppercase" style={{ color: "#D4C5A9" }}>
                    Fotografer Pernikahan & Potret
                </p>

                <div className="w-14 border-t" style={{ borderColor: "#D4C5A9", opacity: 0.6 }} />

                <h1 className="font-serif text-6xl sm:text-7xl font-bold text-white leading-tight tracking-widest">
                    TAFWANI
                </h1>

                <p className="font-serif italic text-stone-300 text-lg leading-relaxed">
                    "Bukan sekadar foto, namun warisan momen yang tak lekang oleh waktu."
                </p>

                <div className="flex gap-4 mt-2">
                    <a
                        href="#contact"
                        className="px-6 py-3 text-sm font-medium tracking-widest uppercase hover:opacity-85 transition-opacity"
                        style={{ backgroundColor: "#D4C5A9", color: "#0c0a09" }}
                    >
                        Booking Sekarang
                    </a>
                    <a
                        href="#portfolio"
                        className="px-6 py-3 text-sm font-medium tracking-widest uppercase border border-white/30 text-white hover:border-white/70 transition-colors"
                    >
                        Lihat Karya
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-12 flex flex-col items-start gap-2">
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#D4C5A9", opacity: 0.7 }}>Scroll</span>
                <div className="w-px h-10 bg-linear-to-b from-stone-400/60 to-transparent" />
            </div>
        </section>
    );
}
