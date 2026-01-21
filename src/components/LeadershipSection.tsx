import { leadershipData } from "@/data/facultyData";
import { Crown, User } from "lucide-react";

export function LeadershipSection() {
  const currentHod = leadershipData.find((leader) => leader.isCurrent);
  const previousHods = leadershipData.filter((leader) => !leader.isCurrent);

  return (
    <section id="leadership" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Department Leadership
          </h2>
          <p className="text-lg text-muted-foreground">
            Guided by distinguished academicians with proven expertise
          </p>
        </div>

        {/* Current HOD - Prominent display */}
        {currentHod && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative p-8 rounded-2xl bg-card border-2 border-accent/30 shadow-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  <Crown className="w-4 h-4" />
                  Current Head of Department
                </span>
              </div>
              
              <div className="text-center pt-4">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {currentHod.name}
                </h3>
                <p className="text-accent font-medium mb-2">
                  {currentHod.designation}
                </p>
                <p className="text-sm text-muted-foreground">
                  Tenure: {currentHod.tenure}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Previous HODs */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-muted-foreground text-center mb-6">
            Previous Heads of Department
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previousHods.map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-xl bg-card border border-border/50 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {leader.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {leader.tenure}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
