import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Successful Projects' },
  { value: 150, suffix: '+', label: 'Expert Professionals' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const Counter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="text-primary font-bold">
      {count}{suffix}
    </span>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glowing Circles on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
        <div className="absolute right-20 top-1/4 w-64 h-64 rounded-full border border-primary/30 animate-pulse-slow" />
        <div className="absolute right-32 top-1/3 w-80 h-80 rounded-full border border-primary/20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute right-10 top-1/2 w-48 h-48 rounded-full bg-primary/10 blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute right-40 bottom-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24" ref={ref}>
        <div className="max-w-3xl">
          <motion.p
            className="text-muted-foreground text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Jonath Tech
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your{' '}
            <span className="text-primary">Technology</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert IT consulting and technical recruiting services that drive innovation 
            and build exceptional teams for forward-thinking organizations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-border hover:border-primary/50 text-foreground font-semibold text-lg transition-all duration-300 hover:bg-muted/50 inline-flex items-center justify-center"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
