import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 20v-6h4v6" />
                    <path d="M5 20v-8" />
                    <path d="M19 20v-8" />
                    <path d="M2 20h20" />
                    <path d="M9 10l-4-4" />
                    <path d="M15 10l4-4" />
                  </svg>
                </div>
                <span className="font-display text-2xl font-bold">Hosteller</span>
              </div>
              <p className="text-blue-100/80 leading-relaxed mb-8">
                Ut tellus elementum sagittis vitae et leo duis ut. Sit amet consectetur adipiscing elit duis. Ultrices gravida dictum fusce ut placer orci nulla pellentesque.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6">Quick links</h3>
              <ul className="space-y-4 text-blue-100/80">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rooms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-6 text-blue-100/80">
                <li className="flex gap-4">
                  <MapPin className="flex-shrink-0 w-6 h-6 text-white" />
                  <span>54826 Fadel Circles<br/>Darrylstad, AZ 90995</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="flex-shrink-0 w-6 h-6 text-white" />
                  <div>
                    <div>(329) 580-7077</div>
                    <div>(650) 382-5020</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6">Follow Us</h3>
              <p className="text-blue-100/80 mb-6">
                Venenatis urna cursus eget nunc scelerisque
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
            <p>© {new Date().getFullYear()} Hosteller. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
