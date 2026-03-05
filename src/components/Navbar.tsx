import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 20v-6h4v6" />
              <path d="M5 20v-8" />
              <path d="M19 20v-8" />
              <path d="M2 20h20" />
              <path d="M9 10l-4-4" />
              <path d="M15 10l4-4" />
            </svg>
          </div>
          <span className="font-display text-2xl font-bold text-[#1e3a8a]">Hosteller</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors relative group">
            Rooms
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors relative group">
            News
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors relative group">
            Pages
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#dbeafe] text-[#1e3a8a] px-6 py-2.5 rounded-md font-bold hover:bg-[#1e3a8a] hover:text-white transition-all">
            Contacts
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <a href="#" className="text-lg font-medium text-foreground hover:text-primary">Home</a>
              <a href="#" className="text-lg font-medium text-foreground hover:text-primary">About</a>
              <a href="#" className="text-lg font-medium text-foreground hover:text-primary">Rooms</a>
              <a href="#" className="text-lg font-medium text-foreground hover:text-primary">News</a>
              <a href="#" className="text-lg font-medium text-foreground hover:text-primary">Pages</a>
              <button className="bg-primary text-white px-6 py-3 rounded-md font-bold w-full">
                Contacts
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
