"use client";

import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { navItems, siteConfig } from "@/data/portfolio";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 rounded-lg text-sm font-semibold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-400"
          onClick={() => setIsOpen(false)}
          aria-label="Ir para o início"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/25 bg-accent-400/10 text-accent-400">
            <Code2 size={18} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span>
            MV<span className="text-accent-400">.</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-accent-400/40 hover:text-accent-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 sm:inline-flex"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 transition-colors hover:border-accent-400/40 hover:text-accent-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Navegação principal para celular"
          className="border-t border-white/10 bg-ink-950 px-5 py-3 md:hidden"
        >
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-accent-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
