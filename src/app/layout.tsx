import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Mateus Vinicius | Software, Eletrônica e Automação";
const description =
  "Portfólio de Mateus Vinicius, estudante de Desenvolvimento de Sistemas e Mecatrônica. Projetos de software, eletrônica, microcontroladores e automação.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Mateus Vinicius",
    "portfólio",
    "desenvolvimento de sistemas",
    "mecatrônica",
    "programação",
    "eletrônica",
    "automação",
    "Arduino",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description,
    siteName: "Mateus Vinicius",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070a",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-ink-950 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
