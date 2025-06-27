'use client';

import React, { useEffect } from 'react';

export function AnimatedBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercentage}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up the style when component unmounts
      document.documentElement.style.removeProperty('--scroll-progress');
    };
  }, []);

  return null; // This component doesn't render anything
}
