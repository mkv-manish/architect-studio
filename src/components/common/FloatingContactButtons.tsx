import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function FloatingContactButtons() {
    const whatsappText = encodeURIComponent(
        "Namaste, mujhe home/building design aur blueprint ke liye enquiry karni hai.",
    );

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
            <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappText}`}
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition hover:scale-105"
                aria-label="WhatsApp"
            >
                <MessageCircle className="h-6 w-6" />
            </Link>

            <Link
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition hover:scale-105"
                aria-label="Call"
            >
                <Phone className="h-6 w-6" />
            </Link>
        </div>
    );
}
