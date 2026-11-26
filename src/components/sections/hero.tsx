import { ArrowUpRight, Code2, Cpu, Workflow } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { SafeImage } from "@/components/safe-image";
import { images, siteConfig } from "@/data/portfolio";

const focusAreas = [
  { label: "Desenvolvimento", icon: Code2 },
  { label: "Eletrônica", icon: Cpu },
  { label: "Automação", icon: Workflow },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div className="top-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/[0.06] px-3 py-1.5 text-xs font-medium tracking-wide text-accent-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" aria-hidden="true" />
            Software · Hardware · Automação
          </span>

          <h1 className="reveal reveal-delay-1 mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Mateus <span className="text-accent-400">Vinicius</span>
          </h1>

          <p className="reveal reveal-delay-1 mt-5 text-lg font-medium text-slate-200 sm:text-xl">
            {siteConfig.headline}
          </p>

          <p className="reveal reveal-delay-2 mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            {siteConfig.summary}
          </p>

          <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
            >
              <GithubIcon size={17} />
              GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent-400/40 hover:text-accent-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
            >
              Contato
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <ul className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-2">
            {focusAreas.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-400"
              >
                <Icon size={14} className="text-accent-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal reveal-delay-1 relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent-500/10 blur-2xl" aria-hidden="true" />
          <SafeImage
            src={images.profile}
            alt="Fotografia de Mateus Vinicius"
            icon="user"
            label="Foto do perfil"
            className="relative aspect-square w-full rounded-3xl"
            sizes="(max-width: 640px) 80vw, 360px"
            priority
          />
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Perfil
            </p>
            <p className="mt-1 text-sm font-medium text-white">Software + Hardware</p>
          </div>
        </div>
      </div>
    </section>
  );
}
