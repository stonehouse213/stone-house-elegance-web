import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import StoneGallery from "@/components/StoneGallery";
import AboutSection from "@/components/AboutSection";
import MaterialsSection from "@/components/MaterialsSection";
import InspirationSection from "@/components/InspirationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Stone House Materials | Wholesale Stone Slab Supplier – Granite, Marble & Quartzite"
        description="We supply premium Indian and Brazilian slabs to fabricators, contractors, and builders. U.S. warehouse stock available now. Fast delivery, flexible terms."
        keywords="wholesale stone slabs, granite supplier, marble supplier, quartzite supplier, stone slabs for fabricators, stone slabs for contractors, Indian granite, Brazilian marble, U.S. stone warehouse, stone slab pricing, stone slab availability, stone house materials"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Stone House Materials',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
          '@id': 'https://stonehousematerials.com',
          url: 'https://stonehousematerials.com',
          telephone: '(555) 123-STONE',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'U.S. Warehouse - Coming Fall 2025',
            addressLocality: 'TBA',
            addressRegion: 'US',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.7357,
            longitude: -74.1724,
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
            ],
            opens: '08:00',
            closes: '18:00',
          }],
          sameAs: [
            'https://www.facebook.com/',
            'https://www.instagram.com/',
            'https://www.linkedin.com/'
          ]
        }}
      />
      <HeroSection />
      <TrustSection />
      <StoneGallery />
      <AboutSection />
      <MaterialsSection />
      <InspirationSection />
      <ContactSection />
      <Footer />
      {/* SEO-optimized FAQ section for stone supply */}
      <section className="section-padding container-padding bg-gradient-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-responsive-heading text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">What stone types do you supply?</h3>
              <p className="text-muted-foreground">We supply premium granite, marble, and quartzite slabs sourced directly from India and Brazil. Our inventory includes popular varieties like Black Galaxy Granite, Carrara Marble, and White Quartzite.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Do you offer B2B credit terms?</h3>
              <p className="text-muted-foreground">Yes, we offer flexible B2B credit terms for qualified fabricators, contractors, and developers. Contact our sales team to discuss credit options and qualification requirements.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">When will your U.S. warehouse open?</h3>
              <p className="text-muted-foreground">Our U.S. warehouse is scheduled to open in Fall 2025. Join our waitlist to get priority access to inventory and special opening pricing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">How quickly can you deliver?</h3>
              <p className="text-muted-foreground">We offer fast delivery across the U.S. Current lead times vary by location and quantity. Contact us for specific delivery timelines for your project.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Do you provide samples?</h3>
              <p className="text-muted-foreground">Yes, we offer sample packs for qualified buyers. Request a sample pack through our contact form to evaluate our stone quality and finishes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">What are your minimum order quantities?</h3>
              <p className="text-muted-foreground">We work with projects of all sizes, from small residential jobs to large commercial developments. Contact our sales team to discuss your specific requirements and pricing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
