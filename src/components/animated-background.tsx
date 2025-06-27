"use client";

import { useState, useEffect } from 'react';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    '--bg-x': `${mousePosition.x}%`,
    '--bg-y': `${mousePosition.y}%`,
  } as React.CSSProperties;

  return (
    <div
      className="fixed inset-0 -z-50 h-full w-full"
      aria-hidden="true"
    >
      <div className="absolute inset-0 animated-gradient" style={style} />
      <div className="absolute inset-0 dark:bg-secondary/50" />
    </div>
  );
}
