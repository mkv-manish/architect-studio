import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
export default function FloatingContactButtons() {
  return (
    <nav
      aria-label="Quick contact"
      className="mobile-contact-dock fixed right-3 z-40 flex flex-col items-center gap-2.5 md:hidden"
    >
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label="Call BTC Design Studio"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0c1b25]/95 text-white/90 shadow-lg backdrop-blur-xl transition hover:bg-[#1a303e]"
      >
        <Phone size={20} aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact BTC Design Studio on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dfc39c] bg-[#dfc39c] text-[#08131c] shadow-lg transition hover:bg-[#eddbc2]"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </a>
    </nav>
  );
}
