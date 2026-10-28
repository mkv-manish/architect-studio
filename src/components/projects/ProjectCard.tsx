import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/types/project";
export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group min-w-0">
      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`Explore ${project.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#08131c]/60 backdrop-blur">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] py-4">
          <div>
            <p className="eyebrow mb-2">{project.category}</p>
            <h3 className="text-lg font-medium sm:text-xl">{project.title}</h3>
          </div>
          <span className="pt-1 text-xs text-[var(--muted)]">
            {project.location}
          </span>
        </div>
      </Link>
      <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]">
        {project.description}
      </p>
    </article>
  );
}
