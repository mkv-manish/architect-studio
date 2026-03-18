import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import ProjectSlider from "@/components/projects/ProjectSlider";
import { ProjectItem } from "@/types/project";
import { siteConfig } from "@/lib/constants";

interface ProjectCardProps {
    project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl">
            <div className="p-4">
                <ProjectSlider images={project.images} title={project.title} />
            </div>
            <div className="p-6 pt-2">
                <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
                        {project.category}
                    </span>
                    {project.location ? (
                        <span className="inline-flex items-center gap-1 text-xs text-white/60">
                            <MapPin className="h-4 w-4" /> {project.location}
                        </span>
                    ) : null}
                </div>

                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
                    >
                        View Details
                    </Link>
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white"
                    >
                        <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                    </a>
                </div>
            </div>
        </div>
    );
}
