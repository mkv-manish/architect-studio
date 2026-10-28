import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
export default function StudioIntro() {
  return (
    <section id="studio-intro" className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow self-start">01 / The studio</p>
          <div>
            <h2 className="display-heading max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              A beautiful building begins with understanding{" "}
              <span className="italic text-[var(--accent)]">
                the people inside.
              </span>
            </h2>
            <div className="mt-7 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-sm leading-8 text-[var(--muted)]">
                We’re BTC Design Studio, an architecture and planning studio in
                Giridih. We bring your ideas into focus with purposeful layouts,
                clear drawings, and elevations that feel distinctly yours.
              </p>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-4 border-b border-[var(--accent)] pb-2 text-sm font-semibold"
              >
                Meet the studio <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-[1.4fr_0.6fr]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/projects/elevation-1.webp"
              alt="Residential architectural elevation exploring proportion, materials, and light"
              fill
              sizes="(min-width:640px) 65vw,100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-sm bg-[#f8f5ed]/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#24372d]">
              Character in every detail
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-sm bg-[#e8e5da] p-7 sm:p-8">
            <ArrowUpRight
              size={32}
              aria-hidden="true"
              className="text-[#617260]"
            />
            <div>
              <p className="text-2xl leading-tight">
                Your plot.
                <br />
                Your priorities.
                <br />
                <span className="font-serif italic text-[#6c735b]">
                  Our starting point.
                </span>
              </p>
              <Link
                href="/process"
                className="mt-6 inline-flex items-center gap-3 text-xs font-semibold underline underline-offset-8"
              >
                How we work <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
