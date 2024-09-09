"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Navbar Component
function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onClick}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === item.name.toLowerCase()
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/40 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg font-bold text-neutral-900 dark:text-neutral-50"
            >
              Abdullah Arab
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLinks />
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="w-9 px-0"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <NavLinks onClick={() => setIsMobileMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm Abdullah Arab – turning ideas into apps that matter.
      </h1>
      <p className="text-xl md:text-2xl text-white mb-8">
        Specialized in Flutter and React development, with a knack for creating
        intuitive user experiences and scalable software solutions.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="#projects">Explore My Work</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I'm a software engineer with over 4 years of experience in mobile
            app development and 2 years in SaaS products. I have a strong
            foundation in DevOps, ERPNext, and have freelanced as both a
            software developer and graphic designer. I'm passionate about
            building functional, high-performing applications using technologies
            like Flutter and React/Next.js.
          </p>
          <p className="text-lg">
            From a young age, I've been drawn to problem-solving and creating
            things that make people's lives easier. When I'm not coding, I'm
            either exploring new technologies or gaming to unwind.
          </p>
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      description: "Core languages I'm proficient in",
      skills: ["Java", "JavaScript", "TypeScript", "Dart", "Python"],
    },
    {
      name: "Frontend Development",
      description: "Technologies for building responsive and interactive UIs",
      skills: ["React", "Next.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      description: "Server-side technologies and databases",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      name: "DevOps & Tools",
      description: "Tools and practices for efficient development deployment",
      skills: ["Git", "Docker", "CI/CD Pipelines", "AWS", "Vercel"],
    },
    {
      name: "Mobile Development",
      description: "Frameworks and tools for building mobile applications",
      skills: ["Flutter", "React Native", "Bloc (Flutter)", "Android SDK"],
    },
    {
      name: "Other Technologies",
      description: "Additional tools and frameworks I work with",
      skills: ["GraphQL", "REST APIs", "Vite", "Webpack", "ERPNext", "SaaS"],
    },
  ];

  const softSkills = [
    "Problem-solving",
    "Team collaboration",
    "Leadership",
    "Communication",
    "Adaptability",
    "Time management",
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {skillCategories.map((category, index) => (
              <Card key={index} className="w-[350px]">
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
            <CardDescription>
              Personal attributes that enable me to interact effectively and
              harmoniously with others
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  const projects = [
    {
      name: "Hajat - حاجات",
      description:
        "A B2B wholesale delivery app for groceries. Developed using Flutter with Bloc state management. Led the development and implementation of cart system, ensuring smooth efficient user experience.",
      features: ["Cart system", "B2B functionality", "Wholesale delivery"],
      github: "https://github.com/yourusername/hajat",
      demo: "https://hajat-demo.com",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <Link href={project.github}>GitHub</Link>
                </Button>
                <Button asChild>
                  <Link href={project.demo}>Live Demo</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  const experiences = [
    {
      title: "Freelance Software Developer",
      company: "Self-employed",
      date: "2018 - Present",
      description:
        "Worked on multiple mobile and web applications, specializing in Flutter React development.",
    },
    // Add more experiences here
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Tripoli",
      date: "2015 - 2019",
    },
    {
      degree: "Linear Algebra Course",
      institution: "MIT (Online)",
      date: "2020",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                {exp.company} | {exp.date}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold">{edu.degree}</h4>
            <p className="text-neutral-500 dark:text-neutral-400">
              {edu.institution} | {edu.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-8">
            Looking to bring your idea to life? Let's collaborate.
          </p>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:underline dark:text-neutral-50"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:underline dark:text-neutral-50"
            >
              GitHub
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
        <Navbar />
        <main>
          <Home />
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
