import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/images/real/contact_mobile.jpeg"
        alt="Let's talk - SINDUR CN GROUP"
        width={1080}
        height={1920}
        priority
        sizes="100vw"
        className="block h-auto w-full md:hidden"
      />
      <Image
        src="/images/real/contact us.jpeg"
        alt="Let's talk - SINDUR CN GROUP"
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="hidden h-auto w-full md:block"
      />
    </section>
  );
}
