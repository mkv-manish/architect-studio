import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
    return (
        <section className="py-12 lg:py-16">
            <Container>
                <SectionHeading
                    badge="Projects"
                    title="Our Recent Design Showcase"
                    description="Client ko trust tab aata hai jab aapka real work clearly dikhai de. Isliye har project me multiple images ka slider diya gaya hai."
                />

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {projects.slice(0, 4).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
