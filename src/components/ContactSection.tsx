import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    stoneInterest: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.stoneInterest.trim()) newErrors.stoneInterest = 'Stone interest is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        stoneInterest: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact-section" className="section-padding container-padding bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-responsive-heading text-foreground mb-4 lg:mb-6">
            Get Pricing & Availability
          </h2>
          <p className="text-responsive-subheading text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Contact our sales team for current pricing, availability, and to discuss your project requirements. 
            We'll respond within 24 hours with detailed quotes and samples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Lead Capture Form */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-card rounded-lg p-6 lg:p-8 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your inquiry and will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input 
                      name="name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`h-10 sm:h-11 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Company *</label>
                    <Input 
                      name="company" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`h-10 sm:h-11 ${errors.company ? 'border-red-500' : ''}`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`h-10 sm:h-11 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Stone Interest *</label>
                    <Select 
                      value={formData.stoneInterest} 
                      onValueChange={(value) => handleInputChange('stoneInterest', value)}
                    >
                      <SelectTrigger className={`h-10 sm:h-11 ${errors.stoneInterest ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select stone type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="granite">Granite</SelectItem>
                        <SelectItem value="marble">Marble</SelectItem>
                        <SelectItem value="quartzite">Quartzite</SelectItem>
                        <SelectItem value="quartz">Quartz</SelectItem>
                        <SelectItem value="mixed">Mixed Selection</SelectItem>
                        <SelectItem value="custom">Custom Request</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.stoneInterest && <p className="text-red-500 text-xs mt-1">{errors.stoneInterest}</p>}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Project Details (Optional)</label>
                    <Textarea 
                      name="message" 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-[80px]"
                      placeholder="Tell us about your project, quantity needed, timeline, etc."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="luxury" 
                    className="w-full h-12 sm:h-11 text-base sm:text-sm"
                  >
                    Contact Sales
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-card rounded-lg p-6 lg:p-8 shadow-card">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">U.S. Warehouse</div>
                    <div className="text-sm lg:text-base">Coming Fall 2025</div>
                    <div className="text-sm lg:text-base">Location TBA</div>
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
                    <div className="text-sm lg:text-base">sales@stonehousematerials.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Response Time</div>
                    <div className="text-sm lg:text-base">Within 24 hours</div>
                    <div className="text-sm lg:text-base">Monday - Friday</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-accent rounded-lg p-6 lg:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-foreground mb-3">
                🚚 U.S. Warehouse Opening Fall 2025
              </h3>
              <p className="text-sm lg:text-base text-secondary-foreground/90 mb-4 lg:mb-6">
                Join our waitlist to access slabs first and get priority pricing.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] h-12 sm:h-11 text-base sm:text-sm"
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;