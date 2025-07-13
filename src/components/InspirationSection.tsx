import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/inspiration-kitchen.jpg";
import bathroomImage from "@/assets/inspiration-bathroom.jpg";
import commercialImage from "@/assets/inspiration-commercial.jpg";

const InspirationSection = () => {
  const projects = [
    {
      title: "Luxury Kitchen Design",
      category: "Residential",
      image: kitchenImage,
      description: "Sophisticated kitchen featuring premium granite countertops and marble backsplash."
    },
    {
      title: "Spa-Inspired Bathroom",
      category: "Residential", 
      image: bathroomImage,
      description: "Tranquil bathroom retreat with exquisite marble walls and vanity surfaces."
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      image: commercialImage,
      description: "Impressive lobby featuring dramatic stone feature walls and premium flooring."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6">
            Inspiration Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the transformative power of premium natural stone in real-world applications. 
            From intimate residential spaces to grand commercial installations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-card hover:shadow-luxury transition-all duration-500">
                
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="bg-muted/50 rounded-lg p-8 text-center border border-border/50">
          <blockquote className="text-xl italic text-foreground mb-4">
            "Stone House transformed our vision into reality with their exceptional materials and expertise. 
            The quality and service exceeded all expectations."
          </blockquote>
          <cite className="text-muted-foreground">
            — Sarah Mitchell, Architect at Modern Design Studio
          </cite>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="luxury" size="lg">
            View Project Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;