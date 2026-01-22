import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgramsSection } from "@/components/ProgramsSection";

const Programs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <ProgramsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Programs;
