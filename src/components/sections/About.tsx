import {
  Activity,
  BrainCircuit,
  Gamepad2,
  Globe,
  MonitorCog,
  Network,
  RadioTower,
  ShieldCheck,
  Store,
  Terminal,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ElementType } from "react";
import {
  SiExpress,
  SiDocker,
  SiLanggraph,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTanstack,
  SiTurborepo,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";

type SkillItem = {
  name: string;
  Icon: ElementType<{ className?: string; "aria-hidden"?: boolean }>;
};

const skills: SkillItem[] = [
  { name: "Docker", Icon: SiDocker },
  { name: "web scraping", Icon: Globe },
  { name: "Turborepo", Icon: SiTurborepo },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Phaser", Icon: Gamepad2 },
  { name: "WebRTC", Icon: SiWebrtc },
  { name: "WebSockets", Icon: RadioTower },
  { name: "Zustand", Icon: Store },
  { name: "TanStack", Icon: SiTanstack },
  { name: "Express", Icon: SiExpress },
  { name: "React", Icon: SiReact },
  { name: "Postgres", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
];

const learningSkills: SkillItem[] = [
  { name: "Transformer", Icon: Network },
  { name: "RLM", Icon: BrainCircuit },
  { name: "Agent In Terminal", Icon: Terminal },
  { name: "Harness", Icon: Workflow },
  { name: "LangGraph", Icon: SiLanggraph },
  { name: "Sandboxing", Icon: ShieldCheck },
  { name: "LLM Observability", Icon: Activity },
  { name: "Computer Use Agents", Icon: MonitorCog },
];

function SkillBadges({ items }: { items: SkillItem[] }) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-3 md:gap-4">
      {items.map(({ name, Icon }) => (
        <Badge
          key={name}
          className="inline-flex h-9 cursor-default gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-800 [&>svg]:size-4!"
        >
          <Icon aria-hidden={true} className="shrink-0 text-zinc-300" />
          <span>{name}</span>
        </Badge>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section className="mb-25 flex flex-col items-center bg-[#0a0a0a] py-10">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6 px-4">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
          development
        </h2>
        <SkillBadges items={skills} />
      </div>

      <div className="mt-12 flex w-full max-w-3xl flex-col items-center gap-6 px-4">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-green-700">
          agentic_ai
        </h2>
        <SkillBadges items={learningSkills} />
      </div>
    </section>
  );
}
