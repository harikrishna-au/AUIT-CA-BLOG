import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { Event } from "@/data/eventsData";
import { fetchEvents } from "@/services/api";

export function EventsSection() {
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLatestEvent();
  }, []);

  const loadLatestEvent = async () => {
    try {
      const events = await fetchEvents();
      if (events.length > 0) {
        setEvent(events[0]); // Show the most recent event
      }
    } catch (error) {
      console.error('Failed to load events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  };

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

          {/* Action Button */}
          <div className="md:absolute md:bottom-6 md:right-0 mb-8 md:mb-0">
            <Button size="lg" className="mech-button rounded-none bg-white text-black hover:bg-primary hover:text-white" onClick={() => navigate("/events")}>
              VIEW ALL EVENTS <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="border-2 border-black bg-white p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
            <div className="h-8 bg-gray-200 mb-4 w-1/3"></div>
            <div className="h-4 bg-gray-200 mb-2"></div>
            <div className="h-4 bg-gray-200 w-2/3"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !event && (
          <div className="border-2 border-black bg-white p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <p className="font-heading text-2xl font-bold uppercase">No Events Yet</p>
            <p className="font-mono text-sm mt-2">Check back soon for upcoming events!</p>
          </div>
        )}

        {/* Featured Event */}
        {!loading && event && (
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
                  {event.title}
                </h3>
                <p className="font-mono text-sm md:text-base mb-8 max-w-xl relative z-10">
                  {event.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-black pt-8 relative z-10">
                  <div>
                    <div className="font-mono text-xs text-muted-foreground mb-1">DATE</div>
                    <div className="font-heading text-lg font-bold">{formatDate(event.date)}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground mb-1">CATEGORY</div>
                    <div className="font-heading text-lg font-bold">{event.category.toUpperCase()}</div>
                  </div>
                </div>
              </div>

              {/* Right Visual/Action */}
              <div className="lg:col-span-6 border-t-2 lg:border-t-0 lg:border-l-2 border-black relative h-64 lg:h-auto">
                {event.image_url ? (
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="font-heading text-6xl font-bold text-white opacity-20">{event.category}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
