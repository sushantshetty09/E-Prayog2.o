import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './ui/AnimatedCounter';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const StatsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { number: 40, suffix: '+', label: 'Virtual Experiments' },
    { number: 5, suffix: '', label: 'Core Subjects' },
    { number: 2, suffix: '', label: 'PUC Classes Covered' },
    { number: 'AI', suffix: '', label: 'YOG Tutor Powered' }
  ];

  return (
    <section className="py-20 bg-gradient-radial from-navy-mid via-navy-mid to-navy">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={revealVariants}
              className="text-center relative"
            >
              {/* Vertical divider */}
              {index < stats.length - 1 && index < 3 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-white/10" />
              )}
              
              {/* Horizontal divider for mobile */}
              {index < 2 && (
                <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-white/10" />
              )}
              
              <div className="space-y-2">
                <div className="font-display text-6xl font-bold text-green">
                  {typeof stat.number === 'number' ? (
                    <AnimatedCounter
                      from={0}
                      to={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>{stat.number}{stat.suffix}</span>
                  )}
                </div>
                <div className="font-body text-sm text-muted max-w-[120px] mx-auto">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
