export default function Navbar() {
    const links = [
        {label: "Tentang", href:"#about"},
        {label: "Portfolio", href: "#portfolio"},
        {label: "Kontak", href: "#contact"}
    ];

    return (
        <nav className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur border-b border-stone-800">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
               <a href="#top" className="flex flex-col items-start">
                <span className="font-serif text-stone-100 text-xl font-bold tracking-[0.2em]">WANY</span>
                <span className="block w-full border-t border-[#D4C5A9] my-0.5"/>
                <span className="text-[#D4C5A9] text-[9px] tracking-[0.3em]">PHOTOGRAPHER</span>
                </a>
                <ul className="flex gap-6 text-sm text-stone-400">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-stone-100 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>               
            </div>
        </nav>
    );
}