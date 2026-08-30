"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={sectionRef} className="relative h-svh min-h-[560px] w-full overflow-hidden bg-white">
      <motion.div style={{ y }} className="absolute inset-0 h-[122%] w-full">
        <Image
          src="/images/real/home_mobile.jpeg"
          alt="Sindur Group — landmark residential and commercial developments across Ahmedabad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%] md:hidden"
        />
        <Image
          src="/images/real/main banner1.jpeg"
          alt="Sindur Group — landmark residential and commercial developments across Ahmedabad"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_60%] md:block"
        />
      </motion.div>
    </section>
  );
}
