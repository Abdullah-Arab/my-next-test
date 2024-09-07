"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
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
    <section id="projects" className="py-20 bg-gray-50">
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
