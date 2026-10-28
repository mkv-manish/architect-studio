import { ArrowUpRight, Plus } from "lucide-react";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import ButtonLink from "@/components/common/ButtonLink";
import { faqGroups } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "Frequently Asked Questions",
  "Answers about project requirements, architectural design, consultations, scope, and working with BTC Design Studio.",
  "/faq",
);
export default function FAQPage() {
  return (
    <Container className="page-section">
      <PageIntro
        eyebrow="Frequently asked questions"
        title="Useful answers before you begin."
        description="Learn what to prepare, what a design package can include, and how to start a conversation with the studio."
      />
      <div className="grid items-start gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-12">
        <aside className="surface-card p-5 sm:p-6 lg:sticky lg:top-28">
          <p className="eyebrow mb-4">On this page</p>
          <nav aria-label="FAQ topics" className="flex flex-col gap-1">
            {faqGroups.map((group, index) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="flex min-h-11 items-center gap-3 rounded-md px-2 py-2 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
              >
                <span className="text-[10px] text-[#dfc39c]">0{index + 1}</span>
                {group.title}
              </a>
            ))}
          </nav>
          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="mb-4 text-sm leading-7 text-white/60">
              Need an answer specific to your project?
            </p>
            <ButtonLink href="/contact">
              Ask the studio <ArrowUpRight size={15} />
            </ButtonLink>
          </div>
        </aside>
        <div className="space-y-10">
          {faqGroups.map((group) => (
            <section id={group.id} key={group.id} className="scroll-mt-28">
              <h2 className="mb-4 text-xl font-medium">{group.title}</h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] open:border-[#dfc39c]/30 open:bg-white/[0.04]"
                  >
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-sm font-medium leading-6 [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <Plus
                        size={17}
                        aria-hidden="true"
                        className="shrink-0 text-[#dfc39c] transition-transform group-open:rotate-45"
                      />
                    </summary>
                    <p className="mx-5 border-t border-white/10 pb-5 pt-4 text-sm leading-7 text-white/65">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
