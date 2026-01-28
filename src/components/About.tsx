import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security and compliance for all solutions.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Rapid implementation and deployment timelines.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals with proven track record.'
  },
  {
    icon: Target,
    title: 'Strategic Focus',
    description: 'Aligned with your business objectives and goals.'
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">Jonath Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a leading IT consulting and technical recruiting firm dedicated to helping 
              organizations transform their technology landscape and build exceptional teams.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our expert team combines deep technical knowledge with strategic business insight 
              to deliver solutions that drive real results for forward-thinking organizations.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-background border border-border p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
