import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import graniteImage from "@/assets/granite-slab.jpg";
import marbleImage from "@/assets/marble-slab.jpg";
import quartziteImage from "@/assets/quartzite-slab.jpg";
import exoticImage from "@/assets/exotic-stone-slab.jpg";

const MaterialsSection = () => {
  const materials = [
    {
      title: "Granite",
      description: "Timeless durability meets natural beauty. Our granite collection showcases rich patterns and exceptional strength.",
      image: graniteImage,
      features: ["Heat Resistant", "Scratch Resistant", "Unique Patterns"]
    },
    {
      title: "Marble",
      description: "Classic elegance with distinctive veining. Premium marble selections for sophisticated architectural applications.",
      image: marbleImage,
      features: ["Luxurious Veining", "Timeless Appeal", "Premium Quality"]
    },
    {
      title: "Quartz",
      description: "Modern, non-porous, and low-maintenance. Quartz surfaces are perfect for contemporary spaces and high-traffic areas.",
      image: quartziteImage,
      features: ["Non-Porous", "Low Maintenance", "Contemporary Look"]
    },
    {
      title: "Quartzite",
      description: "Natural strength with stunning aesthetics. Quartzite combines durability with breathtaking natural patterns.",
      image: quartziteImage,
      features: ["Ultra Durable", "Low Maintenance", "Natural Beauty"]
    }
  ];

  return (
    <section id="materials-section" className="section-padding container-padding bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-responsive-heading text-foreground mb-4 lg:mb-6">
            Materials & Inventory
          </h2>
          <p className="text-responsive-subheading text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Explore our carefully curated collection of premium natural stone materials, 
            each selected for its exceptional quality and unique character.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {materials.map((material, index) => (
            <div key={material.title} className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                    {material.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed flex-1">
                    {material.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4 lg:mb-6">
                    {material.features.map((feature) => (
                      <div key={feature} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 h-10 sm:h-11 text-sm"
                    asChild
                  >
                    <Link to="/collection">Discover Collection</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <Button 
            variant="luxury" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] h-12 sm:h-11 text-base sm:text-sm"
            asChild
          >
            <Link to="/collection">View Complete Inventory</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;