import BookingFlowSection from "@/components/BookingFlowSection";
import ConclusionSection from "@/components/ConclusionSection";
import DataIntegritySection from "@/components/DataIntegritySection";
import ERDiagramSection from "@/components/ERDiagramSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import Navbar from "@/components/Navbar";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";

const Home = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <div id="mission">
                <MissionVisionSection />
            </div>
            <ProblemsSection />
            <SolutionsSection />
            <ERDiagramSection />
            <BookingFlowSection />
            <DataIntegritySection />
            <StatsSection />
            <ConclusionSection />
            <Footer />
        </div>
    );
};

export default Home;