export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-6xl justify-center text-center">
        <p className="text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Sindur C.N. Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
