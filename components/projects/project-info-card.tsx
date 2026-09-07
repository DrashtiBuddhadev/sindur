"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CATEGORIES, type Project } from "@/lib/projects";

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2v9m0 0 3.5-3.5M9 11 5.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 13.5v1a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 16.5s5.5-4.86 5.5-9A5.5 5.5 0 0 0 3.5 7.5c0 4.14 5.5 9 5.5 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7.5" r="1.75" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function InquiryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 5l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActionButton({
  href,
  download,
  external,
  icon,
  label,
}: {
  href: string;
  download?: boolean;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center gap-2"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-[var(--color-ink)] transition-colors duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white">
        {icon}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
        {label}
      </span>
    </Link>
  );
}

export function ProjectInfoCard({ project }: { project: Project }) {
  const categoryLabel = CATEGORIES.find((c) => c.id === project.category)?.label;
  const mapHref =
    project.mapUrl ??
    `https://www.google.com/maps/search/${encodeURIComponent(`${project.location}, Ahmedabad`)}`;

  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto -mt-20 flex max-w-6xl flex-col gap-8 rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] sm:flex-row sm:items-center sm:justify-between md:-mt-24 md:p-10"
      >
        <div>
          <h1 className="font-display text-2xl font-semibold leading-tight text-[var(--color-ink)] md:text-3xl">
            {project.name}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            {categoryLabel}
            {categoryLabel && " | "}
            {project.location}
          </p>
        </div>

        <div className="flex items-start gap-6 sm:gap-8">
          <ActionButton
            href={`/brochures/${project.slug}.pdf`}
            download
            icon={<DownloadIcon />}
            label="Download"
          />
          <ActionButton href={mapHref} external icon={<LocationIcon />} label="Location" />
          <ActionButton href="/contact" icon={<InquiryIcon />} label="Inquiry" />
        </div>
      </motion.div>
    </div>
  );
}
