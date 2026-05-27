export default function Contact() {
    return (
    <section id="contact" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6" style={{ color: "#D4C5A9" }}>
          Booking
        </p>
        <h2 className="font-serif text-4xl font-bold text-stone-100 mb-6">
          Mari Bercerita.
        </h2>
        <p className="text-stone-400 text-base mb-10 max-w-md mx-auto">
          Punya momen yang mau diabadikan? Yuk ngobrol.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://wa.me/+6282267451998" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-sm font-medium bg-[#D4C5A9] text-stone-950 hover:bg-[#D6AEB3] transition-colors">
            WhatsApp
          </a>
          <a href="https://www.instagram.com/wany_fotografer/" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-sm font-medium border border-stone-700 text-stone-200 hover:border-stone-400 transition-colors">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@tafwani" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-sm font-medium border border-stone-700 text-stone-200 hover:border-stone-400 transition-colors">
            TikTok
          </a>
        </div>
        <p className="mt-8 text-stone-600 text-sm">Lhokseumawe, Aceh</p>        
    </div>
</section>
 );
}