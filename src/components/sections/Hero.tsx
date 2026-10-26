"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
  color: string;
};

type FlowParticle = {
  x: number;
  y: number;
  length: number;
  speed: number;
  offset: number;
  color: string;
};

function CosmicBannerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({
    x: 0.5,
    y: 0.5,
    active: false,
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    // Generate dense starfield + painterly Van Gogh swirl particles
    const stars: Star[] = Array.from({ length: 160 }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      radius: Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.75 + 0.2,
      phase: Math.random() * Math.PI * 2,
      color:
        Math.random() > 0.75
          ? "#fbbf24"
          : Math.random() > 0.5
            ? "#93c5fd"
            : "#f8fafc",
    }));

    const flowParticles: FlowParticle[] = Array.from({ length: 95 }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      length: Math.random() * 22 + 8,
      speed: Math.random() * 0.35 + 0.1,
      offset: Math.random() * 100,
      color:
        Math.random() > 0.65
          ? "rgba(251, 191, 36, 0.13)"
          : "rgba(99, 102, 241, 0.16)",
    }));

    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth ?? canvas.offsetWidth;
      height = canvas.height = canvas.parentElement?.clientHeight ?? canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      time += 0.012;
      const cw = w();
      const ch = h();

      // Deep night sky gradient matching the original banner
      const skyGrad = ctx.createLinearGradient(0, 0, cw, ch);
      skyGrad.addColorStop(0, "#050711");
      skyGrad.addColorStop(0.45, "#0b1124");
      skyGrad.addColorStop(0.8, "#131830");
      skyGrad.addColorStop(1, "#090b14");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, cw, ch);

      // Subtle golden/indigo nebula glow
      const nebula = ctx.createRadialGradient(
        cw * 0.32,
        ch * 0.45,
        5,
        cw * 0.32,
        ch * 0.45,
        cw * 0.38,
      );
      nebula.addColorStop(0, "rgba(245, 158, 11, 0.11)");
      nebula.addColorStop(0.5, "rgba(59, 130, 246, 0.07)");
      nebula.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, cw, ch);

      // Gravitational center (mouse or center-bottom where avatar sits)
      const gravX = mouseRef.current.active ? mouseRef.current.x * cw : cw * 0.5;
      const gravY = mouseRef.current.active ? mouseRef.current.y * ch : ch * 0.85;
      const massStrength = 1.2 * 38;

      // Painterly Starry Night swirl strokes
      ctx.lineCap = "round";
      flowParticles.forEach((p) => {
        p.x += p.speed;
        if (p.x > cw + 30) p.x = -30;

        const waveY = Math.sin(p.x * 0.012 + time * 0.6 + p.offset) * 14;
        const curY = p.y + waveY;

        // Gravitational deflection
        const dx = p.x - gravX;
        const dy = curY - gravY;
        const dist = Math.sqrt(dx * dx + dy * dy) + 25;
        const lensAngle = Math.atan2(dy, dx);
        const deflect = Math.min(28, (massStrength * 15) / dist);

        const sx = p.x + Math.cos(lensAngle + Math.PI / 2) * deflect;
        const sy = curY + Math.sin(lensAngle + Math.PI / 2) * deflect;
        const angle = Math.cos(p.x * 0.012 + time * 0.6) * 0.45;

        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(
          sx + Math.cos(angle) * p.length,
          sy + Math.sin(angle) * p.length,
        );
        ctx.stroke();
      });

      // Draw stars with Einstein ring gravitational lensing
      stars.forEach((star) => {
        const dx = star.x - gravX;
        const dy = star.y - gravY;
        const dist = Math.sqrt(dx * dx + dy * dy) + 12;
        const shift = Math.min(35, (massStrength * 14) / dist);

        const lx = Math.max(
          star.radius,
          Math.min(cw - star.radius, star.x + (dx / dist) * shift),
        );
        const ly = Math.max(
          star.radius,
          Math.min(ch - star.radius, star.y + (dy / dist) * shift),
        );

        const twinkle = Math.sin(time * 2.5 + star.phase) * 0.25 + 0.75;
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.min(1, star.alpha * twinkle);
        ctx.beginPath();
        ctx.arc(lx, ly, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Glowing Crescent Moon on the right (matching Omkar's banner)
      const moonX = cw * 0.83;
      const moonY = ch * 0.34;
      const moonRadius = Math.min(cw, ch) * 0.14;

      const moonGlow = ctx.createRadialGradient(
        moonX,
        moonY,
        moonRadius * 0.2,
        moonX,
        moonY,
        moonRadius * 3.2,
      );
      moonGlow.addColorStop(0, "rgba(251, 191, 36, 0.32)");
      moonGlow.addColorStop(0.4, "rgba(245, 158, 11, 0.10)");
      moonGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Moon crescent body
      ctx.save();
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#fde68a";
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 18;
      ctx.fill();

      // Cutout for crescent
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(
        moonX - moonRadius * 0.38,
        moonY - moonRadius * 0.18,
        moonRadius * 0.88,
        0,
        Math.PI * 2,
      );
      ctx.fill();
      ctx.restore();

      // Re-tint the cutout softly so background stars don't pierce through moon shadow
      ctx.save();
      ctx.beginPath();
      ctx.arc(
        moonX - moonRadius * 0.38,
        moonY - moonRadius * 0.18,
        moonRadius * 0.86,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(11, 17, 36, 0.88)";
      ctx.fill();
      ctx.restore();

      // Dark horizon cloud silhouettes along bottom edges
      ctx.fillStyle = "#06070c";
      ctx.beginPath();
      ctx.moveTo(0, ch);
      ctx.lineTo(0, ch * 0.78);
      ctx.quadraticCurveTo(cw * 0.15, ch * 0.68, cw * 0.32, ch * 0.82);
      ctx.quadraticCurveTo(cw * 0.5, ch * 0.92, cw * 0.68, ch * 0.8);
      ctx.quadraticCurveTo(cw * 0.85, ch * 0.66, cw, ch * 0.76);
      ctx.lineTo(cw, ch);
      ctx.closePath();
      ctx.fill();

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = (e.clientX - rect.left) / rect.width;
    mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    mouseRef.current.active = true;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseRef.current.active = false;
      }}
      className="w-full h-full block cursor-crosshair"
    />
  );
}

const Hero = () => {
  return (
    <section className="mt-12 mb-25 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center text-center gap-8">

      {/* X-style profile banner with an overlapping portrait */}
      <div className="relative mt-4 mb-2 w-full max-w-2xl">
        <div
          className="relative mx-auto w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.85)] h-36 sm:h-44 bg-[#070a14]"
        >
          <CosmicBannerCanvas />
        </div>

        <div className="pointer-events-none relative -mt-[120px] flex h-[250px] items-center justify-center sm:-mt-[145px] sm:h-[290px]">
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
          <br />
          Trying to build things & explanations that last.
          <br />

        </p>

      </div>

    </section>
  );
};

export default Hero;
