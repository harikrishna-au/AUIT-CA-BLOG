import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { FacultySection } from "@/components/FacultySection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <FacultySection />
        <ProgramsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
