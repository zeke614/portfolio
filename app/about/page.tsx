"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const BOOT_LINES = [
  "> booting zeke_os...",
  "> loading modules: business, design, code",
  "> status: ready",
];

const PIVOT_DATE = "2024-04-29";

function useElapsed(dateStr: string) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = new Date(dateStr).getTime();
    const tick = () => setElapsed(Math.floor((Date.now() - start) / 1000));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [dateStr]);

  const days = Math.floor(elapsed / 86400);
  const hours = Math.floor((elapsed % 86400) / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  return { days, hours, minutes, seconds };
}

// data
type CommitStatus = "active" | "done" | "pending";

type Commit = {
  hash: string;
  ref?: string;
  date: string;
  title: string;
  detail: string;
  status: CommitStatus;
};

const COMMITS: Commit[] = [
  {
    hash: "a1b2c3d",
    ref: "(planned)",
    date: "expected Sep 2026",
    title: "sys_build_complete",
    detail:
      "BSc. Business Administration (Management), KNUST. Expected First Class Honours.",
    status: "pending",
  },
  {
    hash: "9f4e21a",
    ref: "(HEAD -> main)",
    date: "Jan 2025 - Present",
    title: "dev_runtime",
    detail:
      "Frontend Developer Intern (remote) at Nixzoe Inc, Canada. Shipping production-grade React/Next.js applications, integrating third-party REST APIs, and debugging UI across deployment workflows.",
    status: "active",
  },
  {
    hash: "7c2b9f1",
    ref: "(tag: v1.0-scholar)",
    date: "2024 - 2026",
    title: "scholarship_granted",
    detail: "Ghana National Petroleum Corporation Scholarship, KNUST.",
    status: "done",
  },
  {
    hash: "f8e7d6c",
    date: "Sep 2023 - Nov 2023",
    title: "finance_runtime",
    detail:
      "Intern at SMEC (Accra). Managed financial records, tax clearances, reconciled receipts, and ensured audit readiness.",
    status: "done",
  },
  {
    hash: "3d8a04e",
    ref: "(tag: v0.1-topgrad)",
    date: "2022",
    title: "overall_best_student",
    detail: "Best General Arts Student, St. Augustine's College, Cape Coast.",
    status: "done",
  },
  {
    hash: "init_commit",
    ref: "(root-commit)",
    date: "2019 - 2022",
    title: "init (high school)",
    detail: "St. Augustine's College, Cape Coast.",
    status: "done",
  },
];

// plain-text commit entry
function CommitEntry({ c, align }: { c: Commit; align: "left" | "right" }) {
  return (
    <div
      className={`flex flex-col gap-0.5 ${
        align === "right"
          ? "sm:items-end sm:text-right"
          : "items-start text-left"
      }`}
    >
      <div className="flex flex-wrap items-baseline gap-2 font-display text-xs text-fg-dim/70">
        <span>{c.hash}</span>
        {c.ref && (
          <span
            className={
              c.status === "active" || c.status === "done"
                ? "text-terminal-green"
                : "text-amber"
            }
          >
            {c.ref}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 font-display text-xs text-fg-dim">
        <span>{c.date}</span>
        {c.status === "active" && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terminal-green opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terminal-green" />
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-bold text-fg">{c.title}</h3>
      <p className="max-w-sm font-display text-sm leading-snug text-fg-dim">
        {c.detail}
      </p>
    </div>
  );
}

export default function About() {
  const [bootIndex, setBootIndex] = useState(0);
  const elapsed = useElapsed(PIVOT_DATE);

  useEffect(() => {
    if (bootIndex >= BOOT_LINES.length) return;
    const t = setTimeout(() => setBootIndex((i) => i + 1), 350);
    return () => clearTimeout(t);
  }, [bootIndex]);

  return (
    <section className="relative w-full overflow-x-hidden bg-bg text-fg min-h-screen pb-22 pt-18 md:py-30">
      {" "}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-4 flex flex-col gap-20 sm:px-8 xl:px-0"
      >
        {/* 1. THE HOOK — inline boot sequence, headline as "output" */}
        <motion.div variants={item} className="flex flex-col gap-5">
          <div className="font-display text-xs text-terminal-green flex flex-col gap-1 h-16">
            {BOOT_LINES.map((line, i) => (
              <span
                key={line}
                className={
                  i > bootIndex
                    ? "opacity-0"
                    : "opacity-100 transition-opacity duration-300"
                }
              >
                {line}
              </span>
            ))}
          </div>
          <h1 className="font-display text-[30px] font-bold leading-[1.1] text-fg">
            i build like an{" "}
            <span className="text-terminal-green">engineer</span>, <br />
            but i think like an{" "}
            <span className="text-terminal-green">owner</span>.
          </h1>
        </motion.div>

        {/* 2. BEFORE THE CODE — origin, as a source file */}
        <motion.div variants={item} className="flex flex-col gap-4">
          <div className="font-display text-sm text-amber tracking-wide">
            // before_the_code.ts
          </div>
          <div className="flex border-2 border-fg bg-panel shadow-hard mr-[6.5px] sm:mx-0 overflow-hidden">
            <p className="leading-relaxed font-display p-6">
              i don't have a CS/IT degree. i didn't study general science in
              high school. what i had was a business administration programme at
              the Kwame Nkrumah University of Science and Technology (KNUST),
              Kumasi, Ghana that taught me how organisations make decisions.
              <br />
              <br />
              but i saw people close to me (heavy inspiration) build things from
              scratch. i also saw the places "code" could take me, the Bay Area
              for instance, Stockholm or far away to Shibuya and decided i could
              build things too, and here i am.. putting in the discipline to
              earn the skill.
            </p>
          </div>
        </motion.div>

        {/* 3. THE TURNING POINT — VHS counter, before/after */}
        <motion.div variants={item} className="flex flex-col gap-4">
          <div className="font-display text-sm text-amber tracking-wide">
            {"# the_turning_point"}
          </div>
          <div className="font-display text-fg-dim leading-relaxed space-y-2 pb-1">
            <p>
              <span className="font-bold">before:</span> spreadsheets, ledgers,
              a degree that taught me how a business decides, but never how to
              build the tool it decides with.
            </p>
            <p>
              <span className="font-bold">after:</span> 2024. hacking together a
              static YouTube clone with raw HTML and CSS from a crash course
              tutorial by "SuperSimpleDev". a fellow developer saw it and
              thought he was looking at the actual live site, [haha] until i
              told him it's just a static clone. that was my{" "}
              <span className="font-bold">"yeah, this is it"</span> moment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mr-[6.5px] sm:mx-0">
            {/* Before tape */}
            <div className="border-2 border-fg bg-panel shadow-hard p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between font-display text-[10px] tracking-widest text-fg-dim">
                <span>TAPE.01 — BEFORE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-fg-dim/40" />
              </div>
              <div className="font-display text-2xl tabular-nums text-fg-dim/50 tracking-wider">
                00:00:00:00
              </div>
              <div className="font-display text-xs text-fg-dim/60">
                business admin, year one
              </div>
            </div>

            {/* After tape — live counter */}
            <div className="border-2 border-fg bg-panel shadow-hard p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between font-display text-[10px] tracking-widest text-fg-dim">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-loss-red animate-pulse" />
                  REC — AFTER
                </span>
                <span className="text-terminal-green">LIVE</span>
              </div>
              <div className="font-display text-2xl tabular-nums text-terminal-green tracking-wider">
                {String(elapsed.days).padStart(3, "0")}:
                {String(elapsed.hours).padStart(2, "0")}:
                {String(elapsed.minutes).padStart(2, "0")}:
                {String(elapsed.seconds).padStart(2, "0")}
              </div>
              <div className="font-display text-xs text-fg-dim/60">
                days : hrs : min : sec since code clicked
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. SKILLS & STACK — terminal ls output, grouped */}
        <motion.div
          variants={item}
          className="flex flex-col gap-4 mr-[6.5px] sm:mx-0"
        >
          <div className="font-display text-sm text-amber tracking-wide">
            {">_ ls -lah ./stack"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11.5px] tracking-wider text-fg-dim">
                <span>sys.frontend</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-terminal-green group-hover:animate-pulse" />
                  active
                </span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                React, Next.js, TypeScript, Tailwind CSS, Framer Motion,
                Recharts
              </div>
            </div>

            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11.5px] tracking-wider text-fg-dim">
                <span>sys.backend</span>
                <span>142kb</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Supabase, MongoDB, Express.js, Render
              </div>
            </div>

            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11.5px] tracking-wider text-fg-dim">
                <span>sys.infra</span>
                <span>node_modules</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Vercel, Git, GitHub, REST APIs, AI
              </div>
            </div>

            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11.5px] tracking-wider text-fg-dim">
                <span>sys.logic</span>
                <span className="text-amber">protected</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Financial Analysis, MS 365 Suite, Figma, Risk Modeling
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. TIMELINE — milestones + system nodes */}
        <motion.div
          variants={item}
          className="flex flex-col gap-6 font-display mr-[6.5px] sm:mx-0"
        >
          <div className="text-sm text-amber tracking-wide">
            {"> git log --oneline --graph"}
          </div>

          {/* MOBILE TIMELINE (Single Rail) */}
          <div className="relative flex flex-col gap-8 py-4 pl-12 sm:hidden">
            {/* Thickened Trunk */}
            <div
              className="absolute left-4 top-4 bottom-4 w-0.5 bg-fg"
              aria-hidden
            />
            {COMMITS.map((c) => (
              <div key={c.hash} className="relative w-full">
                {/* System Node */}
                <span className="absolute -left-9.25 top-1.5 flex h-3 w-3 -translate-x-1px items-center justify-center bg-bg border-2 border-fg">
                  {c.status === "active" && (
                    <span className="h-1.25 w-1.25 bg-terminal-green animate-pulse" />
                  )}
                </span>
                <CommitEntry c={c} align="left" />
              </div>
            ))}
          </div>

          {/* DESKTOP TIMELINE (The Ladder) */}
          <div className="relative hidden sm:block py-4">
            {/* Thickened Trunk */}
            <div
              className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-fg"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 16px, black calc(100% - 16px), transparent)",
              }}
              aria-hidden
            />

            <div className="flex flex-col gap-12">
              {COMMITS.map((c, i) => {
                const side = i % 2 === 0 ? "left" : "right";

                return (
                  <div key={c.hash} className="relative flex w-full">
                    {/* System Node (Locked to absolute center) */}
                    <div className="absolute left-1/2 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center bg-bg border-2 border-fg z-10">
                      {c.status === "active" && (
                        <span className="h-1.25 w-1.25 bg-terminal-green animate-pulse" />
                      )}
                    </div>

                    {/* Left Commits */}
                    <div className="w-1/2 flex justify-end pr-12">
                      {side === "left" && <CommitEntry c={c} align="right" />}
                    </div>

                    {/* Right Commits */}
                    <div className="w-1/2 flex justify-start pl-12">
                      {side === "right" && <CommitEntry c={c} align="left" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 6. WHERE I GRAVITATE */}
        <motion.div variants={item} className="flex flex-col gap-4">
          <div className="font-display text-sm text-amber tracking-wide">
            {"/* what i build toward */"}
          </div>
          <p className="font-display text-fg-dim leading-relaxed">
            the projects i end up working on deal in numbers, decisions and
            real-world applications. <br /> exchango was born from me following
            national issues. in 2025, the ghanaian cedi was appreciating heavily
            against major currencies, so i built a live converter just to track
            the momentum myself and for others to use.
            <br />
            <br />
            assay came straight from the finance lecture hall. "investment
            appraisal" is everywhere in theory, but every existing tool was
            stuck in a 2009 UI. fragmented calculators, no unified flow, and
            zero plain-english explanations for non-technical users. if you
            wanted NPV, IRR, MIRR, and break-even, you had to piece them
            together manually. so i built an engine that compiles 9 key metrics
            in a single click, and actually tells you what the numbers mean.
            <br />
            <br />
            i'm not interested in being a generalist full-stack dev necessarily.
            i'm interested in the tools that sit between a decision and its
            consequences, and making those tools honest.
          </p>
        </motion.div>

        {/* AI policy aside, kept close to the closing note */}
        <motion.div
          variants={item}
          className="flex flex-col gap-5 font-display"
        >
          <div className="text-sm text-amber tracking-wide">
            cat README_AI_POLICY.txt
          </div>
          <div className="relative border-l-4 border-loss-red bg-panel p-5 shadow-hard text-sm leading-relaxed overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, var(--color-fg) 0px, var(--color-fg) 1px, transparent 1px, transparent 3px)",
              }}
            />
            <span className="relative z-10">
              i use AI in my workflow, that i'll say plainly. what i don't do is
              copy-paste logic i don't understand. every new "unusual" concept
              it introduces, i make it explain until i own it. every such output
              i ship, i review and refine to match my own standard. i think
              that's the honest way to grow.
              <span className="ml-1 inline-block h-3.5 w-1.5 bg-fg align-middle animate-pulse" />
            </span>
          </div>
        </motion.div>

        {/* 8. CLOSING / CTA */}
        <motion.div variants={item} className="flex flex-col gap-4 items-start">
          <div className="text-sm text-amber tracking-wide">
            ~/projects/portfolio (main)
          </div>
          <p className="font-display text-fg-dim leading-relaxed max-w-lg">
            that's most of it. if any of this sounds like your kind of problem,
            the actual builds say it better than i can.
          </p>
          <Link
            href="/builds"
            className="
              group inline-flex items-center gap-2 border-2 border-fg bg-panel
              px-4 py-2 font-display text-sm shadow-hard transition-all
              hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg
              active:translate-x-0 active:translate-y-0 active:shadow-none
            "
          >
            see the builds
            <span className="transition-transform group-hover:translate-x-1">
              <LuArrowRight size={15} />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
