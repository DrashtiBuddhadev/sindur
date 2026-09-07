"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

// Routes a plain <img> through Next's image optimizer so masonry photos stay
// their natural aspect ratio (needed for the columns layout) while still
// being resized/compressed instead of serving multi-MB source files raw.
// The `w` value must exactly match one of next.config.ts's image sizes
// (default deviceSizes/imageSizes) or the optimizer 400s and the image breaks.
function optimizedSrc(src: string) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=828&q=75`;
}

export function ProjectCarousel({ images, name }: { images: string[]; name: string }) {
  const visibleImages = images.slice(0, 9);
  const useGrid = visibleImages.length < 5;

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

        {useGrid ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visibleImages.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.04 }}
                className="relative aspect-[4/3] overflow-hidden border border-[var(--color-border)] bg-neutral-100"
              >
                <Image
                  src={src}
                  alt={`${name} photo ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority={i === 0}
                  className="object-cover"
                />
              </motion.figure>
            ))}
          </div>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {visibleImages.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.04 }}
                className="mb-4 break-inside-avoid overflow-hidden border border-[var(--color-border)] bg-neutral-100"
              >
                <img
                  src={optimizedSrc(src)}
                  alt={`${name} photo ${i + 1}`}
                  className="block h-auto w-full"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
