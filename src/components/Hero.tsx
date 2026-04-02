import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import RotatingEarth from './three/RotatingEarth';
import CosmicBackground from './three/CosmicBackground';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import Badge from './ui/Badge';

const Hero: React.FC = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: canvasRef, isVisible: canvasVisible } = useScrollReveal({ threshold: 0.1 });
  const { transform } = useParallax(20);

  const stats = [
    { number: '40+', label: 'Experiments' },
    { number: '5', label: 'Subjects' },
    { number: 'PUC 1 & 2', label: 'Ready' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy/60 z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={textRef}
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={revealVariants}>
              <Badge variant="default" className="border-l-4 border-l-green">
                Karnataka PUC 1 & 2 Platform
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div variants={revealVariants} className="space-y-4">
              <h1 className="font-display text-hero font-bold text-white leading-tight tracking-tight">
                Explore Science Through
                <br />
                <span className="green-gradient italic">Immersive Learning</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={revealVariants}
              className="font-body text-lg text-muted max-w-lg leading-relaxed"
            >
              Understand Physics, Chemistry, and Biology through interactive visual simulations, 
              virtual experiments, and concept-based learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={revealVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-green text-navy font-body font-semibold rounded-xl btn-hover focus-ring"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning
              </motion.button>
              
              <motion.button
                className="px-8 py-4 glass-effect border border-cyan text-cyan font-body font-semibold rounded-xl btn-hover focus-ring"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(92, 224, 240, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Experiments
              </motion.button>
              
              <motion.button
                className="px-6 py-4 text-green font-body font-semibold flex items-center gap-2 btn-hover focus-ring"
                whileHover={{ x: 4 }}
                whileTap={{ x: 0 }}
              >
                View Subjects
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              variants={revealVariants}
              className="flex flex-wrap gap-8 pt-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl font-bold text-green">
                    {stat.number}
                  </div>
                  <div className="font-body text-sm text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Canvas */}
          <motion.div
            ref={canvasRef}
            className="relative h-[600px] lg:h-[700px]"
            style={{ transform }}
            initial={{ opacity: 0 }}
            animate={{ opacity: canvasVisible ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <RotatingEarth position={[0, 0, 0]} scale={1.5} />
              
              {/* Orbit rings with dots */}
              <group>
                {/* Ring 1 */}
                <mesh rotation={[0, 0, Math.PI / 18]}>
                  <ringGeometry args={[2, 2.1, 64]} />
                  <meshBasicMaterial color="#5ce0f0" opacity={0.3} transparent />
                </mesh>
                <mesh>
                  <sphereGeometry args={[0.05, 8, 8]} />
                  <meshBasicMaterial color="#5ce0f0" emissive="#5ce0f0" emissiveIntensity={0.5} />
                </mesh>
                
                {/* Ring 2 */}
                <mesh rotation={[0, 0, Math.PI / 5]}>
                  <ringGeometry args={[2.5, 2.6, 64]} />
                  <meshBasicMaterial color="#3dd68c" opacity={0.3} transparent />
                </mesh>
                <mesh>
                  <sphereGeometry args={[0.05, 8, 8]} />
                  <meshBasicMaterial color="#3dd68c" emissive="#3dd68c" emissiveIntensity={0.5} />
                </mesh>
                
                {/* Ring 3 */}
                <mesh rotation={[0, 0, Math.PI / 3]}>
                  <ringGeometry args={[3, 3.1, 64]} />
                  <meshBasicMaterial color="#ffffff" opacity={0.2} transparent />
                </mesh>
                <mesh>
                  <sphereGeometry args={[0.05, 8, 8]} />
                  <meshBasicMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
                </mesh>
              </group>
              
              <CosmicBackground count={400} size={30} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
