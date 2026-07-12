import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const GALLERY: { src: string; alt: string; heightClass: string; raise?: boolean }[] = [
  {
    src: "/images/Serene Mid-Century Modern Interior.png",
    alt: "A calm, considered interior by Sindur Group",
    heightClass: "h-48 md:h-60",
  },
  {
    src: "/images/SAAMARTHYA HD IMAGES/topview.jpg",
    alt: "Aerial view of a Sindur Group residential project",
    heightClass: "h-64 md:h-80",
  },
  {
    src: "/images/Modern Luxury House at Dusk.png",
    alt: "A Sindur Group landmark at dusk",
    heightClass: "h-80 md:h-[32rem]",
    raise: true,
  },
  {
    src: "/images/SAAMARTHYA HD IMAGES/childrenarea.jpg",
    alt: "Landscaped amenities at a Sindur Group project",
    heightClass: "h-64 md:h-80",
  },
  {
    src: "/images/VIENNA (PG) HD IMAGES/PG Frontview.jpg",
    alt: "Sindur Vienna, a managed living address in Ambawadi",
    heightClass: "h-48 md:h-60",
  },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#12100d] px-6 pt-24 pb-16 md:px-12 md:pt-28 md:pb-20 lg:px-16 lg:pt-32">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[40%] block whitespace-nowrap text-center font-display text-[16vw] font-medium leading-none text-white/5 select-none md:top-[44%]"
      >
        CONTACT
      </span>

      <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="whitespace-nowrap font-display text-3xl leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Connect With Sindur <span className="italic">Group Now.</span>
        </h1>
      </Reveal>

      <div className="relative z-10 -mx-4 mt-20 flex items-end justify-center gap-0.5 md:-mx-8 md:mt-28 md:gap-1 lg:-mx-10">
        {GALLERY.map((item, i) => (
          <Reveal
            key={item.src}
            delay={i * 0.08}
            className={`flex flex-col ${item.raise ? "flex-[1.6] -mt-10 md:-mt-16" : "flex-1"}`}
          >
            <span className="mb-2 block text-xs text-white/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={`relative w-full overflow-hidden ${item.heightClass}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.raise ? "(min-width: 768px) 30vw, 50vw" : "(min-width: 768px) 18vw, 35vw"}
                className="object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
