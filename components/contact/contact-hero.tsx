import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden bg-white">
      <Image
        src="/images/real/contact_mobile.jpeg"
        alt="Let's talk - SINDUR CN GROUP"
        fill
        priority
        sizes="100vw"
        className="object-contain md:hidden"
      />
      <Image
        src="/images/real/contact us.jpeg"
        alt="Let's talk - SINDUR CN GROUP"
        fill
        priority
        sizes="100vw"
        className="hidden object-contain md:block"
      />
    </section>
  );
}
