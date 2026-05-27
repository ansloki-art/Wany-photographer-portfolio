export default function Hero() {
    return (
        <section id="top" className="bg-stone-950 py-24 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-12 items-center">
            <img src="/potrait.jpg" alt="Tafwani" className="w-full aspect-4/5 object-cover rounded-sm" />
            <div className="flex flex-col gap-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: "#C99BA1" }}>
                    Fotografer Pernikahan & Potret
                </p>
                <h1 className="font-serif text-5xl font-bold text-stone-100 leading-tight">
                    TAFWANI
                </h1>
                <p className="font-serif italic text-stone-400 text-lg leading-relaxed">
                    "Bukan sekadar foto, namun warisan momen yang tak lekang oleh waktu."
                </p>
                <div className="flex gap-3">
                <a href="#contact" className="px-5 py-2.5 text-sm font-medium bg-[#C99BA1] text-stone-950 hover:bg-[#D6AEB3] transition-colors">
                    Booking Sekarang
                </a>
                 <a href="#portfolio" className="px-5 py-2.5 text-sm font-medium border border-stone-700 text-stone-200 hover:border-stone-400 transition-colors">
                    Lihat Karya
                 </a>
                </div>
            </div>
            </div>  
        </section>
    );
}