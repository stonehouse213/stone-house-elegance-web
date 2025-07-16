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
      <div className="relative z-10 text-center container-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-responsive-hero text-foreground mb-4 sm:mb-6 tracking-tight">
          Curating the World's Finest Stone
        </h1>
        
        <p className="text-responsive-subheading text-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Discover extraordinary natural stone materials that transform spaces into masterpieces. 
          Premium granite, marble, quartz, and quartzite for discerning architects and designers.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Button 
            variant="luxury" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] sm:min-w-48 h-12 sm:h-11 text-base sm:text-sm" 
            asChild
          >
            <Link to="/collection">Explore Our Collection</Link>
          </Button>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] sm:min-w-48 h-12 sm:h-11 text-base sm:text-sm"
          >
            Request Consultation
          </Button>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-foreground/50 rounded-full mt-1 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;