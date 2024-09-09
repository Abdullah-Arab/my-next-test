"use client";

import { useState, useEffect } from "react";
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

function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer | Problem Solver | Tech Enthusiast";
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
    { name: "Web Development", icon: Globe },
    { name: "Mobile Development", icon: Smartphone },
    { name: "Full Stack Solutions", icon: Code },
    { name: "Database Design", icon: Database },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Abdullah Arab
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-4">
        Turning ideas into apps that matter
      </p>
      <p className="text-lg md:text-xl text-primary font-semibold h-8 mb-8">
        {typedText}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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
  const featuredProject = {
    name: "Hajat - حاجات",
    description:
      "A B2B wholesale delivery app for groceries. Developed using Flutter with Bloc state management. Led the development and implementation of cart system, ensuring smooth efficient user experience.",
    features: [
      "Cart system",
      "B2B functionality",
      "Wholesale delivery",
      "Real-time order tracking",
      "Inventory management",
    ],
    github: "https://github.com/yourusername/hajat",
    demo: "https://hajat-demo.com",
    image: "/images/placeholder.png",
  };

  const regularProjects = [
    {
      name: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects skills.",
      features: ["Responsive design", "Dark mode", "Project showcase"],
      github: "https://github.com/yourusername/portfolio",
      image: "/images/placeholder.png",
    },
    {
      name: "Task Manager API",
      description:
        "A RESTful API for a task management application built with Node.js and Express.",
      features: [
        "CRUD operations",
        "User authentication",
        "Task prioritization",
      ],
      github: "https://github.com/yourusername/task-manager-api",
      image: "/images/placeholder.png",
    },
    {
      name: "Weather App",
      description:
        "A simple weather application that fetches and displays current data for any location.",
      features: ["Geolocation", "Weather API integration", "Responsive design"],
      github: "https://github.com/yourusername/weather-app",
      image: "/images/placeholder.png",
    },
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with product listings, shopping cart, and checkout functionality.",
      features: ["Product catalog", "User accounts", "Payment integration"],
      github: "https://github.com/yourusername/ecommerce-platform",
      image: "/images/placeholder.png",
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
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside">
                  {featuredProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button asChild variant="outline">
                  <Link href={featuredProject.github}>GitHub</Link>
                </Button>
                <Button asChild>
                  <Link href={featuredProject.demo}>Live Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <h3 className="text-2xl font-semibold mb-6">Other Projects</h3>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
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
                <CardContent>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i} className="line-clamp-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.github}>GitHub</Link>
                  </Button>
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
