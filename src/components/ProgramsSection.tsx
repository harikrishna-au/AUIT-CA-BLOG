import { programsData } from "@/data/facultyData";
import { GraduationCap, BookOpen, Microscope, Clock } from "lucide-react";

const categoryConfig = {
  undergraduate: {
    title: "Undergraduate",
    icon: GraduationCap,
    color: "bg-blue-500/10 text-blue-600",
  },
  postgraduate: {
    title: "Postgraduate",
    icon: BookOpen,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  research: {
    title: "Research",
    icon: Microscope,
    color: "bg-purple-500/10 text-purple-600",
  },
};

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive programs designed for academic excellence and industry readiness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {(Object.entries(programsData) as [keyof typeof programsData, typeof programsData.undergraduate][]).map(
            ([category, programs]) => {
              const config = categoryConfig[category];
              const Icon = config.icon;

              return (
                <div key={category} className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${config.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {config.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {programs.map((program) => (
                      <div
                        key={program.name}
                        className="p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-card hover:border-accent/20 transition-all duration-300"
                      >
                        <h4 className="font-medium text-foreground mb-2">
                          {program.name}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                      </div>
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
