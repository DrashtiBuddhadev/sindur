"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const UNFOLD_TRANSITION = { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const };

export function WhoWeAre() {
  return (
    <section className="bg-white px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[32%_1fr] md:gap-12 lg:gap-16">
        <Reveal className="flex flex-col">
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-wide md:text-3xl">
            <span className="text-[var(--color-ink)]">Building Spaces.</span>{" "}
            <span className="text-neutral-300">Creating Trust. Shaping Better Lifestyles.</span>
          </h2>

          <p className="mt-6 max-w-xs font-display text-lg font-semibold leading-snug text-[var(--color-primary)] md:text-xl">
            Build with purpose. Deliver with responsibility. Earn trust for life.
          </p>

          <div className="relative mt-10 aspect-[3/4] w-full max-w-xs overflow-hidden md:mt-auto md:max-w-none">
            {/* Mobile: plain fade - the clip-path unfold below was leaving images invisible on mobile browsers. */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={UNFOLD_TRANSITION}
              className="absolute inset-0 md:hidden"
            >
              <Image
                src="/images/real/about-left.jpeg"
                alt="Inside a Sindur Group residence"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Desktop: the original unfold reveal. */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={UNFOLD_TRANSITION}
              className="absolute inset-0 hidden md:block"
            >
              <Image
                src="/images/real/about-left.jpeg"
                alt="Inside a Sindur Group residence"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <h3 className="font-display text-3xl font-semibold text-[var(--color-ink)] md:text-4xl">
              About Us
            </h3>
          </Reveal>

          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {/* Mobile: plain fade - the clip-path unfold below was leaving images invisible on mobile browsers. */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={UNFOLD_TRANSITION}
              className="absolute inset-0 md:hidden"
            >
              <Image
                src="/images/real/about-right.jpeg"
                alt="Aerial view of a Sindur Group residential project"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Desktop: the original unfold reveal. */}
            <motion.div
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              whileInView={{ clipPath: "inset(0 0 0 0%)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={UNFOLD_TRANSITION}
              className="absolute inset-0 hidden md:block"
            >
              <Image
                src="/images/real/about-right.jpeg"
                alt="Aerial view of a Sindur Group residential project"
                fill
                sizes="60vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <Reveal delay={0.15} className="flex flex-col items-start gap-6">
            <p className="max-w-2xl text-base leading-[1.75] md:text-lg">
              <span className="font-semibold text-[var(--color-ink)]">
                Thoughtfully designed residential and commercial developments created around
                quality, comfort, functionality and lasting value.
              </span>{" "}
              <span className="text-[var(--color-muted)]">
                Since 2014, SINDUR CN GROUP has been building more than properties. We create
                spaces where families grow, businesses progress and relationships are built for
                generations.
              </span>
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary)]"
            >
              Read Our Story
              <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
