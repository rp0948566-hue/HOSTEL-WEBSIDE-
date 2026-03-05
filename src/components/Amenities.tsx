import { Wifi, MapPin, Play, Briefcase, Car, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Amenities() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <FadeIn direction="right">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                We have everything <br/> you need
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent border border-primary/20 flex items-center justify-center text-primary">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Free available high speed WiFi</h4>
                  </div>
                </div>
                
                <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent border border-primary/20 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Convenient location in the center</h4>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent border border-primary/20 flex items-center justify-center text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Free storage of luggage of any size</h4>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-transparent border border-primary/20 flex items-center justify-center text-primary">
                    <Car size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Parking place allocated to you</h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-md font-bold hover:bg-[#1e3a8a]/90 transition-colors">
                  Book now
                </button>
                <button className="flex items-center gap-2 text-[#1e3a8a] font-bold hover:gap-3 transition-all">
                  More about <ArrowRight size={20} />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop" 
                  alt="Friends having fun" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <button className="w-24 h-24 bg-transparent border-2 border-white rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform backdrop-blur-sm">
                    <Play size={40} fill="currentColor" className="ml-2" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
