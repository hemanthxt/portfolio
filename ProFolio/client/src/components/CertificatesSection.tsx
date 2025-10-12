import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Introduction to Programming in C",
    issuer: "NPTEL",
    description: "Comprehensive certification in C programming fundamentals and advanced concepts",
    skills: ["C Programming", "Problem Solving", "Algorithms"]
  },
  {
    id: 2,
    title: "Basics of Python",
    issuer: "Infosys",
    description: "Foundation course covering Python programming essentials and best practices",
    skills: ["Python", "Data Structures", "Programming Logic"]
  },
  {
    id: 3,
    title: "Data Structures & Algorithms in C++",
    issuer: "Professional Course",
    description: "Advanced certification in DSA concepts using C++ programming language",
    skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"]
  }
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Certificates</h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="hover-elevate" data-testid={`card-certificate-${cert.id}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-chart-2" />
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
