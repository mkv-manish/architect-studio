import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import Container from "@/components/common/Container";
import { navigation, consultationLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/15">
      <Container>
        <div className="grid gap-7 py-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1.15fr_1.15fr_1fr] lg:items-start lg:gap-8 lg:py-8 xl:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Building2
                className="shrink-0 text-[#dfc39c]"
                size={26}
                aria-hidden="true"
              />
              <p className="text-base font-semibold tracking-wide">
                {siteConfig.name}
              </p>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
              Thoughtful homes. Distinctive buildings. Practical plans that
              bring your ideas into focus.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-[#dfc39c]">
              Based in Giridih · Jharkhand
            </p>
          </div>

          <div>
            <h2 className="eyebrow">Explore</h2>
            <nav
              aria-label="Footer navigation"
              className="mt-3 grid grid-cols-2 gap-x-5 sm:flex sm:flex-col sm:items-start lg:grid lg:grid-cols-2 lg:gap-x-6"
            >
              {[...navigation, consultationLink].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-9 items-center py-1 text-xs leading-5 text-white/65 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="eyebrow">Start a conversation</h2>
            <div className="mt-3 flex flex-col items-start gap-1 text-xs text-white/65">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex min-h-9 items-center py-1 transition hover:text-white"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-9 items-center break-all py-1 transition hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-2 py-1 text-[#dfc39c] transition hover:text-[#eddbc2]"
              >
                Message on WhatsApp{" "}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1.5 border-t border-white/10 py-4 pr-14 text-[10px] leading-5 text-white/40 sm:flex-row sm:gap-5 md:pr-0">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed & developed by Manish Kumar</p>
        </div>
      </Container>
    </footer>
  );
}
