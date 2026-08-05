"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

const PARTNERS = [
  {
    initials: "KP",
    name: "Mr. Ketul Patel",
    role: 'Founder — "Munnabhai"',
    bio: 'Ask around Naranpura, and you won’t hear "Mr. Patel" — you’ll hear Munnabhai. Ketul Patel founded Sindur Group with a dream of creating landmark residential and commercial projects in Ahmedabad, inspired by a rare pairing: urban comfort and green living.',
    image: "/images/ketulbhai_real.png",
  },
  {
    initials: "AP",
    name: "Mr. Akash Patel",
    role: "Partner",
    bio: "Akash Patel co-drives Sindur Group's growth across Ahmedabad, bringing the same discipline and trust that shaped the group's first decade to every new address.",
    image: "/images/akashbhai.png",
  },
  {
    initials: "DP",
    name: "Mr. Darshan Patel",
    role: "Partner",
    bio: "Darshan Patel helps steer Sindur Group's projects from concept to keys-in-hand, keeping quality and customer trust at the centre of every decision.",
    image: "/images/darshanbhai.jpeg",
  },
];

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
      aria-label={direction === "left" ? "Previous partner" : "Next partner"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
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

export function TeamSpotlight() {
  const [active, setActive] = useState(0);
  const person = PARTNERS[active];

  const next = () => setActive((i) => (i + 1) % PARTNERS.length);
  const prev = () => setActive((i) => (i - 1 + PARTNERS.length) % PARTNERS.length);

  return (
    <section className="bg-[var(--color-bg)] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
            Leadership
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl lg:text-5xl">
            Co-Creators of Success.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6 md:flex-row md:items-stretch">
          <div className="flex flex-col gap-6 md:w-[38%]">
            <div className="relative h-48 w-full max-w-xs overflow-hidden md:h-56 md:max-w-none">
              <Image
                src="/images/Serene Mid-Century Modern Interior.png"
                alt="Inside a Sindur Group residence"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="font-display text-xl font-semibold text-[var(--color-ink)] md:text-2xl">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
                    {person.role}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-[1.75] text-[var(--color-muted)] md:text-base">
                    {person.bio}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-3">
                <ArrowButton direction="left" onClick={prev} />
                <ArrowButton direction="right" onClick={next} />
                <span className="ml-2 text-xs text-[var(--color-muted)]">
                  {String(active + 1).padStart(2, "0")} / {String(PARTNERS.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] w-full overflow-hidden md:w-[62%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={person.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.role} at Sindur Group`}
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                <span className="absolute inset-0 flex items-center justify-center font-display text-[7rem] text-white/15 md:text-[9rem]">
                  {person.initials}
                </span>
                <div className="absolute bottom-6 left-6">
                  <p className="font-display text-lg font-semibold text-white md:text-xl">{person.name}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
