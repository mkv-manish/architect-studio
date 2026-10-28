import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { faqItems } from "@/data/faq";
export default function FAQSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-2">
        <SectionHeading
          badge="A little clarity"
          title="Before we begin."
          description="A few answers to help you take the first step. Explore our FAQ page for more on scope, drawings, and consultations."
        />
        <div>
          <Link
            href="/faq"
            className="mb-7 inline-flex items-center gap-3 border-b border-[var(--line)] pb-2 text-sm font-semibold"
          >
            All questions & answers{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[var(--line)] py-5 first:pt-0"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-base [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  size={18}
                  className="shrink-0 text-[var(--accent)] transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="pb-2 pt-4 text-sm leading-7 text-[var(--muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
