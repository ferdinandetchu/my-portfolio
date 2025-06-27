import { cn } from '@/lib/utils';

export function AnimatedBackground() {
  return (
    <div
      className={cn(
        'fixed inset-0 -z-10',
        'animated-gradient-bg bg-400 animate-animated-gradient'
      )}
    />
  );
}
