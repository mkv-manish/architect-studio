import { ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import ButtonLink from "@/components/common/ButtonLink";
export default function ContactCTA() {
  return (
    <section className="py-5">
      <Container>
        <div className="flex flex-col justify-between gap-6 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Have a project in mind?</p>
            <h2 className="section-title">
              Let’s find the right starting point.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Share your plot, priorities, and ideas. We’ll talk through what
              comes next.
            </p>
          </div>
          <ButtonLink
            href="/consultation"
            className="shrink-0 self-start lg:self-center"
          >
            Request a consultation <ArrowUpRight size={17} />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
