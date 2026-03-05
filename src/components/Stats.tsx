import { FadeIn } from "./FadeIn";

export function Stats() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-lg">
              The main benefits to choose Hosteller
            </h2>
            <p className="text-muted-foreground text-right max-w-md">
              Aliquam eleifend mi in nulla. Viverra nibh cras pulvinar mattis nunc
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
          
          {/* 240+ */}
          <FadeIn delay={0.1} className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="text-5xl font-bold text-[#0056b3] mb-4">240+</div>
            <p className="text-muted-foreground leading-relaxed">
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </p>
          </FadeIn>

          {/* 60+ */}
          <FadeIn delay={0.2} className="flex flex-col items-center text-center md:items-start md:text-left border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12">
            <div className="text-5xl font-bold text-[#0056b3] mb-4">60+</div>
            <p className="text-muted-foreground leading-relaxed">
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </p>
          </FadeIn>

          {/* 98% */}
          <FadeIn delay={0.3} className="flex flex-col items-center text-center md:items-start md:text-left border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12">
            <div className="text-5xl font-bold text-[#0056b3] mb-4">98%</div>
            <p className="text-muted-foreground leading-relaxed">
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </p>
            <button className="mt-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
