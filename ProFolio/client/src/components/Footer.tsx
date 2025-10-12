import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Hemanth H A</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer & Computer Science student passionate about building intelligent systems.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/hemanthxt" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/hemanthha" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hemanthha01@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection("certificates")}
              >
                Certificates
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection("experience")}
              >
                Education
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Built With</h3>
            <p className="text-sm text-muted-foreground">
              React, TypeScript, Tailwind CSS, and modern web technologies
            </p>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-chart-2 fill-chart-2" /> using modern web technologies
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Hemanth H A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
