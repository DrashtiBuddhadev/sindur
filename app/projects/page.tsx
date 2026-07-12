import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { ScrollTrack } from "@/components/projects/scroll-track";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { AboutCta } from "@/components/about/about-cta";
import { CATEGORIES, type ProjectCategory } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Sindur Group",
  description:
    "Residential, commercial, PG, and plotted developments by Sindur Group across Naranpura, Ambawadi, Shilaj, and beyond.",
};

function isProjectCategory(value: string | undefined): value is ProjectCategory {
  return CATEGORIES.some((cat) => cat.id === value);
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = isProjectCategory(category) ? category : undefined;

  return (
    <>
      <Navbar />
      <ScrollTrack />
      <main>
        <ProjectsHero />
        <ProjectsGrid key={initialCategory ?? "all"} initialCategory={initialCategory} />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
