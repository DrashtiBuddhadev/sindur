"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedHeading } from "@/components/home/animated-heading";

function FadeIn({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-[#12100d]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
        <div className="lg:grid lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-10">
          <div>
            <AnimatedHeading
              text={"Building Ahmedabad,\nOne Landmark at a Time."}
              className="mb-4 font-display font-medium text-2xl leading-[1.2] text-white md:text-3xl lg:text-4xl xl:text-5xl"
            />

            {/* <FadeIn delay={0.8}>
              <p className="mb-5 max-w-xl text-base text-gray-300 md:text-lg">
                Since 2014, Sindur Group has delivered 1000+ homes across Naranpura and beyond —
                residential and commercial spaces designed for modern, eco-friendly living.
              </p>
            </FadeIn> */}

            <FadeIn delay={1.2} className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
              >
                Explore Our Projects →
              </Link>
              <Link
                href="/contact"
                className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Enquire Now
              </Link>
            </FadeIn>
          </div>

          <div className="mt-8 flex items-end justify-start lg:mt-0 lg:justify-end">
            <FadeIn delay={1.4}>
              <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
                <p className="text-md font-light text-white md:text-md lg:text-lg">
                  Residential · Commercial · PG · Plots
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
