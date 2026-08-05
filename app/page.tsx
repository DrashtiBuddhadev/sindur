import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Faq } from "@/components/home/faq";
import { TimelessCta } from "@/components/home/timeless-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <WhoWeAre />
        <WhatWeDo />
        <Faq />
        <TimelessCta />
      </main>
      <Footer />
    </>
  );
}
