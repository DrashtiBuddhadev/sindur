"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const CATEGORIES = [
  {
    label: "Residential",
    copy: "Thoughtfully planned apartments and homes built for modern living, from Akhbar Nagar to Naranpura.",
    image: "/images/real/residential.jpeg",
    href: "/projects#residential",
  },
  {
    label: "Commercial",
    copy: "Business spaces at prime Ahmedabad locations including S.P. Ring Road and Shilaj.",
    image: "/images/real/commercial.jpeg",
    href: "/projects#commercial",
  },
  {
    label: "PG ",
    copy: "Exclusive studio PG accommodation at Ambawadi, redefining managed living for young professionals.",
    image: "/images/real/pg.jpeg",
    href: "/projects#pg",
  },
  {
    label: "Plots",
    copy: "Well-located land parcels just outside the city for those who want to build their own vision.",
    image: "/images/real/plots.jpeg",
    href: "/projects#plots",
  },
];

export function WhatWeDo() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white pt-8 pb-14 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1d5a8c]">
              What We Do
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-wide leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Spaces for Every<br /> Stage of Life.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-end">
            <div className="flex max-w-md flex-col items-start gap-6">
              <p className="text-sm tracking-wide leading-[1.75] text-neutral-500 md:text-base">
                Four ways we build across Ahmedabad — each shaped by the same promise of urban
                convenience and green living.
              </p>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full border border-black/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-900 transition-colors duration-300 hover:border-[#175892] hover:bg-[#175892] hover:text-white"
              >
                <span>View all projects</span>
                <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-3 md:mt-14 md:px-6 lg:px-8">
        <div
          className="flex w-full gap-2 overflow-x-auto sm:h-[420px] sm:overflow-visible md:gap-3 lg:h-[480px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseLeave={() => setActive(null)}
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                className="aspect-[3/4] h-auto shrink-0 basis-[78%] transition-[flex-grow] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:aspect-auto sm:h-full sm:basis-0 sm:shrink"
                style={{ flexGrow: active === null ? 1 : isActive ? 1.3 : 0.9 }}
              >
                <Link
                  href={cat.href}
                  onMouseEnter={() => setActive(i)}
                  className="group relative block h-full w-full overflow-hidden"
                >
                  <Image
                    src={cat.image}
                    alt={`${cat.label} projects by Sindur Group`}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 25vw, 78vw"
                    className="object-cover object-[center_75%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/35" />

                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <h3 className="font-display text-xl font-semibold leading-tight whitespace-nowrap text-white md:text-2xl">
                      {cat.label}
                    </h3>
                    <div>
                      <p
                        className={`mb-4 max-w-xs text-xs leading-relaxed text-white/80 transition-all duration-300 ${isActive
                          ? "delay-200 translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                          }`}
                      >
                        {cat.copy}
                      </p>
                      <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-2 text-xs font-medium text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                        Learn More
                        <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
