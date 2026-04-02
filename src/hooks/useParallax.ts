import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxResult {
  transform: string;
  mousePosition: MousePosition;
}

export const useParallax = (maxDisplacement: number = 20): ParallaxResult => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [transform, setTransform] = useState<string>('translate(0px, 0px)');

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of viewport
      const xPercent = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPercent = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      setMousePosition({ x: clientX, y: clientY });
      
      // Apply parallax displacement
      const xDisplacement = xPercent * maxDisplacement;
      const yDisplacement = yPercent * maxDisplacement;
      
      setTransform(`translate(${xDisplacement}px, ${yDisplacement}px)`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [maxDisplacement]);

  return { transform, mousePosition };
};
