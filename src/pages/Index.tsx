import HeroSection from "@/components/HeroSection";
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
        title="Stone House | New Jersey Granite Supplier for Fabricators, Contractors & Developers"
        description="Stone House is New Jersey's premier granite supplier for fabricators, contractors, and developers. Wholesale granite slabs, quartzite, marble, and exotic stones. Serving all of NJ and the Tri-State area."
        keywords="granite supplier New Jersey, NJ granite slabs, granite fabricators NJ, granite contractors NJ, wholesale granite New Jersey, stone supplier NJ, marble slabs NJ, quartzite NJ, granite for developers NJ, granite for contractors NJ, granite for fabricators NJ, stone house granite"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Stone House',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
          '@id': 'https://stonehousegranite.com',
          url: 'https://stonehousegranite.com',
          telephone: '(555) 123-STONE',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1234 Stone Avenue',
            addressLocality: 'Newark',
            addressRegion: 'NJ',
            postalCode: '07101',
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
              'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
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
      <AboutSection />
      <MaterialsSection />
      <InspirationSection />
      <ContactSection />
      {/* SEO-optimized FAQ section for NJ granite supply */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">New Jersey Granite Supply FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Where can I buy wholesale granite slabs in New Jersey?</h3>
            <p>Stone House is a leading wholesale granite supplier in New Jersey, serving fabricators, contractors, and developers with a wide selection of premium granite, marble, and quartzite slabs.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do you deliver granite slabs to job sites in NJ?</h3>
            <p>Yes! We deliver granite, marble, and quartzite slabs throughout New Jersey and the Tri-State area, directly to your fabrication shop or job site.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can contractors and developers get trade pricing?</h3>
            <p>Absolutely. We offer special trade pricing for fabricators, contractors, and developers in New Jersey. Contact us for a quote on your next project.</p>
          </div>
          <div>
            <h3 className="font-semibold">What types of stone do you stock?</h3>
            <p>We stock a curated selection of granite, marble, quartzite, and exotic stones, perfect for countertops, flooring, and custom fabrication projects in NJ.</p>
          </div>
          <div>
            <h3 className="font-semibold">Why choose Stone House for granite in New Jersey?</h3>
            <p>We are trusted by New Jersey’s top fabricators, contractors, and developers for our quality, service, and deep inventory of premium stone slabs.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
