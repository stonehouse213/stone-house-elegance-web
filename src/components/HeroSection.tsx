import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-stone-slabs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-hero text-foreground mb-6 tracking-tight">
          Curating the World's Finest Stone
        </h1>
        
        <p className="text-subheading text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover extraordinary natural stone materials that transform spaces into masterpieces. 
          Premium granite, marble, and exotic stones for discerning architects and designers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="luxury" size="lg" className="min-w-48" asChild>
            <Link to="/collection">Explore Our Collection</Link>
          </Button>
          
          <Button variant="hero" size="lg" className="min-w-48">
            Request Consultation
          </Button>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;