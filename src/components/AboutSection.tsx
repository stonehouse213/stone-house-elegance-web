const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-heading text-foreground mb-6">
                Excellence in Every Slab
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  For over two decades, Stone House has been the trusted partner for architects, 
                  designers, and luxury homeowners seeking the world's most exceptional natural stone materials.
                </p>
                
                <p>
                  Our curated collection features premium granite, marble, quartzite, and exotic stones 
                  sourced from the finest quarries worldwide. Each slab is carefully selected for its 
                  unique character, superior quality, and architectural potential.
                </p>
                
                <p>
                  We believe that extraordinary spaces deserve extraordinary materials. Our commitment 
                  to excellence extends beyond our inventory to include expert consultation, precision 
                  fabrication partnerships, and uncompromising attention to detail.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Premium Slabs</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center relative overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
              <div className="text-center z-10">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Craftsmanship</h3>
                <p className="text-muted-foreground">Uncompromising quality in every selection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;