import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  // Solar System Component
  const SolarSystem: React.FC = () => {
    return (
      <group>
        {/* Sun */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#ffa500" emissive="#ffa500" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Planet 1 - Green */}
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#3dd68c" emissive="#3dd68c" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Planet 2 - Cyan */}
        <mesh position={[3.5, 0, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#5ce0f0" emissive="#5ce0f0" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Planet 3 - Blue */}
        <mesh position={[5, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color="#4169e1" emissive="#4169e1" emissiveIntensity={0.2} />
        </mesh>
      </group>
    );
  };

  const features = [
    {
      icon: '🔬',
      title: 'Lab-Quality Simulations',
      description: 'Realistic virtual experiments that mirror actual laboratory conditions'
    },
    {
      icon: '🧠',
      title: 'AI-Powered YOG Tutor',
      description: 'Personalized learning assistance with visual explanations'
    },
    {
      icon: '📋',
      title: 'Karnataka Board Aligned',
      description: 'Complete syllabus coverage for PUC 1 & 2 examinations'
    }
  ];

  return (
    <section id="about" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <div className="relative h-[400px]">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                  <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                  <ambientLight intensity={0.3} />
                  <directionalLight position={[10, 10, 5]} intensity={0.5} />
                  <SolarSystem />
                </Canvas>
              </div>
              
              {/* Label */}
              <div className="mt-6 text-center">
                <Badge variant="green">
                  Built for Karnataka Board Students
                </Badge>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Content */}
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
                OUR MISSION
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={revealVariants}
              className="font-display text-5xl font-bold text-white leading-tight"
            >
              Science Shouldn't Live Only in Textbooks.
            </motion.h2>

            {/* Body Text */}
            <motion.div variants={revealVariants} className="space-y-4">
              <p className="font-body text-lg text-muted leading-relaxed">
                E-Prayog was built for a simple belief — that every student in Karnataka deserves access to world-class science education, regardless of their school's lab infrastructure.
              </p>
              <p className="font-body text-lg text-muted leading-relaxed">
                Through cinematic 3D simulations, AI-guided learning, and board-aligned experiment modules, we bring the laboratory into every student's home.
              </p>
              <p className="font-body text-lg text-muted leading-relaxed">
                Whether you're preparing for PUC board exams, KCET, or simply curious — E-Prayog is your science companion.
              </p>
            </motion.div>

            {/* Feature Bars */}
            <motion.div variants={revealVariants} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 glass-effect border border-glass-border rounded-lg"
                  variants={revealVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: 'var(--green)' }}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-muted">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={revealVariants}>
              <motion.button
                className="px-8 py-4 glass-effect border border-green text-green font-body font-semibold rounded-xl hover:bg-green hover:text-navy transition-all focus-ring"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Our Story →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
