"use client";

import Link, { useLinkStatus } from "next/link";

const links = [
  { label: "Blogs", href: "/blogs" },
  { label: "Me", href: "/" },
  { label: "Work", href: "/work" },
];

function RouteLoadingIndicator({ label }: { label: string }) {
  const { pending } = useLinkStatus();

  return (
    <>
      <span
        aria-hidden="true"
        className={`nav-route-progress${pending ? " is-pending" : ""}`}
      />
      <span aria-live="polite" className="sr-only">
        {pending ? `Loading ${label}` : ""}
      </span>
    </>
  );
}

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-4xl items-center justify-center gap-2 px-4 sm:gap-5 sm:px-6"
      >
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            prefetch={false}
            className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {label}
            <RouteLoadingIndicator label={label} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
