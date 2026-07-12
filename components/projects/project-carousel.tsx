"use client";

import { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

function NavArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
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

export function ProjectCarousel({ images, name }: { images: string[]; name: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--color-bg)] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Gallery
            </p>
            <h2 className="font-display text-3xl leading-tight text-[var(--color-ink)] md:text-4xl">
              Inside {name}.
            </h2>
          </div>
          <div className="hidden gap-3 sm:flex">
            <NavArrow direction="left" onClick={() => scroll(-1)} />
            <NavArrow direction="right" onClick={() => scroll(1)} />
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.05}
              className="relative aspect-[4/3] w-[82%] shrink-0 snap-start overflow-hidden sm:w-[55%] md:w-[400px]"
            >
              <Image
                src={src}
                alt={`${name} — photo ${i + 1}`}
                fill
                sizes="(min-width: 768px) 400px, 82vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
