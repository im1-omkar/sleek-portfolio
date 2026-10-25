"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mt-12 mb-25 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center text-center gap-8">

      {/* X-style profile banner with an overlapping portrait */}
      <div className="relative mt-4 mb-2 w-full max-w-2xl">
        <div
          aria-hidden="true"
          className="relative h-32 overflow-hidden rounded-2xl border border-white/10 shadow-[0_16px_60px_rgba(0,0,0,0.3)] sm:h-44"
        >
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/background.png"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 15%" }}
            draggable={false}
            tabIndex={-1}
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-background/50" />
        </div>

        <div className="relative -mt-[120px] flex h-[250px] items-center justify-center sm:-mt-[145px] sm:h-[290px]">
          {/* Deep Cosmic Nebula Glow (Pulsing) */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl"
          />

          {/* Outer Orbital Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[250px] w-[250px] rounded-full border border-white/5 border-r-purple-500/20 border-t-indigo-500/30 sm:h-[290px] sm:w-[290px]"
          />

          {/* Inner Orbital Ring (Counter-rotating) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute h-[230px] w-[230px] rounded-full border border-white/5 border-b-blue-500/30 border-l-transparent sm:h-[270px] sm:w-[270px]"
          />

          {/* Static, non-draggable Portrait */}
          <img
            src="/omkar.png"
            alt="A professional portrait of Omkar, a Software Engineer"
            className="pointer-events-none relative h-48 w-48 select-none rounded-full object-cover shadow-[0_0_40px_rgba(99,102,241,0.2)] ring-4 ring-background [-webkit-user-drag:none] sm:h-56 sm:w-56"
            draggable={false}
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Subtle Text Gradient for Name */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 pb-1">
          Hi, I'm Omkar
        </h1>

        {/* Minimalist Tagline */}
        <p className="text-muted-foreground text-base sm:text-lg">
          21,

          CS@IIITN. I build and break things. First principles, optimism and my curiosity.

          I Read Philosophy, History, geopolitics, theoretical physics, AI and other unknowns.
          <br/>
          Trying to build things & explanations that last.
          <br/>

        </p>

      </div>
     
    </section>
  );
}

export default Hero;
