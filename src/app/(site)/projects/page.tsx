import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ContactCTA from "@/components/home/ContactCTA";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "House Designs & Architecture Portfolio",
  "Explore residential, duplex, commercial, and elevation concepts by BTC Design Studio.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <>
      <Container className="page-section">
        <PageIntro
          eyebrow="Selected work"
          title="Explore our design portfolio."
          description="Residential concepts, practical floor plans, and architectural elevations. Find a direction that speaks to your project."
          aside={
            <p className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">
              {String(projects.length).padStart(2, "0")} design studies
            </p>
          }
        />
        <ProjectGallery projects={projects} />
      </Container>
      <ContactCTA />
    </>
  );
}
