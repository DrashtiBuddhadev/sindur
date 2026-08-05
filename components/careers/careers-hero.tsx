import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-[#12100d]">
      <Image
        src="/images/SPECTRUM HD IMAGES/view_01.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />

      <div className="relative z-10 px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
          Careers
        </p>
        <p className="font-display text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
          Are you looking to work with us?
        </p>
      </div>
    </section>
  );
}
