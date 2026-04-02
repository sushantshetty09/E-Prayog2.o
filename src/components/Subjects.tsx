import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import AtomOrbit from './three/AtomOrbit';
import FloatingMolecule from './three/FloatingMolecule';
import LabFlask from './three/LabFlask';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';
import { subjects, getSubjectAccent } from '../data/subjects';

const Subjects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'AtomOrbit':
        return <AtomOrbit scale={0.8} />;
      case 'FloatingMolecule':
        return <FloatingMolecule scale={0.8} />;
      case 'LabFlask':
        return <LabFlask scale={0.8} />;
      case 'DNAHelix':
        return <DNAHelix scale={0.8} />;
      case 'MathSymbols':
        return <MathSymbols scale={0.8} />;
      default:
        return <AtomOrbit scale={0.8} />;
    }
  };

  const DNAHelix: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
    return (
      <group scale={scale}>
        {/* Simple DNA helix representation */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <group key={i}>
            <mesh position={[0, i * 0.15 - 0.5, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#3dd68c' : '#5ce0f0'} />
            </mesh>
            <mesh position={[0.2, i * 0.15 - 0.425, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#5ce0f0' : '#3dd68c'} />
            </mesh>
            <mesh position={[-0.2, i * 0.15 - 0.425, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#5ce0f0' : '#3dd68c'} />
            </mesh>
          </group>
        ))}
      </group>
    );
  };

  const MathSymbols: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
    return (
      <group scale={scale}>
        {/* Math symbols representation */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshBasicMaterial color="#9b8ff0" />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <torusGeometry args={[0.15, 0.05, 8, 8]} />
          <meshBasicMaterial color="#9b8ff0" />
        </mesh>
        <mesh position={[0.2, 0, 0]}>
          <coneGeometry args={[0.1, 0.2, 8]} />
          <meshBasicMaterial color="#9b8ff0" />
        </mesh>
      </group>
    );
  };

  return (
    <section id="subjects" className="section-padding bg-navy">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={revealVariants}>
            <Badge variant="green" className="mb-4">
              CURRICULUM
            </Badge>
          </motion.div>
          <motion.h2
            variants={revealVariants}
            className="font-display text-section font-bold text-white mb-6"
          >
            Five Disciplines. One Platform.
          </motion.h2>
          <motion.p
            variants={revealVariants}
            className="font-body text-lg text-muted max-w-2xl mx-auto"
          >
            Master Karnataka PUC syllabus with interactive 3D visualizations and hands-on virtual experiments
          </motion.p>
        </motion.div>

        {/* Subject Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {subjects.filter(subject => !subject.featured).map((subject, index) => (
            <motion.div
              key={subject.id}
              variants={revealVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: index * 0.12 }}
            >
              <GlassCard
                hover={true}
                borderColor={getSubjectAccent(subject.accent)}
                className="p-9 h-full group"
              >
                <div className="flex items-start gap-6">
                  {/* 3D Icon */}
                  <div className="w-[120px] h-[120px] flex-shrink-0">
                    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[5, 5, 5]} intensity={0.5} />
                      {getIconComponent(subject.icon)}
                    </Canvas>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-card-title font-bold text-white">
                      {subject.name}
                    </h3>
                    <p className="font-body text-muted leading-relaxed">
                      {subject.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {subject.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="default" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Link */}
                    <motion.button
                      className="flex items-center gap-2 font-body font-semibold"
                      style={{ color: getSubjectAccent(subject.accent) }}
                      whileHover={{ x: 4 }}
                      whileTap={{ x: 0 }}
                    >
                      Explore →
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Mathematics & Computer Science Card */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.48 }}
        >
          <GlassCard
            hover={true}
            borderColor={getSubjectAccent('purple')}
            className="p-9"
          >
            <div className="flex items-center gap-8">
              {/* 3D Icon */}
              <div className="w-[120px] h-[120px] flex-shrink-0">
                <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                  <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} intensity={0.5} />
                  <MathSymbols scale={0.8} />
                </Canvas>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-card-title font-bold text-white mb-4">
                  Mathematics & Computer Science
                </h3>
                <p className="font-body text-muted leading-relaxed mb-4">
                  Algebra, Calculus, Geometry, Statistics & Programming Fundamentals
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="purple" size="sm">PUC 1</Badge>
                  <Badge variant="purple" size="sm">PUC 2</Badge>
                </div>

                {/* Link */}
                <motion.button
                  className="flex items-center gap-2 font-body font-semibold"
                  style={{ color: getSubjectAccent('purple') }}
                  whileHover={{ x: 4 }}
                  whileTap={{ x: 0 }}
                >
                  Explore →
                </motion.button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Subjects;
