import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-stone-slabs.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          Premium Indian & Brazilian Stone Slabs – In Stock & Ready to Ship
        </h1>
        
        <p className="text-responsive-subheading text-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Stone House Materials supplies high-quality granite, marble, and quartzite slabs to fabricators, contractors, and developers across the U.S. With U.S. warehouse inventory and flexible B2B terms, we make sourcing stone fast and reliable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Button 
            variant="luxury" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] sm:min-w-48 h-12 sm:h-11 text-base sm:text-sm" 
            onClick={scrollToContact}
          >
            Request Sample Pack
          </Button>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] sm:min-w-48 h-12 sm:h-11 text-base sm:text-sm"
            asChild
          >
            <Link to="/collection">View Our Collection</Link>
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