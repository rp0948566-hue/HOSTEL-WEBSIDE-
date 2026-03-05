import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background py-20 lg:flex-row lg:py-0 transition-colors duration-500"
    >
      {/* Text Content */}
      <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-24">
        <motion.div style={{ opacity }} className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              The Philosophy
            </span>
          </div>
          
          <h2 className="font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            A Brotherhood. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-foreground">
              Not Just a Batch.
            </span>
          </h2>
          
          <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              At Shree Nath, we don't just provide a room; we curate an environment. 
              A place where "home away from home" isn't a cliché—it's a promise.
            </p>
            <p>
              With an owner who treats every resident like a younger brother, 
              we celebrate every festival, every victory, and support you through every challenge. 
              This is where your journey truly begins.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 pt-8 border-t border-border">
            <div>
              <h3 className="font-display text-5xl font-bold text-foreground">
                4.4<span className="text-2xl text-primary">/5</span>
              </h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Google Rating
              </p>
            </div>
            <div>
              <h3 className="font-display text-5xl font-bold text-foreground">
                100<span className="text-2xl text-primary">%</span>
              </h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Home Vibes
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Parallax Image */}
      <div className="relative mt-12 h-[60vh] w-full overflow-hidden lg:mt-0 lg:h-screen lg:w-1/2">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
            alt="Community"
            className="h-full w-full object-cover brightness-75 filter grayscale-[30%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
