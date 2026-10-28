import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ButtonLink from "@/components/common/ButtonLink";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
export default function FeaturedProjects() {
  return (
    <section id="selected-work" className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-end">
          <SectionHeading
            badge="02 / Selected work"
            title="A few of our favourite possibilities."
            description="Explore residential concepts, considered floor plans, and distinctive architectural elevations."
          />
          <ButtonLink href="/projects" variant="secondary" className="shrink-0">
            View all projects
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
