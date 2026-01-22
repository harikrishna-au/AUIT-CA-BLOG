import { facultyData } from "@/data/facultyData";
import { FacultyCard } from "./FacultyCard";
import { SectionHeader } from "./SectionHeader";

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
    <section id="faculty" className="pb-20 pt-8 md:pb-28 md:pt-12 bg-background bauhaus-grid">
      <div className="container">

        <SectionHeader
          index="02"
          tag="TEAM"
          title="Our"
          highlight="Faculty"
          description="Distinguished academicians driving excellence in teaching, research, and innovation."
        />

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
