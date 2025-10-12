import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Rocket, Star } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-muted-foreground">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Hemanth H A
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Software Engineer and 4th-year Computer Science student passionate about building intelligent systems 
                and exploring technology that solves real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-work"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 space-y-3 hover-elevate">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold font-mono" data-testid="text-projects-count">3+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </Card>

            <Card className="p-6 space-y-3 hover-elevate">
              <div className="w-12 h-12 rounded-md bg-chart-2/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <div className="text-3xl font-bold font-mono" data-testid="text-experience-years">7.9</div>
                <div className="text-sm text-muted-foreground">CGPA (6th Sem)</div>
              </div>
            </Card>

            <Card className="p-6 space-y-3 hover-elevate col-span-2">
              <div className="w-12 h-12 rounded-md bg-chart-4/10 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <div className="text-3xl font-bold font-mono" data-testid="text-tech-count">13+</div>
                <div className="text-sm text-muted-foreground">Skills & Technologies</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
