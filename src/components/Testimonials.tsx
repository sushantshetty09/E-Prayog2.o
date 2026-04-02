import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "E-Prayog made me understand Ohm's Law better than 3 months of class lectures.",
      author: "Priya S.",
      role: "PUC 2",
      institution: "Bengaluru"
    },
    {
      quote: "The virtual titration experiment is incredibly realistic. Perfect exam prep.",
      author: "Rahul M.",
      role: "PUC 1",
      institution: "Mysuru"
    },
    {
      quote: "YOG Tutor explains concepts in Kannada. It's the first platform that truly felt local.",
      author: "Kavya R.",
      role: "PUC 2",
      institution: "Hubli"
    },
    {
      quote: "I use E-Prayog for class demonstrations — students engage more than with any textbook.",
      author: "Lecturer Suresh K.",
      role: "Faculty",
      institution: "Tumkur"
    },
    {
      quote: "The DNA animation finally helped me understand genetics. Visual learning works.",
      author: "Ananya T.",
      role: "PUC 2",
      institution: "Mangaluru"
    },
    {
      quote: "The platform feels premium — not like the usual government education websites.",
      author: "Vikram H.",
      role: "PUC 1",
      institution: "Davangere"
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, testimonials.length]);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], id: index });
    }
    return items;
  };

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={revealVariants} className="text-center">
            <h2 className="font-display text-5xl font-bold text-white mb-4">
              Trusted by Students & Educators Across Karnataka
            </h2>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                <AnimatePresence mode="wait">
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${currentIndex}`}
                      variants={revealVariants}
                      initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: index === 0 ? 100 : index === 2 ? -100 : 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <GlassCard className="p-8 h-full relative">
                        {/* Quote Mark */}
                        <div className="absolute top-4 left-4 text-6xl text-green/20 font-display">
                          "
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="font-body text-lg text-white leading-relaxed mb-6 relative z-10">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Author */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-display text-xl font-bold text-white">
                              {testimonial.author}
                            </div>
                            <div className="font-body text-sm text-muted">
                              {testimonial.role} • {testimonial.institution}
                            </div>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-green"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-green w-8' : 'bg-white/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
