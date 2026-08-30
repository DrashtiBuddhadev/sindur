import { Reveal } from "@/components/motion/reveal";

export function HistoryTimeline() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
            Our History
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
            Ten Years of Building Trust.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
          <Reveal className="border border-black/10 bg-white p-8 md:p-10">
            <span className="font-display text-4xl font-semibold text-[var(--color-primary)] md:text-5xl">
              2014
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900 md:text-xl">
              Where It Began
            </h3>
            <p className="mt-3 text-sm leading-[1.75] text-neutral-500 md:text-base">
              Sindur Group was founded in Naranpura, Ahmedabad, on a conviction that urban comfort
              and green living shouldn&apos;t be a trade-off — they should be the design brief for
              every home we build.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="hidden justify-center md:flex">
            <svg width="64" height="14" viewBox="0 0 64 14" fill="none" aria-hidden="true">
              <path
                d="M1 7h60m0 0-6-6m6 6-6 6"
                stroke="var(--color-primary)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Reveal>

          <Reveal delay={0.15} className="border border-black/10 bg-white p-8 md:p-10">
            <span className="font-display text-4xl font-semibold text-[var(--color-primary)] md:text-5xl">
              Today
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900 md:text-xl">
              A Name Ahmedabad Trusts
            </h3>
            <p className="mt-3 text-sm leading-[1.75] text-neutral-500 md:text-base">
              2M+ sq.ft. developed, 20+ projects, and ongoing developments across
              Naranpura, Ognaj, and Ambawadi — with 95% of our customers recommending us to the
              next.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
