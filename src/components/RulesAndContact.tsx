import { Check, User, Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function RulesAndContact() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Rules */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="font-display text-4xl font-bold text-foreground mb-12">
                Rule settlement, eviction and stay
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-[#1e3a8a]">
                    <Check size={24} strokeWidth={2} />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Time of arrival is after 14-00. Time of departure is to 12-00
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-[#1e3a8a]">
                    <Check size={24} strokeWidth={2} />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Does a settlement take place only at complete payment
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-[#1e3a8a]">
                    <Check size={24} strokeWidth={2} />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Is there a settlement in hostel only after the presence of passport
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-[#1e3a8a]">
                    <Check size={24} strokeWidth={2} />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Quam elementum pulvinar etiam non quam lacus suspendisse. Eget gravida cum sociis natoque
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
                <h2 className="font-display text-4xl font-bold text-foreground mb-8">
                  We are ready answer your question
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <User className="absolute right-4 top-3.5 text-muted-foreground" size={20} />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <Mail className="absolute right-4 top-3.5 text-muted-foreground" size={20} />
                    </div>
                  </div>
                  
                  <textarea 
                    placeholder="Message" 
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                  
                  <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#1e3a8a]/90 transition-colors">
                    Send message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
