import { Mail, MapPin, Phone, Ruler } from "lucide-react";
import Container from "@/components/common/Container";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "Contact Our Design Studio in Giridih",
  "Discuss your home, building plan, or elevation with BTC Design Studio in Giridih.",
  "/contact",
);
export default function ContactPage() {
  return (
    <Container className="page-section">
      <div className="grid items-start gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <p className="eyebrow mb-4">Contact the studio</p>
          <h1 className="page-title max-w-lg">Tell us about your project.</h1>
          <p className="page-description mt-5 max-w-md">
            A new home, a better layout, or an elevation in mind? Share your
            requirements and we’ll discuss the next step.
          </p>
          <div className="mt-7 space-y-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="surface-card flex items-center gap-4 p-4 transition hover:border-[#dfc39c]/40"
            >
              <span className="contact-icon">
                <Phone size={18} />
              </span>
              <span>
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-white/45">
                  Call us
                </span>
                <span className="text-sm font-medium">{siteConfig.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="surface-card flex items-center gap-4 p-4 transition hover:border-[#dfc39c]/40"
            >
              <span className="contact-icon">
                <Mail size={18} />
              </span>
              <span className="min-w-0">
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-white/45">
                  Email us
                </span>
                <span className="break-all text-sm font-medium">
                  {siteConfig.email}
                </span>
              </span>
            </a>
            <div className="surface-card flex items-center gap-4 p-4">
              <span className="contact-icon">
                <MapPin size={18} />
              </span>
              <span>
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-white/45">
                  Based in
                </span>
                <span className="text-sm font-medium">
                  {siteConfig.address}
                </span>
              </span>
            </div>
          </div>
          <p className="mt-6 flex items-start gap-3 text-xs leading-6 text-white/50">
            <Ruler size={18} className="mt-1 shrink-0 text-[#dfc39c]" />
            Plot dimensions, a location, and a few references are a helpful
            starting point.
          </p>
        </div>
        <EnquiryForm />
      </div>
    </Container>
  );
}
