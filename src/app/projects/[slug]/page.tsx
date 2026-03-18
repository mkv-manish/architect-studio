import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import ProjectSlider from "@/components/projects/ProjectSlider";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/constants";

interface ProjectDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#06111f] text-white">
            <Navbar />
            <Container className="py-16 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-2">
                    <ProjectSlider
                        images={project.images}
                        title={project.title}
                    />

                    <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                            {project.category}
                        </p>
                        <h1 className="text-4xl font-semibold">
                            {project.title}
                        </h1>
                        <p className="mt-5 text-base leading-8 text-white/70">
                            {project.description}
                        </p>

                        <div className="mt-8 space-y-3">
                            {project.highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                                >
                                    {highlight}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900"
                            >
                                Enquire For Similar Design
                            </a>
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}`}
                                target="_blank"
                                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-white"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
