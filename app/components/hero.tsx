import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BriefcaseIcon, CodeIcon, PenToolIcon } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer | Problem Solver | Tech Enthusiast";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="hero" className="text-center space-y-8 py-20">
      <h2 className="text-5xl font-bold animate-fade-in-down">
        Welcome to My Portfolio
      </h2>
      <p className="text-2xl text-gray-600 dark:text-gray-400 h-8">
        {typedText}
      </p>
      <div className="flex justify-center space-x-4">
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
      <div className="flex justify-center space-x-8 mt-8">
        <div className="text-center">
          <CodeIcon className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm font-medium">Clean Code</p>
        </div>
        <div className="text-center">
          <BriefcaseIcon className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm font-medium">5+ Years Experience</p>
        </div>
        <div className="text-center">
          <PenToolIcon className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm font-medium">Creative Solutions</p>
        </div>
      </div>
    </section>
  );
}
