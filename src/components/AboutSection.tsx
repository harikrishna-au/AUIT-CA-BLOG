import { BookOpen, GraduationCap, Monitor, Code, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/SectionHeader";

const programs = [
  {
    icon: Monitor,
    title: "B.Tech",
    subtitle: "Information Technology",
    color: "bg-primary", // Red
  },
  {
    icon: Cpu,
    title: "M.Tech",
    subtitle: "Information Technology",
    color: "bg-secondary", // Blue
  },
  {
    icon: Code,
    title: "MCA",
    subtitle: "Master of Computer Applications",
    color: "bg-accent", // Yellow
  },
  {
    icon: BookOpen,
    title: "M.Sc",
    subtitle: "Computer Science",
    color: "bg-black", // Black
  },
  {
    icon: GraduationCap,
    title: "Ph.D",
    subtitle: "Doctoral Programme",
    color: "bg-white", // White (with black border/text handling)
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-accent bauhaus-grid border-b-2 border-black">
      <div className="container">
        <SectionHeader
          index="00"
          tag="OVERVIEW"
          title="About The"
          highlight="Department"
          description="Fostering excellence in Information Technology and Computer Applications through innovative curriculum and research since 2018."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Text Content */}
          <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-sm md:text-sm leading-relaxed mb-6 text-justify">
              The Department of Information Technology and Computer Applications was formed in the academic year <span className="font-bold bg-accent px-1">2018-2019</span>. This department offers one U.G. program (B.Tech. - Information Technology), three P.G. programs (M.Tech. - Information Technology, Master of Computer Applications (MCA), M.Sc. (Computer Science)) and Doctoral programme (Ph.D).
            </p>
            <p className="font-mono text-sm md:text-sm leading-relaxed mb-6 text-justify">
              The Department of Information Technology and Computer Applications has designed a curriculum to apply concepts of Information Technology in collaboration with various inter disciplinary areas. The aim is to create IT professionals with good knowledge on core computer science subjects and skills meeting the current needs of the industry. The department has good infrastructure, computing equipment and laboratories. The faculty of the department have rich teaching and research experience.
            </p>
            <p className="font-mono text-sm md:text-sm leading-relaxed text-justify">
              The students are admitted through a state level common entrance examination. Even though it is an young department, students are well placed in reputed software companies and department is very active in organizing workshops, seminars and training programs. The programs offered in the department meet requirements of both the industry and academia.
            </p>
          </div>

          {/* Programs Grid */}
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2 border-2 border-black">
              Programs Offered
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="group border-2 border-black bg-white p-6 hover:bg-background transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6"
                >
                  <div className={cn("w-12 h-12 border-2 border-black flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12", program.color)}>
                    <program.icon className={cn("w-6 h-6", program.color === "bg-accent" || program.color === "bg-white" ? "text-black" : "text-white")} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase leading-none">
                      {program.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {program.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
