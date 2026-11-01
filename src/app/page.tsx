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
          
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About Me
          </h2>

          <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Currently pursuing Computer Science at IIIT Nagpur, I enjoy
              building software, exploring artificial intelligence, and
              understanding the systems, economics, and ideas that shape
              our world.
            </p>

            <p>
              My curiosity extends far beyond technology. I spend time
              exploring philosophy, history, geopolitics, science, and
              spirituality — subjects that offer different lenses through
              which to understand humanity and the universe.
            </p>

            <p>
              I believe we are living through one of the most interesting
              periods in human history.
            </p>

            <p>
              Best time to be alive...
            </p>
          </div>
        </article>

      </main>
    </>
  );
}
