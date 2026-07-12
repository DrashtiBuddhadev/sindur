import { Reveal } from "@/components/motion/reveal";
import type { Project } from "@/lib/projects";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_320px] md:gap-16">
        <p className="text-sm leading-[1.8] text-[var(--color-muted)] md:text-base">
          {project.description}
        </p>

        <ul className="flex flex-col gap-1 md:border-l md:border-[var(--color-border)] md:pl-8">
          {project.highlights.map((item, i) => (
            <li
              key={item}
              className={`border-t border-[var(--color-border)] py-3 text-sm text-[var(--color-muted)] first:border-t-0 ${
                i === 0 ? "md:border-t-0" : "md:border-t"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
