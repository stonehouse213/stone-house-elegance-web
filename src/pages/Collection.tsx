import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useInventory } from "@/contexts/InventoryContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useConsultation } from "@/contexts/ConsultationContext";
import SEO from "@/components/SEO";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { stones } = useInventory();
  const { addRequest } = useConsultation();
  const [showDialog, setShowDialog] = useState(false);
  const [success, setSuccess] = useState(false);

  const categories = ["All", "Granite", "Marble", "Quartz", "Quartzite"];

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

  const handleConsultationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addRequest({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    });
    setShowDialog(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Granite Slabs New Jersey | Stone House Collection for Fabricators & Contractors"
        description="Browse Stone House's curated collection of granite slabs in New Jersey. Perfect for fabricators, contractors, and developers. Premium granite, marble, quartz, and quartzite for all NJ projects."
        keywords="granite slabs New Jersey, NJ granite collection, granite for fabricators NJ, granite for contractors NJ, granite supplier NJ, stone slabs NJ, marble slabs NJ, quartz slabs NJ, quartzite slabs NJ, granite Newark NJ, granite wholesale NJ"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Granite Slab Collection - Stone House NJ',
          description: 'Premium granite, marble, quartz, and quartzite slabs for fabricators, contractors, and developers in New Jersey.',
          hasPart: stones.map(stone => ({
            '@type': 'Product',
            name: stone.name,
            description: stone.description,
            brand: 'Stone House',
            category: stone.category,
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD',
              price: stone.price.replace(/\$/g, '').length * 100, // fake price for SEO
            },
            url: 'https://stonehousegranite.com/collection',
            image: stone.image,
          }))
        }}
      />
      {/* SEO-optimized H1 and intro */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Granite Slabs for Fabricators, Contractors & Developers in New Jersey</h1>
        <p className="text-lg text-muted-foreground mb-6">Explore our premium selection of granite, marble, quartz, and quartzite slabs—trusted by New Jersey’s top fabricators, contractors, and developers. Fast delivery across NJ. Trade pricing available.</p>
      </div>
      
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
                  alt={`${stone.name} ${stone.finish} granite slab New Jersey`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E";
                  }}
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
                  <div className="flex justify-between">
                    <span>Grade:</span>
                    <span className="text-foreground">{stone.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Qty:</span>
                    <span className="text-foreground">{stone.availableQty} sqft</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Dialog open={showDialog} onOpenChange={setShowDialog}>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="luxury">
                        Request Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request a Consultation</DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4" onSubmit={handleConsultationSubmit}>
                        <div>
                          <label className="text-sm font-medium">Name</label>
                          <Input name="name" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <Input name="email" type="email" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone (optional)</label>
                          <Input name="phone" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Message</label>
                          <Textarea name="message" required />
                        </div>
                        <div className="flex justify-end">
                          <Button type="submit">Submit</Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                  {success && (
                    <div className="text-green-600 text-sm text-center mt-2">Thank you! Your request has been submitted.</div>
                  )}
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