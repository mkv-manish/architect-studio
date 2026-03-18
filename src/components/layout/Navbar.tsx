import Link from "next/link";
import { Building2, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/common/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111f]/70 backdrop-blur-xl">
            <Container className="relative flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold tracking-wide">
                            {siteConfig.name}
                        </p>
                        <p className="text-xs text-white/60">
                            Home • Building • Blueprint
                        </p>
                    </div>
                </Link>
                <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm"
                    >
                        <Phone className="h-4 w-4" /> Call
                    </a>
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
                    >
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                </div>

                <MobileMenu />
            </Container>
        </header>
    );
}
