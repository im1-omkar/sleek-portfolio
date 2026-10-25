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
          An inquiry into existence
        </p>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Understanding the Universe
        </h2>

        <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
          <p>
            Before there were questions, there was a universe. Before
            there were minds to contemplate it, stars had already lived
            and died, galaxies had gathered, and matter had spent
            billions of years following laws it could not comprehend.
            Then, somewhere on an ordinary planet orbiting an ordinary
            star, matter became alive, life became conscious, and
            consciousness began asking why any of this exists. Perhaps
            the strangest fact about reality is not that we inhabit an
            incomprehensibly vast universe, but that a small part of it
            has become capable of wondering about the whole.
          </p>

          <p>
            Our understanding of reality has grown through an
            extraordinary evolution of ideas. Myth gave way to
            philosophy, intuition met mathematics, and speculation
            encountered the discipline of experiment. Each generation
            inherited a map of existence, discovered its boundaries,
            and redrew it. Physics revealed that space and time are
            not quite what our instincts suggest; biology showed how
            complexity can emerge through evolution; and computation
            demonstrated how simple rules can generate astonishing
            patterns. Again and again, nature has proved stranger than
            our intuitions, reminding us that reality is under no
            obligation to make immediate sense to the human mind.
          </p>

          <p>
            Yet knowing how things work does not necessarily tell us
            what they mean. Science can investigate the origins of
            stars, the emergence of life, and the mechanisms of
            consciousness, but questions about purpose, value, and
            subjective experience lead us toward philosophy. Spiritual
            traditions have explored the nature of the self, the
            illusion of separateness, and the possibility that our
            ordinary perception captures only a fragment of what is.
            These perspectives need not replace scientific inquiry,
            nor should every spiritual intuition be mistaken for fact.
            They can, however, remind us that understanding reality
            involves more than accumulating information; it also
            involves examining the observer, the assumptions, and the
            meaning we bring to what we observe.
          </p>

          <p>
            Evolution offers another remarkable insight: intelligence
            did not appear outside nature but emerged from within it.
            Through variation, selection, memory, and increasingly
            complex organization, matter gave rise to organisms that
            could model their surroundings, anticipate consequences,
            and eventually reason about abstract possibilities.
            Computation extends this story into a new territory.
            Brains process information, computers manipulate symbols,
            and artificial intelligence learns patterns from vast
            quantities of data. We are beginning to construct systems
            that participate in the growth of knowledge itself. But
            capability raises deeper questions: Is processing
            information the same as understanding it? Is intelligence
            merely the ability to predict, or does understanding
            require something more? The answers remain open.
          </p>

          <p>
            Perhaps knowledge grows not by arriving at a final truth
            all at once, but by building better models of reality,
            discovering where they fail, and having the courage to
            revise them. Every theory is a window, not the universe
            itself. Every perception is an interpretation, not
            necessarily the whole truth. The more powerful our tools
            become, the more important intellectual humility becomes:
            the ability to distinguish what we know from what we
            believe, what we can demonstrate from what we merely
            imagine, and what remains unknown from what may be
            unknowable.
          </p>

          <p>
            And so the search continues, across scales and disciplines:
            from quantum fields to galaxies, from the origin of life
            to the emergence of mind, from ancient contemplative
            traditions to algorithms that may reshape our future.
            Perhaps the universe is not a puzzle we will someday
            finish solving, but an inexhaustible reality in which
            every answer opens another door. We are temporary
            arrangements of ancient matter, carrying memories of an
            evolutionary past and possibilities for a future we can
            barely imagine. We may never know everything. But we can
            learn to see more clearly, think more deeply, and become
            less mistaken about the world and ourselves.
          </p>

          <p>
            To understand the universe, then, is also to understand
            our place within it: neither the center of existence nor
            a meaningless spectator, but a participant in its unfolding.
            We are nature examining nature, life studying life, and
            intelligence trying to understand intelligence. Whether
            the deepest truth is ultimately mathematical, physical,
            experiential, or something our present concepts cannot
            express, the pursuit itself remains extraordinary. The
            universe has given rise to beings who can question their
            origins, imagine what does not yet exist, and deliberately
            change what comes next. What we do with that ability may
            be the most important question still before us.
          </p>
        </div>
      </article>


      </main>
    </>
  );
}
