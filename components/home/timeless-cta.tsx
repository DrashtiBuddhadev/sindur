"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";

export function TimelessCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[25%] h-[150%]">
        <Image
          src="/images/690c5f3d7d5be8f105fc0951_mO6tDYnT-p-1600.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 px-6 pt-36 pb-24 md:px-12 md:pt-48 md:pb-32 lg:px-16 lg:pt-60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 text-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Let&apos;s create something timeless.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black"
            >
              <span>Contact Us</span>
              <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
