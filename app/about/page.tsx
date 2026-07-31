"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function About() {
  return (
    <section className="relative w-full bg-bg text-fg min-h-screen pb-22 pt-18 md:py-30">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-4 flex flex-col gap-20 sm:px-8 xl:px-0"
      >
        {/* 1. The Hook */}
        <motion.div variants={item} className="flex flex-col gap-4">
          <div className="font-display text-sm text-terminal-green">
            {">_"} whoami
          </div>
          <h1 className="font-display text-[30px] font-bold leading-[1.1] text-fg">
            i build like an engineer, <br />
            but i think like an owner.
          </h1>
          <p className="leading-relaxed text-fg-dim font-display">
            i don't have a CS degree. i didn't study general science in high
            school. i just saw people close to me build things from scratch and
            the places "code" could take me, the Bay Area for instance, or
            Shibuya and decided i could build things too, and here i am..
            putting in the discipline to earn the skill.
          </p>
        </motion.div>

        {/* 2. The Architecture / Origin */}
        <motion.div variants={item} className="flex flex-col gap-4">
          <div className="font-display text-sm text-terminal-green">
            // the_architecture.ts
          </div>
          <div className="border-2 border-fg bg-panel p-6 shadow-hard mr-[6.5px] sm:mx-0">
            <p className="leading-relaxed font-display">
              my background is in business management and finance, which means i
              don't just write code—i think about why the product exists, the
              risk involved, and who it's for.
              <br />
              <br />i gravitate toward tools that deal in numbers, decisions,
              and real-world utility (my biggest projects yet have come from
              that area). if the math makes sense and the logic is sound, the
              code will follow.
            </p>
          </div>
        </motion.div>

        {/* 3. The Tech Stack (Hardware Cards) */}
        <motion.div
          variants={item}
          className="flex flex-col gap-6 mr-[6.5px] sm:mx-0"
        >
          <div className="font-display text-sm text-terminal-green">
            ./dependencies.sh --verbose
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Frontend Card */}
            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
                <span>sys.frontend</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-terminal-green group-hover:animate-pulse"></span>
                  active
                </span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                React, Next.js, TypeScript, Tailwind CSS, Framer Motion,
                Recharts
              </div>
            </div>

            {/* Backend Card */}
            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
                <span>sys.backend</span>
                <span>142kb</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Supabase, MongoDB, Express.js, Render
              </div>
            </div>

            {/* Infra Card */}
            <div className="group flex flex-col border-2 border-fg bg-panel shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default">
              <div className="flex items-center justify-between border-b-2 border-fg bg-line/20 px-3 py-1.5 font-display text-[11px] tracking-wider text-fg-dim">
                <span>sys.infra</span>
                <span>node_modules</span>
              </div>
              <div className="p-5 font-display text-sm leading-relaxed">
                Vercel, Git, GitHub, REST APIs, AI
              </div>
            </div>

            {/* Business Logic Card */}
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

        {/* 4. Timeline / Execution Log */}
        <motion.div
          variants={item}
          className="flex flex-col gap-6 mr-[6.5px] sm:mx-0 font-display"
        >
          <div className="text-sm text-terminal-green">git log --oneline</div>
          <div className="relative border-l-2 border-fg ml-3 flex flex-col gap-8 py-2">
            {/* Log Entry 1 */}
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

            {/* Log Entry 2 */}
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
                Frontend Developer Intern at Nixzoe Inc. Shipping
                production-grade React/Next.js applications, integrating
                third-party REST APIs, and debugging UI across deployment
                workflows.
              </p>
            </div>

            {/* Log Entry 3 */}
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

            {/* Log Entry 4 */}
            <div className="group relative pl-6 cursor-default">
              <div className="absolute -left-1.75 top-1.5 h-3 w-3 bg-panel border-2 border-fg transition-all duration-200 group-hover:shadow-[0_0_8px_var(--color-terminal-green)] group-hover:bg-terminal-green" />
              <div className="font-display text-xs text-amber mb-1 transition-colors duration-200 group-hover:text-terminal-green">
                [2019 - 2022]{" "}
                <span className="text-fg-dim opacity-50 ml-2">init_commit</span>
              </div>
              <h3 className="font-display text-lg font-bold">init</h3>
              <p className="text-fg-dim text-sm mt-1">
                St. Augustine’s College, Cape Coast.{" "}
                <br className="block sm:hidden" /> Best General Arts Student
                (2022).
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. Trophies & AI Policy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={item}
            className="flex flex-col gap-4 mr-[6.5px] sm:mx-0"
          >
            <div className="font-display text-sm text-terminal-green">
              sys.achievements
            </div>
            <ul className="flex flex-col font-display text-sm border-2 border-fg bg-panel shadow-hard divide-y-2 divide-fg">
              <li className="flex gap-3 p-4 transition-colors duration-200 hover:bg-amber/10 cursor-default">
                <span className="text-terminal-green shrink-0">{"*"}</span>
                <span>
                  Ghana National Petroleum Corporation Scholarship (2024 -
                  2026), KNUST
                </span>
              </li>
              <li className="flex gap-3 p-4 transition-colors duration-200 hover:bg-amber/10 cursor-default">
                <span className="text-terminal-green shrink-0">{"*"}</span>
                <span>
                  Best General Arts Student (2022), St. Augustine’s College,
                  Cape Coast.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col gap-4 mr-[6.5px] sm:mx-0 font-display"
          >
            <div className="text-sm text-terminal-green">
              cat README_AI_POLICY.txt
            </div>
            <div className="relative border-l-4 border-loss-red bg-panel p-5 shadow-hard text-sm leading-relaxed overflow-hidden">
              {/* Scanline pattern overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, var(--color-fg) 0px, var(--color-fg) 1px, transparent 1px, transparent 3px)",
                }}
              />
              <span className="relative z-10">
                i use AI in my workflow—that, i'll say plainly. What i don't do
                is copy-paste logic i don't understand. every new "unusual"
                concept it introduces, i make it explain until i own it. every
                such output i ship, i review and refine to match my own
                standard. i think that's the honest way to grow.
                {/* Blinking Cursor */}
                <span className="ml-1 inline-block h-3.5 w-2 bg-fg align-middle animate-pulse" />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
