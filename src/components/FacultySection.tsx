import { facultyData } from "@/data/facultyData";
import { FacultyCard } from "./FacultyCard";

export function FacultySection() {
  // Sort faculty by hierarchy
  const sortedFaculty = [...facultyData].sort((a, b) => {
    const order = (designation: string) => {
      if (designation.includes("Head of the Department")) return 0;
      if (designation === "Professor") return 1;
      if (designation.includes("Professor (Adjunct)")) return 2;
      if (designation.includes("Professor (Adhoc)")) return 3;
      if (designation.includes("Assistant Professor")) return 4;
      return 5;
    };
    return order(a.designation) - order(b.designation);
  });

  return (
    <section id="faculty" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Faculty
          </h2>
          <p className="text-lg text-muted-foreground">
            Distinguished academicians driving excellence in teaching and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedFaculty.map((faculty) => (
            <FacultyCard
              key={faculty.name}
              faculty={faculty}
              isHod={faculty.designation.includes("Head of the Department")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
