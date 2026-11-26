import {
  Code2,
  Cpu,
  GitBranch,
  GraduationCap,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, type IconKey } from "@/data/portfolio";

const iconMap: Record<IconKey, LucideIcon> = {
  code: Code2,
  circuit: Cpu,
  settings: Wrench,
  database: GraduationCap,
  git: GitBranch,
};

export function Education() {
  return (
    <section id="formacao" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Formação"
          title="Uma formação que une código e máquina."
          description="Áreas de estudo que conectam o desenvolvimento de software à eletrônica e à automação."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {education.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-400/20 bg-accent-400/[0.06] text-accent-400">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  {item.current ? (
                    <span className="rounded-full border border-accent-400/25 bg-accent-400/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-300">
                      Em andamento
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-6 text-base font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-accent-400/80">
                  {item.detail}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
