import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PillarsSection from "@/components/PillarsSection";
import ForWhoSection from "@/components/ForWhoSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <ForWhoSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default Index;
