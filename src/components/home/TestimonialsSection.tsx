import { Quote } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/data/testimonials";
export default function TestimonialsSection() {
  return (
    <section className="border-y border-[var(--line)] bg-white/[0.02] py-16 lg:py-24">
      <Container>
        <SectionHeading
          badge="Client perspectives"
          title="Built on good conversations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <figure
              key={item.id}
              className="flex flex-col border border-[var(--line)] bg-[var(--panel)] p-7"
            >
              <Quote
                className="mb-6 text-[var(--accent)]"
                size={25}
                strokeWidth={1.2}
              />
              <blockquote className="flex-1 text-sm leading-8 text-[var(--muted)]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-[var(--line)] pt-5">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {item.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
