"use client";
import { cn } from "@/lib/utils";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider, useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Menu,
  GraduationCap,
  Briefcase,
  Globe,
  Smartphone,
  Code,
  Database,
  ChevronDown,
  Phone,
  Mail,
  Linkedin,
  Github,
  BriefcaseIcon,
  CodeIcon,
  PenToolIcon,
  Twitter,
} from "lucide-react";
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
import Hero from "./hero";

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

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};

function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Mobile / Web Developer | Problem Solver | Tech Enthusiast";
  // const fullText = "Turning ideas into apps that matter";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const services = [
    { name: "Clean Code", icon: Code },
    // { name: "Mobile Development", icon: Smartphone },
    { name: "4+ Years of Experience", icon: Briefcase },
    { name: "Creative Solutions", icon: PenToolIcon },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-6 "
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Abdullah Arab 👋🏻
      </h1>
      {/* <p className="text-xl md:text-2xl text-muted-foreground mb-4">
        Turning ideas into apps that matter
      </p> */}
      <p className="text-lg md:text-xl text-primary font-semibold h-8 mb-8">
        {typedText}
      </p>
      <div className="grid grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-2">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-medium">{service.name}</p>
          </div>
        ))}
      </div>
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

// Home Component
// function Home() {
//   const [typedText, setTypedText] = useState("");
//   const fullText = "Full Stack Developer | Problem Solver | Tech Enthusiast";

//   useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i < fullText.length) {
//         setTypedText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 50);

//     return () => clearInterval(typingInterval);
//   }, []);

//   const services = [
//     { name: "Web Development", icon: Globe },
//     { name: "Mobile Development", icon: Smartphone },
//     { name: "Full Stack Solutions", icon: Code },
//     { name: "Database Design", icon: Database },
//   ];

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col justify-center items-center text-center p-6"
//     >
//       <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <div className="text-left space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
//             Hi, I'm Abdullah Arab
//           </h1>
//           <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200">
//             Turning ideas into apps that matter
//           </p>
//           <p className="text-lg md:text-xl text-primary font-semibold h-8 mb-8 animate-fade-in-up animation-delay-400 ">
//             {typedText}
//           </p>
//           <div className="space-x-4 mb-8">
//             <Button asChild>
//               <Link href="#projects">Explore My Work</Link>
//             </Button>
//             <Button asChild variant="outline">
//               <Link href="#contact">Contact Me</Link>
//             </Button>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//             {services.map((service, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="bg-primary/10 p-4 rounded-full mb-2">
//                   <service.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <p className="text-sm font-medium">{service.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative hidden md:block">
//           <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
//           <Image
//             src="/images/placeholder.png"
//             alt="Abdullah Arab"
//             width={600}
//             height={600}
//             className="rounded-full animate-float"
//           />
//         </div>
//       </div>
//       {/* <div className="mt-16 w-full">
//         <h2 className="text-2xl font-semibold text-center mb-8 animate-fade-in-up animation-delay-800">
//           My Services
//         </h2>
//       </div> */}
//       <div className="mt-16 animate-bounce">
//         <ChevronDown className="w-8 h-8 text-primary" />
//       </div>
//     </section>
//   );
// }
// About Component
function About() {
  return (
    <section id="about" className="py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I'm a software developer with over 4 years of experience in software
            development. I have a <strong>strong foundation</strong> in Software
            Development, and have freelanced as both a{" "}
            <strong>web & mobile developer</strong>. I'm passionate about
            building functional, high-performing applications using technologies
            like <strong>Flutter</strong> and React/Next.js.
          </p>
          <p className="text-lg">
            From a young age, I've been drawn to{" "}
            <strong>problem-solving</strong> and{" "}
            <strong>creating things</strong> that make people's lives easier.
            When I'm not coding, I'm either exploring new technologies or gaming
            to unwind.
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
      skills: ["Java", "JavaScript", "TypeScript", "Dart", "Python", "C"],
    },
    {
      name: "Mobile Development",
      description: "Frameworks and tools for building mobile applications",
      skills: [
        "Flutter",
        "Bloc (Flutter)",
        "DDD & Clean architecutre",
        "Android SDK",
        "iOS SDK",
      ],
    },
    {
      name: "Frontend Development",
      description: "Technologies for building responsive and interactive UIs",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    // {
    //   name: "Backend Development",
    //   description: "Server-side technologies and databases",
    //   skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
    // },
    // {
    //   name: "DevOps & Tools",
    //   description: "Tools and practices for efficient development deployment",
    //   skills: ["Git", "Docker", "CI/CD Pipelines", "AWS", "Vercel"],
    // },

    {
      name: "Other Technologies",
      description: "Additional tools and frameworks I work with",
      skills: [
        "REST APIs",
        "Vite",
        "Node.js",
        "ERPNext",
        "Firebase",
        "Git",
        "Dockers",
        "UIUX",
        "Supabase",
        "Pocketbase",
      ],
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
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border dark:border-neutral-800 ">
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
  const featuredProject = {
    name: "Hajat Delivery",
    description:
      "A B2B wholesale delivery app for groceries. Developed using Flutter with Bloc state management. Led the mobile app development and implementation, ensuring smooth efficient user experience.",
    features: [
      // "Cart system",
      // "B2B functionality",
      // "Wholesale delivery",
      // "Real-time order tracking",
      // "Inventory management",
    ],
    github: "https://github.com/yourusername/hajat",
    demo: "https://hajat-demo.com",
    image: "/images/hajat_prev.png",
  };

  const regularProjects = [
    {
      name: "Matrex",
      description: "Mobile App",
      features: [],
      github: "https://onelink.to/nnz7qv",
      image: "/images/matrex_prev.png",
    },
    {
      name: "Bekam",
      description: "Mobile App",
      features: [],
      github: "onlink.to/bekam",
      image: "/images/bekam_prev.png",
    },
    {
      name: "Sizzling",
      description: "Mobile App",
      features: [],
      github: "",
      image: "/images/sizzling_prev.png",
    },
    {
      name: "Perde Festival",
      description: "Landing Page ",
      features: ["Geolocation", "Weather API integration", "Responsive design"],
      github: "https://perdefestival.com/",
      image: "/images/perde_prev.png",
    },
    {
      name: "El kharouba",
      description: "Landing Page ",
      features: ["Product catalog", "User accounts", "Payment integration"],
      github: "https://kharouba.ly/",
      image: "/images/kharouba_prev.png",
    },
    {
      name: "El Kayan",
      description: "Landing Page ",
      features: ["Product catalog", "User accounts", "Payment integration"],
      github: "https://elkayan.ly/",
      image: "/images/elkayan_prev.png",
    },
    {
      name: "Green House",
      description: "Landing Page ",
      features: ["Product catalog", "User accounts", "Payment integration"],
      github: "https://greenhouse.ly/",
      image: "/images/gh_prev.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <h3 className="text-2xl font-semibold mb-6">Featured Project</h3>
        <Card className="mb-12">
          <div className="md:flex">
            <Image
              src={featuredProject.image}
              alt={featuredProject.name}
              width={600}
              height={400}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
            <div className="p-6 md:w-1/2">
              <CardTitle className="text-2xl mb-2">
                {featuredProject.name}
              </CardTitle>
              <CardDescription className="mb-4">
                {featuredProject.description}
              </CardDescription>
              {/* <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside">
                  {featuredProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div> */}
              {/* <div className="flex space-x-4">
                <Button asChild variant="outline">
                  <Link href={featuredProject.github}>GitHub</Link>
                </Button>
                <Button asChild>
                  <Link href={featuredProject.demo}>Live Demo</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </Card>

        <h3 className="text-2xl font-semibold mb-6">Other Projects</h3>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border dark:border-neutral-900">
          <div className="flex w-max space-x-4 p-4">
            {regularProjects.map((project, index) => (
              <Card key={index} className="w-[250px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={150}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i} className="line-clamp-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent> */}
                <CardFooter>
                  {project.github && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={project.github} target="_blank">
                        Open
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Innovators Inc.",
      date: "2021 - Present",
      description:
        "Lead developer for multiple high-impact projects, focusing on scalable web applications and mobile solutions.",
      achievements: [
        "Spearheaded the development of a revolutionary B2B platform, increasing client acquisition by 40%",
        "Implemented CI/CD pipelines, reducing deployment time by 60%",
        "Mentored junior developers, improving team productivity by 25%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "GraphQL"],
      image: "/images/placeholder.png",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      date: "2019 - 2021",
      description:
        "Worked on a variety of web and mobile projects, with a focus on creating seamless user experiences.",
      achievements: [
        "Developed and launched 5 successful mobile apps using Flutter",
        "Optimized database queries, improving application performance by 30%",
        "Implemented responsive design principles, enhancing mobile user engagement by 50%",
      ],
      technologies: ["Flutter", "React", "Express.js", "MongoDB", "Firebase"],
      image: "/images/placeholder.png",
    },
    {
      title: "Freelance Software Developer",
      company: "Self-employed",
      date: "2018 - 2019",
      description:
        "Worked on multiple mobile and web applications for various clients, specializing in Flutter and React development.",
      achievements: [
        "Delivered 10+ projects for clients across different industries",
        "Maintained a 100% client satisfaction rate",
        "Developed a custom CMS that increased content management efficiency by 40%",
      ],
      technologies: ["React", "Flutter", "WordPress", "PHP", "MySQL"],
      image: "/images/placeholder.png",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      date: "2019 - 2021",
      description:
        "Focused on advanced algorithms, machine learning, and distributed systems.",
      achievements: [
        "Graduated with honors",
        "Published a paper on efficient distributed computing algorithms",
        "Completed a thesis on optimizing neural networks for edge devices",
      ],
      image: "/images/placeholder.png",
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Tripoli",
      date: "2015 - 2019",
      description:
        "Gained a strong foundation in computer science principles and software development.",
      achievements: [
        "Graduated top of the class",
        "Led the university's programming team to national competition finals",
        "Developed an award-winning project on smart home automation",
      ],
      image: "/images/placeholder.png",
    },
    {
      degree: "Linear Algebra Course",
      institution: "MIT (Online)",
      date: "2020",
      description:
        "Intensive course covering advanced linear algebra concepts and applications in computer science.",
      achievements: [
        "Completed with a perfect score",
        "Applied learnings to optimize matrix operations in a machine learning project",
      ],
      image: "/images/placeholder.png",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-2" /> Professional Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-lg" />
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 p-6 flex justify-center items-center">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:w-3/4 p-6">
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l-lg" />
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 p-6 flex justify-center items-center">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:w-3/4 p-6">
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.institution} | {edu.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{edu.description}</p>
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// Contact Component
function Contact() {
  const contactInfo = {
    phone: "+1 (123) 456-7890",
    email: "abdullah.arab@example.com",
  };

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yourusername",
    },
    { name: "GitHub", icon: Github, url: "https://github.com/yourusername" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-center mb-4">
              Connect with Me
            </h3>
            <div className="flex justify-center space-x-4">
              {socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
                >
                  <platform.icon className="w-6 h-6 text-primary" />
                  <span className="sr-only">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you'd like to work together or just have a chat!
            </p>
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
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Turning ideas into apps that matter
              </p>
            </div>
          </BackgroundGradientAnimation>

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
