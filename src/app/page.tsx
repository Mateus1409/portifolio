import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Technologies } from "@/components/sections/technologies";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Education />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
