import Link from "next/link";
import Container from "@/components/common/Container";
import { siteConfig } from "@/lib/constants";
import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="mt-12 border-t border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
            <Container>
                <div className="grid gap-8 py-10 md:grid-cols-2 xl:grid-cols-4">
                    <div className="xl:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold tracking-wide text-white">
                                    {siteConfig.name}
                                </p>
                                <p className="text-sm text-white/55">
                                    Home • Building • Blueprint Experts
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                            Premium home design, building planning, front
                            elevation aur blueprint services with modern
                            presentation and practical execution clarity.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={`tel:${siteConfig.phoneRaw}`}
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15"
                            >
                                <Phone className="h-4 w-4" /> {siteConfig.phone}
                            </a>
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}`}
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15"
                            >
                                <MessageCircle className="h-4 w-4" /> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-white">
                            Quick Links
                        </h3>
                        <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="transition hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-white">
                            Contact Info
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-white/65">
                            <div className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>{siteConfig.phone}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                                <span className="break-all">
                                    {siteConfig.email}
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>{siteConfig.address}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 {siteConfig.name}. All rights reserved.</p>
                    <p className="text-white/60">
                        Design & Devlop by Manish Kumar
                    </p>
                </div>
            </Container>
        </footer>
    );
}
