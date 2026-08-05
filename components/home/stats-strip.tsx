import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/home/count-up";

const STATS = [
  { value: 2, suffix: "M+", label: "Sq.Ft. Developed" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 1000, suffix: "+", label: "Homes Delivered" },
  { value: 95, suffix: "%", label: "Customer Satisfaction" },
];

export function StatsStrip() {
  return (
    <section className="bg-[var(--color-bg)] px-6 py-14 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center md:text-left">
            <p className="font-display text-3xl font-semibold text-[var(--color-primary)] md:text-4xl lg:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)] md:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
