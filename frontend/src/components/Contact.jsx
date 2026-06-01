export default function Contact() {
    return (
        <section id="contact" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6 text-[#C9A84C]">
                    Booking
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 mb-6">
                    Mari Bercerita.
                </h2>
                <p className="text-stone-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
                    Punya momen yang mau diabadikan? Yuk ngobrol.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                    <a
                        href="https://wa.me/+6282267451998"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 text-sm font-medium tracking-widest uppercase bg-[#C9A84C] text-stone-950 hover:opacity-80 transition-opacity"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="https://www.instagram.com/wany_fotografer/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 text-sm font-medium tracking-widest uppercase border border-stone-700 text-stone-300 hover:border-stone-400 hover:text-stone-100 transition-colors"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.tiktok.com/@tafwani"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 text-sm font-medium tracking-widest uppercase border border-stone-700 text-stone-300 hover:border-stone-400 hover:text-stone-100 transition-colors"
                    >
                        TikTok
                    </a>
                </div>
                <p className="mt-10 text-stone-600 text-xs tracking-widest uppercase">Lhokseumawe, Aceh</p>
            </div>
        </section>
    );
}
