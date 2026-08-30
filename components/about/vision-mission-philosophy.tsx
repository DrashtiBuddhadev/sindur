"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

const PILLARS = [
  {
    label: "Vision",
    title: "Creating better spaces for better living.",
    copy: "To build trust through modern, thoughtfully planned and environmentally responsible spaces that respond to evolving lifestyles.",
    image: "/images/ANALA FINAL VIEW 18.07.2025/12_ALIGN_SINDUR ANALA.jpg",
  },
  {
    label: "Mission",
    title: "Thoughtful planning. Reliable execution.",
    copy: "To consistently create residential and commercial developments that combine contemporary design, quality construction, customer-focused thinking and long-term value.",
    image: "/images/ANALA FINAL VIEW 18.07.2025/13_ALIGN_SINDUR ANALA.jpg",
  },
  {
    label: "Philosophy",
    title: "Different by design. Consistent in quality.",
    copy: "Each location has its own context and every family has different expectations. We give every development its own identity while holding the same standards across planning, design and delivery.",
    image: "/images/ANALA FINAL VIEW 18.07.2025/11_ALIGN_SINDUR ANALA.jpg",
  },
] as const;

type Pillar = (typeof PILLARS)[number];

function PillarPanel({ pillar, index }: { pillar: Pillar; index: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);

  return (
    <div ref={wrapperRef} className="relative h-[170vh]">
      <section className="sticky top-0 flex h-screen items-end overflow-hidden bg-black">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[25%] h-[150%]">
          <Image
            src={pillar.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-20 lg:px-16">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {String(index + 1).padStart(2, "0")} — {pillar.label}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
              {pillar.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-[1.75] text-white/70 md:text-base">{pillar.copy}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function VisionMissionPhilosophy() {
  return (
    <>
      {PILLARS.map((pillar, index) => (
        <PillarPanel key={pillar.label} pillar={pillar} index={index} />
      ))}
    </>
  );
}
