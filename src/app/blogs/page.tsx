"use client";

import Link from "next/link";
import { useState } from "react";
import RouteAtmosphere from "@/components/RouteAtmosphere";

const categories = [
  { id: "tech", label: "Tech" },
  { id: "bookReview", label: "Book Reviews" },
] as const;

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("tech");

  return (
    <>
      <RouteAtmosphere variant="rain" />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-4xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
        <section className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300/80">
            Notes &amp; essays
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blogs
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Thoughts on curiosity, building, and the ideas that stay with us.
          </p>

          <nav
            aria-label="Blog categories"
            className="mt-8 flex w-fit max-w-full flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {categories.map(({ id, label }) => {
              const isActive = activeCategory === id;

              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "bg-white/10 text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="mt-6" aria-live="polite">
            {activeCategory === "tech" ? (
              <Link
                href="/#essay"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Essay
                </p>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Understanding the Universe
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  A reflection on consciousness, science, and what it means to
                  study the universe from within it.
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-indigo-300">
                  Read essay <span aria-hidden="true">→</span>
                </span>
              </Link>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
                <h2 className="text-base font-semibold text-foreground">
                  Book reviews are coming soon
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Notes on books worth reading will show up here.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
