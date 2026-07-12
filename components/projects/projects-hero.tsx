"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { AnimatedHeading } from "@/components/home/animated-heading";

export function ProjectsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#12100d] px-6 pb-14 md:px-12 md:pb-20 lg:px-16 lg:pb-24"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/ANALA FINAL VIEW 18.07.2025/17_01_ALIGN_SINDUR ANALA.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/85" />

      <div className="relative z-10">
        <AnimatedHeading
          text={"Landmarks in the\nMaking Across Ahmedabad."}
          className="max-w-4xl font-display font-medium text-3xl leading-[1.15] text-white md:text-4xl lg:text-5xl xl:text-6xl"
        />

        <div className="mt-8">
          <p className="max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
            Every Sindur address tells the same story in a different neighbourhood — urban
            comfort, green living, and a promise kept. Explore what we&apos;ve built and
            what&apos;s coming next.
          </p>
        </div>
      </div>
    </section>
  );
}
