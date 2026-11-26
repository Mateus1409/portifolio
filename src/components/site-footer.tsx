import { GithubIcon } from "@/components/brand-icons";
import { siteConfig } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium text-white">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-slate-500">
            Desenvolvimento de software, eletrônica e automação.
          </p>
        </div>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-300"
        >
          <GithubIcon size={16} />
          github.com/Mateus1409
        </a>
      </div>
    </footer>
  );
}
