"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.3 8.6c1 2 2.6 3.6 4.6 4.6l1.5-1.5c.3-.3.7-.4 1-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1v2.8c0 .6-.4 1-1 1C8.7 16.8 3.2 11.3 3.2 3.8c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.4 0 .8-.2 1L6.3 8.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 18s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="15" height="15" rx="4.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.3" cy="5.7" r="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const ACTIONS = [
  {
    label: "Call Us",
    href: "tel:+917788833307",
    icon: PhoneIcon,
    external: false,
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/WyhVCLc39JLpVSeM9",
    icon: LocationIcon,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sindur_group?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    icon: InstagramIcon,
    external: true,
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-1.5">
      <AnimatePresence>
        {open &&
          ACTIONS.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 16, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.7 }}
              transition={{ duration: 0.25, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                aria-label={action.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-lg ring-1 ring-black/10 transition-colors hover:bg-[var(--color-primary)] hover:text-white"
              >
                <action.icon />
              </Link>
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.3 }}
              className="hidden whitespace-nowrap rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-lg sm:block"
            >
              Let&apos;s Connect!
            </motion.span>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close contact options" : "Open contact options"}
          aria-expanded={open}
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-xl ring-1 ring-black/10"
        >
          {!open && (
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-primary)]/25" />
          )}
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                key="logo"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative h-8 w-8"
              >
                <Image src="/images/real/logo1.png" alt="" fill className="object-contain" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
