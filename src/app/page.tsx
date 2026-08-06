import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import GithubContributions from "@/components/sections/GithubContributions";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20  flex flex-col  bg-background min-h-screen">
      <Hero />
      <About />
      <Projects />
      <GithubContributions/>
      <Education/>
      <Contact/>
    </main>
  );
}