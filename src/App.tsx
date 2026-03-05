/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rooms } from "./components/Rooms";
import { Amenities } from "./components/Amenities";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { News } from "./components/News";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Stats } from "./components/Stats";
import { RulesAndContact } from "./components/RulesAndContact";
import { ShoppingCart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground relative">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Stats />
        <Features />
        <Testimonials />
        <Gallery />
        <News />
        <RulesAndContact />
        <Contacts />
      </main>
      <Footer />
      
      {/* Floating Cart Button */}
      <button className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#1e3a8a] hover:scale-110 transition-transform border border-blue-100">
        <ShoppingCart size={24} fill="currentColor" />
      </button>
    </div>
  );
}

