"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const LAUNCHES = [
  {
    label: "Naranpura, Ahmedabad",
    title: "Coming Up Next in Naranpura.",
    copy: "Our next landmark rises in the heart of Naranpura — the neighbourhood where our story began. Designed with the same philosophy that shaped every Sindur project: modern comfort, eco-conscious construction, and spaces that hold their value for generations.",
    image: "/images/Modern Luxury House at Dusk.png",
    href: "/contact",
  },
  {
    label: "Naranpura, Ahmedabad",
    title: "Sindur Saamarthya",
    copy: "A signature luxury address with a G+11 single tower and only 42 exclusive units. The sample house is ready, and possession can be offered within a short timeframe.",
    image: "/images/Modern House at Twilight.png",
    href: "/contact",
  },
  {
    label: "Beside Sports Complex, Naranpura",
    title: "Sindur Anala",
    copy: "3 BHK lifestyle homes and 4 BHK penthouses across only 86 exclusive units, with a podium living concept and no common walls for complete privacy.",
    image: "/images/Modern Cantilevered House.png",
    href: "/contact",
  },
];

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 13S12 8.5 12 5.5A5 5 0 0 0 2 5.5C2 8.5 7 13 7 13Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="5.5" r="1.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function DiagonalArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M4 10 10 4M10 4H5M10 4V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
    >
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
        <path
          d={direction === "left" ? "M6.5 1 1 6l5.5 5M1 6h14" : "M9.5 1 15 6l-5.5 5M15 6H1"}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function LatestLaunch() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <Image
          src="/images/690c5f3d7d5be8f105fc0951_mO6tDYnT-p-1600.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-10">
          <Reveal className="flex flex-row items-center justify-between md:flex-col md:items-start md:justify-between">
            <div className="w-full">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
                Latest Launch
              </p>
              <h2 className="border-b border-white/30 pb-4 font-display text-2xl text-white">
                Coming Up Next
              </h2>
            </div>
            <div className="mt-0 flex gap-3 md:mt-10">
              <NavArrow direction="left" onClick={() => scroll(-1)} />
              <NavArrow direction="right" onClick={() => scroll(1)} />
            </div>
          </Reveal>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {LAUNCHES.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.1}
                className="w-[82%] shrink-0 snap-start bg-[#f7f4ee] p-4 sm:w-[55%] md:w-[360px]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 360px, 82vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                  <LocationIcon />
                  {item.label}
                </div>
                <h3 className="mt-2 inline-block border-b border-neutral-300 pb-0.5 font-display text-lg text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">
                  {item.copy}
                </p>
                <Link
                  href={item.href}
                  className="group mt-5 inline-flex items-center gap-3 rounded-full border border-neutral-200 py-1.5 pr-1.5 pl-5 text-sm text-neutral-900 transition-colors hover:border-neutral-900"
                >
                  Read More
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <DiagonalArrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-7 text-center md:mt-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Let&apos;s create something timeless.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black"
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
