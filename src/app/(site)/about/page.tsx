import Image from "next/image";
import { ArrowUpRight, Compass, Layers3, MessagesSquare } from "lucide-react";
import Container from "@/components/common/Container";
import ButtonLink from "@/components/common/ButtonLink";
import ContactCTA from "@/components/home/ContactCTA";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "Architecture & Design Studio in Giridih",
  "Architecture and planning by BTC Design Studio in Giridih. Discover our approach to purposeful spaces and clear design.",
  "/about",
);
const principles = [
  {
    icon: Compass,
    title: "Purposeful planning",
    description:
      "Layouts that respond to your plot, priorities, and everyday life.",
  },
  {
    icon: Layers3,
    title: "Clarity in the details",
    description:
      "Drawings and architectural views that make design choices easier to understand.",
  },
  {
    icon: MessagesSquare,
    title: "A shared conversation",
    description:
      "An open, practical dialogue from your first brief to the design review.",
  },
];
export default function AboutPage() {
  return (
    <>
      <Container className="page-section">
        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="eyebrow mb-4">The studio · Giridih, Jharkhand</p>
            <h1 className="page-title max-w-xl">
              Architecture shaped around you.
            </h1>
            <p className="page-description mt-5 max-w-xl">
              We bring practical planning and thoughtful design together to
              create spaces that work beautifully.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              BTC Design Studio works on homes, building plans, front
              elevations, and blueprints. We begin with your plot and your
              priorities, then explore how space, light, and materials can come
              together.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/projects">
                Explore our work <ArrowUpRight size={16} />
              </ButtonLink>
              <ButtonLink href="/process" variant="secondary">
                Our process
              </ButtonLink>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#f0f1eb]">
              <Image
                src="/projects/elevation-1.webp"
                alt="Architectural elevation study showing a contemporary facade and material details"
                fill
                priority
                sizes="(min-width:1024px) 45vw,100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-[11px] text-white/45">
              <span>Form, proportion, and material</span>
              <span>Elevation study</span>
            </figcaption>
          </figure>
        </div>
        <section className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="section-title">What guides our work</h2>
            <p className="text-sm text-white/50">
              Clear thinking. Considered spaces.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, ...item }) => (
              <article key={item.title} className="surface-card p-6">
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="mb-5 text-[#dfc39c]"
                />
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
      <ContactCTA />
    </>
  );
}
