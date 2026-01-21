import { Calendar, Users, Trophy, Zap } from "lucide-react";

export function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Events & Activities
          </h2>
          <p className="text-lg text-muted-foreground">
            Fostering innovation through competitive learning experiences
          </p>
        </div>

        {/* Featured Event */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6 border border-primary-foreground/20">
                <Trophy className="w-4 h-4" />
                Featured Event
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Build Bharat through AI Hackathon
              </h3>
              
              <p className="text-primary-foreground/80 mb-6 max-w-2xl">
                A 24-hour national-level sprint challenging participants to develop innovative 
                AI-powered solutions addressing real-world problems across various sectors.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Calendar className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-xs opacity-70">Date</div>
                    <div className="font-medium text-primary-foreground">April 17, 2025</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Zap className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-xs opacity-70">Duration</div>
                    <div className="font-medium text-primary-foreground">24 Hours</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Users className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-xs opacity-70">Participants</div>
                    <div className="font-medium text-primary-foreground">550+ Nationwide</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Trophy className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-xs opacity-70">Category</div>
                    <div className="font-medium text-primary-foreground">National Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
