import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-12 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <Image
          src="/sindur_logo.png"
          alt="Sindur Group — Build for Future"
          width={200}
          height={65}
          className="h-9 w-auto object-contain"
        />

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[var(--color-primary)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Sindur C.N. Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
