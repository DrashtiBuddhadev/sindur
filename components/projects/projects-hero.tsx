import Image from "next/image";

export function ProjectsHero() {
  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden bg-white">
      <Image
        src="/images/real/projects_mobile.jpeg"
        alt="Iconic spaces - projects by SINDUR CN GROUP"
        fill
        priority
        sizes="100vw"
        className="object-contain md:hidden"
      />
      <Image
        src="/images/real/projects.jpeg"
        alt="Iconic spaces - projects by SINDUR CN GROUP"
        fill
        priority
        sizes="100vw"
        className="hidden object-contain md:block"
      />
    </section>
  );
}
