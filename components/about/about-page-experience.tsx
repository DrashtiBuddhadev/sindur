"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { VisionMissionPhilosophy } from "@/components/about/vision-mission-philosophy";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const DIFFERENCE = [
  {
    title: "Thoughtful Planning",
    copy: "Every project begins with understanding how people will actually use the space. Layouts, circulation, functionality and convenience are considered from the planning stage.",
    image: "/images/ANALA FINAL VIEW 18.07.2025/14_ALIGN_SINDUR ANALA.jpg",
  },
  {
    title: "Quality That Lasts",
    copy: "Quality remains central throughout the development process - from planning and material considerations to construction and finishing.",
    image: "/images/ANALA FINAL VIEW 18.07.2025/17_01_ALIGN_SINDUR ANALA.jpg",
  },
  {
    title: "Distinctive Design",
    copy: "Every SINDUR CN development is approached with its own architectural identity while maintaining our core standards of functionality and thoughtful design.",
    image: "/images/SPECTRUM HD IMAGES/view_01.jpg",
  },
  {
    title: "Modern Living",
    copy: "Our developments respond to the changing needs of today's families and businesses while remaining relevant for tomorrow.",
    image: "/images/SAAMARTHYA HD IMAGES/Club view.jpg",
  },
];

const BUILD_STEPS = [
  {
    title: "Understand the life inside",
    copy: "We begin with how people will actually use the space - movement, comfort, light, privacy and daily convenience.",
    image: "/images/ANALA FINAL VIEW 18.07.2025/14_ALIGN_SINDUR ANALA.jpg",
  },
  {
    title: "Read the location carefully",
    copy: "The value of a development is closely connected to connectivity, surroundings and long-term potential.",
    image: "/images/SPECTRUM HD IMAGES/view_01.jpg",
  },
  {
    title: "Give every project identity",
    copy: "Each location deserves a distinct response through architecture, planning, functionality and visual character.",
    image: "/images/SAAMARTHYA HD IMAGES/Club view.jpg",
  },
];

const UNFOLD_TRANSITION = { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const };
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1d5a8c]">
      {children}
    </p>
  );
}

function ImagePanel({
  src,
  alt,
  className,
  imageClassName,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...UNFOLD_TRANSITION, delay }}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className={imageClassName ?? "object-cover"} />
    </motion.div>
  );
}

function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={sectionRef} className="relative h-svh min-h-[560px] w-full overflow-hidden bg-white">
      <motion.div style={{ y }} className="absolute inset-0 h-[112%] w-full">
        <Image
          src="/images/real/about us.jpeg"
          alt="Unlocking value with a classic key - SINDUR CN GROUP"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}

export function AboutPageExperience() {
  return (
    <main className="bg-white text-[var(--color-ink)]">
      <AboutHero />

      <section className="bg-white px-3 py-12 md:px-6 md:py-18 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col justify-between bg-[#faf9f6] p-6 md:p-8">
            <div>
              <SectionLabel>A Legacy Built on Trust</SectionLabel>
              <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
                More Than Buildings. A Commitment That Lasts.
              </h2>
            </div>
            <p className="mt-10 max-w-md font-display text-xl font-semibold leading-snug text-[#1d5a8c] md:text-2xl">
              Build with purpose. Deliver with responsibility. Earn trust for life.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3">
            <ImagePanel
              src="/images/ANALA FINAL VIEW 18.07.2025/06_01_ALIGN_SINDUR ANALA.jpg"
              alt="A landscaped residential courtyard by SINDUR CN GROUP"
              className="aspect-[16/9] md:aspect-[21/9]"
              imageClassName="object-cover object-center"
            />
            <Reveal delay={0.1} className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <p className="bg-white p-6 text-sm leading-[1.8] text-neutral-500 md:p-7 md:text-base">
                Since our establishment in 2014, SINDUR CN GROUP has steadily built its presence
                across Naranpura and surrounding areas with one philosophy at the centre of
                everything we do.
              </p>
              <p className="bg-[#f4f1eb] p-6 text-sm leading-[1.8] text-neutral-500 md:p-7 md:text-base">
                Every completed project represents more than another milestone. It represents
                another relationship, another family and another promise fulfilled.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 md:py-18 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
          <div className="grid grid-cols-[0.8fr_1fr] gap-3">
            <ImagePanel
              src="/images/SPECTRUM HD IMAGES/view_01.jpg"
              alt="SINDUR CN commercial development frontage"
              className="aspect-[3/4]"
              imageClassName="object-cover object-center"
            />
            <ImagePanel
              src="/images/SAAMARTHYA HD IMAGES/Club view.jpg"
              alt="SINDUR CN green amenity and clubhouse setting"
              className="mt-14 aspect-[3/4]"
              imageClassName="object-cover object-center"
              delay={0.1}
            />
          </div>

          <Reveal delay={0.1}>
            <SectionLabel>From Blueprint to Belonging</SectionLabel>
            <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Spaces that become part of your story.
            </h2>
            <p className="mt-6 text-sm leading-[1.85] text-neutral-500 md:text-base">
              Every development begins as an idea. A piece of land. A plan. A possibility. But for
              the person who eventually lives there, it becomes much more: mornings on a balcony,
              families gathering, children growing and an address tied to years of memories.
            </p>
            <p className="mt-5 font-display text-xl font-semibold text-neutral-900">
              We build for the life that will happen inside it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-3 py-12 md:px-6 md:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-2xl px-3 md:px-0">
            <SectionLabel>How We Build</SectionLabel>
            <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              The process behind places that feel considered.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.18fr_0.82fr]">
            <Reveal className="relative min-h-[440px] overflow-hidden lg:min-h-[620px]">
              <Image
                src="/images/ANALA FINAL VIEW 18.07.2025/06_01_ALIGN_SINDUR ANALA.jpg"
                alt="Green courtyard planning by SINDUR CN GROUP"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xl p-6 md:p-8">
                <p className="font-display text-2xl font-semibold leading-tight text-white md:text-4xl">
                  Better Planning. Better Spaces. Better Tomorrow.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3">
              {BUILD_STEPS.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.07}>
                  <article className="group grid min-h-[196px] grid-cols-[0.45fr_0.55fr] overflow-hidden border border-black/10 bg-white">
                    <div className="relative overflow-hidden">
                      <Image
                        src={step.image}
                        alt={`${step.title} at SINDUR CN GROUP`}
                        fill
                        sizes="(min-width: 1024px) 16vw, 42vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <span className="font-display text-xs font-semibold text-[#a57c45]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-neutral-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.65] text-neutral-500">{step.copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VisionMissionPhilosophy />

      <section className="bg-white px-3 py-12 md:px-6 md:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-2xl px-3 md:px-0">
            <SectionLabel>The SINDUR CN Difference</SectionLabel>
            <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Thoughtful standards, visible in every detail.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {DIFFERENCE.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group grid min-h-[240px] grid-cols-1 overflow-hidden border border-black/10 bg-white sm:grid-cols-[0.82fr_1fr]">
                  <div className="relative min-h-[220px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} by SINDUR CN GROUP`}
                      fill
                      sizes="(min-width: 768px) 25vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <span className="font-display text-xs font-semibold text-[#a57c45]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-8">
                      <h3 className="font-display text-xl font-semibold text-neutral-900">{item.title}</h3>
                      <p className="mt-4 text-sm leading-[1.75] text-neutral-500">{item.copy}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-visible bg-[var(--color-primary)] px-6 md:mt-12 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col md:h-[260px] md:flex-row md:items-center">
          <Reveal className="flex flex-col justify-center gap-5 py-12 md:w-1/2 md:py-0">
            <h2 className="font-display text-2xl font-semibold leading-snug text-white md:text-3xl lg:text-4xl">
              Modern Design. Meaningful Functionality.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)] transition-colors hover:bg-black hover:text-white"
            >
              Get in Touch
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="hidden md:flex md:w-1/2 md:justify-end md:self-end">
            <Image
              src="/images/real/flats2.png"
              alt="A SINDUR CN GROUP residential building"
              width={447}
              height={559}
              className="h-[300px] w-auto object-contain md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-12 md:px-6 md:py-18 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="grid grid-cols-1 gap-3 sm:min-h-[520px] sm:grid-cols-[0.68fr_0.32fr]">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-auto sm:h-full">
              <Image
                src="/images/ANALA FINAL VIEW 18.07.2025/17_01_ALIGN_SINDUR ANALA.jpg"
                alt="SINDUR CN residential project exterior"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-auto sm:h-full">
              <Image
                src="/images/real/pg.jpeg"
                alt="Managed living by SINDUR CN GROUP"
                fill
                sizes="(min-width: 768px) 18vw, 100vw"
                className="object-cover object-[center_72%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-between bg-[#faf9f6] p-6 md:p-8">
            <div>
              <SectionLabel>Built Around People</SectionLabel>
              <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
                Because real estate is ultimately about people.
              </h2>
            </div>
            <div className="mt-10 space-y-5 text-sm leading-[1.85] text-neutral-500 md:text-base">
              <p>
                Behind every apartment number is a family. Behind every commercial space is an
                ambition. Behind every purchase is years of aspiration, planning and trust.
              </p>
              <p>
                We recognise the responsibility that comes with being chosen for something so
                important. That is why customer confidence remains one of the strongest measures of
                our success.
              </p>
              <p className="font-display text-xl font-semibold leading-snug text-neutral-900 md:text-2xl">
                More than 1,000 families have chosen homes created by SINDUR CN GROUP.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutCta />
    </main>
  );
}

function AboutCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[25%] h-[150%]">
        <Image
          src="/images/690c5f3d7d5be8f105fc0951_mO6tDYnT-p-1600.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 px-6 pt-36 pb-24 md:px-12 md:pt-48 md:pb-32 lg:px-16 lg:pt-60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 text-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Let&apos;s find a space built around your future.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black"
            >
              <span>Get in Touch</span>
              <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
