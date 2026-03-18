import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("About");

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#06111f] text-white">
            <Navbar />
            <Container className="py-16 lg:py-24">
                <div className="max-w-4xl rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl lg:p-10">
                    <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                        About Us
                    </p>
                    <h1 className="text-4xl font-semibold">
                        We Design Spaces With Practical Luxury
                    </h1>
                    <p className="mt-6 text-base leading-8 text-white/70">
                        Hum home design, building planning, blueprint, front
                        elevation aur project consultation services provide
                        karte hain. Hamara focus premium visual design ke saath
                        practical execution clarity par hota hai.
                    </p>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            Premium project presentation
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            Practical blueprint clarity
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            Fast client communication
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            Luxury design approach
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
