import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AtomOrbitProps {
  position?: [number, number, number];
  scale?: number;
}

const AtomOrbit: React.FC<AtomOrbitProps> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const electron1Ref = useRef<THREE.Mesh>(null);
  const electron2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2; // Slow tilt rotation
    }
    if (electron1Ref.current) {
      electron1Ref.current.position.x = Math.cos(state.clock.elapsedTime * 2) * 0.8;
      electron1Ref.current.position.z = Math.sin(state.clock.elapsedTime * 2) * 0.8;
    }
    if (electron2Ref.current) {
      electron2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 2 + Math.PI) * 0.8;
      electron2Ref.current.position.z = Math.sin(state.clock.elapsedTime * 2 + Math.PI) * 0.8;
    }
  });

  return (
    <group position={position} scale={scale} ref={groupRef}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#5ce0f0" emissive="#5ce0f0" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Electron orbits */}
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <ringGeometry args={[0.6, 0.65, 32]} />
        <meshBasicMaterial color="#3dd68c" transparent opacity={0.3} />
      </mesh>
      
      <mesh rotation={[0, 0, -Math.PI / 6]}>
        <ringGeometry args={[0.6, 0.65, 32]} />
        <meshBasicMaterial color="#3dd68c" transparent opacity={0.3} />
      </mesh>
      
      {/* Electrons */}
      <mesh ref={electron1Ref}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
      </mesh>
      
      <mesh ref={electron2Ref}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
};

export default AtomOrbit;
