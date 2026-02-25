import type { Faculty } from "@/services/api";
import { User, BookOpen, Mail, Phone, Building2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface FacultyCardProps {
  faculty: Faculty;
  isHod?: boolean;
}

export function FacultyCard({ faculty, isHod }: FacultyCardProps) {
  return (
    <Card
      className={`group transition-all duration-300 hover:shadow-card ${isHod
        ? "border-accent/30 ring-1 ring-accent/20"
        : "border-border/50 hover:border-accent/20"
        }`}
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {faculty.image_url ? (
          <img
            src={faculty.image_url}
            alt={faculty.name}
            className={`w-14 h-14 rounded-full object-cover flex-shrink-0 ${isHod ? "ring-2 ring-accent/30" : ""}`}
          />
        ) : (
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${isHod ? "bg-accent/15" : "bg-muted"
              }`}
          >
            <User
              className={`w-7 h-7 ${isHod ? "text-accent" : "text-muted-foreground"}`}
            />
          </div>
        )}
        <div className="space-y-1">
          <CardTitle className="text-lg">{faculty.name}</CardTitle>
          <CardDescription
            className={`${isHod ? "text-accent font-medium opacity-100" : ""}`}
          >
            {faculty.designation}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-4">
        {faculty.department && (
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">{faculty.department}</span>
          </div>
        )}

        {faculty.specialization && (
          <div className="flex items-start gap-2 text-sm">
            <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground leading-relaxed">
              {faculty.specialization}
            </span>
          </div>
        )}

        {faculty.email && (
          <div className="flex items-center gap-2 text-sm pt-1">
            <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <a href={`mailto:${faculty.email}`} className="text-muted-foreground hover:text-accent transition-colors break-all">
              {faculty.email}
            </a>
          </div>
        )}

        {faculty.phone && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <a href={`tel:${faculty.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
              {faculty.phone}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
