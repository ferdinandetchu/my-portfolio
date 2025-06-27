"use client";

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-50 h-full w-full"
      aria-hidden="true"
    >
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 dark:bg-secondary/50" />
    </div>
  );
}
