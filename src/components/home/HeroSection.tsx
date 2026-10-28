import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-[#152322] text-white sm:min-h-[680px] lg:min-h-[min(800px,85vh)]">
      <Image
        src="/projects/villa-1.webp"
        alt="Architectural concept of a contemporary villa surrounded by landscaped outdoor spaces"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071510]/95 via-[#071510]/30 to-[#071510]/5" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071510]/55 via-transparent to-transparent" />
      <Container className="w-full pb-9 pt-32 sm:pb-12 lg:pb-16">
        <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85">
          <span className="h-px w-8 bg-white/60" /> BTC Design Studio · Giridih
        </p>
        <div className="grid items-end gap-8 lg:grid-cols-[1.6fr_0.7fr]">
          <div>
            <h1 className="max-w-3xl text-[3.1rem] font-medium leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem]">
              Spaces that feel
              <br />
              like{" "}
              <span className="font-serif italic text-[#ead4b2]">home.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base">
              Thoughtful architecture. Practical planning.
              <br />
              Designed for the life you want to build.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-4 rounded-sm bg-[#f1e9da] px-6 py-3 text-sm font-semibold text-[#193127] transition hover:bg-white"
              >
                Explore projects <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/40 bg-black/10 px-5 py-3 text-sm text-white backdrop-blur-sm hover:bg-white/10"
              >
                Plan with us
              </Link>
            </div>
          </div>
          <Link
            href="/projects/luxury-villa-design"
            className="hidden border-l border-white/35 pl-6 lg:block"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">
              Featured design / 01
            </p>
            <p className="mt-3 flex items-center justify-between text-lg">
              The contemporary villa <ArrowUpRight size={22} />
            </p>
            <p className="mt-2 text-xs text-white/60">
              Residential concept · Giridih
            </p>
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/25 pt-5 text-[10px] uppercase tracking-[0.17em] text-white/70">
          <span>Architecture · Planning · Elevations</span>
        </div>
      </Container>
    </section>
  );
}
