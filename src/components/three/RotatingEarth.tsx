import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshPhongMaterial, SphereGeometry, Mesh } from 'three';

interface RotatingEarthProps {
  position?: [number, number, number];
  scale?: number;
}

const RotatingEarth: React.FC<RotatingEarthProps> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  const earthRef = useRef<Mesh>(null);
  const atmosphereRef = useRef<Mesh>(null);

  // Create Earth texture using canvas
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create Earth-like coloring
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#1e40af'); // Deep ocean blue
    gradient.addColorStop(0.3, '#2563eb'); // Ocean blue
    gradient.addColorStop(0.4, '#16a34a'); // Green land
    gradient.addColorStop(0.5, '#15803d'); // Dark green
    gradient.addColorStop(0.6, '#ea580c'); // Brown land
    gradient.addColorStop(0.7, '#16a34a'); // Green land
    gradient.addColorStop(0.8, '#2563eb'); // Ocean blue
    gradient.addColorStop(1, '#1e40af'); // Deep ocean blue
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some noise for texture
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const opacity = Math.random() * 0.3;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillRect(x, y, 2, 2);
    }
    
    return canvas;
  }, []);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15; // Slow rotation
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.1; // Slightly slower atmosphere rotation
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial 
          map={earthTexture}
          shininess={10}
          specular={new THREE.Color(0x333333)}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial 
          color={0x87ceeb} 
          transparent 
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default RotatingEarth;
