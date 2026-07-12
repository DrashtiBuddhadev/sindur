"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollTrack() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden h-40 w-px -translate-y-1/2 overflow-hidden bg-[var(--color-border)] md:right-6 lg:right-8 lg:block">
      <motion.div
        className="absolute inset-x-0 top-0 h-full w-px origin-top bg-[var(--color-primary)]"
        style={{ scaleY }}
      />
    </div>
  );
}
