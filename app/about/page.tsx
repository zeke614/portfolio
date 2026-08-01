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
              before: spreadsheets, ledgers, a degree that taught me how a
              business decides, but never how to build the tool it decides with.
            </p>
            <p>
              after: 2024. hacking together a static YouTube clone with raw HTML
              and CSS from a crash course tutorial by "SuperSimpleDev". a fellow
              developer saw it and thought he was looking at the actual live
              site, [haha] until i told him it's just a static clone. that was
              my <span className="font-semibold">"yeah, this is it"</span>{" "}
              moment.
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
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
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
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
                <span>sys.backend</span>
                <span>142kb</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Supabase, MongoDB, Express.js, Render
              </div>
            </div>

            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
                <span>sys.infra</span>
                <span>node_modules</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Vercel, Git, GitHub, REST APIs, AI
              </div>
            </div>

            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
                <span>sys.logic</span>
                <span className="text-amber">protected</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Financial Analysis, MS 365 Suite, Figma, Risk Modeling
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. TIMELINE — milestones + folded-in awards */}
        <motion.div
          variants={item}
          className="relative flex flex-col gap-4 mr-[6.5px] sm:mx-0 font-display"
        >
          <div className="text-sm text-amber tracking-wide">
            git log --oneline
          </div>

          <div className="relative border-l-2 border-fg ml-3 flex flex-col gap-8 py-2">
            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-panel border-2 border-fg transition-all duration-200 group-hover:shadow-[0_0_8px_var(--color-terminal-green)] group-hover:bg-terminal-green" />
              <div className="font-display text-xs text-amber mb-1 transition-colors duration-200 group-hover:text-terminal-green">
                [expected Sep 2026]{" "}
                <span className="text-fg-dim opacity-50 ml-2">a1b2c3d</span>
              </div>
              <h3 className="font-display text-lg font-bold">
                sys_build_complete
              </h3>
              <p className="text-fg-dim text-sm mt-1">
                BSc. Business Administration (Management) — KNUST. Expected
                First Class Honours.
              </p>
            </div>

            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-terminal-green border-2 border-fg shadow-[0_0_6px_var(--color-terminal-green)]" />
              <div className="font-display text-xs text-terminal-green mb-1">
                [Jan 2025 - Present]{" "}
                <span className="text-fg-dim opacity-50 ml-2">
                  head -{">"} main
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">dev_runtime</h3>
              <p className="text-fg-dim text-sm mt-1">
                Frontend Developer Intern (remote) at Nixzoe Inc, Canada.
                Shipping production-grade React/Next.js applications,
                integrating third-party REST APIs, and debugging UI across
                deployment workflows.
              </p>
            </div>

            {/* Award folded into timeline */}
            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-panel border-2 border-fg group-hover:bg-amber transition-all duration-200" />
              <div className="font-display text-xs text-amber mb-1">
                [2024 - 2026]{" "}
                <span className="text-fg-dim opacity-50 ml-2">
                  tag: v1.0-scholar
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">
                scholarship_granted
              </h3>
              <p className="text-fg-dim text-sm mt-1">
                Ghana National Petroleum Corporation Scholarship, KNUST.
              </p>
            </div>

            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-panel border-2 border-fg transition-all duration-200 group-hover:shadow-[0_0_8px_var(--color-terminal-green)] group-hover:bg-terminal-green" />
              <div className="font-display text-xs text-amber mb-1 transition-colors duration-200 group-hover:text-terminal-green">
                [Sep 2023 - Nov 2023]{" "}
                <span className="text-fg-dim opacity-50 ml-2">f8e7d6c</span>
              </div>
              <h3 className="font-display text-lg font-bold">
                finance_runtime
              </h3>
              <p className="text-fg-dim text-sm mt-1">
                Intern at SMEC (Accra). Managed financial records, tax
                clearances, reconciled receipts, and ensured audit readiness.
              </p>
            </div>

            {/* Award folded into timeline */}
            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-panel border-2 border-fg group-hover:bg-amber transition-all duration-200" />
              <div className="font-display text-xs text-amber mb-1">
                [2022]{" "}
                <span className="text-fg-dim opacity-50 ml-2">
                  tag: v0.1-topgrad
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">
                overall_best_student
              </h3>
              <p className="text-fg-dim text-sm mt-1">
                Best General Arts Student, St. Augustine's College, Cape Coast.
              </p>
            </div>

            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-panel border-2 border-fg transition-all duration-200 group-hover:shadow-[0_0_8px_var(--color-terminal-green)] group-hover:bg-terminal-green" />
              <div className="font-display text-xs text-amber mb-1 transition-colors duration-200 group-hover:text-terminal-green">
                [2019 - 2022]{" "}
                <span className="text-fg-dim opacity-50 ml-2">init_commit</span>
              </div>
              <h3 className="font-display text-lg font-bold">
                init (high school)
              </h3>
              <p className="text-fg-dim text-sm mt-1">
                St. Augustine's College, Cape Coast.
              </p>
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
              <span className="ml-1 inline-block h-3.5 w-2 bg-fg align-middle animate-pulse" />
            </span>
          </div>
        </motion.div>

        {/* 8. CLOSING / CTA */}
        <motion.div variants={item} className="flex flex-col gap-4 items-start">
          <div className="text-sm text-amber tracking-wide">
            ~/projects/portfolio (master)
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
