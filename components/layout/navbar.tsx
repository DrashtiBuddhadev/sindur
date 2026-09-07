"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PROJECT_CATEGORIES = [
  { label: "Residential", href: "/projects?category=residential" },
  { label: "Commercial", href: "/projects?category=commercial" },
  { label: "PG / Studio Living", href: "/projects?category=pg" },
  { label: "Plots", href: "/projects?category=plots" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

const TRAILING_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export function Navbar({ overDarkHero = false }: { overDarkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const chrome = scrolled
    ? "liquid-glass-light text-[var(--color-ink)] shadow-sm"
    : overDarkHero
      ? "text-white"
      : "text-[var(--color-ink)]";

  const logoInverted = !scrolled && overDarkHero;
  const linkHover = overDarkHero && !scrolled ? "hover:text-white/70" : "hover:text-[var(--color-primary)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 lg:px-16 ${chrome}`}
      >
        <Link
          href="/"
          className="relative h-9 w-[130px] shrink-0 overflow-hidden md:h-10 md:w-[148px]"
          aria-label="Sindur Group home"
        >
          <Image
            src="/sindur_logo.png"
            alt="Sindur Group"
            width={3789}
            height={1580}
            className={`absolute left-0 top-0 h-[148%] w-auto max-w-none object-contain transition-[filter] duration-300 ${
              logoInverted ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`transition-colors duration-200 ${linkHover}`}>
              {link.label}
            </Link>
          ))}

          <div className="relative flex items-center gap-1" ref={dropdownRef}>
            <Link href="/projects" className={`transition-colors duration-200 ${linkHover}`}>
              Projects
            </Link>
            <button
              type="button"
              onClick={() => setProjectsOpen((v) => !v)}
              aria-expanded={projectsOpen}
              aria-haspopup="true"
              aria-label="Toggle projects menu"
              className={`flex items-center transition-colors duration-200 cursor-pointer ${linkHover}`}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
              >
                <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>

            {projectsOpen && (
              <div className="liquid-glass-light absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 p-2 shadow-lg">
                {PROJECT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setProjectsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-[var(--color-ink)] transition-colors hover:bg-black/5"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {TRAILING_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`transition-colors duration-200 ${linkHover}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[var(--color-ink)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary)] sm:inline-block"
          >
            Enquire Now
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d={mobileOpen ? "M3 3l12 12M15 3L3 15" : "M2 4.5h14M2 9h14M2 13.5h14"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="liquid-glass-light relative px-6 pb-4 text-sm text-[var(--color-ink)] md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="px-3 pt-2 pb-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]"
            >
              Projects
            </Link>
            {PROJECT_CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-6 py-2"
              >
                {cat.label}
              </Link>
            ))}
            {TRAILING_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[var(--color-ink)] px-4 py-2.5 text-center font-medium text-white transition-colors hover:bg-[var(--color-primary)]"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
