import React from 'react';
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center text-center gap-6">
      {/* Elegant Portrait Placeholder (Professional & Subtle) */}
      {/* The user can replace the placeholder src with their actual image path */}
      <img
        src="/omkar.png" // User should replace this path
        alt="A professional monochrome portrait of Omkar, a Software Engineer"
        className="w-60 h-60 rounded-full object-cover grayscale opacity-90 border border-muted/20"
        loading="lazy"
      />

      {/* Core Identity (Significantly smaller, Refined Type Hierarchy) */}
      <div className="space-y-1">
        <h1 className="text-3xl font-medium tracking-tight text-foreground">
          Omkar
        </h1>
        <h2 className="text-lg font-normal text-muted-foreground">
          Software Engineer & CS Undergrad.
        </h2>
      </div>

      {/* Ultra-condensed context */}
      <p className="max-w-md text-base text-muted-foreground leading-relaxed">
        I build fast, scalable full-stack applications and experiment with applied AI. Currently in my second year at IIIT Nagpur.
        Exploring first-principles architectures.
      </p>

      {/* Minimalist Action Links */}
      <div className="flex justify-center gap-6 pt-6 text-sm font-medium">
        <a
          href="#projects"
          className="flex items-center gap-1.5 text-foreground hover:opacity-70 transition-opacity group"
        >
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://github.com/yourgithub" // User should replace this URL
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;