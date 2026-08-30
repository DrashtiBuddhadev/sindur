import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutPageExperience } from "@/components/about/about-page-experience";

export const metadata: Metadata = {
  title: "About Us | Sindur Group",
  description:
    "Discover SINDUR CN GROUP's purpose, legacy, thoughtful planning, and commitment to creating trusted residential and commercial spaces.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageExperience />
      <Footer />
    </>
  );
}
