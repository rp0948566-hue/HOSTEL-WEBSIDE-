import { MapPin } from "lucide-react";

export function Map() {
  return (
    <section className="relative h-[500px] w-full bg-zinc-900">
      {/* Placeholder for Map - In a real app, use Google Maps API or Leaflet with dark mode tiles */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
            backgroundSize: "20px 20px"
        }}></div>
        
        <div className="text-center z-10">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Prime Location</h3>
            <p className="text-gray-400 mb-8">Strategically placed for students.</p>
        </div>
      </div>
      
      {/* Overlay Card */}
      <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-12 md:w-80 rounded-2xl bg-obsidian/90 p-6 backdrop-blur-md border border-white/10">
        <h3 className="font-display text-xl font-bold text-white uppercase mb-4">Proximity</h3>
        <p className="text-xs text-gray-400 mb-4">
          Located in Vijay Nagar, Indore - opposite SICA School.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-electric-blue/20 text-electric-blue">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-white font-bold">1 Min</p>
              <p className="text-xs text-gray-400">Opposite SICA School</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyber-lime/20 text-cyber-lime">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-white font-bold">Nearby</p>
              <p className="text-xs text-gray-400">Niranjanpur & Vijay Nagar</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
