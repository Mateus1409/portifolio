/**
 * Conteúdo do portfólio.
 * Altere os valores `null` quando quiser adicionar suas imagens e links.
 */

export type OptionalUrl = string | null;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

type SiteConfig = {
  name: string;
  headline: string;
  summary: string;
  github: string;
  linkedin: OptionalUrl;
  email: OptionalUrl;
};

export const siteConfig: SiteConfig = {
  name: "Mateus Vinicius",
  headline: "Estudante de Desenvolvimento de Sistemas e Mecatrônica",
  summary:
    "Interesse em programação, eletrônica e automação. Gosto de conectar software e hardware para criar soluções simples, funcionais e com propósito.",
  github: "https://github.com/Mateus1409",
  // Configure quando quiser: "https://www.linkedin.com/in/seu-perfil"
  linkedin: "https://www.linkedin.com/in/mateus-vinicius-aab78137b/",
  // Configure quando quiser: "seu.email@exemplo.com"
  email: "mateus140908@gmail.com",
};

export type ImageKey =
  | "profile"
  | "ecomonitor"
  | "autodocpr"
  | "avancaraucaria";

export const images: Record<ImageKey, OptionalUrl> = {
  // Após adicionar public/images/profile.png, troque null por "/images/profile.png".
  profile: "/images/profile.png",
  ecomonitor: null,
  autodocpr: null,
  avancaraucaria: null,
};

export type IconKey = "code" | "circuit" | "settings" | "database" | "git";

export type EducationItem = {
  title: string;
  detail: string;
  description: string;
  icon: IconKey;
  current?: boolean;
};

export const education: EducationItem[] = [
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    detail: "Formação técnica",
    description: "Formação voltada ao desenvolvimento de software e sistemas.",
    icon: "code",
  },
  {
    title: "Arduino, Microcontroladores e Automação Industrial",
    detail: "SENAI",
    description:
      "Curso focado em eletrônica, microcontroladores e automação de processos.",
    icon: "circuit",
  },
  {
    title: "Técnico em Mecatrônica",
    detail: "Em andamento",
    description:
      "Formação técnica que integra mecânica, eletrônica e sistemas computacionais.",
    icon: "settings",
    current: true,
  },
];

export type SkillGroup = {
  title: string;
  icon: IconKey;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens & web",
    icon: "code",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "PHP"],
  },
  {
    title: "Back-end & dados",
    icon: "database",
    items: ["Java", "Spring Boot", "FastAPI", "SQLite"],
  },
  {
    title: "Eletrônica & automação",
    icon: "circuit",
    items: ["Arduino", "C/C++", "Microcontroladores", "Sensores"],
  },
  {
    title: "Versionamento",
    icon: "git",
    items: ["Git", "GitHub"],
  },
];

export type ProjectIconKey = "activity" | "heart" | "building";

export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  url: string;
  image: OptionalUrl;
  imageLabel: string;
  icon: ProjectIconKey;
};

export const projects: Project[] = [
  {
    name: "EcoMonitor",
    category: "Monitoramento industrial",
    description:
      "Sistema de monitoramento industrial com dashboards, indicadores, simulação de sensores Arduino e módulos de sustentabilidade.",
    technologies: ["Java", "Spring Boot", "JavaScript", "Chart.js", "Arduino"],
    url: "https://github.com/Mateus1409/EcoMonitor",
    image: images.ecomonitor,
    imageLabel: "Imagem do EcoMonitor",
    icon: "activity",
  },
  {
    name: "AutoDocPR",
    category: "Saúde digital",
    description:
      "Plataforma digital voltada a serviços relacionados à saúde, com foco em acesso e recursos digitais.",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    url: "https://github.com/Mateus1409/AutoDocPR",
    image: images.autodocpr,
    imageLabel: "Imagem do AutoDocPR",
    icon: "heart",
  },
  {
    name: "Avança Araucária",
    category: "Plataforma institucional",
    description:
      "Projeto de desenvolvimento e redesign de uma plataforma institucional, com páginas, conteúdos e navegação organizada.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://github.com/Mateus1409/Avan-Arauc-ria-v2",
    image: images.avancaraucaria,
    imageLabel: "Imagem do Avança Araucária",
    icon: "building",
  },
];
