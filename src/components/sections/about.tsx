import { SectionHeading } from "@/components/section-heading";

const interests = [
  "Desenvolvimento de software",
  "Hardware e microcontroladores",
  "Eletrônica e sensores",
  "Automação industrial",
  "Inovação aplicada a projetos reais",
];

export function About() {
  return (
    <section id="sobre" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Software que conversa com o mundo físico."
          description="Minha trajetória é construída na interseção entre desenvolvimento de sistemas e mecatrônica."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
            <p>
              Sou estudante de Desenvolvimento de Sistemas e Mecatrônica, com
              interesse em programação, eletrônica e automação. Busco entender
              como a lógica de um programa pode interagir com sensores,
              microcontroladores e processos industriais.
            </p>
            <p>
              Tenho interesse em desenvolvimento de software, hardware,
              microcontroladores e inovação. Gosto de projetos que exigem
              observação, experimentação e a conexão entre o código e a parte
              física de um sistema.
            </p>
            <p>
              Ao longo da formação, venho estudando linguagens como Python,
              JavaScript e TypeScript, além de ferramentas para back-end,
              Arduino e C/C++. Meu objetivo é evoluir como desenvolvedor
              mantendo essa combinação entre software, eletrônica e automação.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              Interesses
            </h3>
            <ul className="mt-5 space-y-4">
              {interests.map((interest) => (
                <li key={interest} className="flex items-start gap-3 text-sm text-slate-300">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                    aria-hidden="true"
                  />
                  {interest}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
