import { useState, useEffect } from "react";
import type { Faculty } from "@/services/api";
import { fetchFaculty } from "@/services/api";
import { FacultyCard } from "./FacultyCard";
import { SectionHeader } from "./SectionHeader";

export function FacultySection() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFaculty();
  }, []);

  const loadFaculty = async () => {
    try {
      const data = await fetchFaculty();
      // Sort faculty by hierarchy
      const sorted = [...data].sort((a, b) => {
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
      setFaculty(sorted);
    } catch (error) {
      console.error("Failed to load faculty:", error);
    } finally {
      setLoading(false);
    }
  };

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

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-black bg-white p-6 animate-pulse">
                <div className="h-6 bg-gray-200 mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-200 mb-2"></div>
                <div className="h-4 bg-gray-200 w-2/3"></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && faculty.length === 0 && (
          <div className="border-2 border-black bg-white p-12 text-center">
            <p className="font-heading text-2xl font-bold uppercase">No Faculty Data</p>
            <p className="font-mono text-sm mt-2">Faculty information will be displayed here.</p>
          </div>
        )}

        {/* Faculty Grid */}
        {!loading && faculty.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member) => (
              <FacultyCard
                key={member.id}
                faculty={member}
                isHod={member.designation.includes("Head of the Department")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
