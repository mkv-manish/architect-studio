import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import ContactForm from "@/components/forms/ContactForm";
import RSVPForm from "@/components/forms/RSVPForm";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Contact");

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#06111f] text-white">
            <Navbar />
            <Container className="py-16 lg:py-24">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl lg:p-10">
                            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                                Contact
                            </p>
                            <h1 className="text-4xl font-semibold">
                                Start Your Project Discussion
                            </h1>
                            <div className="mt-6 space-y-3 text-white/70">
                                <p>Phone: {siteConfig.phone}</p>
                                <p>Email: {siteConfig.email}</p>
                                <p>Address: {siteConfig.address}</p>
                            </div>
                        </div>

                        <RSVPForm />
                    </div>

                    <ContactForm />
                </div>
            </Container>
            <Footer />
        </main>
    );
}
