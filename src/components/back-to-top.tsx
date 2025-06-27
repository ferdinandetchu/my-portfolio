"use client";

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        size="icon"
        variant="default"
        onClick={scrollToTop}
        className={cn(
          'transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        aria-label="Go to top"
        style={{
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
