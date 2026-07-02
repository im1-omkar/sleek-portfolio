import React from 'react';
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="flex flex-col gap-12">

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">Languages & Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">C++</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">Framer Motion</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">Backend & Tools</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Express</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">Prisma</Badge>
            <Badge variant="secondary">REST APIs</Badge>
            <Badge variant="secondary">WebSockets</Badge>
            <Badge variant="secondary">Git & GitHub</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">Linux</Badge>
            <Badge variant="secondary">Vercel</Badge>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">Interests</h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">🧠 Artificial Intelligence</span>
          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">🌌 Physics & Cosmology</span>
          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">💻 Distributed Systems</span>
          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">🌍 Geopolitics</span>
          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">🏋️ Gym & Fitness</span>
          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">🎯 Building products</span>
        </div>
      </div>
    </section>
  );
}

export default About;