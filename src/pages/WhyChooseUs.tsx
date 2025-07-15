import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const WhyChooseUs = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Why Choose Stone House for Granite in New Jersey? | Trusted by Fabricators & Contractors"
      description="Discover why Stone House is New Jersey’s trusted granite supplier for fabricators, contractors, and developers. Premium slabs, fast delivery, and expert support."
      keywords="why choose granite supplier NJ, best granite supplier New Jersey, trusted granite NJ, granite for fabricators NJ, granite for contractors NJ, stone house granite reviews"
    />
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Why Choose Stone House for Granite in New Jersey?</h1>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Trusted by NJ’s top fabricators, contractors, and developers</li>
        <li>Extensive inventory of premium granite, marble, and quartzite slabs</li>
        <li>Fast delivery across New Jersey and the Tri-State area</li>
        <li>Trade pricing and volume discounts</li>
        <li>Expert support for project planning and stone selection</li>
        <li>Family-owned, local business with decades of experience</li>
      </ul>
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Do you offer samples for fabricators and contractors?</h3>
            <p>Yes, we provide samples and expert guidance to help you choose the right stone for your project.</p>
          </div>
          <div>
            <h3 className="font-semibold">How fast can you deliver granite slabs in NJ?</h3>
            <p>We offer next-day delivery for most orders within New Jersey and the surrounding area.</p>
          </div>
          <div>
            <h3 className="font-semibold">What makes Stone House different from other suppliers?</h3>
            <p>Our commitment to quality, service, and local expertise sets us apart. We build lasting relationships with our trade partners.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default WhyChooseUs; 