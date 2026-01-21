import type { Faculty } from "@/data/facultyData";
import { User, GraduationCap, BookOpen } from "lucide-react";

interface FacultyCardProps {
  faculty: Faculty;
  isHod?: boolean;
}

export function FacultyCard({ faculty, isHod }: FacultyCardProps) {
  return (
    <div
      className={`group p-6 rounded-xl bg-card border shadow-sm hover:shadow-card transition-all duration-300 ${
        isHod 
          ? "border-accent/30 ring-1 ring-accent/20" 
          : "border-border/50 hover:border-accent/20"
      }`}
    >
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
          isHod ? "bg-accent/15" : "bg-muted"
        }`}>
          <User className={`w-7 h-7 ${isHod ? "text-accent" : "text-muted-foreground"}`} />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {faculty.name}
          </h3>
          <p className={`text-sm truncate ${isHod ? "text-accent font-medium" : "text-muted-foreground"}`}>
            {faculty.designation}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <GraduationCap className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground">{faculty.qualification}</span>
        </div>
        
        {faculty.specialization && (
          <div className="flex items-start gap-2 text-sm">
            <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground leading-relaxed">
              {faculty.specialization}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
