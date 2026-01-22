import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { eventsData, Event } from "@/data/eventsData";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/SectionHeader";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20 pb-20">
                <section className="pt-4 pb-12 bg-background bauhaus-grid">
                    <div className="container">
                        {/* Header */}
                        <SectionHeader
                            index="04"
                            tag="HAPPENINGS"
                            title="Department"
                            highlight="Events"
                            description="Workshops, Hackathons, and Academic gatherings fostering innovation."
                            className="mb-16"
                        />

                        {/* Events Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {eventsData.map((event) => (
                                <Card
                                    key={event.id}
                                    className={cn(
                                        "group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer",
                                        event.status === "Completed" ? "opacity-75" : "opacity-100"
                                    )}
                                    onClick={() => setSelectedEvent(event)}
                                >
                                    <CardHeader className="border-b-2 border-black bg-background/50 relative overflow-hidden p-0">
                                        <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase border-l-2 border-b-2 border-black z-10">
                                            {event.status}
                                        </div>
                                        {event.image && (
                                            <div className="w-full h-48 overflow-hidden border-b-2 border-black">
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6 pb-2">
                                            <CardTitle className="text-2xl leading-tight mb-2">
                                                {event.title}
                                            </CardTitle>
                                            <div className="flex items-center gap-2">
                                                <span className={cn(
                                                    "px-2 py-0.5 text-xs font-bold border border-black uppercase",
                                                    event.category === "Hackathon" && "bg-primary text-white",
                                                    event.category === "Workshop" && "bg-secondary text-white",
                                                    event.category === "Seminar" && "bg-accent text-black",
                                                    event.category === "Conference" && "bg-muted text-black",
                                                    event.category === "Cultural" && "bg-black text-white"
                                                )}>
                                                    {event.category}
                                                </span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                                        <p className="font-mono text-sm mb-6 text-justify leading-relaxed line-clamp-3">
                                            {event.description}
                                        </p>

                                        <div className="space-y-3 pt-4 border-t-2 border-dashed border-black/20 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-primary" />
                                                <span className="font-heading font-bold">{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-secondary" />
                                                <span className="font-mono text-xs uppercase">{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-5 h-5 text-accent" />
                                                <span className="font-mono text-xs uppercase">{event.location}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Event Details Dialog */}
            <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
                <DialogContent className="max-w-3xl p-0 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden">
                    {selectedEvent && (
                        <>
                            <div className="max-h-[85vh] overflow-y-auto">
                                {selectedEvent.image && (
                                    <div className="w-full h-64 overflow-hidden border-b-2 border-black relative">
                                        <img
                                            src={selectedEvent.image}
                                            alt={selectedEvent.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 font-mono text-sm font-bold uppercase border-2 border-white shadow-lg">
                                            {selectedEvent.status}
                                        </div>
                                    </div>
                                )}

                                <div className="p-8">
                                    <DialogHeader className="mb-6 text-left">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className={cn(
                                                "px-3 py-1 text-xs font-bold border-2 border-black uppercase",
                                                selectedEvent.category === "Hackathon" && "bg-primary text-white",
                                                selectedEvent.category === "Workshop" && "bg-secondary text-white",
                                                selectedEvent.category === "Seminar" && "bg-accent text-black",
                                                selectedEvent.category === "Conference" && "bg-muted text-black",
                                                selectedEvent.category === "Cultural" && "bg-black text-white"
                                            )}>
                                                {selectedEvent.category}
                                            </span>
                                        </div>
                                        <DialogTitle className="font-heading text-4xl md:text-5xl font-bold uppercase leading-tight mb-2">
                                            {selectedEvent.title}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-y-2 border-black/10 py-6">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-mono text-xs text-muted-foreground uppercase">Date</span>
                                            <div className="flex items-center gap-2 font-bold">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                {selectedEvent.date}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-mono text-xs text-muted-foreground uppercase">Time</span>
                                            <div className="flex items-center gap-2 font-bold">
                                                <Clock className="w-4 h-4 text-secondary" />
                                                {selectedEvent.time}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-mono text-xs text-muted-foreground uppercase">Location</span>
                                            <div className="flex items-center gap-2 font-bold">
                                                <MapPin className="w-4 h-4 text-accent" />
                                                {selectedEvent.location}
                                            </div>
                                        </div>
                                    </div>

                                    <DialogDescription className="font-mono text-base text-foreground leading-relaxed text-justify mb-8">
                                        {selectedEvent.description}
                                    </DialogDescription>

                                    <div className="flex justify-end">
                                        <Button className="mech-button rounded-none bg-black text-white hover:bg-primary border-2 border-black" onClick={() => setSelectedEvent(null)}>
                                            CLOSE DETAILS
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Events;
