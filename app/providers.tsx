"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { useEffect, useState } from "react";

export function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {mounted && children}
    </ThemeProvider>
  );
}
