import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import GithubContributions from "@/components/sections/GithubContributions";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 pb-12 sm:pb-20 flex flex-col bg-background min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <GithubContributions />
      <Education />
      <Contact />
    </main>
  );
}