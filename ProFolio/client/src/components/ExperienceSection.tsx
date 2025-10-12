import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Engineering - Computer Science",
    company: "Shridevi Institute of Engineering and Technology",
    period: "2022 - Present",
    description: "Currently pursuing B.E. in Computer Science and Engineering, 4th Year student.",
    achievements: [
      "Focused on Machine Learning and Data Analysis",
      "Built Agriculture Intelligence Platform project",
      "Strong foundation in programming and database management"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Pre-University Course",
    company: "Ashok Comp PU College",
    period: "2020 - 2022",
    description: "Completed Pre-University education with focus on Science stream.",
    achievements: [
      "Developed strong analytical and problem-solving skills",
      "Built foundation in mathematics and computer science",
      "Successfully completed with good academic performance"
    ]
  },
  {
    id: 3,
    type: "education",
    title: "Secondary School",
    company: "Jnana Vahini English High School",
    period: "2018 - 2020",
    description: "Completed secondary education with interest in technology and computers.",
    achievements: [
      "Excelled in mathematics and science subjects",
      "Participated in various academic competitions",
      "Developed early interest in programming"
    ]
  }
];

export function ExperienceSection() {
  const handleDownloadResume = () => {
    console.log("Download resume triggered");
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Education</h2>
            <p className="text-xl text-muted-foreground">
              My academic journey
            </p>
          </div>
          <Button onClick={handleDownloadResume} data-testid="button-download-resume">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="hover-elevate" data-testid={`card-experience-${exp.id}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    {exp.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <CardTitle>{exp.title}</CardTitle>
                      <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
