"use client";

import { useTheme } from "./useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isTerminal = theme === "terminal";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        group flex h-7 items-center gap-1.5 border-2 border-fg bg-panel px-2
        shadow-hard transition-all
        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg
        active:translate-x-0 active:translate-y-0 active:shadow-none mr-[6.5px] cursor-pointer
      "
    >
      {/* Tiny LED */}
      <div
        className={`
          h-1.5 w-1.5 shrink-0 rounded-full border border-fg transition-all duration-300
          ${
            isTerminal
              ? "bg-terminal-green text-terminal-green shadow-[0_0_6px_currentColor]"
              : "bg-fg-dim/20 shadow-inner"
          }
        `}
      />

      {/* Label */}
      <span className="w-7 text-left font-display text-[11px] font-normal text-fg">
        {isTerminal ? "dark" : "light"}
      </span>

      {/* Mini Slider Track */}
      <div className="relative ml-0.5 h-2.25 w-4 border border-fg bg-fg/10">
        {/* Mini Slider Block */}
        <div
          className={`
            absolute -inset-y-0.75 -left-0.5 flex w-2 flex-col items-center
            justify-center gap-0.5 border-[1.5px] border-fg bg-panel
            transition-transform duration-300 ease-[0.22,1,0.36,1]
            ${isTerminal ? "translate-x-3" : "translate-x-0"}
          `}
        >
          {/* Micro Grips */}
          <span className="h-px w-1.5 bg-fg opacity-50" />
          <span className="h-px w-1.5 bg-fg opacity-50" />
        </div>
      </div>
    </button>
  );
}
