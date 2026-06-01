export default function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center scroll-mt-24"
            style={{ backgroundImage: "url('/wany-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />

            <div className="relative z-10 px-6 sm:px-12 max-w-lg flex flex-col gap-6" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)" }}>
                <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#C9A84C]">
                    Fotografer Pernikahan & Potret
                </p>

                <div className="w-14 border-t border-[#C9A84C] opacity-60" />

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-widest">
                    WANY FOTOGRAFER
                </h1>

                <p className="font-serif italic text-stone-300 text-lg leading-relaxed">
                    "Bukan sekadar foto, namun warisan momen yang tak lekang oleh waktu."
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                    <a
                        href="#contact"
                        className="px-6 py-3 text-sm font-medium tracking-widest uppercase bg-[#C9A84C] text-stone-950 hover:opacity-85 transition-opacity"
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

            <div className="absolute bottom-8 left-6 sm:left-12 flex flex-col items-start gap-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] opacity-70">Scroll</span>
                <div className="w-px h-10 bg-linear-to-b from-stone-400/60 to-transparent" />
            </div>
        </section>
    );
}
