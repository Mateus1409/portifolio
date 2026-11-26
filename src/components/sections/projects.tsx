import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { SafeImage } from "@/components/safe-image";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos em destaque."
          description="Uma amostra do que venho desenvolvendo em software, hardware e plataformas digitais."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <article
                key={project.name}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:-translate-y-1 hover:border-accent-400/30 hover:bg-white/[0.04]"
              >
                <SafeImage
                  src={project.image}
                  alt={project.imageLabel}
                  icon={project.icon}
                  label={project.imageLabel}
                  className="h-44 w-full rounded-xl"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 360px"
                />

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-white/10 bg-ink-900/60 px-2 py-1 text-[11px] text-slate-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                >
                  <GithubIcon size={16} />
                  Ver no GitHub
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
