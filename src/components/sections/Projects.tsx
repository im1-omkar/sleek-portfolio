import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, PlayCircle } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">💼 Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DevFlow Project Card */}
        <Card className="flex flex-col overflow-hidden bg-background border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/30 group">
          <div className="aspect-video bg-muted/30 relative flex items-center justify-center border-b border-border/50 group-hover:bg-muted/50 transition-colors">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <PlayCircle className="w-5 h-5 opacity-70" /> DevFlow_Demo.mp4
            </span>
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">DevFlow</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2 text-muted-foreground">
              A modern full-stack productivity platform built with Next.js, TypeScript, PostgreSQL, and Prisma, focusing on clean architecture, authentication, and scalable backend design.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-muted text-xs" variant="secondary">Next.js</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">TypeScript</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">PostgreSQL</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Prisma</Badge>
            </div>

            <div className="space-y-2 mt-auto">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Highlights</p>
              <ul className="text-sm text-foreground/80 list-disc list-inside space-y-1.5">
                <li>Authentication</li>
                <li>Database integration</li>
                <li>Full-stack architecture</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-border/50 bg-muted/10">
            <Button asChild className="gap-2 -ml-2 text-muted-foreground hover:text-foreground" size="sm" variant="ghost">
              <a href="#" target="_blank" rel="noreferrer">
                <Code2 className="w-4 h-4" /> View Source
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Multiplayer Engine Card */}
        <Card className="flex flex-col overflow-hidden bg-background border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/30 group">
          <div className="aspect-video bg-muted/30 relative flex items-center justify-center border-b border-border/50 group-hover:bg-muted/50 transition-colors">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <PlayCircle className="w-5 h-5 opacity-70" /> Multiplayer_Demo.mp4
            </span>
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Multiplayer Engine</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2 text-muted-foreground">
              An experiment in real-time collaboration built using WebSockets, TypeScript, and Phaser, exploring multiplayer synchronization, networking, and interactive experiences.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-muted text-xs" variant="secondary">WebSockets</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">TypeScript</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Phaser</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Canvas</Badge>
            </div>

            <div className="space-y-2 mt-auto">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Highlights</p>
              <ul className="text-sm text-foreground/80 list-disc list-inside space-y-1.5">
                <li>Real-time communication</li>
                <li>Multiplayer architecture</li>
                <li>Game & networking concepts</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-border/50 bg-muted/10">
            <Button asChild className="gap-2 -ml-2 text-muted-foreground hover:text-foreground" size="sm" variant="ghost">
              <a href="#" target="_blank" rel="noreferrer">
                <Code2 className="w-4 h-4" /> View Source
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default Projects;