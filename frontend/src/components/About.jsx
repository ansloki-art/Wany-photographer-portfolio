export default function About() {
    return (
        <section id="about" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6 text-[#C9A84C]">
                    Tentang Saya
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 mb-8">
                    Kenalan Dulu.
                </h2>
                <p className="text-stone-400 text-base leading-relaxed max-w-2xl mb-10">
                    Halo, saya Tafwani atau biasa dipanggil Wany. Saya seorang fotografer yang fokus mengabadikan momen dengan sentuhan natural, emosional, dan estetik. Bagi saya, setiap foto memiliki cerita yang layak dikenang selamanya. Saya terbiasa menangani sesi prewedding, wedding, portrait, wisuda, hingga event dengan konsep yang nyaman dan hasil yang berkelas.
                </p>
                <div className="flex flex-wrap gap-2">
                    {["Wedding", "Prewedding", "Wisuda", "Engagement", "Dokumentasi"].map((spec) => (
                        <span key={spec} className="border border-stone-700 px-3 py-1 text-xs tracking-widest uppercase text-stone-400">
                            {spec}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
