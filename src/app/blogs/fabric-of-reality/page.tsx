import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RouteAtmosphere from "@/components/RouteAtmosphere";
import { fabricOfReality } from "@/content/fabric-of-reality";

export const metadata: Metadata = {
  title: "The Fabric of Reality — Book Review",
  description:
    "A personal reflection on David Deutsch’s The Fabric of Reality and its connections between quantum mechanics, evolution, knowledge, and computation.",
};

export default async function FabricOfRealityReview() {
  const [title, subtitle, ...blocks] = fabricOfReality.trim().split(/\n\s*\n/);

  return (
    <>
      <RouteAtmosphere variant="rain" />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-4xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span aria-hidden="true">←</span>
            All blogs
          </Link>

          <header className="grid items-center gap-8 border-b border-white/10 pb-9 sm:grid-cols-[1fr_220px] sm:gap-10">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300/80">
                Book review · David Deutsch
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="mx-auto w-full max-w-[200px] overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-2xl shadow-indigo-950/40 sm:max-w-[220px]">
              <Image
                src="https://cdn.penguin.co.uk/dam-assets/books/9780140146905/9780140146905-jacket-large.jpg"
                alt="The Fabric of Reality by David Deutsch, Penguin Books cover"
                width={650}
                height={1000}
                sizes="(max-width: 640px) 200px, 220px"
                fetchPriority="high"
                className="block h-auto w-full"
              />
            </div>
          </header>

          <div className="mx-auto mt-9 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground sm:mt-11 sm:text-lg">
            {blocks.map((block, index) => {
              if (block === "---") {
                return <hr key={index} className="my-10 border-white/10" />;
              }

              if (/^\d+\.\s/.test(block) || block === "A final thought") {
                return (
                  <h2
                    key={index}
                    className="!mb-1 !mt-12 text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl"
                  >
                    {block}
                  </h2>
                );
              }

              return <p key={index}>{block}</p>;
            })}
          </div>
        </article>
      </main>
    </>
  );
}
