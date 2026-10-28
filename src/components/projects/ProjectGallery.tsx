"use client";
import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import type { ProjectItem } from "@/types/project";
export default function ProjectGallery({
  projects,
}: {
  projects: ProjectItem[];
}) {
  const [category, setCategory] = useState("All projects");
  const categories = [
    "All projects",
    ...new Set(projects.map((project) => project.category)),
  ];
  const visible =
    category === "All projects"
      ? projects
      : projects.filter((project) => project.category === category);
  return (
    <>
      <div
        className="mb-6 flex flex-nowrap items-center gap-1.5 overflow-x-auto px-1 py-2 [scrollbar-width:thin]"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-medium leading-4 transition ${category === item ? "border-[#dfc39c] bg-[#dfc39c] text-[#08131c]" : "border-white/15 bg-white/[0.02] text-white/65 hover:border-white/35 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <p role="status" className="sr-only">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {category !== "All projects" ? ` in ${category}` : ""}
      </p>
      <div className="grid gap-x-7 gap-y-10 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
