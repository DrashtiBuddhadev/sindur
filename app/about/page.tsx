import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { VisionMissionPhilosophy } from "@/components/about/vision-mission-philosophy";
import { TeamSpotlight } from "@/components/about/team-spotlight";
import { AboutCta } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | Sindur Group",
  description:
    "Ten years, 1000+ homes, one promise kept. Meet the people and philosophy behind Sindur Group's landmark projects across Ahmedabad.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <HistoryTimeline />
        <VisionMissionPhilosophy />
        <TeamSpotlight />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
