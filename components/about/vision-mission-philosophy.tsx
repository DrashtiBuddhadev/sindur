"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

const PILLARS = [
  {
    label: "Vision",
    copy: "To create landmark residential and commercial projects that define Ahmedabad's skyline — and its standard of living.",
    image: "/images/Modern Desert Home.png",
  },
  {
    label: "Mission",
    copy: "To deliver unique, modern, eco-friendly spaces that earn customer trust project after project.",
    image: "/images/Modern House at Twilight.png",
  },
  {
    label: "Philosophy",
    copy: "Urban comfort and green living aren't a trade-off. They're a design brief.",
    image: "/images/Serene Mid-Century Modern Interior.png",
  },
];

const AUTO_ADVANCE_MS = 5000;

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
    >
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
        <path
          d={direction === "left" ? "M6 1 1 5l5 4M1 5h12" : "M8 1l5 4-5 4M13 5H1"}
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function VisionMissionPhilosophy() {
  const [active, setActive] = useState(0);
  const current = PILLARS[active];

  const next = () => setActive((i) => (i + 1) % PILLARS.length);
  const prev = () => setActive((i) => (i - 1 + PILLARS.length) % PILLARS.length);

  useEffect(() => {
    const id = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section className="bg-[#12100d] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-stretch">
          <div className="flex flex-col justify-between gap-10 md:w-[38%]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
                What Drives Us
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                Vision, Mission &amp; Philosophy.
              </h2>
            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <span className="font-display text-xs font-medium text-white/40">
                    {String(active + 1).padStart(2, "0")} / {String(PILLARS.length).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                    {current.label}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-[1.75] text-white/60 md:text-base">
                    {current.copy}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-3">
                <ArrowButton direction="left" onClick={prev} />
                <ArrowButton direction="right" onClick={next} />
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] w-full overflow-hidden border border-white/10 md:w-[62%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={`${current.label} — Sindur Group`}
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
