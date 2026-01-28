import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'IT Consulting',
    description: 'Strategic technology guidance and implementation support to optimize your infrastructure, enhance security, and drive digital transformation initiatives.',
  },
  {
    icon: Users,
    title: 'Technical Recruiting',
    description: 'Specialized talent acquisition services connecting you with top-tier technology professionals who align with your culture and technical requirements.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solutions designed to accelerate your growth and build high-performing teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
