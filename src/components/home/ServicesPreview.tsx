import { Building2, Hammer, Home, Ruler } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const icons = [Home, Building2, Ruler, Hammer];
const items = [
    {
        title: "House Design",
        desc: "Modern, vastu-friendly and premium residential planning.",
    },
    {
        title: "Building Planning",
        desc: "Commercial and residential layout planning with smart utility flow.",
    },
    {
        title: "2D / 3D Blueprint",
        desc: "Detailed drawings, front elevations and presentation-ready views.",
    },
    {
        title: "Execution Guidance",
        desc: "Design se execution tak practical clarity and support.",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-12 lg:py-16">
            <Container>
                <SectionHeading
                    badge="Services"
                    title="Professional Design Services"
                    description="Har section ka focus sirf sundar UI nahi, balki client trust aur enquiry conversion bhi hai."
                />

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {items.map((service, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={service.title}
                                className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-white/65">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
