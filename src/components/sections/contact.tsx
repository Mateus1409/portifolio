import { ArrowUpRight, Mail, type LucideIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/portfolio";

type ContactMethod = {
  label: string;
  value: string;
  href: string | null;
  icon: LucideIcon;
};

const contactMethods: ContactMethod[] = [
  {
    label: "GitHub",
    value: "@Mateus1409",
    href: siteConfig.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedin ? "Abrir perfil" : "Link não configurado",
    href: siteConfig.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "E-mail",
    value: siteConfig.email ?? "E-mail não configurado",
    href: siteConfig.email ? `mailto:${siteConfig.email}` : null,
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contato" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Para trocar ideias sobre projetos, tecnologia, eletrônica ou automação."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const content = (
              <>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-400/20 bg-accent-400/[0.06] text-accent-400 transition-colors group-hover:bg-accent-400/[0.12]">
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
                  {method.label}
                  {method.href ? (
                    <ArrowUpRight size={14} className="text-slate-500" aria-hidden="true" />
                  ) : null}
                </span>
                <span className="mt-1 break-all text-sm text-slate-400">
                  {method.value}
                </span>
                {!method.href ? (
                  <span className="mt-4 w-fit rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    Configure em src/data/portfolio.ts
                  </span>
                ) : null}
              </>
            );

            const className =
              "group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors";

            return method.href ? (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${className} hover:border-accent-400/30 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400`}
              >
                {content}
              </a>
            ) : (
              <div
                key={method.label}
                aria-disabled="true"
                className={`${className} opacity-70`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
