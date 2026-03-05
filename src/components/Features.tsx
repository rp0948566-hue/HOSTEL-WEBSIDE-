import { Calendar, UserCheck, Key } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Features() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12">
            <FadeIn direction="right">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
                Stages of booking a room
              </h2>
              
              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-8 bottom-8 w-px bg-border -z-10 hidden md:block"></div>

                {/* Step 1 */}
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#e6f0fa] flex items-center justify-center text-[#1e3a8a]">
                    <Calendar size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Room reservation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Integer eget aliquet nibh praesent tristique magna sit amet purus
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#e6f0fa] flex items-center justify-center text-[#1e3a8a]">
                    <UserCheck size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Filling in documents and payment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Leo duis ut diam quam. Sed velit dignissim sodales ut eu
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#e6f0fa] flex items-center justify-center text-[#1e3a8a]">
                    <Key size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Check in hostel</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vulputate enim nulla aliquet porttitor. Sagittis nisl rhoncus mattis rhoncus
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12 relative">
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop" 
                  alt="Plant in basket" 
                  className="w-full h-full object-cover"
                />
                
                {/* Cart Button Overlay */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                   <button className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-[#1e3a8a] hover:bg-white transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
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
