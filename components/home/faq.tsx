"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "01",
    question: "Where are Sindur Group's projects located?",
    answer: "Our developments are strategically situated in premium and growing micro-markets across Ahmedabad, including Akhbar Nagar, Naranpura, Shilaj, S.P. Ring Road, and Ambawadi.",
  },
  {
    id: "02",
    question: "What types of properties do you offer?",
    answer: "We design and develop thoughtfully planned residential apartments, premium commercial spaces, modern PG/studio accommodations, and premium residential land plotting projects.",
  },
  {
    id: "03",
    question: "Are all Sindur Group projects RERA approved?",
    answer: "Yes, compliance is a core pillar of our philosophy. All our active and completed developments are fully registered under Gujarat RERA (GUJRERA) and adhere strictly to all regulatory guidelines.",
  },
  {
    id: "04",
    question: "How can I schedule a site visit?",
    answer: "You can easily arrange a visit by visiting our Contact page and filling out the form, or by calling our sales helpline directly. A relationship manager will coordinate a tour at your convenience.",
  },
  {
    id: "05",
    question: "What is the core philosophy behind your construction?",
    answer: "We prioritize functional design, structural integrity, and eco-friendly practices. Each project is planned to maximize natural ventilation, day-lighting, and green areas while offering premium amenities.",
  },
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-0 pb-16 md:pt-0 md:pb-24 lg:pt-0 lg:pb-32 dark:bg-[var(--color-bg)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[35%_1fr] md:gap-12 lg:gap-16">
          {/* Left Column - Heading */}
          <Reveal>
            <div className="flex flex-col">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-wide text-[var(--color-ink)] md:text-5xl">
                Frequently <br />
                Asked <br />
                <span className="text-neutral-300 dark:text-neutral-700">Questions.</span>
              </h2>
            </div>
          </Reveal>

          {/* Right Column - Accordion */}
          <div className="border-t border-[var(--color-border)]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={item.id}
                  className="border-b border-[var(--color-border)]"
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between py-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <div className="flex items-start gap-6 md:gap-10">
                      <span className="text-xs font-medium tracking-wider text-neutral-300 dark:text-neutral-600 pt-1.5 md:pt-2">
                        {item.id}
                      </span>
                      <span className="font-display text-lg font-medium text-[var(--color-ink)] md:text-xl lg:text-2xl transition-colors duration-200 group-hover:text-[var(--color-primary)]">
                        {item.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-xl font-light text-neutral-400 dark:text-neutral-500"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pb-6 pr-6 md:pl-16 text-sm md:text-base leading-relaxed text-[var(--color-muted)]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
