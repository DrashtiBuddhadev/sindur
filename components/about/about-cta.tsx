import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";

export function AboutCta() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 border-t border-black/10 pt-20 text-center">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl lg:text-6xl">
            Let&apos;s create something timeless.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
          >
            <span>Contact Us</span>
            <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
