"use client";

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-50 h-full w-full"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-teal-500/20 to-accent/20 bg-400% animate-gradient-slow" />
    </div>
  );
}
