"use client";

import Image from "next/image";
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
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Tech
                </p>
                <h2 className="text-lg font-medium tracking-tight text-foreground">
                  Coming soon…
                </h2>
              </div>
            ) : (
              <Link
                href="/blogs/fabric-of-reality"
                className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-indigo-300/30 hover:bg-white/[0.06] sm:grid-cols-[170px_1fr]"
              >
                <div className="relative my-4 ml-4 aspect-[13/20] w-[88px] self-center overflow-hidden rounded-sm bg-slate-950 shadow-lg shadow-black/30 sm:my-5 sm:ml-5 sm:w-[130px]">
                  <Image
                    src="https://cdn.penguin.co.uk/dam-assets/books/9780140146905/9780140146905-jacket-large.jpg"
                    alt="The Fabric of Reality by David Deutsch, Penguin Books cover"
                    width={650}
                    height={1000}
                    sizes="(max-width: 640px) 88px, 130px"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-indigo-300/80">
                    Book review
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    The Fabric of Reality: A Journey Towards Understanding Everything
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    A personal reflection on David Deutsch’s ideas about quantum
                    mechanics, evolution, knowledge, computation, and how they
                    connect.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                    Read review
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
