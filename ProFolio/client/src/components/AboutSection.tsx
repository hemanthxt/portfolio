import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "C", "C++", "HTML", "CSS", "JavaScript",
  "MySQL", "Object-Oriented Programming", "Data Structures & Algorithms",
  "Linux Administrator", "Web Development", "Database Management", "Git"
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Developer, creator, problem solver
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-12">
          <div className="flex justify-center lg:justify-start">
            <Avatar className="w-64 h-64 border-4 border-primary/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=hemanthha" />
              <AvatarFallback>HH</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hello! I'm Hemanth H A, a 4th-year Computer Science and Engineering student passionate about 
                building intelligent systems and exploring technology that solves real-world problems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I aim to apply my technical knowledge in real-world scenarios by transforming theoretical concepts into 
                practical solutions that drive innovation. I'm passionate about automation and consistently seek to simplify 
                and optimize daily tasks through self-built tools and scripts.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am eager to leverage my skills to create impactful change, foster innovation, enhance efficiency, and 
                contribute meaningfully to the long-term success and growth of organizations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1.5"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
