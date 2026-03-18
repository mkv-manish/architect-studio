import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
    "Premium presentation for strong first impression",
    "Practical layout planning with modern aesthetics",
    "Fast communication through WhatsApp and phone",
    "Clear project showcase with real image sliders",
];

export default function WhyChooseUs() {
    return (
        <section className="py-12 lg:py-16">
            <Container>
                <SectionHeading
                    badge="Why Choose Us"
                    title="Design + Trust + Conversion"
                    description="Website ka structure aisa rakha gaya hai jisse client ko aapka kaam premium aur reliable lage."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {features.map((item) => (
                        <div
                            key={item}
                            className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-white/75 backdrop-blur-xl"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
