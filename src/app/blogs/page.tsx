import Link from "next/link";
import RouteAtmosphere from "@/components/RouteAtmosphere";

export default function Blogs() {
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

          <Link
            href="/#essay"
            className="mt-10 block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
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
        </section>
      </main>
    </>
  );
}
