import { Calendar, Eye } from "lucide-react";
import { FadeIn } from "./FadeIn";

const news = [
  {
    id: 1,
    title: "How to cure wanderlust without leaving your home",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop",
    category: "Travel",
    date: "June 16, 2021",
    views: "120 views"
  },
  {
    id: 2,
    title: "Yoga Hostels to soothe your mind and nomadic soul",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
    category: "Tourist Guide",
    date: "June 16, 2021",
    views: "120 views"
  },
  {
    id: 3,
    title: "What happens when you travel with strangers?",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop",
    category: "Communication",
    date: "June 16, 2021",
    views: "120 views"
  }
];

export function News() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground">Hosteller news</h2>
            <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-6 py-3 rounded-md hover:bg-primary/20 transition-colors">
              View all news
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white text-foreground px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  Euismod quis viverra nibh cras pulvinar mattis nunc. Leo duis ut diam quam. Sed velit dignissim sodales ut eu sem integer vitae justo.
                </p>
                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={14} />
                    {item.views}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3}>
          <div className="mt-8 md:hidden text-center">
              <button className="items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-6 py-3 rounded-md hover:bg-primary/20 transition-colors inline-flex">
              View all news
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
