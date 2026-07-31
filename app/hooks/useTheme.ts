"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "terminal" | "ledger";

export function useTheme() {
  // matches the value the inline init script already set on <html>,
  // avoiding a mismatch/flash on first client render
  const [theme, setTheme] = useState<Theme>("terminal");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "ledger" || current === "terminal") {
      setTheme(current);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "terminal" ? "ledger" : "terminal";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
