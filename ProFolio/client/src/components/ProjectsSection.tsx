import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "License Plate Recognition System",
    description: "Developed an automated system using Python, OpenCV, and Tesseract OCR to detect and recognize vehicle license plates from images. The project involved preprocessing steps like grayscale conversion, edge detection, and contour analysis to accurately locate number plates. Can be applied in automated toll collection, parking access control, and traffic surveillance.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop",
    tags: ["Python", "OpenCV", "Tesseract OCR", "NumPy"],
    github: "https://github.com/hemanthxt",
    demo: "https://github.com/hemanthxt",
    category: "cv"
  },
  {
    id: 2,
    title: "School Management System",
    description: "A software application designed to streamline and automate the day-to-day operations of educational institutions. It provides an integrated platform to manage student information, admissions, attendance, examinations, and teacher records efficiently. The system reduces paperwork, minimizes errors, and saves time by centralizing data.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=450&fit=crop",
    tags: ["Database Management", "Web Development", "MySQL"],
    github: "https://github.com/hemanthxt",
    demo: "https://github.com/hemanthxt",
    category: "web"
  },
  {
    id: 3,
    title: "Agriculture Intelligence Platform",
    description: "A comprehensive Streamlit-based web application designed to empower farmers with real-time insights and data-driven decisions. The platform integrates weather monitoring, crop recommendations, and price predictions into one unified system.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop",
    tags: ["Python", "Streamlit", "Machine Learning", "Data Analysis"],
    github: "https://github.com/hemanthxt/Agriculture-Intelligence.git",
    demo: "https://github.com/hemanthxt/Agriculture-Intelligence.git",
    category: "ml"
  }
];

const filters = ["All"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover-elevate" data-testid={`card-project-${project.id}`}>
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 flex-wrap">
                <Button size="sm" variant="outline" asChild data-testid={`button-github-${project.id}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild data-testid={`button-demo-${project.id}`}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
