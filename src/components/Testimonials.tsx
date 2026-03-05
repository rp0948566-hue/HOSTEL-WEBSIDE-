import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Testimonials() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Testimonial */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" 
                      alt="Johnathan Jennings" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    “Mauris a diam maecenas sed enim ut sem. Scelerisque in dictum non consectetur a erat nam. Commodo viverra maecenas accumsan lacus”
                  </h3>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-sm">
                    <span className="text-muted-foreground">Johnathan Jennings</span>
                    <span className="font-semibold text-foreground">Founder of the hostel “Hosteller”</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: CTA & Newsletter */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Apartment CTA */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Are you looking for an apartment?
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Tellus mauris a diam maecenas sed enim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum
                  </p>
                  <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#1e3a8a]/90 transition-colors">
                    View rooms
                  </button>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Newsletter
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Urna id volutpat lacus laoreet. Viverra vitae congue eu consequat ac
                  </p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full px-4 py-3 rounded-l-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <button className="bg-[#1e3a8a] text-white px-6 rounded-r-md hover:bg-[#1e3a8a]/90 transition-colors flex items-center justify-center">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
