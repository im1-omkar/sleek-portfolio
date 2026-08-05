import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 sm:pb-32 flex flex-col gap-24 sm:gap-32 bg-background min-h-screen">
      <Hero />
      <Projects />
      <About />
      
    </main>
  );
}