"use client";

import { Button } from "@/components/ui/button";

export function Home() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div>
            <h1 className="text-xl sm:text-5xl font-bold tracking-tight  ">
              Hi I'm Abdullah 👋🏻
            </h1>
            <p className="text-md sm:text-xl  tracking-tight mt-4 text-gray-500">
              I'm a passionate software developer and a software engineering
              student at the University of Tripoli. With over four years of
              experience in mobile development and a solid foundation in web
              development, I specialize in building high-converting landing
              pages.
            </p>

            <div className="flex justify-start space-x-4 mt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
