import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { AboutSection } from "@/components/AboutSection";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
