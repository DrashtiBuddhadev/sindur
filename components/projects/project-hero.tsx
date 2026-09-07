import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative h-[100svh] min-h-[580px] w-full overflow-hidden bg-[#12100d]">
      <Image
        src={project.images[0]}
        alt={project.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </section>
  );
}
