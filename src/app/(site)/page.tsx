import { createMetadata } from "@/lib/metadata";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import StudioIntro from "@/components/home/StudioIntro";
import ProcessPreview from "@/components/home/ProcessPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = createMetadata(
  "Home Design & Planning in Giridih",
  "Explore home designs, floor plans, building layouts, and front elevations by BTC Design Studio in Giridih, Jharkhand. Discuss your next project with us.",
  "/",
);

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <StudioIntro />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}
