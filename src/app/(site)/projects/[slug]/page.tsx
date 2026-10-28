import JsonLd from "@/components/common/JsonLd";
import { businessId, breadcrumbSchema } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import Container from "@/components/common/Container";
import ButtonLink from "@/components/common/ButtonLink";
import ProjectSlider from "@/components/projects/ProjectSlider";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return createMetadata(
    project.title,
    project.description,
    `/projects/${project.slug}`,
    project.images[0],
  );
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const whatsapp = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello, I’d like to discuss a design similar to your ${project.title} project.`)}`;
  return (
    <Container className="page-section">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: absoluteUrl(`/projects/${slug}`),
            image: project.images.map((image) => absoluteUrl(image)),
            creator: { "@id": businessId },
          },
          breadcrumbSchema([
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${slug}` },
          ]),
        ]}
      />

      <Link
        href="/projects"
        className="mb-10 inline-flex min-h-11 items-center gap-3 text-sm text-white/55 hover:text-white"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>
      <div className="mb-10">
        <p className="eyebrow mb-4">
          {project.category} · {project.location}
        </p>
        <h1 className="page-title">{project.title}</h1>
        <p className="mt-4 text-xs text-white/40">
          Architectural concept · {project.images.length} design views
        </p>
      </div>
      <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
        <ProjectSlider images={project.images} title={project.title} />
        <div>
          <h2 className="text-xl">The design at a glance</h2>
          <p className="mt-5 text-sm leading-8 text-white/60">
            {project.description}
          </p>
          <ul className="my-8 space-y-4">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm text-white/75"
              >
                <Check size={16} className="shrink-0 text-[#dfc39c]" />
                {highlight}
              </li>
            ))}
          </ul>
          <ButtonLink href={whatsapp} target="_blank">
            Discuss a similar design
          </ButtonLink>
          <p className="mt-4 text-xs leading-6 text-white/40">
            Every plot is different. We’ll explore a plan around your
            requirements.
          </p>
        </div>
      </div>
    </Container>
  );
}
