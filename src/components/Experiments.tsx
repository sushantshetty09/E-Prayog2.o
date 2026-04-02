import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { experiments, experimentsBySubject } from '../data/experiments';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const Experiments: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('All');
  const [visibleExperiments, setVisibleExperiments] = useState(6);

  const tabs = ['All', 'Physics', 'Chemistry', 'Biology', 'Mathematics'];
  
  const getFilteredExperiments = () => {
    if (activeTab === 'All') return experiments;
    return experimentsBySubject[activeTab.toLowerCase() as keyof typeof experimentsBySubject] || [];
  };

  const filteredExperiments = getFilteredExperiments();
  const displayedExperiments = filteredExperiments.slice(0, visibleExperiments);

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'physics':
        return 'cyan';
      case 'chemistry':
        return 'green';
      case 'biology':
        return 'lime';
      case 'mathematics':
        return 'purple';
      default:
        return 'green';
    }
  };

  const getDifficultyDots = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '●○○';
      case 'medium':
        return '●●○';
      case 'hard':
        return '●●●';
      default:
        return '●○○';
    }
  };

  const ExperimentPreview: React.FC<{ experiment: any }> = ({ experiment }) => {
    const renderPreview = () => {
      switch (experiment.id) {
        case 'ohms-law':
          return (
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 120">
                {/* Circuit lines */}
                <line x1="20" y1="60" x2="60" y2="60" stroke="#3dd68c" strokeWidth="2" />
                <line x1="140" y1="60" x2="180" y2="60" stroke="#3dd68c" strokeWidth="2" />
                <line x1="60" y1="60" x2="60" y2="30" stroke="#3dd68c" strokeWidth="2" />
                <line x1="60" y1="90" x2="60" y2="60" stroke="#3dd68c" strokeWidth="2" />
                <line x1="140" y1="60" x2="140" y2="30" stroke="#3dd68c" strokeWidth="2" />
                <line x1="140" y1="90" x2="140" y2="60" stroke="#3dd68c" strokeWidth="2" />
                <line x1="60" y1="30" x2="140" y2="30" stroke="#3dd68c" strokeWidth="2" />
                <line x1="60" y1="90" x2="140" y2="90" stroke="#3dd68c" strokeWidth="2" />
                
                {/* Resistor */}
                <rect x="80" y="25" width="40" height="10" fill="#5ce0f0" />
                
                {/* Animated current flow */}
                <motion.circle
                  r="3"
                  fill="#ffffff"
                  animate={{
                    cx: [20, 60, 60, 140, 140, 180],
                    cy: [60, 60, 30, 30, 60, 60],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </svg>
            </div>
          );
        case 'light-refraction':
          return (
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 120">
                {/* Air medium */}
                <rect x="0" y="0" width="100" height="120" fill="#060d1f" opacity="0.3" />
                {/* Water medium */}
                <rect x="100" y="0" width="100" height="120" fill="#0b2a1a" opacity="0.3" />
                
                {/* Incident ray */}
                <line x1="30" y1="30" x2="100" y2="60" stroke="#5ce0f0" strokeWidth="2" />
                {/* Refracted ray */}
                <line x1="100" y1="60" x2="170" y2="90" stroke="#3dd68c" strokeWidth="2" />
                
                {/* Normal line */}
                <line x1="100" y1="20" x2="100" y2="100" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              </svg>
            </div>
          );
        case 'titration-experiment':
          return (
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 120">
                {/* Burette */}
                <rect x="90" y="10" width="20" height="60" fill="none" stroke="#ffffff" strokeWidth="2" />
                <rect x="90" y="50" width="20" height="20" fill="#3dd68c" opacity="0.7" />
                
                {/* Flask */}
                <path d="M 60 80 L 60 100 L 140 100 L 140 80 L 120 80 L 110 60 L 90 60 L 80 80 Z" 
                      fill="none" stroke="#ffffff" strokeWidth="2" />
                <rect x="70" y="85" width="60" height="10" fill="#ff4444" opacity="0.5" />
                
                {/* Droplets */}
                <motion.circle
                  cx="100"
                  cy="75"
                  r="2"
                  fill="#3dd68c"
                  animate={{ cy: [75, 85] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </svg>
            </div>
          );
        case 'projectile-motion':
          return (
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 120">
                {/* Trajectory path */}
                <path d="M 20 100 Q 100 20 180 100" fill="none" stroke="#5ce0f0" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Moving projectile */}
                <motion.circle
                  r="4"
                  fill="#3dd68c"
                  animate={{
                    cx: [20, 60, 100, 140, 180],
                    cy: [100, 65, 40, 65, 100],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
          );
        default:
          return (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-green to-cyan opacity-20" />
                <div className="text-xs text-muted">Interactive Preview</div>
              </div>
            </div>
          );
      }
    };

    return (
      <div className="relative w-full h-40 bg-navy-card rounded-t-lg overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated preview */}
        <div className="relative z-10">
          {renderPreview()}
        </div>
      </div>
    );
  };

  return (
    <section id="experiments" className="section-padding bg-navy-mid">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            variants={revealVariants}
            className="font-display text-section font-bold text-white mb-4"
          >
            Virtual Experiments Lab
          </motion.h2>
          
          {/* Tab Filter */}
          <motion.div
            variants={revealVariants}
            className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-body text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-green text-navy'
                    : 'glass-effect border border-glass-border text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Experiments Grid */}
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {displayedExperiments.map((experiment, index) => (
              <motion.div
                key={`${experiment.id}-${activeTab}`}
                layout
                variants={revealVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover={true} className="overflow-hidden group">
                  {/* Preview Area */}
                  <div className="group-hover:[&>div]:[&>svg]:scale-110 transition-transform duration-300">
                    <ExperimentPreview experiment={experiment} />
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Subject Badge */}
                    <Badge variant={getSubjectColor(experiment.subject) as any} size="sm">
                      {experiment.subject.charAt(0).toUpperCase() + experiment.subject.slice(1)}
                    </Badge>
                    
                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-white">
                      {experiment.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-sm text-muted leading-relaxed">
                      {experiment.description}
                    </p>
                    
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        ⏱ {experiment.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        📊 {experiment.pucLevel}
                      </span>
                      <span className="flex items-center gap-1">
                        {getDifficultyDots(experiment.difficulty)}
                      </span>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3 glass-effect border border-green text-green font-body font-semibold rounded-lg hover:bg-green hover:text-navy transition-all focus-ring"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Open Experiment →
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredExperiments.length > visibleExperiments && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => setVisibleExperiments(prev => prev + 6)}
              className="px-8 py-3 glass-effect border border-glass-border text-white font-body font-semibold rounded-xl hover:border-green hover:text-green transition-all focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Experiments
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experiments;
