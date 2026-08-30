import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/home/count-up";

const STATS = [
  { value: 2, suffix: "M+", label: "Sq.Ft. Developed" },
  { value: 95, suffix: "%", label: "Would Recommend Us" },
];

const LOCATIONS = [
  "Akhbar Nagar",
  "Naranpura",
  "S.P. Ring Road",
  "Shilaj",
  "Gandhinagar",
  "Ognaj",
  "Ambawadi",
];

export function AboutStory() {
  return (
    <section className="bg-[var(--color-bg)] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
            About Sindur
          </p>
          <h2 className="whitespace-nowrap font-display text-2xl font-semibold leading-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl lg:text-5xl">
            More Than a Developer.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-6">
          <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border border-[var(--color-border)] p-4 md:p-5"
              >
                <p className="font-display text-2xl font-semibold text-[var(--color-primary)] md:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)] md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full">
            <p className="text-justify text-sm leading-[1.8] text-[var(--color-muted)] md:text-base">
              Sindur Group was established in 2014 with a simple conviction: a home should offer
              the comfort of the city without giving up the calm of green living. That conviction
              has since shaped 20+ projects and over 2 million square feet of
              development across Ahmedabad.
            </p>
            <p className="mt-4 text-justify text-sm leading-[1.8] text-[var(--color-muted)] md:text-base">
              We build residential, commercial, and managed living spaces — each one modern,
              eco-conscious, and made to last. And behind every number sits the one metric we care
              about most: 95% of our customers would recommend us.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {LOCATIONS.map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-xs text-[var(--color-muted)]"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={0.15}
        className="relative -mx-6 mt-14 aspect-[21/9] overflow-hidden md:-mx-12 md:mt-20 lg:-mx-16"
      >
        <Image
          src="/images/ANALA FINAL VIEW 18.07.2025/06_01_ALIGN_SINDUR ANALA.jpg"
          alt="A Sindur Group residential project, built for modern and eco-conscious living"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
