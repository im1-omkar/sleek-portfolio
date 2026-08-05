"use client";

import React from 'react';
import { ArrowRight, Circle } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center text-center gap-8">

      {/* Live Status Indicator */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
        <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
        <span>currently learning Applied-AI</span>
      </div>

      {/* Cosmic Portrait Container */}
      <div className="relative flex items-center justify-center mt-4 mb-2">

        {/* Deep Cosmic Nebula Glow (Pulsing) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl"
        />

        {/* Outer Orbital Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[250px] h-[250px] sm:w-[290px] sm:h-[290px] rounded-full border border-white/5 border-t-indigo-500/30 border-r-purple-500/20"
        />

        {/* Inner Orbital Ring (Counter-rotating) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] rounded-full border border-white/5 border-b-blue-500/30 border-l-transparent"
        />

        {/* Floating Portrait */}
        <motion.img
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          src="/omkar.png"
          alt="A professional portrait of Omkar, a Software Engineer"
          className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-[0_0_40px_rgba(99,102,241,0.1)] ring-1 ring-white/10"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Subtle Text Gradient for Name */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 pb-1">
          Hi, I'm Omkar
        </h1>

        {/* Minimalist Tagline */}
        <p className="text-muted-foreground text-base sm:text-lg">
          CS@IIITN | Full-Stack & Applied AI Developer
        </p>

      </div>

      {/* Minimalist Action Links */}
      <div className="flex justify-center gap-8 text-sm font-medium">
        <a
          href="#projects"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
        >
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://github.com/im1-omkar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <img
            src="/github.png"
            alt="GitHub Logo"
            className="w-4 h-4 group-hover:scale-110 transition-transform opacity-70 group-hover:opacity-100"
          />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;