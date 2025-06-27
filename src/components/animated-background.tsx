"use client";

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-50 h-full w-full"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-teal-500/20 to-accent/20 bg-400% animate-gradient-slow dark:from-secondary/30 dark:via-blue-950/30 dark:to-accent/30" />
      <div className="absolute inset-0 dark:bg-secondary/50" />
    </div>
  );
}
