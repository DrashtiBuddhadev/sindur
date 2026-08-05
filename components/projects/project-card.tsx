import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { CATEGORIES, type Project } from "@/lib/projects";

export function ProjectCard({
  project,
  offset,
  showTag,
}: {
  project: Project;
  offset?: boolean;
  showTag?: boolean;
}) {
  const categoryLabel = CATEGORIES.find((c) => c.id === project.category)?.label;

  return (
    <Reveal className={offset ? "md:mt-16 lg:mt-20" : undefined}>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {showTag && categoryLabel && (
            <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm">
              {categoryLabel}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4 border border-[var(--color-border)] p-4">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Project
            </p>
            <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] md:text-xl">
              {project.name}
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted)]">{project.location}</p>
          </div>
          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white">
            <ArrowIcon className="rotate-[-45deg]" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
