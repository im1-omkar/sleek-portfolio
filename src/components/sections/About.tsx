import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Atom,
  Network,
  Globe,
  Dumbbell,
  Cpu,
  Code2,
  Server,
  Sparkles
} from "lucide-react";

const About = () => {
  return (
    <section className="flex flex-col gap-8">

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Frontend Bento Box */}
        <div className="flex flex-col gap-4 border border-white/10 bg-white/[0.02] p-6 rounded-2xl transition-colors hover:bg-white/[0.04]">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Code2 className="w-4 h-4 text-blue-400/70" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/80">Languages & Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["TypeScript", "JavaScript", "C++", "SQL", "React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"].map((skill) => (
              <Badge key={skill} className="bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all cursor-default" variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Backend Bento Box */}
        <div className="flex flex-col gap-4 border border-white/10 bg-white/[0.02] p-6 rounded-2xl transition-colors hover:bg-white/[0.04]">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Server className="w-4 h-4 text-green-400/70" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/80">Backend & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "WebSockets", "Git & GitHub", "Docker", "Linux", "Vercel"].map((tool) => (
              <Badge key={tool} className="bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all cursor-default" variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Interests Bento Box */}
      <div className="flex flex-col gap-4 border border-white/10 bg-white/[0.02] p-6 rounded-2xl transition-colors hover:bg-white/[0.04]">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Sparkles className="w-4 h-4 text-purple-400/70" />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/80">Interests</h3>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-foreground/80">
          <span className="group flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-primary/40 transition-all cursor-default">
            <Brain className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
            Artificial Intelligence
          </span>
          <span className="group flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-primary/40 transition-all cursor-default">
            <Atom className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-180 transition-all duration-500" />
            Physics & Cosmology
          </span>
          <span className="group flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-primary/40 transition-all cursor-default">
            <Network className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
            Distributed Systems
          </span>
          <span className="group flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-primary/40 transition-all cursor-default">
            <Globe className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
            Geopolitics
          </span>
          <span className="group flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-primary/40 transition-all cursor-default">
            <Dumbbell className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-rotate-12 transition-all" />
            Gym & Fitness
          </span>
          <span className="group flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-primary/40 transition-all cursor-default">
            <Cpu className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
            Building Products
          </span>
        </div>
      </div>

    </section>
  );
}

export default About;