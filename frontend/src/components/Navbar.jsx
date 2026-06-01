import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { label: "Tentang", href: "#about" },
        { label: "Layanan", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Jadwal", href: "#schedule" },
        { label: "Kontak", href: "#contact" },
        ];

    return (
        <nav className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur border-b border-stone-800">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#top">
                    <img src="/wanylogo.png" className="h-16 w-auto rounded-xl" style={{ mixBlendMode: "lighten" }} alt="Wany Photography" />
                </a>

                <ul className="hidden sm:flex gap-6 text-sm text-stone-400">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-stone-100 transition-colors tracking-wide">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="sm:hidden flex flex-col gap-1.5 p-1"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-px bg-stone-400 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-px bg-stone-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-px bg-stone-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            <div className={`sm:hidden border-stone-800 bg-stone-950 overflow-hidden transition-all duration-300 ${open ? "max-h-48 border-t" : "max-h-0"}`}>
                <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-stone-400">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-stone-100 transition-colors tracking-wide"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
