import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div id="vision-mission">
          <VisionMissionSection />
        </div>
        <AboutSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
