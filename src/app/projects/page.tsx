import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Projects");

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#06111f] text-white">
            <Navbar />
            <Container className="py-16 lg:py-24">
                <div className="mb-10 max-w-3xl">
                    <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                        Projects
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Our Design Portfolio
                    </h1>
                    <p className="mt-4 text-white/65">
                        Yahan se client aapka real work dekh sakta hai aur
                        similar design enquiry bhej sakta hai.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Container>
            <Footer />
        </main>
    );
}
