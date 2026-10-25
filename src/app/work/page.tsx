import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import GithubContributions from "@/components/sections/GithubContributions";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import RouteAtmosphere from "@/components/RouteAtmosphere";

export default function Work() {
  return (
    <>
      <RouteAtmosphere variant="rain" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col overflow-x-hidden px-4 pb-12 sm:px-6 sm:pb-20">
        <Hero />
        <Education />
        <About />
        <Projects />
        <GithubContributions />
        <Contact />
      </main>
    </>
  );
}
