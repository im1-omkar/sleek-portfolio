import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, PlayCircle } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold tracking-tight text-foreground flex justify-center">Proof of Work :)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DevFlow Project Card */}
        <Card className="flex flex-col overflow-hidden bg-background border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/30 group">
          <div className="aspect-video relative overflow-hidden border-b border-border/50 rounded-t-xl">
            <video
              className="w-full h-full object-cover"
              src="/videos/metaverse1.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Metaverse</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2 text-muted-foreground">
              A 2D multiplayer virtual workspace for remote teams. Built with Next.js, Phaser 3, WebSockets, and WebRTC.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-muted text-xs" variant="secondary">WebRTC</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Phaser JS</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">WebSockets</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Prisma</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Bun</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Zustand</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Turborepo</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">TypeScript</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">MongoDB</Badge>
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

        {/* Multiplayer Engine Card */}
        <Card className="flex flex-col overflow-hidden bg-background border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/30 group">
          <div className="aspect-video relative overflow-hidden border-b border-border/50 rounded-t-xl">
            <video
              className="w-full h-full object-cover"
              src="/videos/quickboard.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Quickboard</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2 text-muted-foreground">
              QuickBoard is a lightweight, open-source collaborative drawing tool. Ditch the clutter and instantly sketch UI flows, wireframes, and architecture on an infinite canvas.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-muted text-xs" variant="secondary">Turborepo</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">WebSockets</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">TypeScript</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">roughjs</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Zustand</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Tanstack</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Canvas</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Prisma</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">MongoDB</Badge>
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