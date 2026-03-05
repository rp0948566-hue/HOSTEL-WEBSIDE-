import { ArrowRight, Bed, Users, Bath } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Rooms() {
  const rooms = [
    {
      id: 1,
      title: "Standard Twin Room Private Shared Bathroom",
      price: "$29",
      period: "/ 1 night",
      secondaryPrice: "$100",
      secondaryPeriod: "/ 7 nights",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      sleeps: "2 Sleeps",
      bed: "1 bunk bed",
      desc: "Diam phasellus vestibulum lorem sed risus ultricies tristique."
    },
    {
      id: 2,
      title: "Comfort Superior Double Bed Private Ensuite",
      price: "$99",
      period: "/ 1 night",
      secondaryPrice: "$220",
      secondaryPeriod: "/ 7 nights",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
      sleeps: "3 Sleeps",
      bed: "1 full bed",
      extraBed: "1 twin bed",
      desc: "Diam phasellus vestibulum lorem sed risus ultricies tristique."
    },
    {
      id: 3,
      title: "Standard Triple Room with Shared Bathroom",
      price: "$29",
      period: "/ 1 night",
      secondaryPrice: null,
      secondaryPeriod: null,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
      sleeps: "3 Sleeps",
      bed: "1 bunk bed",
      desc: "Diam phasellus vestibulum lorem sed risus ultricies tristique."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground">Hostel rooms</h2>
            <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-6 py-3 rounded-md hover:bg-primary/20 transition-colors">
              View all rooms <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {rooms.map((room, index) => (
            <FadeIn key={room.id} delay={index * 0.1}>
              <div className="group rounded-xl overflow-hidden bg-card border border-border flex flex-col md:flex-row h-full md:h-80 hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="w-full md:w-5/12 relative overflow-hidden h-64 md:h-full">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-7/12 p-8 flex flex-col justify-between">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="max-w-md">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight">{room.title}</h3>
                      <p className="text-muted-foreground mb-6">{room.desc}</p>
                      
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users size={18} />
                          <span>{room.sleeps}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed size={18} />
                          <span>{room.bed}</span>
                        </div>
                        {room.extraBed && (
                          <div className="flex items-center gap-2">
                            <Bed size={18} />
                            <span>{room.extraBed}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-1 w-full md:w-auto justify-between md:justify-start">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-foreground">{room.price}</span>
                        <span className="text-sm text-muted-foreground">{room.period}</span>
                      </div>
                      {room.secondaryPrice && (
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-muted-foreground">{room.secondaryPrice}</span>
                          <span className="text-xs text-muted-foreground">{room.secondaryPeriod}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#1e3a8a]/90 transition-colors">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3}>
          <div className="mt-8 md:hidden text-center">
              <button className="items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-6 py-3 rounded-md hover:bg-primary/20 transition-colors inline-flex">
              View all rooms <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
