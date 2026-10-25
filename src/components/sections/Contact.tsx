import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 sm:py-14">
      <div className="mx-auto max-w-2xl border-t border-white/10 pt-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Get in touch
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          For a project, a question, or a good conversation.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href="mailto:omkarkavhale44@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <span aria-hidden="true" className="text-zinc-600">
            ·
          </span>
          <a
            href="https://x.com/0mkar_x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            X / Twitter
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
