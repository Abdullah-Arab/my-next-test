"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Skills() {
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
