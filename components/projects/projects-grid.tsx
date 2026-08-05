"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { CATEGORIES, PROJECTS, type ProjectCategory } from "@/lib/projects";

type Filter = "all" | ProjectCategory;

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
        active
          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
          : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      }`}
    >
      {children}
    </button>
  );
}

export function ProjectsGrid({ initialCategory }: { initialCategory?: ProjectCategory }) {
  const [active, setActive] = useState<Filter>(initialCategory ?? "all");

  const projects =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id="projects-grid"
      className="scroll-mt-24 bg-[var(--color-bg)] px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 flex flex-wrap items-center gap-3 border-b border-[var(--color-border)] pb-8">
          <FilterButton active={active === "all"} onClick={() => setActive("all")}>
            All Projects
          </FilterButton>
          {CATEGORIES.map((cat) => (
            <FilterButton key={cat.id} active={active === cat.id} onClick={() => setActive(cat.id)}>
              {cat.label}
            </FilterButton>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              offset={i % 2 === 1}
              showTag={active === "all"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
