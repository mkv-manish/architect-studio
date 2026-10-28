import Link from "next/link";
import { ArrowUpRight, Building2, Hammer, House, Ruler } from "lucide-react";
import { services } from "@/data/services";
const icons = [House, Building2, Ruler, Hammer];
export default function ServiceGrid({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => {
        const Icon = icons[index];
        return (
          <article
            key={service.slug}
            className="group relative rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 transition-colors hover:bg-[var(--panel-hover)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <Icon
                size={28}
                strokeWidth={1.3}
                className="text-[var(--accent)]"
              />
              <span className="text-xs text-[var(--muted)]">0{index + 1}</span>
            </div>
            <h3 className="text-base font-semibold">
              <Link
                href={`/services/${service.slug}`}
                className="after:absolute after:inset-0"
              >
                {service.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {detailed ? service.detail : service.desc}
            </p>
            <span className="mt-5 inline-flex items-center gap-3 text-xs font-semibold text-[var(--accent)]">
              Explore service <ArrowUpRight size={16} />
            </span>
          </article>
        );
      })}
    </div>
  );
}
