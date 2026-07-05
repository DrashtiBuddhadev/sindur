import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

const CARD_BG = "bg-[#f7f4ee]";
const GRID_LINE = "border-white/35";

function ExpertiseCard({
  number,
  image,
  imageAlt,
  caption,
  description,
}: {
  number: string;
  image: string;
  imageAlt: string;
  caption: string;
  description: string;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden border p-3 transition-colors duration-300 hover:border-[#175892] md:p-4 ${CARD_BG} ${GRID_LINE}`}
    >
      <span className="mb-2 block text-xs tracking-[0.1em] text-neutral-400">{number}</span>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 25vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-neutral-700 transition-colors duration-300 group-hover:text-[#175892]">
        {caption}
      </p>

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-[#175892]/0 p-6 opacity-0 transition-all duration-300 md:p-8 group-hover:bg-[#175892]/92 group-hover:opacity-100">
        <span className="mb-2 translate-y-2 text-[10px] tracking-[0.1em] text-white/60 transition-transform duration-300 group-hover:translate-y-0">
          {number}
        </span>
        <h3 className="translate-y-2 font-display text-base text-white transition-transform duration-300 group-hover:translate-y-0 md:text-lg">
          {caption}
        </h3>
        <p className="mt-3 translate-y-2 text-xs leading-relaxed text-white/75 transition-transform duration-300 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhoWeAre() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Modern Desert Home.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col gap-2 p-3 md:gap-3 md:p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
          <Reveal
            className={`flex flex-col justify-center gap-3 border p-6 md:col-span-2 md:p-8 ${GRID_LINE}`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Who We Are</p>
            <h2 className="font-display text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
              A Name Naranpura
              <br />
              <em className="text-white/75 not-italic">Trusts.</em>
            </h2>
            <p className="max-w-md text-sm leading-[1.7] text-white/70">
              Sindur Group is one of the most trusted real estate developers in Naranpura and its
              surrounding neighbourhoods — building urban convenience and green living into every
              project since 2014.
            </p>
            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-3 border-b border-white/30 pb-1 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Read Our Story <span>→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="self-start">
            <ExpertiseCard
              number="01"
              image="/images/Serene Mid-Century Modern Interior.png"
              imageAlt="Calm, considered interiors reflecting Sindur's design philosophy"
              caption="Our Philosophy"
              description="Urban comfort and green living aren't a trade-off. They're a design brief."
            />
          </Reveal>

          <Reveal delay={0.15} className="self-start">
            <ExpertiseCard
              number="02"
              image="/images/Modern Cantilevered House.png"
              imageAlt="Modern living spaces by Sindur Group"
              caption="Modern Living"
              description="Thoughtfully planned homes built for comfort, light, and everyday ease."
            />
          </Reveal>
        </div>

        <div
          className={`grid grid-cols-1 gap-3 border-t md:grid-cols-[35%_1fr_1fr_1fr] md:gap-4 ${GRID_LINE}`}
        >
          <div className={`hidden border md:block ${GRID_LINE}`} />

          <Reveal delay={0.1} className="self-start">
            <ExpertiseCard
              number="03"
              image="/images/Modern Luxury House at Dusk.png"
              imageAlt="Sindur Group's promise of trust, reflected in every home"
              caption="Our Promise"
              description="95% of our customers would recommend us — one project at a time."
            />
          </Reveal>

          <Reveal delay={0.15} className="self-start">
            <ExpertiseCard
              number="04"
              image="/images/Modern House at Twilight.png"
              imageAlt="Timeless residential spaces by Sindur Group"
              caption="Timeless Spaces"
              description="Designed to hold their value and their character for generations."
            />
          </Reveal>

          <Reveal delay={0.2} className={`flex items-end justify-end border p-1.5 md:p-2 ${GRID_LINE}`}>
            <p className="text-right text-xs uppercase tracking-[0.2em] text-white/70">
              Build for Future.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
