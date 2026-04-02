import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const YOGTutor: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: '🌍',
      title: 'Concept explanations in Kannada and English',
    },
    {
      icon: '📊',
      title: 'Visual diagrams generated on demand',
    },
    {
      icon: '🔬',
      title: 'Experiment guidance step-by-step',
    },
    {
      icon: '📋',
      title: 'Syllabus-aligned with Karnataka PUC board',
    }
  ];

  const ChatMessage: React.FC<{ 
    message: string; 
    isUser?: boolean; 
    delay?: number;
    includeExperimentCard?: boolean;
  }> = ({ message, isUser = false, delay = 0, includeExperimentCard = false }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div
          className={`max-w-[80%] p-3 rounded-2xl ${
            isUser
              ? 'bg-navy-card text-white'
              : 'glass-effect border-l-4 border-l-green text-white'
          }`}
        >
          <p className="font-body text-sm leading-relaxed">{message}</p>
          
          {includeExperimentCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.3, duration: 0.3 }}
              className="mt-3 p-3 glass-effect border border-glass-border rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green rounded-full" />
                <span className="font-body text-xs text-green font-medium">Opening Refraction Lab...</span>
              </div>
              <div className="w-full h-16 bg-navy-card rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🔬</div>
                  <div className="text-xs text-muted">Snell's Law Experiment</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="yog-tutor" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Eyebrow */}
            <motion.div variants={revealVariants}>
              <Badge variant="green" className="mb-4">
                AI-POWERED LEARNING
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={revealVariants}
              className="font-display text-5xl font-bold text-white leading-tight"
            >
              Meet YOG Tutor — Your Personal Science Guide
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={revealVariants}
              className="font-body text-lg text-muted leading-relaxed"
            >
              YOG Tutor understands your doubts, explains complex concepts visually, and adapts to your learning pace. Ask anything — from Newton's Laws to DNA replication.
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={revealVariants}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={revealVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green font-bold">✓</span>
                  </div>
                  <p className="font-body text-white leading-relaxed">
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={revealVariants}>
              <motion.button
                className="px-8 py-4 bg-green text-navy font-body font-semibold rounded-xl btn-hover focus-ring"
                whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(61, 214, 140, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Try YOG Tutor →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Mock Chat UI */}
          <motion.div
            className="lg:ml-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="glass-card rounded-2xl overflow-hidden w-full max-w-md mx-auto lg:mx-0 animate-float"
              whileHover={{ scale: 1.02 }}
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-glass-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green to-cyan flex items-center justify-center">
                    <span className="text-white font-bold text-sm">YOG</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">YOG Tutor</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
                      <span className="font-body text-xs text-green">Online</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted">AI Assistant</div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 h-[400px] overflow-y-auto space-y-2">
                <ChatMessage
                  message="What is Snell's Law?"
                  isUser={true}
                  delay={0.2}
                />
                
                <ChatMessage
                  message="Snell's Law describes how light bends when it enters a different medium. The formula is: n₁ sin θ₁ = n₂ sin θ₂ ✦ I can show you an interactive demo →"
                  delay={0.4}
                />
                
                <ChatMessage
                  message="Show me the refraction experiment"
                  isUser={true}
                  delay={0.6}
                />
                
                <ChatMessage
                  message="Opening Refraction Lab... 🔬"
                  delay={0.8}
                  includeExperimentCard={true}
                />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-glass-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about science..."
                    className="flex-1 px-4 py-2 bg-navy-card border border-glass-border rounded-full text-white placeholder-muted focus:outline-none focus:border-green transition-colors"
                  />
                  <motion.button
                    className="w-10 h-10 bg-green text-navy rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YOGTutor;
