import { Check } from "lucide-react";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import ServiceGrid from "@/components/common/ServiceGrid";
import ContactCTA from "@/components/home/ContactCTA";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "Home Design, Floor Plans & Elevations",
  "House designs, building plans, blueprints, elevations, and practical design guidance.",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <Container className="page-section">
        <PageIntro
          eyebrow="Our expertise"
          title="From a better plan to a distinctive space."
          description="Explore architectural planning, clear drawings, and design guidance for your home or building project."
        />
        <ServiceGrid detailed />
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 rounded-lg border border-white/10 bg-white/[0.02] p-5">
          {[
            "Scope tailored to your project",
            "Deliverables agreed before we start",
            "A collaborative review process",
          ].map((item) => (
            <p
              key={item}
              className="flex items-center gap-2 text-xs leading-6 text-white/65"
            >
              <Check size={15} className="shrink-0 text-[#dfc39c]" />
              {item}
            </p>
          ))}
        </div>
      </Container>
      <ContactCTA />
    </>
  );
}
