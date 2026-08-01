"use client";

import { motion, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const STR = "text-terminal-green";
const WARN = "text-amber";
const ERR = "text-loss-red";
const DIM = "text-fg-dim";

export default function UpNext() {
  return (
    <motion.div
      variants={item}
      className="relative w-full border-2 border-fg bg-panel font-display shadow-hard mt-8"
    >
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-line/60 bg-line/20 px-2 py-1">
        <div className="flex items-center gap-1.5 pl-1 text-[11px] text-fg-dim">
          <span className="text-terminal-green">{">_"}</span>
          <span className="tracking-wide">GIT BASH — production_builds</span>
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

      {/* menu bar */}
      <div className="flex gap-3 border-b border-line/60 px-3 py-0.5 text-[10px] uppercase tracking-wider text-fg-dim">
        <span>file</span>
        <span>edit</span>
        <span>view</span>
        <span className="font-bold text-fg underline underline-offset-2">
          terminal
        </span>
        <span>help</span>
      </div>

      {/* terminal body */}
      <div className="relative overflow-hidden p-4 text-[12.5px] leading-relaxed">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--color-fg) 0px, var(--color-fg) 1px, transparent 1px, transparent 3px)",
          }}
        />

        <div className="relative flex flex-col gap-0">
          <div>
            <span className={STR}>zeke@dev</span>
            <span className={DIM}> MINGW64 </span>
            <span className={WARN}>~/production_builds</span>
          </div>
          <div>
            <span className={STR}>$</span> git status
          </div>

          <div className="pl-2 mt-1">
            On branch <span className="text-fg">main</span>
          </div>
          <div className="pl-2">
            Your branch is ahead of{" "}
            <span className={WARN}>&apos;origin/main&apos;</span> by{" "}
            <span className="text-fg font-bold">2</span> commits.
          </div>
          <div className="pl-2 mb-2">nothing to commit, working tree clean</div>

          <div className="mt-1">
            <span className={STR}>$</span> git log --oneline --branches --not
            --remotes
          </div>
          <div className="pl-2">
            <span className={WARN}>a1b2c3d</span>{" "}
            <span className="text-fg">loop.tsx</span>
            <span className={DIM}> — long-form article platform</span>
          </div>
          <div className="pl-2 mb-2">
            <span className={WARN}>e4f5g6h</span>{" "}
            <span className="text-fg">project_04</span>
            <span className={DIM}> — [commit message redacted]</span>
          </div>

          <div>
            <span className={STR}>$</span> git push origin main
          </div>
          <div className="pl-2">
            <span className={ERR}>remote: rejected</span>
            <span className={DIM}> — builds still compiling</span>
          </div>
          <div className="pl-2 mb-2 text-fg-dim">
            hint: check back soon, they&apos;ll ship when they&apos;re ready.
          </div>

          <div className="flex items-center gap-1">
            <span className={STR}>$</span>
            <span className="inline-block w-1.5 h-3.5 bg-terminal-green animate-pulse ml-0.5" />
          </div>
        </div>
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between border-t border-line/60 bg-line/20 px-3 py-1.5 text-[10px] uppercase tracking-wider text-fg-dim">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse shadow-[0_0_5px_var(--color-amber)]" />
          status: pending
        </span>
        <span className="flex gap-3">
          <span>branch: main</span>
          <span>2 unpublished</span>
        </span>
      </div>
    </motion.div>
  );
}
