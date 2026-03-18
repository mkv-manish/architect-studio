import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#06111f] text-white">
            <Navbar />
            <HeroSection />
            <ServicesPreview />
            <WhyChooseUs />
            <FeaturedProjects />
            <TestimonialsSection />
            <FAQSection />
            <ContactCTA />
            <Footer />
            <FloatingContactButtons />
        </main>
    );
}
