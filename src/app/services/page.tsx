import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Services");

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#06111f] text-white">
            <Navbar />
            <Container className="py-16 lg:py-24">
                <SectionHeading
                    badge="Services"
                    title="Complete Design Services"
                    description="Har type ke home aur building project ke liye professional planning aur presentation."
                />

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
                        >
                            <h3 className="text-xl font-semibold">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-white/65">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
            <Footer />
        </main>
    );
}
0;
