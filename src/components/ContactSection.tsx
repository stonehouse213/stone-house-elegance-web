import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding container-padding bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-responsive-heading text-foreground mb-4 lg:mb-6">
            Visit Our Showroom
          </h2>
          <p className="text-responsive-subheading text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Experience the beauty of natural stone in person. Our showroom features full-size slabs, 
            expert consultation, and design inspiration for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-card rounded-lg p-6 lg:p-8 shadow-card">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Showroom Address</div>
                    <div className="text-sm lg:text-base">1234 Stone Avenue</div>
                    <div className="text-sm lg:text-base">Design District, City 12345</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-sm lg:text-base">(555) 123-STONE</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm lg:text-base">info@stonehouse.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Hours</div>
                    <div className="text-sm lg:text-base">Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div className="text-sm lg:text-base">Saturday: 9:00 AM - 4:00 PM</div>
                    <div className="text-sm lg:text-base">Sunday: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-accent rounded-lg p-6 lg:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-foreground mb-3">
                Schedule a Consultation
              </h3>
              <p className="text-sm lg:text-base text-secondary-foreground/90 mb-4 lg:mb-6">
                Book a private consultation with our stone experts to discuss your project requirements.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] h-12 sm:h-11 text-base sm:text-sm"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Map/Visual Element */}
          <div className="relative">
            <div className="bg-muted rounded-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
              <div className="text-center z-10 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 lg:mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Experience our collection in person</p>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs sm:text-sm"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;