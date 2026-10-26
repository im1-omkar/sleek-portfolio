import Hero from "@/components/sections/Hero";
import RouteAtmosphere from "@/components/RouteAtmosphere";

export default function Home() {
  return (
    <>
      <RouteAtmosphere variant="stars" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col overflow-x-hidden px-4 pb-12 sm:px-6 sm:pb-20">
        <Hero />


        <article
          id="essay"
          className="mx-auto w-full max-w-2xl border-t border-white/10 pt-8 sm:pt-10"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300/80">
            A work in progress
          </p>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About Me
          </h2>

          <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              currently pursuing computer science at IIIT
              Nagpur. I enjoy building software, exploring artificial
              intelligence, and understanding the ideas that shape
              the world around us.
            </p>

            <p>
              Beyond technology, I am drawn to philosophy, history,
              geopolitics, theoretical physics, and spirituality.
              I enjoy exploring different perspectives on humanity,
              our place in the universe, and how our understanding
              of the world continues to evolve.
            </p>

            <p>
              We are entering a period in which artificial intelligence
              will fundamentally change how humanity lives, works,
              and creates. It is an uncertain future, but one I look
              toward with great optimism. I see this moment as an
              opportunity to challenge existing limitations, explore
              new possibilities, and build things that once seemed
              impossible.
            </p>

            <p>
              There is still much to learn and much that remains
              unknown. That is what makes this time exciting.
              I look toward the future with optimism, curiosity,
              and the determination to turn ideas into reality.
              I will build something that lasts...
            </p>
          </div>
        </article>

      </main>
    </>
  );
}
