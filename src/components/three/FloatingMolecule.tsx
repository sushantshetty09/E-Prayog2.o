import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingMoleculeProps {
  position?: [number, number, number];
  scale?: number;
}

const FloatingMolecule: React.FC<FloatingMoleculeProps> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.x += delta * 0.3;
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group position={position} scale={scale} ref={groupRef}>
      {/* Oxygen atom (center, red) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#ff4444" emissive="#ff4444" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Hydrogen atom 1 (top left) */}
      <mesh position={[-0.3, 0.25, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Hydrogen atom 2 (top right) */}
      <mesh position={[0.3, 0.25, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Bond 1 */}
      <mesh position={[-0.15, 0.125, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      
      {/* Bond 2 */}
      <mesh position={[0.15, 0.125, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
    </group>
  );
};

export default FloatingMolecule;
