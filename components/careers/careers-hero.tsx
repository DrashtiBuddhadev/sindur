import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 top-[20%] md:hidden">
        <Image
          src="/images/real/careers_mobile.jpeg"
          alt="Create impact - careers at SINDUR CN GROUP"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <Image
        src="/images/real/career.jpeg"
        alt="Create impact - careers at SINDUR CN GROUP"
        fill
        priority
        sizes="100vw"
        className="hidden object-contain md:block"
      />
    </section>
  );
}
