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
      className={`border px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
        active
          ? "border-[#1d5a8c] bg-[#1d5a8c] text-white"
          : "border-[#c9ddf2] bg-white text-[#4e6f93] hover:border-[#1d5a8c] hover:text-[#1d5a8c]"
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
      className="scroll-mt-24 bg-[#F9F9F9] px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-[#123b66] md:text-4xl">
            Our Projects
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 mb-12 flex flex-wrap items-center justify-center gap-3">
          <FilterButton active={active === "all"} onClick={() => setActive("all")}>
            All Projects
          </FilterButton>
          {CATEGORIES.map((cat) => (
            <FilterButton key={cat.id} active={active === cat.id} onClick={() => setActive(cat.id)}>
              {cat.label}
            </FilterButton>
          ))}
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              showTag={active === "all"}
              className="mb-4"
              sizeClassName={i % 3 === 2 ? "aspect-[10/13]" : i % 3 === 1 ? "aspect-[1/1.18]" : "aspect-[4/5]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
