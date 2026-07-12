import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CareersHero } from "@/components/careers/careers-hero";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Careers | Sindur Group",
  description: "Build landmarks with Sindur Group — explore careers in Naranpura, Ahmedabad.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersHero />
        <ContactForm variant="careers" />
      </main>
      <Footer />
    </>
  );
}
