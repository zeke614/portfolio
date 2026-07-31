"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Token = { text: string; className?: string };
type Line = Token[];
type CodeChar = { ch: string; className?: string };

const KEY = "text-amber";
const STR = "text-terminal-green";
const PUNCT = "text-fg-dim";
const KEYWORD = "text-loss-red";

const LINES: Line[] = [
  [
    { text: "type ", className: KEYWORD },
    { text: "Techie ", className: "text-fg" },
    { text: "{", className: PUNCT },
  ],
  [
    { text: "  role", className: KEY },
    { text: " : ", className: PUNCT },
    { text: '"software developer"', className: STR },
    { text: ";", className: PUNCT },
  ],
  [
    { text: "  background", className: KEY },
    { text: " : ", className: PUNCT },
    { text: '"business & finance"', className: STR },
    { text: ";", className: PUNCT },
  ],
  [
    { text: "  location", className: KEY },
    { text: " : ", className: PUNCT },
    { text: '"Accra, Ghana"', className: STR },
    { text: ";", className: PUNCT },
  ],
  [
    { text: "  builds", className: KEY },
    { text: " : ", className: PUNCT },
    { text: '"fintech tools (mostly)"', className: STR },
    { text: ";", className: PUNCT },
  ],
  [
    { text: "  selfTaught", className: KEY },
    { text: " : ", className: PUNCT },
    { text: "true", className: STR },
    { text: ";", className: PUNCT },
  ],
  [{ text: "}", className: PUNCT }],
];

// flatten LINES into per-character arrays, computed once
const CHAR_LINES: CodeChar[][] = LINES.map((line) =>
  line.flatMap((token) =>
    token.text.split("").map((ch) => ({ ch, className: token.className })),
  ),
);
const LINE_LENGTHS = CHAR_LINES.map((l) => l.length);
const LINE_OFFSETS = LINE_LENGTHS.reduce<number[]>((acc, len, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + LINE_LENGTHS[i - 1]);
  return acc;
}, []);
const TOTAL_CHARS = LINE_LENGTHS.reduce((a, b) => a + b, 0);

type Phase = "typing" | "paused" | "erasing" | "blank";

const TYPE_MS = 80;
const ERASE_MS = 30;
const PAUSE_FULL_MS = 2270;
const PAUSE_BLANK_MS = 450;

function useTypewriterLoop(active: boolean) {
  const [revealCount, setRevealCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setRevealCount(TOTAL_CHARS);
      setPhase("paused");
      return;
    }

    let currentPhase: Phase = "typing";
    let phaseStart = performance.now();
    setPhase("typing");
    setRevealCount(0);

    const tick = (now: number) => {
      const elapsed = now - phaseStart;

      if (currentPhase === "typing") {
        const next = Math.min(TOTAL_CHARS, Math.floor(elapsed / TYPE_MS));
        setRevealCount(next);
        if (next >= TOTAL_CHARS) {
          currentPhase = "paused";
          phaseStart = now;
          setPhase("paused");
        }
      } else if (currentPhase === "paused") {
        if (elapsed >= PAUSE_FULL_MS) {
          currentPhase = "erasing";
          phaseStart = now;
          setPhase("erasing");
        }
      } else if (currentPhase === "erasing") {
        const erased = Math.floor(elapsed / ERASE_MS);
        const next = Math.max(0, TOTAL_CHARS - erased);
        setRevealCount(next);
        if (next <= 0) {
          currentPhase = "blank";
          phaseStart = now;
          setPhase("blank");
        }
      } else {
        if (elapsed >= PAUSE_BLANK_MS) {
          currentPhase = "typing";
          phaseStart = now;
          setPhase("typing");
        }
      }

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active]);

  return { revealCount, phase };
}

export default function IdentitySnippet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const { revealCount, phase } = useTypewriterLoop(inView);

  // which line currently holds the caret
  const caretLine = LINE_OFFSETS.findIndex(
    (start, i) => revealCount <= start + LINE_LENGTHS[i],
  );
  const activeLine = caretLine === -1 ? LINES.length - 1 : caretLine;

  return (
    <div
      ref={ref}
      className="relative w-full max-w-sm border-2 border-fg bg-panel font-display shadow-hard"
    >
      {/* title bar — legacy window chrome, square controls instead of mac dots */}
      <div className="flex items-center justify-between border-b border-line/60 bg-line/20 px-2 py-1">
        <div className="flex items-center gap-1.5 pl-1 text-[11px] text-fg-dim">
          <span className="text-terminal-green">{">_"}</span>
          <span className="tracking-wide">TURBO EDIT — developer.ts</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex h-3.5 w-3.5 items-center justify-center border border-fg-dim text-[8px] leading-none text-fg-dim">
            _
          </span>
          <span className="flex h-3.5 w-3.5 items-center justify-center border border-fg-dim text-[8px] leading-none text-fg-dim">
            □
          </span>
          <span className="flex h-3.5 w-3.5 items-center justify-center border border-fg-dim text-[8px] leading-none text-fg-dim">
            x
          </span>
        </div>
      </div>

      {/* menu bar — decorative, kinda like an old IDE's dropdown menus */}
      <div className="flex gap-3 border-b border-line/60 px-3 py-1 text-[10px] uppercase tracking-wider text-fg-dim">
        <span>file</span>
        <span>edit</span>
        <span>search</span>
        <span>run</span>
        <span>compile</span>
        <span>window</span>
      </div>

      {/* tab strip */}
      <div className="flex items-center border-b border-line/60">
        <div className="flex items-center gap-2 border-r border-line/60 bg-panel px-3 py-1.5 text-[11px] text-fg">
          <span className="h-1.5 w-1.5 rounded-full bg-terminal-green" />
          developer.ts
          <span className="text-fg-dim">×</span>
        </div>
      </div>

      {/* code area */}
      <div className="relative overflow-hidden px-0 py-4">
        {/* faint scanlines — (a legacy CRT-era editor) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--color-fg) 0px, var(--color-fg) 1px, transparent 1px, transparent 3px)",
          }}
        />

        {CHAR_LINES.map((chars, li) => {
          const start = LINE_OFFSETS[li];
          const revealedInLine = Math.min(
            Math.max(revealCount - start, 0),
            chars.length,
          );
          const showCaret = li === activeLine && phase !== "blank";

          return (
            <div
              key={li}
              className={`flex px-3 ${li === activeLine ? "bg-fg/5" : ""}`}
            >
              <span className="w-6 shrink-0 select-none text-right text-[11px] text-fg-dim/60">
                {li + 1}
              </span>
              <span className="pl-3 text-[12px] leading-relaxed">
                <span className="whitespace-pre">
                  {chars.slice(0, revealedInLine).map((c, ci) => (
                    <span key={ci} className={c.className}>
                      {c.ch}
                    </span>
                  ))}
                </span>
                {showCaret && (
                  <span
                    className={`ml-px inline-block h-3.5 w-1.5 translate-y-0.5 bg-terminal-green align-middle ${
                      phase === "paused" ? "animate-pulse" : ""
                    }`}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* status bar — Ln/Col (like a legacy IDE footer) */}
      <div className="flex items-center justify-between border-t border-line/60 bg-line/20 px-3 py-1.5 text-[10px] uppercase tracking-wider text-fg-dim">
        <span>
          ln {activeLine + 1}, col{" "}
          {Math.max(1, revealCount - LINE_OFFSETS[activeLine] + 1)}
        </span>
        <span className="flex gap-3">
          <span>ts</span>
          <span>utf-8</span>
          <span>{phase === "erasing" ? "del" : "ins"}</span>
        </span>
      </div>
    </div>
  );
}
