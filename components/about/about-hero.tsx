"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedHeading } from "@/components/home/animated-heading";

function FadeIn({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#12100d] px-6 pt-32 pb-10 md:px-12 md:pt-40 md:pb-12 lg:px-16 lg:pt-48 lg:pb-14">
      <Image
        src="/images/ANALA FINAL VIEW 18.07.2025/17_01_ALIGN_SINDUR ANALA.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/85" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn
          delay={0.1}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50"
        >
          <span>About Us</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Est. 2014, Naranpura</span>
        </FadeIn>

        <AnimatedHeading
          text={"Ten Years. 1000+ Homes.\nOne Promise Kept."}
          className="max-w-4xl font-display font-medium text-3xl leading-[1.15] text-white md:text-4xl lg:text-5xl xl:text-6xl"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-8 lg:mt-14">
          <div className="hidden md:block" />

          <FadeIn delay={1.1}>
            <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              The story of a developer that grew with Naranpura — and never stopped building
              trust.
            </p>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden md:aspect-[2/1]">
              <Image
                src="/images/ANALA FINAL VIEW 18.07.2025/14_ALIGN_SINDUR ANALA.jpg"
                alt="Sindur Anala, a landmark residential project in Naranpura"
                fill
                sizes="(min-width: 768px) 72vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
