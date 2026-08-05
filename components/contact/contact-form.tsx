"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";

const DESIGNATIONS = [
  "Prospective Buyer",
  "Investor",
  "Broker / Channel Partner",
  "Job Applicant",
  "Vendor / Contractor",
  "Other",
];

const inputClass =
  "border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none";
const labelClass = "text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]";

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} className={inputClass} />
    </div>
  );
}

export function ContactForm({ variant = "contact" }: { variant?: "contact" | "careers" }) {
  const isCareers = variant === "careers";
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[var(--color-bg)] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
            {isCareers ? "Careers" : "Get In Touch"}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
            {isCareers ? "Join Our Team." : "Tell Us What You're Looking For."}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-[1.8] text-[var(--color-muted)] md:text-base">
            {isCareers
              ? "Interested in building landmarks with us? Share your details and resume, and our team will reach out about current opportunities."
              : "Have a question about a project, an investment, or anything else? Send us a message and we'll get back to you shortly."}
          </p>

          <div className="mt-10 flex flex-col gap-6 border-t border-[var(--color-border)] pt-8">
            <div>
              <p className={labelClass}>Call Us</p>
              <p className="mt-1 text-sm text-[var(--color-ink)]">+91 77888 11137</p>
            </div>
            <div>
              <p className={labelClass}>Visit Us</p>
              <p className="mt-1 text-sm text-[var(--color-ink)]">Naranpura, Ahmedabad, Gujarat</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="border border-[var(--color-border)] p-6 md:p-10">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <p className="font-display text-2xl font-semibold text-[var(--color-ink)]">Thank you.</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
                We&apos;ve received your details and will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="name"
                type="text"
                required
              />
              <Field label="Email Address" name="email" type="email" required />

              {isCareers && (
                <>
                  <Field label="Phone Number" name="phone" type="tel" required />

                  <div className="flex flex-col gap-2">
                    <label className={labelClass} htmlFor="designation">
                      Designation
                    </label>
                    <select
                      id="designation"
                      name="designation"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {DESIGNATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className={labelClass} htmlFor="resume">
                      Resume / CV (optional)
                    </label>
                    <label
                      htmlFor="resume"
                      className="flex cursor-pointer items-center justify-between border border-dashed border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)]"
                    >
                      <span className="truncate">{fileName ?? "Choose a file (PDF, DOC)"}</span>
                      <span className="ml-4 shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-ink)]">
                        Browse
                      </span>
                    </label>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us a little about what you're looking for..."
                  className={inputClass}
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 sm:col-span-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[var(--color-ink)] px-8 py-3 font-medium text-[var(--color-bg)] transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
