import Image from "next/image";
import { ArrowDownRight, Check } from "lucide-react";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import ContactCTA from "@/components/home/ContactCTA";
import { processSteps } from "@/data/process";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "Our Process",
  "See how BTC Design Studio moves from your requirements to layouts, elevations, and a considered design package.",
  "/process",
);
export default function ProcessPage() {
  return (
    <>
      <Container className="page-section">
        <PageIntro
          eyebrow="How we work"
          title="From your first idea to a clear design."
          description="Four considered steps, with time to ask questions, explore options, and refine the details together."
        />
        <nav
          aria-label="Design process steps"
          className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {processSteps.map((step, index) => (
            <a
              key={step.title}
              href={`#step-${index + 1}`}
              className="surface-card flex min-h-16 items-center justify-between gap-3 px-4 py-3 transition hover:border-[#dfc39c]/50"
            >
              <span className="text-xs text-[#dfc39c]">0{index + 1}</span>
              <span className="flex-1 text-sm font-medium">{step.title}</span>
              <ArrowDownRight size={15} className="shrink-0 text-white/40" />
            </a>
          ))}
        </nav>
        <div className="space-y-10 lg:space-y-12">
          {processSteps.map((step, index) => (
            <article
              id={`step-${index + 1}`}
              key={step.title}
              className="grid scroll-mt-28 items-center gap-7 border-t border-white/10 pt-8 lg:grid-cols-2 lg:gap-12"
            >
              <figure className={index % 2 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#f1f1eb]">
                  <Image
                    src={step.image}
                    alt={`${step.title}: architectural design study`}
                    fill
                    sizes="(min-width:1024px) 50vw,100vw"
                    className={index < 2 ? "object-contain" : "object-cover"}
                  />
                </div>
                <figcaption className="mt-3 text-[11px] text-white/40">
                  Design process · Study 0{index + 1}
                </figcaption>
              </figure>
              <div className="max-w-xl">
                <p className="eyebrow mb-3">Step 0{index + 1}</p>
                <h2 className="section-title">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {step.description}
                </p>
                <p className="mt-5 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#dfc39c]">
                  <Check size={17} className="mt-0.5 shrink-0" />
                  {step.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <ContactCTA />
    </>
  );
}
