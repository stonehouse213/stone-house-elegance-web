import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const StoneGallery = () => {
  const stones = [
    {
      id: 1,
      name: "Black Galaxy Granite",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Granite"
    },
    {
      id: 2,
      name: "Steel Gray Granite",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Granite"
    },
    {
      id: 3,
      name: "Colonial White Granite",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Granite"
    },
    {
      id: 4,
      name: "Absolute Black Granite",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Granite"
    },
    {
      id: 5,
      name: "Carrara Marble",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Marble"
    },
    {
      id: 6,
      name: "Calacatta Gold Marble",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Marble"
    },
    {
      id: 7,
      name: "White Quartzite",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Quartzite"
    },
    {
      id: 8,
      name: "Taj Mahal Quartzite",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      category: "Quartzite"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding container-padding bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-responsive-heading text-foreground mb-4 lg:mb-6">
            Our Stone Collection
          </h2>
          <p className="text-responsive-subheading text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Premium granite, marble, and quartzite slabs sourced directly from India and Brazil. 
            Available in our U.S. warehouse for immediate shipping.
          </p>
        </div>

        {/* Stone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stones.map((stone) => (
            <Card key={stone.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={stone.image}
                  alt={`${stone.name} ${stone.category} slab - Stone House Materials`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${stone.name}%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {stone.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {stone.category}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full h-10 sm:h-11 text-sm group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Request Pricing
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <Button 
            variant="luxury" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] h-12 sm:h-11 text-base sm:text-sm"
            onClick={scrollToContact}
          >
            Get Complete Pricing List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoneGallery; 