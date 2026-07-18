"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";

/* Theme: class-based dark mode with system detection (next-themes).
   Ember is dark-first — swap defaultTheme to "system" if you'd rather
   follow the visitor's OS preference on first load.
   Motion: `reducedMotion="user"` disables animation for anyone with a
   reduced-motion OS preference — leave it on. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
