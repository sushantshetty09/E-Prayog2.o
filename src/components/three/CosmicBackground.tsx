import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CosmicBackgroundProps {
  count?: number;
  size?: number;
}

const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ 
  count = 800, 
  size = 50 
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const cometRef = useRef<THREE.Group>(null);

  // Generate star positions
  const stars = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * size;
      positions[i * 3 + 1] = (Math.random() - 0.5) * size;
      positions[i * 3 + 2] = (Math.random() - 0.5) * size;

      // Mix of white and cyan stars
      const isWhite = Math.random() > 0.3;
      colors[i * 3] = isWhite ? 1 : 0.36;     // R
      colors[i * 3 + 1] = isWhite ? 1 : 0.88; // G
      colors[i * 3 + 2] = isWhite ? 1 : 0.94; // B

      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count, size]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }

    if (cometRef.current) {
      // Animate comets
      const time = state.clock.elapsedTime;
      cometRef.current.children.forEach((comet, index) => {
        const phase = (time + index * 3) % 12; // 12 second cycle with stagger
        const progress = phase / 12;
        
        // Move from corner to corner
        const startX = -size/2, endX = size/2;
        const startY = size/2, endY = -size/2;
        
        comet.position.x = startX + (endX - startX) * progress;
        comet.position.y = startY + (endY - startY) * progress;
        comet.position.z = Math.sin(progress * Math.PI) * 10;
        
        // Fade in/out
        const opacity = progress < 0.1 ? progress * 10 : progress > 0.9 ? (1 - progress) * 10 : 1;
        (comet as THREE.Mesh).material = new THREE.MeshBasicMaterial({
          color: 0x5ce0f0,
          transparent: true,
          opacity: opacity * 0.3
        });
      });
    }
  });

  return (
    <group>
      {/* Star field */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={stars.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={stars.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={stars.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Comet streaks */}
      <group ref={cometRef}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i}>
            <cylinderGeometry args={[0.02, 0.1, 3, 8]} />
            <meshBasicMaterial color="#5ce0f0" transparent opacity={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default CosmicBackground;
