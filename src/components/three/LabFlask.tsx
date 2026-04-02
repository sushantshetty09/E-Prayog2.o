import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LabFlaskProps {
  position?: [number, number, number];
  scale?: number;
}

const LabFlask: React.FC<LabFlaskProps> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  const flaskRef = useRef<THREE.Mesh>(null);
  const liquidRef = useRef<THREE.Mesh>(null);

  // Create liquid texture with animated waves
  const liquidTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    
    // Green liquid gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#3dd68c');
    gradient.addColorStop(1, '#1e9c5e');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state, delta) => {
    if (liquidRef.current) {
      // Animate liquid surface with gentle wave
      liquidRef.current.position.y = -0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
    if (flaskRef.current) {
      flaskRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Flask body */}
      <mesh ref={flaskRef}>
        <coneGeometry args={[0.3, 0.6, 8]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          roughness={0.05}
          transmission={0.9}
          thickness={0.1}
        />
      </mesh>
      
      {/* Flask neck */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.2, 8]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          roughness={0.05}
          transmission={0.9}
          thickness={0.1}
        />
      </mesh>
      
      {/* Liquid inside */}
      <mesh ref={liquidRef} position={[0, -0.2, 0]}>
        <coneGeometry args={[0.25, 0.3, 8]} />
        <meshPhysicalMaterial
          map={liquidTexture}
          color="#3dd68c"
          transparent
          opacity={0.7}
          roughness={0.2}
          transmission={0.3}
        />
      </mesh>
      
      {/* Glow effect around liquid */}
      <mesh position={[0, -0.2, 0]}>
        <coneGeometry args={[0.28, 0.35, 8]} />
        <meshBasicMaterial
          color="#3dd68c"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default LabFlask;
