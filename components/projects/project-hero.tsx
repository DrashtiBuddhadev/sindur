"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/home/animated-heading";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { Project } from "@/lib/projects";

function FadeIn({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative flex h-[100svh] min-h-[580px] w-full items-end overflow-hidden bg-[#12100d]">
      <Image
        src={project.images[0]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

      <div className="relative z-10 w-full px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
        <FadeIn
          delay={0.1}
          className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.1em] text-white/60"
        >
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{project.location}</span>
        </FadeIn>

        <AnimatedHeading
          text={`${project.name}.`}
          className="max-w-3xl font-display font-semibold text-3xl leading-[1.15] text-white md:text-4xl lg:text-5xl"
        />

        <FadeIn
          delay={1}
          className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 md:text-base"
        >
          {project.tagline}
        </FadeIn>

        <FadeIn delay={1.2} className="mt-8 flex flex-wrap gap-4">
          <a
            href={`/brochures/${project.slug}.pdf`}
            download
            className="rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:bg-gray-100"
          >
            Download Brochure
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black"
          >
            <span>Enquire Now</span>
            <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
