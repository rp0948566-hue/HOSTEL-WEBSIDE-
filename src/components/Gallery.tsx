import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "motion/react";

export function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Apartment", "Standard Room", "Kitchen", "Living Room"];

  const images = [
    { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop", category: "Standard Room" },
    { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop", category: "Apartment" },
    { src: "https://images.unsplash.com/photo-1522771753035-4850d32f541d?q=80&w=2070&auto=format&fit=crop", category: "Living Room" },
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop", category: "Kitchen" },
    { src: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=2070&auto=format&fit=crop", category: "Standard Room" },
    { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop", category: "Apartment" }
  ];

  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h2>
            <div className="flex flex-wrap gap-8 mt-8 border-b border-border pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg transition-colors relative pb-4 -mb-4 ${
                    activeTab === tab 
                      ? "text-foreground font-medium border-b-2 border-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <FadeIn key={img.src} delay={index * 0.1}>
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img 
                    src={img.src} 
                    alt={`Gallery photo ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Focus Corners Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
