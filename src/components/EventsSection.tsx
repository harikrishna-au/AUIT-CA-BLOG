import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

export function EventsSection() {
  const navigate = useNavigate();

  return (
    <section id="events" className="py-20 bg-background border-b-2 border-black">
      <div className="container">

        <div className="relative">
          <SectionHeader
            index="04"
            tag="HAPPENINGS"
            title="Department"
            highlight="Events"
            description=""
          />

          {/* Action Button - positioned absolutely or flexibly depending on mobile/desktop */}
          <div className="md:absolute md:bottom-6 md:right-0 mb-8 md:mb-0">
            <Button size="lg" className="mech-button rounded-none bg-white text-black hover:bg-primary hover:text-white" onClick={() => navigate("/events")}>
              VIEW ALL EVENTS <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Featured Event - Bauhaus Card */}
        <div className="border-2 border-black bg-white p-0 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute top-0 right-0 bg-primary text-white font-mono text-xs font-bold px-4 py-2 border-l-2 border-b-2 border-black z-10">
            FEATURED EVENT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bauhaus-grid" />

              <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 relative z-10">
                Build Bharat<br />AI Hackathon
              </h3>
              <p className="font-mono text-sm md:text-base mb-8 max-w-xl relative z-10">
                A national-level AI hackathon where brilliance meets breakthrough. Launchpad to build, innovate, and solve real-world problems.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 border-t-2 border-black pt-8 relative z-10">
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-1">DATE</div>
                  <div className="font-heading text-lg font-bold">16-17 APR 2025</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-1">LOCATION</div>
                  <div className="font-heading text-lg font-bold">ALGORITHM BLOCK</div>
                </div>
              </div>
            </div>

            {/* Right Visual/Action */}
            <div className="lg:col-span-6 border-t-2 lg:border-t-0 lg:border-l-2 border-black relative h-64 lg:h-auto">
              <img
                src="/event-image.jpg"
                alt="Build Bharat AI Hackathon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
