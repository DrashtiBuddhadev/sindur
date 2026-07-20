import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { getProjectBySlug } from "@/lib/projects";

const anala = getProjectBySlug("sindur-anala")!;
const saamarthya = getProjectBySlug("sindur-saamarthya")!;
const spectrum = getProjectBySlug("sindur-spectrum")!;
const vienna = getProjectBySlug("sindur-vienna")!;

const CATEGORIES = [
  {
    label: "Residential",
    copy: "Thoughtfully planned apartments and homes built for modern living, from Akhbar Nagar to Naranpura. Every project pairs spacious layouts with dedicated EV charging, landscaped gardens, and round-the-clock security — the everyday comforts that turn a house into a home.",
    linkLabel: "Our residential projects",
    imageLarge: anala.images[0],
    imageSmall: saamarthya.images[0],
    href: "/projects#residential",
  },
  {
    label: "Commercial",
    copy: "Business spaces at prime Ahmedabad locations including S.P. Ring Road and Shilaj, designed to work as hard as you do. From showrooms to corner-plot offices, each address is built for visibility, footfall, and long-term value.",
    linkLabel: "Our commercial projects",
    imageLarge: spectrum.images[0],
    imageSmall: spectrum.images[3],
    href: "/projects#commercial",
  },
  {
    label: "PG / Studio Living",
    copy: "Exclusive studio PG accommodation at Ambawadi, redefining managed living for young professionals. Fully furnished rooms, on-site amenities, and assured rental returns make it a home for residents and a dependable investment for owners.",
    linkLabel: "Our PG residences",
    imageLarge: vienna.images[0],
    imageSmall: vienna.images[1],
    href: "/projects#pg",
  },
  {
    label: "Plots",
    copy: "Well-located land parcels for those who want to build their own vision. Low-density, club-class developments just outside the city offer room to grow — ideal for weekend homes, farmhouses, or a long-term investment in land.",
    linkLabel: "Our plotted developments",
    imageLarge: "/images/Modern Cantilevered House.png",
    imageSmall: "/images/Modern Cantilevered House.png",
    href: "/projects#plots",
  },
];

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-black/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-neutral-900 transition-colors duration-300 hover:border-[#175892] hover:bg-[#175892] hover:text-white"
    >
      <span>{children}</span>
      <ArrowIcon className="-mb-px transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function WhatWeDo() {
  return (
    <section className="bg-white px-6 pt-20 pb-8 md:px-12 md:pt-28 md:pb-12 lg:px-16">
      <div className="mx-auto max-w-6xl pb-14 md:pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-[#1d5a8c]">
              What We Do
            </p>
            <h2 className="font-display text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Spaces for Every Stage of Life.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start justify-center gap-6">
            <p className="max-w-md text-sm leading-[1.75] text-neutral-500 md:text-base">
              Four ways we build across Ahmedabad — each shaped by the same promise of urban
              convenience and green living.
            </p>
            <ArrowLink href="/projects">View all projects</ArrowLink>
          </Reveal>
        </div>
      </div>

      <div className="divide-y divide-black/10 border-t border-black/10">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <Reveal className="md:col-span-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={cat.imageLarge}
                  alt={`${cat.label} projects by Sindur Group`}
                  fill
                  sizes="(min-width: 768px) 28vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col items-center gap-4 md:col-span-5">
              <h3 className="font-display text-center text-2xl text-neutral-900 md:text-3xl">
                {cat.label}
              </h3>
              <p className="max-w-md text-justify text-sm leading-[1.75] text-neutral-500 md:text-base">
                {cat.copy}
              </p>
              <ArrowLink href={cat.href}>{cat.linkLabel}</ArrowLink>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={cat.imageSmall}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 20vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
