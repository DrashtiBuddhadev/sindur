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
            <span className="text-[var(--color-ink)]">We Don&apos;t Just Develop Spaces.</span>{" "}
            <span className="text-neutral-300">We Shape Possibilities.</span>
          </h2>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={UNFOLD_TRANSITION}
            className="relative mt-10 aspect-[3/4] w-full max-w-xs overflow-hidden md:mt-auto md:max-w-none"
          >
            <Image
              src="https://res.cloudinary.com/djpswxx2l/image/upload/w_1200,q_auto,f_auto/v1784461257/Nightview_ycklsf.jpg"
              alt="Inside a Sindur Group residence"
              fill
              sizes="(min-width: 768px) 30vw, 80vw"
              className="object-cover"
            />
          </motion.div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <h3 className="font-display text-3xl font-semibold text-[var(--color-ink)] md:text-4xl">
              About Us
            </h3>
          </Reveal>

          <motion.div
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ clipPath: "inset(0 0 0 0%)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={UNFOLD_TRANSITION}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/djpswxx2l/image/upload/w_1600,q_auto,f_auto/v1784463696/view_01_ghg8pq.jpg"
              alt="Aerial view of a Sindur Group residential project"
              fill
              sizes="(min-width: 768px) 60vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <Reveal delay={0.15} className="flex flex-col items-start gap-6">
            <p className="max-w-2xl text-base leading-[1.75] md:text-lg">
              <span className="font-semibold text-[var(--color-ink)]">
                Every landmark begins with a clear vision—an understanding of the location, the
                people and the future it will serve.
              </span>{" "}
              <span className="text-[var(--color-muted)]">
                With a commitment to thoughtful planning, enduring quality and responsible
                development, we create spaces that elevate everyday living, empower businesses
                and add lasting value to Ahmedabad&apos;s evolving landscape.
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
