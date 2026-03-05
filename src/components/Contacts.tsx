import { Phone, Mail, MapPin } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Contacts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">Contacts information</h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <FadeIn direction="right">
              <h3 className="font-display text-4xl font-bold text-foreground mb-6">Contacts</h3>
              <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
                Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="text-[#1e3a8a] mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-lg text-foreground">(329) 580-7077</div>
                    <div className="text-lg text-foreground">(650) 382-5020</div>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-[#1e3a8a] mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-lg text-foreground">contact@example.com</div>
                    <div className="text-lg text-foreground">contact@example.com</div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-bold text-xl mb-4">Vel turpis nunc eget lorem dolor sed ?</h4>
                  <div className="space-y-4 pl-4 border-l-2 border-[#1e3a8a]">
                    <p className="text-muted-foreground">
                      Vel turpis nunc eget lorem dolor sed. Et tortor consequat id porta nibh venenatis cras sed
                    </p>
                    <p className="text-muted-foreground">
                      Vel turpis nunc eget lorem dolor sed. Et tortor consequat id porta nibh venenatis cras sed
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Map */}
          <div className="w-full lg:w-7/12 h-[500px] bg-secondary rounded-2xl overflow-hidden relative">
             <FadeIn direction="left" className="h-full w-full">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52808.16930050868!2d-118.39763725!3d34.09800995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1623846666666!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                   <MapPin size={32} fill="currentColor" />
                 </div>
              </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
