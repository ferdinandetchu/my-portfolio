"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Use document.body for more reliable enter/leave detection
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const style = {
    '--bg-x': `${mousePosition.x}%`,
    '--bg-y': `${mousePosition.y}%`,
  } as React.CSSProperties;

  return (
    <div
      className="fixed inset-0 -z-50 h-full w-full"
      aria-hidden="true"
    >
      <div
        className={cn(
          'absolute inset-0 animated-gradient',
          !isHovering && 'is-animating'
        )}
        style={style}
      />
      <div className="absolute inset-0 dark:bg-secondary/50" />
    </div>
  );
}
