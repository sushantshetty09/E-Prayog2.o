import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const CTABanner: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-br from-navy-mid via-navy to-navy-mid relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h2
            variants={revealVariants}
            className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Ready to Transform Your Science Learning?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={revealVariants}
            className="font-body text-xl text-muted leading-relaxed"
          >
            Join thousands of Karnataka PUC students who've made science their favorite subject.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={revealVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-green text-navy font-body font-semibold rounded-xl btn-hover focus-ring text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(61, 214, 140, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>

            <motion.button
              className="px-8 py-4 glass-effect border border-cyan text-cyan font-body font-semibold rounded-xl btn-hover focus-ring text-lg"
              whileHover={{ scale: 1.05, borderColor: 'var(--green)', color: 'var(--green)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={revealVariants}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green rounded-full" />
              <span className="font-body text-sm text-muted">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green rounded-full" />
              <span className="font-body text-sm text-muted">Board-aligned curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green rounded-full" />
              <span className="font-body text-sm text-muted">Free for schools</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
