import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";
import { FacultySection } from "@/components/FacultySection";

const Faculty = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <FacultySection />
            </main>
            <Footer />
        </div>
    );
};

export default Faculty;
