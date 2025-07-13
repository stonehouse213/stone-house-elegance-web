import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import graniteImage from "@/assets/granite-slab.jpg";
import marbleImage from "@/assets/marble-slab.jpg";
import quartziteImage from "@/assets/quartzite-slab.jpg";
import exoticImage from "@/assets/exotic-stone-slab.jpg";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Granite", "Marble", "Quartzite", "Exotic Stones"];

  const stones = [
    {
      id: 1,
      name: "Absolute Black Granite",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: graniteImage,
      description: "Deep black granite with subtle speckled patterns",
      features: ["Heat Resistant", "Scratch Resistant", "Low Maintenance"],
      finish: "Polished",
      thickness: "2cm, 3cm"
    },
    {
      id: 2,
      name: "Carrara White Marble",
      category: "Marble",
      origin: "Italy",
      price: "$$$",
      image: marbleImage,
      description: "Classic white marble with elegant gray veining",
      features: ["Timeless Beauty", "Unique Veining", "Premium Quality"],
      finish: "Polished, Honed",
      thickness: "2cm, 3cm"
    },
    {
      id: 3,
      name: "Arctic White Quartzite",
      category: "Quartzite",
      origin: "Brazil",
      price: "$$$",
      image: quartziteImage,
      description: "Stunning white quartzite with dramatic veining patterns",
      features: ["Ultra Durable", "Heat Resistant", "Natural Beauty"],
      finish: "Polished",
      thickness: "2cm, 3cm"
    },
    {
      id: 4,
      name: "Fusion Exotic",
      category: "Exotic Stones",
      origin: "Brazil",
      price: "$$$$",
      image: exoticImage,
      description: "Rare exotic stone with unique geological patterns",
      features: ["One-of-a-Kind", "Conversation Piece", "Investment Grade"],
      finish: "Polished, Leathered",
      thickness: "2cm, 3cm"
    },
    {
      id: 5,
      name: "Kashmir White Granite",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: graniteImage,
      description: "Light granite with burgundy and gold accents",
      features: ["Warm Tones", "Durable", "Versatile"],
      finish: "Polished, Honed",
      thickness: "2cm, 3cm"
    },
    {
      id: 6,
      name: "Calacatta Gold Marble",
      category: "Marble",
      origin: "Italy",
      price: "$$$$",
      image: marbleImage,
      description: "Luxurious marble with bold gold veining",
      features: ["Premium Grade", "Bold Patterns", "Luxury Appeal"],
      finish: "Polished",
      thickness: "2cm, 3cm"
    }
  ];

  const filteredStones = stones.filter(stone => {
    const matchesCategory = selectedCategory === "All" || stone.category === selectedCategory;
    const matchesSearch = stone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stone.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPriceDisplay = (price: string) => {
    const priceMap: { [key: string]: string } = {
      "$$": "Premium",
      "$$$": "Luxury", 
      "$$$$": "Ultra-Luxury"
    };
    return priceMap[price] || price;
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <div className="bg-gradient-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-heading text-foreground mb-4">Stone Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our curated selection of premium natural stones. Each piece is carefully selected 
            for its exceptional quality, unique character, and architectural potential.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search stones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredStones.length} of {stones.length} stones
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Stone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStones.map((stone) => (
            <Card key={stone.id} className="overflow-hidden group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-1">
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={stone.image} 
                  alt={stone.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                    {getPriceDisplay(stone.price)}
                  </Badge>
                </div>

                {/* Origin Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-background/80 text-foreground border-border">
                    {stone.origin}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stone.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {stone.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {stone.category}
                  </Badge>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-foreground">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {stone.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Finish:</span>
                    <span className="text-foreground">{stone.finish}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thickness:</span>
                    <span className="text-foreground">{stone.thickness}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full" variant="luxury">
                    Request Sample
                  </Button>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredStones.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No stones found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;