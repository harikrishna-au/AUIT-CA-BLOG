import { programsData } from "@/data/facultyData";
import { GraduationCap, BookOpen, Microscope, Clock, Monitor, Cpu, Code } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

const categoryConfig = {
  undergraduate: {
    title: "Undergraduate",
    icon: Monitor,
    bg: "bg-primary",
    text: "text-white",
  },
  postgraduate: {
    title: "Postgraduate",
    icon: Cpu,
    bg: "bg-secondary",
    text: "text-white",
  },
  research: {
    title: "Research",
    icon: Microscope,
    bg: "bg-accent",
    text: "text-black",
  },
};

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-background bauhaus-grid">
      <div className="container">

        <SectionHeader
          index="03"
          tag="ACADEMICS"
          title="Academic"
          highlight="Programs"
          description="Comprehensive curriculum designed for academic excellence and industry readiness."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {(Object.entries(programsData) as [keyof typeof programsData, typeof programsData.undergraduate][]).map(
            ([category, programs]) => {
              // @ts-ignore
              const config = categoryConfig[category] || categoryConfig.undergraduate;
              const Icon = config.icon;

              return (
                <div key={category} className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn("w-12 h-12 border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", config.bg)}>
                      <Icon className={cn("w-6 h-6", config.text)} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-foreground">
                      {config.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {programs.map((program) => (
                      <Card
                        key={program.name}
                        className="group hover:bg-accent hover:-translate-y-1 transition-all"
                      >
                        <CardHeader className="p-5 pb-2 border-none bg-transparent">
                          <CardTitle className="text-lg font-bold">
                            {program.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-5 pt-0">
                          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider border-t-2 border-black/10 pt-3">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
