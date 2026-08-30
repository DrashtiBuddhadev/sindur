"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

export function ProjectCarousel({ images, name }: { images: string[]; name: string }) {
  const visibleImages = images.slice(0, 9);

  return (
    <section className="bg-[var(--color-bg)] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
            Gallery
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
            Inside {name}.
          </h2>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visibleImages.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.04 }}
              className="mb-4 break-inside-avoid overflow-hidden border border-[var(--color-border)] bg-white"
            >
              <img
                src={src}
                alt={`${name} photo ${i + 1}`}
                className="block h-auto w-full"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
