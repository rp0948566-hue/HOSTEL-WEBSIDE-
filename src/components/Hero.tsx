import { motion } from "motion/react";
import { Calendar, User, Search, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full bg-background pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
                Hosteller — amazing hostel for the free spirited traveler
              </h1>
              <div className="flex gap-6 items-start">
                <div className="w-1 h-24 bg-[#1e3a8a] hidden md:block"></div>
                <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                  Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 absolute top-0 right-0 h-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full"
            >
               <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
                alt="Hostel Room"
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
          
          {/* Mobile Image */}
          <div className="w-full h-[400px] lg:hidden mb-8 rounded-2xl overflow-hidden">
             <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
                alt="Hostel Room"
                className="h-full w-full object-cover"
              />
          </div>

        </div>
      </div>

      {/* Booking Widget - Overlapping */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 mt-12 lg:mt-0 lg:absolute lg:bottom-20 lg:left-0 lg:right-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl mx-auto lg:mx-0"
        >
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-foreground">Check-in</span>
              <Calendar size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="flex items-center justify-between">
               <span className="text-muted-foreground">Add date</span>
               <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          </div>

          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-foreground">Check-out</span>
              <Calendar size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="flex items-center justify-between">
               <span className="text-muted-foreground">Add date</span>
               <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          </div>

          <div className="flex-1 p-6 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-foreground">Guests</span>
              <User size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="text-foreground font-medium">1 adult</div>
          </div>

          <button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-10 py-6 font-bold text-lg transition-colors flex items-center justify-center gap-2">
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
}
