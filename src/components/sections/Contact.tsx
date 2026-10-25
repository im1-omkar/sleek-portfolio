import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 sm:py-16">
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-indigo-950/60 px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Have something in mind?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            For a project, a thoughtful question, or a conversation about an
            idea, I&apos;d be glad to hear from you.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="mailto:omkarkavhale44@gmail.com"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://x.com/0mkar_x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            >
              Message on X
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
