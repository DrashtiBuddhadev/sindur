import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/images/real/careers_mobile.jpeg"
        alt="Create impact - careers at SINDUR CN GROUP"
        width={1080}
        height={1920}
        priority
        sizes="100vw"
        className="mt-[20%] block h-auto w-full md:hidden"
      />
      <Image
        src="/images/real/career.jpeg"
        alt="Create impact - careers at SINDUR CN GROUP"
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="hidden h-auto w-full md:block"
      />
    </section>
  );
}
