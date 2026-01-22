import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadershipSection } from "@/components/LeadershipSection";

const Leadership = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <LeadershipSection />
            </main>
            <Footer />
        </div>
    );
};

export default Leadership;
