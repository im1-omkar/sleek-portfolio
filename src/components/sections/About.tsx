import React from 'react';
import { Badge } from "@/components/ui/badge";

const skills = [
  "Turborepo",
  "Next JS",
  "Typescript",  
  "Prisma",
  "Phaser",
  "WebRTC",
  "WS",
  "Zustand",
  "Tanstack",
  "Express",
  "React",
  "Postgres",
  "MongoDB",
];

const learningSkills =  [
  "RAG",
  "RLM",
  "Fine tuning",
  "Harness",
  "Memory",
  "LangGraph",
  "LLM Observability",
  "Computer Use Agents"
]

const About = () => {
  return (
    <section className="flex flex-col items-center mb-25  bg-[#0a0a0a] ">

      <div className="flex flex-col items-center gap-6 max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700 text-sm md:text-base font-medium py-1.5 px-4 rounded-md transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 max-w-3xl px-4">
        <h2 className="text-3xl md:text-3xl font-semibold text-green-700 tracking-tight text-center">
          Learning...
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
          {learningSkills.map((skill) => (
            <Badge
              key={skill}
              className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700 text-sm md:text-base font-medium py-1.5 px-4 rounded-md transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;