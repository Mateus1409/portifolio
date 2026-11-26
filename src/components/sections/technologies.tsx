import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups, type IconKey } from "@/data/portfolio";

const iconMap: Record<IconKey, LucideIcon> = {
  code: Code2,
  circuit: Cpu,
  settings: Cpu,
  database: Database,
  git: GitBranch,
};

export function Technologies() {
  return (
    <section id="tecnologias" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tecnologias"
          title="Ferramentas que uso para construir."
          description="Conhecimentos distribuídos entre desenvolvimento web, back-end, eletrônica e versionamento."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent-400/30"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent-400/20 bg-accent-400/[0.06] text-accent-400">
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-ink-900/60 px-2.5 py-1.5 text-xs text-slate-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
