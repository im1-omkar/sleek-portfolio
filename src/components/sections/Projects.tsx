import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, PlayCircle } from "lucide-react";

const Projects = () => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">💼 Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* DevFlow Project Card */}
        <Card className="flex flex-col overflow-hidden bg-card border-muted/60 shadow-sm transition-all hover:shadow-md">
          {/* Video / Media Placeholder */}
          <div className="aspect-video bg-muted relative flex items-center justify-center border-b border-muted/60">
            {/* Replace this div with an actual <video> tag when you drop in your .mp4 */}
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> DevFlow_Demo.mp4
            </span>
          </div>

          <CardHeader>
            <CardTitle className="text-xl">DevFlow</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2">
              A modern full-stack productivity platform built with Next.js, TypeScript, PostgreSQL, and Prisma, focusing on clean architecture, authentication, and scalable backend design.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-4">
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="bg-background">Next.js</Badge>
              <Badge variant="outline" className="bg-background">TypeScript</Badge>
              <Badge variant="outline" className="bg-background">PostgreSQL</Badge>
              <Badge variant="outline" className="bg-background">Prisma</Badge>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Highlights</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Authentication</li>
                <li>Database integration</li>
                <li>Full-stack architecture</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-muted/40">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground" asChild>
              <a href="#" target="_blank" rel="noreferrer">
                <Code2 className="w-4 h-4" /> View Source
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Multiplayer Whiteboard / Phaser Game Card */}
        <Card className="flex flex-col overflow-hidden bg-card border-muted/60 shadow-sm transition-all hover:shadow-md">
          {/* Video / Media Placeholder */}
          <div className="aspect-video bg-muted relative flex items-center justify-center border-b border-muted/60">
            {/* Replace this div with an actual <video> tag when you drop in your .mp4 */}
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> Multiplayer_Demo.mp4
            </span>
          </div>

          <CardHeader>
            <CardTitle className="text-xl">Multiplayer Engine</CardTitle>
            <CardDescription className="text-sm leading-relaxed mt-2">
              An experiment in real-time collaboration built using WebSockets, TypeScript, and Phaser, exploring multiplayer synchronization, networking, and interactive experiences.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col gap-4">
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="bg-background">WebSockets</Badge>
              <Badge variant="outline" className="bg-background">TypeScript</Badge>
              <Badge variant="outline" className="bg-background">Phaser</Badge>
              <Badge variant="outline" className="bg-background">Canvas</Badge>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Highlights</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Real-time communication</li>
                <li>Multiplayer architecture</li>
                <li>Game & networking concepts</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-muted/40">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground" asChild>
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