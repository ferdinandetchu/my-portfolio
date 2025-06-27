"use client";

import { useState, useEffect } from 'react';

export function Copyright() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p className="text-sm">
      © {year} Ferdinand Etchu. All rights reserved.
    </p>
  );
}
