import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, PlayCircle } from "lucide-react";
import { Globe, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold tracking-tight text-foreground flex justify-center">Proof of Work :)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* metaverse card */}
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
                <li>Audio-Video Calling</li>
                <li>Multiplayer architecture</li>
                <li>Game & networking concepts</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-border/50 bg-muted/10">
            <div className="flex items-center gap-2">
              {/* Website */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 rounded-md border-border/70"
              >
                <a href="https://metaverse-web-chi.vercel.app/" target="_blank" rel="noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </a>
              </Button>

              {/* Source */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 rounded-md border-border/70"
              >
                <a href="https://github.com/im1-omkar/metaverse" target="_blank" rel="noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  Source
                </a>
              </Button>

              
            </div>
          </CardFooter>
        </Card>

        {/* quickboard card */}
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
                <li>Without External Library</li>
                <li>Real-time communication</li>
                <li>Syncs progress</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-border/50 bg-muted/10">
            <div className="flex items-center gap-2">
              {/* Website */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 rounded-md border-border/70"
              >
                <a href="https://quickboard-web-nu.vercel.app/" target="_blank" rel="noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </a>
              </Button>

              {/* Source */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 rounded-md border-border/70"
              >
                <a href="https://github.com/im1-omkar/quickboard" target="_blank" rel="noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  Source
                </a>
              </Button>


            </div>
          </CardFooter>
        </Card>

        {/*memeEditor card */}
        <Card className="flex flex-col overflow-hidden bg-background border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/30 group">
          <div className="aspect-video relative overflow-hidden border-b border-border/50 rounded-t-xl">
            <video
              className="w-full h-full object-cover"
              src="/videos/memeEditor.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Meme-Editor</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2 text-muted-foreground">
              A full-stack meme generator using React, Vite, Express, and the HTML5 Canvas API.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-muted text-xs" variant="secondary">Vite</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">React</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Express</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Zustand</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">TailwindCSS</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">HTML5 Canvas</Badge>
            </div>

            <div className="space-y-2 mt-auto">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Highlights</p>
              <ul className="text-sm text-foreground/80 list-disc list-inside space-y-1.5">
                <li>Intractive Drag & Drop</li>
                <li>Client Side Image Generation</li>
                <li>Download files locally</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-border/50 bg-muted/10">
            <div className="flex items-center gap-2">

              {/* Source */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 rounded-md border-border/70"
              >
                <a href="https://github.com/im1-omkar/memeEditor" target="_blank" rel="noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  Source
                </a>
              </Button>


            </div>
          </CardFooter>
        </Card>
        {/**focusLayer */}
        <Card className="flex flex-col overflow-hidden bg-background border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/30 group">
          <div className="aspect-video relative overflow-hidden border-b border-border/50 rounded-t-xl">
            <video
              className="w-full h-full object-cover"
              src="/videos/focusLayer.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Focus-Layer</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2 text-muted-foreground">
              Treat concentration as a muscle with daily self-evaluations, GitHub-style heatmaps, and habit stacking.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-muted text-xs" variant="secondary">React</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Vite</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Tanstack</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Lucide-react</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">PostgreSQL</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Express</Badge>
              <Badge className="bg-muted text-xs" variant="secondary">Axios</Badge>

            </div>

            <div className="space-y-2 mt-auto">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Highlights</p>
              <ul className="text-sm text-foreground/80 list-disc list-inside space-y-1.5">
                <li>Github-Style Heatmap</li>
                <li>Auto Synchronous</li>
                <li>Syncs progress</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-border/50 bg-muted/10">
            <div className="flex items-center gap-2">

              {/* Source */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 rounded-md border-border/70"
              >
                <a href="https://github.com/im1-omkar/focus-layer" target="_blank" rel="noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  Source
                </a>
              </Button>


            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default Projects;