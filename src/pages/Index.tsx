import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MaterialsSection from "@/components/MaterialsSection";
import InspirationSection from "@/components/InspirationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <MaterialsSection />
      <InspirationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
