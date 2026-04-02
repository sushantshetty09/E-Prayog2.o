import React from 'react';
import { motion } from 'framer-motion';
import { experiments } from '../data/experiments';

const FeaturedExperimentsTicker: React.FC = () => {
  const featuredExperiments = experiments.slice(0, 10);

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'physics':
        return 'bg-cyan';
      case 'chemistry':
        return 'bg-green';
      case 'biology':
        return 'bg-lime';
      default:
        return 'bg-purple';
    }
  };

  return (
    <section className="py-8 bg-navy">
      <div className="container-custom">
        <div className="overflow-hidden">
          <div className="flex animate-marquee marquee-pause">
            {/* First set of experiment pills */}
            <div className="flex gap-4 px-4">
              {featuredExperiments.map((experiment) => (
                <motion.div
                  key={experiment.id}
                  className="flex items-center gap-3 px-6 py-3 glass-effect border border-glass-border rounded-full whitespace-nowrap group cursor-pointer"
                  whileHover={{ scale: 1.05, borderColor: 'var(--green)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-2 h-2 rounded-full ${getSubjectColor(experiment.subject)}`} />
                  <span className="font-body text-sm text-white font-medium">
                    {experiment.name}
                  </span>
                  <span className="font-body text-xs text-green group-hover:translate-x-1 transition-transform">
                    Open Lab →
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-4 px-4">
              {featuredExperiments.map((experiment) => (
                <motion.div
                  key={`${experiment.id}-duplicate`}
                  className="flex items-center gap-3 px-6 py-3 glass-effect border border-glass-border rounded-full whitespace-nowrap group cursor-pointer"
                  whileHover={{ scale: 1.05, borderColor: 'var(--green)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-2 h-2 rounded-full ${getSubjectColor(experiment.subject)}`} />
                  <span className="font-body text-sm text-white font-medium">
                    {experiment.name}
                  </span>
                  <span className="font-body text-xs text-green group-hover:translate-x-1 transition-transform">
                    Open Lab →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperimentsTicker;
