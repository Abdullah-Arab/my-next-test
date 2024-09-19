"use client";

import { ThemeProvider } from "next-themes";
import { Navbar } from "./navbar";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Contact } from "./contact";
import Hero from "./hero";

export function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
        <Navbar />
        <main>
          {/* <Home /> */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
