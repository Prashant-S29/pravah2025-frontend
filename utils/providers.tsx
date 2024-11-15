'use client';

import Lenis from 'lenis';
import { ThemeProvider } from 'next-themes';

import type React from 'react';
import { useEffect } from 'react';
interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};
