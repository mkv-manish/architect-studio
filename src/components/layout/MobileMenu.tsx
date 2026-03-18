"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-xl border border-white/20 bg-white/10 p-2"
                aria-label="Toggle Menu"
            >
                {open ? (
                    <X className="h-5 w-5" />
                ) : (
                    <Menu className="h-5 w-5" />
                )}
            </button>

            {open ? (
                <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/10 bg-[#0b1729]/95 p-4 backdrop-blur-xl">
                    <div className="flex flex-col gap-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
