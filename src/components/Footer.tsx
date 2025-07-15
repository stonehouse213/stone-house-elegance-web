import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-secondary">Stone House</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curating the world's finest natural stone materials for architects, 
              designers, and luxury homeowners since 2003.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-secondary transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-secondary transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-secondary transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2">
              {[
                "Material Collection",
                "Inspiration Gallery", 
                "Project Portfolio",
                "Design Services",
                "Custom Fabrication"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Materials</h4>
            <ul className="space-y-2">
              {[
                "Premium Granite",
                "Luxury Marble",
                "Natural Quartzite",
                "Exotic Stones",
                "Custom Selections"
              ].map((material) => (
                <li key={material}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {material}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>1234 Stone Avenue</div>
                  <div>Design District, City 12345</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-STONE</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">info@stonehouse.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Stone House. All rights reserved. Curating excellence since 2003.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Sustainability
              </a>
              <Link to="/admin-login" className="text-muted-foreground hover:text-secondary transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;