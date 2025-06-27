"use client";

import { useState, useEffect } from 'react';

export function Copyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p className="text-sm">
      © {year || new Date().getUTCFullYear()} Ferdinand Etchu. All rights reserved.
    </p>
  );
}
