import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contact-section');
  };

  const navigationItems = [
    { name: 'Home', href: '/', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Collection', href: '/collection' },
    { name: 'About', action: () => scrollToSection('about-section') },
    { name: 'Materials', action: () => scrollToSection('materials-section') },
    { name: 'Contact', action: scrollToContact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-foreground hover:text-secondary transition-colors"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm lg:text-base">SH</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg lg:text-xl">Stone House</span>
              <span className="block text-xs text-muted-foreground">Materials</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-foreground/80 hover:text-secondary hover:bg-secondary/10"
              onClick={scrollToContact}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Pricing
            </Button>
            <Button 
              variant="luxury" 
              size="sm"
              onClick={scrollToContact}
            >
              Request Sample
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="bg-background/95 backdrop-blur-md border-t border-border/50 rounded-b-lg shadow-xl">
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-secondary/10 transition-colors rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-4 border-t border-border/50">
                  <Button 
                    variant="luxury" 
                    size="sm" 
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Request Sample Pack
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 