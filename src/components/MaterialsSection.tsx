import { Button } from "@/components/ui/button";
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
      title: "Quartzite",
      description: "Natural strength with stunning aesthetics. Quartzite combines durability with breathtaking natural patterns.",
      image: quartziteImage,
      features: ["Ultra Durable", "Low Maintenance", "Natural Beauty"]
    },
    {
      title: "Exotic Stones",
      description: "Rare and extraordinary materials from around the world. Unique stones that create truly one-of-a-kind spaces.",
      image: exoticImage,
      features: ["One-of-a-Kind", "Rare Materials", "Stunning Patterns"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6">
            Materials & Inventory
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated collection of premium natural stone materials, 
            each selected for its exceptional quality and unique character.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <div key={material.title} className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {material.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {material.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {material.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300"
                  >
                    Discover Collection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="lg">
            View Complete Inventory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;