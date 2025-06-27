
"use client";

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up';
  delay?: number; // in ms
}

export function AnimatedContent({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
}: AnimatedContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to animate once
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
        if (element) {
            observer.unobserve(element);
        }
    }
  }, []);

  const animationClass = isVisible
    ? animation === 'fade-in-up'
      ? 'animate-fade-in-up'
      : 'animate-fade-in'
    : '';

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0', // Start invisible
        animationClass,
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
