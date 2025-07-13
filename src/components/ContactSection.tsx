import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6">
            Visit Our Showroom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the beauty of natural stone in person. Our showroom features full-size slabs, 
            expert consultation, and design inspiration for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Location */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <MapPin className="w-5 h-5 text-secondary mr-3" />
                Showroom Location
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground">Stone House Design Center</div>
                  <div>1234 Stone Avenue</div>
                  <div>Design District, City 12345</div>
                </div>
                
                <div className="flex items-center space-x-6 pt-4 border-t border-border">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-secondary mr-2" />
                    <span>(555) 123-STONE</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-secondary mr-2" />
                    <span>info@stonehouse.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Clock className="w-5 h-5 text-secondary mr-3" />
                Showroom Hours
              </h3>
              
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">12:00 PM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Stone Selection Consultation",
                  "Custom Fabrication",
                  "Installation Coordination", 
                  "Design Partnership",
                  "Project Management",
                  "Delivery Services"
                ].map((service) => (
                  <div key={service} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder & CTAs */}
          <div className="space-y-6">
            
            {/* Map */}
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center relative overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h4>
                <p className="text-muted-foreground">Click to view directions</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button variant="luxury" size="lg" className="w-full">
                Schedule Consultation
              </Button>
              
              <Button variant="outline" size="lg" className="w-full">
                Request Quote
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Why Visit Our Showroom?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• See full-size slabs in natural lighting</li>
                <li>• Touch and feel different textures</li>
                <li>• Expert guidance from stone specialists</li>
                <li>• Access to exclusive inventory</li>
                <li>• Design inspiration and samples</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;