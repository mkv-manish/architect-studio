import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { processSteps } from "@/data/process";
export default function ProcessPreview() {
  return (
    <section className="border-y border-[var(--line)] bg-[#ebe9df] py-16 lg:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <SectionHeading
            badge="04 / The process"
            title="From possibilities to plans."
            description="A collaborative process, with room for your questions at every step."
          />
          <Link
            href="/process"
            className="inline-flex shrink-0 items-center gap-4 border-b border-[var(--line)] pb-3 text-sm font-semibold"
          >
            See the full process <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="border-t border-[#263c2b]/25 pt-5">
              <p className="mb-7 font-serif text-4xl italic text-[#8b917d]">
                0{index + 1}
              </p>
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {step.outcome}.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
