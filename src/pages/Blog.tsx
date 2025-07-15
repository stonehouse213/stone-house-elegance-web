import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Granite Trends in New Jersey | Stone House Blog for Fabricators & Contractors"
      description="Stay updated on the latest granite trends in New Jersey. Stone House blog for fabricators, contractors, and developers."
      keywords="granite trends New Jersey, NJ granite blog, granite for fabricators NJ, granite for contractors NJ, granite news NJ, stone supplier blog NJ"
    />
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Granite Trends in New Jersey</h1>
      <article className="mb-10">
        <h2 className="text-xl font-semibold mb-2">1. Sustainable Granite Sourcing for NJ Projects</h2>
        <p>New Jersey fabricators and contractors are increasingly seeking sustainably sourced granite. At Stone House, we partner with ethical quarries and offer eco-friendly options for your next project.</p>
      </article>
      <article className="mb-10">
        <h2 className="text-xl font-semibold mb-2">2. Popular Granite Colors for Developers in 2024</h2>
        <p>Absolute Black, Colonial White, and Fantasy Brown remain top choices for New Jersey developers. These colors offer timeless appeal and durability for both residential and commercial projects.</p>
      </article>
      <article className="mb-10">
        <h2 className="text-xl font-semibold mb-2">3. Why Fabricators Choose Local NJ Suppliers</h2>
        <p>Local suppliers like Stone House provide fast delivery, trade pricing, and a deep inventory—making us the go-to partner for fabricators and contractors across New Jersey.</p>
      </article>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Granite Blog FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How do I choose the right granite for my NJ project?</h3>
            <p>Consider color, durability, and finish. Our team can help you select the perfect slab for your needs.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do you offer trade pricing for contractors?</h3>
            <p>Yes, we offer special pricing for fabricators, contractors, and developers in New Jersey.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Blog; 