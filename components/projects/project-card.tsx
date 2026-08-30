import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, type Project } from "@/lib/projects";

const UNFOLD = { duration: 0.75, ease: [0.65, 0, 0.35, 1] as const };

export function ProjectCard({
  project,
  className,
  showTag,
  sizeClassName = "aspect-[4/5]",
}: {
  project: Project;
  className?: string;
  showTag?: boolean;
  sizeClassName?: string;
}) {
  const categoryLabel = CATEGORIES.find((c) => c.id === project.category)?.label;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={UNFOLD}
      className={`break-inside-avoid ${className ?? ""}`}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block h-full w-full border border-[#dbe7f3] bg-white transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(29,90,140,0.08)]"
      >
        <div className={`relative overflow-hidden bg-[#eef5fc] ${sizeClassName}`}>
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
          />
          {showTag && categoryLabel && (
            <span className="absolute left-4 top-4 border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1d5a8c] backdrop-blur-md">
              {categoryLabel}
            </span>
          )}

          <div className="absolute inset-0 flex items-start justify-start overflow-hidden bg-white/88 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="h-full w-full origin-top scale-y-0 border-t border-[#dbe7f3] bg-white/92 p-5 transition duration-500 ease-out group-hover:scale-y-100">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6a8fb3]">
                {project.location}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-[#123b66] md:text-2xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-[1.75] text-[#4e6f93]">
                {project.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 border border-[#dbe7f3] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5f7893]">
                View project
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
