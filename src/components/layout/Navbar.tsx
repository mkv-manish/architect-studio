import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import Container from "@/components/common/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import NavLinks from "@/components/layout/NavLinks";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08131c]/95 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-3 sm:h-20 sm:gap-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#c9ac82]/40 bg-[#dfc39c]/[0.03] text-[#dfc39c] sm:h-10 sm:w-10">
            <Building2 size={22} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-wide sm:text-base">
              {siteConfig.name}
            </span>
            <span className="mt-0.5 block truncate text-[8px] uppercase tracking-[0.18em] text-white/50 min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.24em]">
              Architecture & planning
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          <NavLinks />
        </nav>
        <Link
          href="/consultation"
          className="hidden min-h-11 shrink-0 items-center gap-2 rounded-lg border border-[#dfc39c]/25 bg-[#dfc39c]/[0.03] px-4 text-xs font-medium text-[#dfc39c] transition hover:border-[#dfc39c]/50 hover:bg-[#dfc39c]/10 xl:inline-flex"
        >
          Consultation <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <MobileMenu />
      </Container>
    </header>
  );
}
