"use client";

import { motion, type Variants } from "framer-motion";
import exchangoPreview from "@/app/imgs/exchango.webp";
// import exchangoPreview from "@/app/imgs/ssexchango.webp";
import assayPreview from "@/app/imgs/assay.webp";

import { LuArrowUpRight } from "react-icons/lu";
import { PiEyesFill } from "react-icons/pi";
import UpNext from "../components/upnext";

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

export default function BuildsClient() {
  return (
    <section className="relative w-full bg-bg text-fg min-h-screen pb-22 pt-18 md:pb-26 md:pt-22">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl px-4 sm:px-8 xl:px-0 flex flex-col gap-16"
      >
        <motion.div variants={item} className="flex flex-col gap-3">
          <div className="font-display text-sm text-amber tracking-wide">
            {">"} ls -lah ./production_builds
          </div>
          <h1 className="font-display text-[30px] font-bold leading-[1.1] text-fg">
            sys.deployments
          </h1>
          <p className="text-fg-dim font-display text-sm">
            // live projects and the systems behind them
          </p>
        </motion.div>

        {/* PROJECT 01: ASSAY */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pr-[6.5px] sm:px-0"
        >
          {/* PANE A: THE BUSINESS BRAIN (Ledger Style Card) */}
          <div
            className="relative w-full border-2 border-fg bg-panel shadow-hard flex flex-col p-4"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 27px, var(--color-line) 28px)",
              backgroundPosition: "0 10px",
            }}
          >
            <div className="relative z-10 pl-2 flex flex-col h-full">
              <div className="font-display text-[13px] tracking-wider text-fg-dim mb-4">
                financial_logic // thesis
              </div>

              <h2 className="font-display text-[26px] font-bold mb-3 bg-panel inline-block max-w-fit pr-2">
                assay
              </h2>
              <p className="font-display text-lg font-medium leading-snug mb-4 bg-panel inline-block max-w-fit pr-2">
                investment appraisal software.
              </p>

              <div className="flex flex-col gap-4 text-[15px] leading-relaxed bg-panel/90 p-3 -ml-3 rounded-sm backdrop-blur-sm shadow-[0_0_15px_var(--color-panel)] mb-8">
                <p>
                  most financial tools treat investment appraisal as a simple
                  math problem. i built assay the way finance professionals
                  actually think about evaluating a project—bridging strict
                  financial theory with practical decision support.
                </p>
                <p>
                  it performs structured financial analysis using a 9-metric
                  matrix, including Net Present Value (NPV), Internal Rate of
                  Return (IRR), Modified IRR, Payback Periods, Break-even
                  Analysis etc.
                </p>
                <p>
                  the goal wasn't just to calculate the numbers, but to present
                  the risk and outcome in plain English, allowing for informed,
                  rapid investment evaluation.
                </p>
              </div>

              {/* THE PREVIEW */}
              <div className="mt-auto border-2 border-fg bg-panel p-2 shadow-hard -rotate-1 transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-hard-lg cursor-default">
                <div className="relative aspect-square w-full border-2 border-fg overflow-hidden bg-line/10">
                  <img
                    src={assayPreview.src}
                    alt="assay application interface preview"
                    className="object-cover w-full h-full opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-[1.02]"
                  />
                </div>
                <div className="flex justify-between items-center px-1 pt-2 pb-1 font-display text-[11px] text-fg-dim tracking-wider">
                  <span>fig 1 assay_preview</span>
                  <span>v1.0.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* PANE B: THE DEVELOPER HANDS (Terminal Style Card) */}
          <div className="relative w-full border-2 border-fg bg-bg shadow-hard flex flex-col">
            <div className="flex items-center justify-between border-b-2 border-fg bg-panel px-4 py-2.5 font-display text-[13px] tracking-wider text-fg-dim">
              <span>engine_room.ts</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse shadow-[0_0_5px_var(--color-terminal-green)]"></span>
                status: deployed
              </span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col h-full gap-8">
              <div className="flex flex-wrap gap-4">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="border-2 border-fg bg-panel px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-fg shadow-hard transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg cursor-default"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex flex-col gap-1.5 border-l-2 border-terminal-green pl-4 font-display text-[13px] text-fg-dim">
                <div className="text-amber mb-1">
                  {"// src/engine.ts -> calculateAllMethods()"}
                </div>
                <div>
                  <span className="text-fg">const</span> npv =
                  calculateNPV(cashFlows, rate);
                </div>
                <div>
                  <span className="text-fg">const</span> irr =
                  runNewtonRaphson(series);
                </div>
                <div className="pl-4 text-loss-red">
                  {"->"} checking hasMultipleIrrRisk...
                </div>
                <div>
                  <span className="text-fg">const</span> mirr =
                  calculateMIRR(financeRate, reinvestRate);
                </div>
                <div>
                  <span className="text-fg">const</span> payback =
                  calculatePaybackPeriod(flows);
                </div>
                <div>
                  <span className="text-fg">const</span> dpb =
                  calculateDiscountedPayback(rate);
                </div>
                <div>
                  <span className="text-fg">const</span> arr =
                  calculateARR(profit, investment);
                </div>
                <div>
                  <span className="text-fg">const</span> pi =
                  calculateProfitabilityIndex(cost);
                </div>
                <div>
                  <span className="text-fg">const</span> sensitivity =
                  calculateSensitivityAnalysis();
                </div>
                <div>
                  <span className="text-fg">const</span> breakEven =
                  getMarginOfSafetyUnits();
                </div>
                <div className="text-terminal-green mt-1">
                  {">"} 9/9 METRICS COMPILED.
                </div>
              </div>

              <div className="mt-2 flex flex-col border-2 border-fg bg-panel p-4 shadow-hard transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg cursor-default">
                <div className="flex justify-between items-center border-b-2 border-fg pb-3 mb-3">
                  <span className="font-display text-xs font-bold tracking-widest text-fg-dim">
                    verdictCard.tsx
                  </span>
                  <span className="flex items-center gap-1 border-2 border-fg bg-terminal-green px-2 py-0.5 font-display text-xs font-bold text-bg">
                    <span className="text-sm">✓</span> viable
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-1">
                  Profitability Index
                </h3>
                <p className="text-sm leading-relaxed text-fg-dim">
                  for every ¥1.00 invested, this project returns approximately
                  ¥1.15 in present value.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-2">
                <a
                  href="https://assayit.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-fg bg-terminal-green px-5 py-3 font-display text-sm font-bold text-bg shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                  live.url
                  <LuArrowUpRight className="inline-block ml-1 size-4.5" />
                </a>
                <a
                  href="https://github.com/zeke614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-fg bg-panel px-5 py-3 font-display text-sm font-bold text-fg shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                  source.git{" "}
                  <PiEyesFill className="inline-block ml-1 size-4.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECT 02: EXCHANGO */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pr-[6.5px] sm:px-0 mt-8"
        >
          {/* PANE A: THE BUSINESS BRAIN (Data Grid Style Card) */}
          <div
            className="relative w-full border-2 border-fg bg-panel shadow-hard flex flex-col p-4"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-line) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="relative z-10 pl-2 flex flex-col h-full">
              <div className="font-display text-[13px] tracking-wider text-fg-dim mb-4">
                market_logic // exchange
              </div>

              <h2 className="font-display text-[26px] font-bold mb-3 bg-panel inline-block max-w-fit pr-2">
                exchango
              </h2>
              <p className="font-display text-lg font-medium leading-snug mb-4 bg-panel inline-block max-w-fit pr-2">
                multilingual currency converter.
              </p>

              <div className="flex flex-col gap-4 text-[15px] leading-relaxed bg-panel/90 p-3 -ml-3 rounded-sm backdrop-blur-sm shadow-[0_0_15px_var(--color-panel)] mb-8">
                <p>
                  currency conversion isn't just about simple multiplication. it
                  is about real-time data reliability, historical context, and
                  accessibility across borders.
                </p>
                <p>
                  exchango tracks 150+ global currencies, providing live
                  exchange rates alongside historical performance charts. it
                  features seamless multi-language support and an interactive
                  comparison engine.
                </p>
                <p>
                  designed to give users instant, accurate financial data
                  without the clutter of traditional banking applications.
                </p>
              </div>

              <div className="mt-auto border-2 border-fg bg-panel p-2 shadow-hard rotate-1 transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-hard-lg cursor-default">
                <div className="relative aspect-square w-full border-2 border-fg overflow-hidden bg-line/10">
                  <img
                    src={exchangoPreview.src}
                    alt="exchango application interface preview"
                    className="object-cover w-full h-full opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-[1.02]"
                  />
                </div>
                <div className="flex justify-between items-center px-1 pt-2 pb-1 font-display text-[11px] text-fg-dim tracking-wider">
                  <span>fig 2 exchango_preview</span>
                  <span>v1.2.4</span>
                </div>
              </div>
            </div>
          </div>

          {/* PANE B: THE DEVELOPER HANDS (Terminal Style Card) */}
          <div className="relative w-full border-2 border-fg bg-bg shadow-hard flex flex-col">
            <div className="flex items-center justify-between border-b-2 border-fg bg-panel px-4 py-2.5 font-display text-[13px] tracking-wider text-fg-dim">
              <span>api_client.ts</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse shadow-[0_0_5px_var(--color-terminal-green)]"></span>
                status: active
              </span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col h-full gap-8">
              <div className="flex flex-wrap gap-4">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Recharts",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="border-2 border-fg bg-panel px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-fg shadow-hard transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* API & State Management Trace */}
              <div className="flex flex-col gap-1 border-l-2 border-amber pl-4 font-display text-[13px] text-fg-dim">
                <div className="text-amber mb-1">
                  {"// src/hooks/useExchangeRates.ts"}
                </div>
                <div>
                  <span className="text-fg">const</span> rawData =
                  <span className="text-terminal-green"> await</span>{" "}
                  fetch(API_URL);
                </div>
                <div>
                  <span className="text-fg">const</span> history =
                  formatRechartsData(rawData.timeseries);
                </div>
                <div className="pl-4 text-loss-red mt-1">
                  {"->"} resolving layout conflicts...
                </div>
                <div className="pl-4">
                  {"->"} UI stacking context [z-index] normalized.
                </div>
                <div className="pl-4">{"->"} theme state synced perfectly.</div>
                <div className="text-terminal-green mt-1">
                  {">"} CONNECTION SECURE.
                </div>
              </div>

              {/* The Data Visualization Mockup */}
              <div className="mt-2 flex flex-col border-2 border-fg bg-panel p-4 shadow-hard transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg cursor-default">
                <div className="flex justify-between items-center border-b-2 border-fg pb-3 mb-3">
                  <span className="font-display text-xs font-bold tracking-widest text-fg-dim">
                    historyChart.tsx
                  </span>
                  <span className="flex items-center gap-1.5 border-2 border-fg bg-amber px-2 py-0.5 font-display text-xs font-bold text-bg">
                    <span>~</span> rendering
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-1">
                  Data Visualization
                </h3>
                <p className="text-sm leading-relaxed text-fg-dim">
                  interactive historical rate mapping built with Recharts,
                  optimized for responsive cross-device viewing.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-2">
                <a
                  href="https://exchangoio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-fg bg-terminal-green px-5 py-3 font-display text-sm font-bold text-bg shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                  live.url
                  <LuArrowUpRight className="inline-block ml-1 size-4.5" />
                </a>
                <a
                  href="https://github.com/zeke614/exchango"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-fg bg-panel px-5 py-3 font-display text-sm font-bold text-fg shadow-hard transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-line/10 active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                  source.git{" "}
                  <PiEyesFill className="inline-block ml-1 size-4.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* THE BASH EXIT LOG */}
        {/* <motion.div variants={item} className="mt-16 mb-4 flex justify-center">
          <div className="flex flex-col gap-1.5 border-l-2 border-terminal-green pl-4 text-[12px] sm:text-[13px] text-fg-dim w-full max-w-sm cursor-default">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green font-bold">zeke@system</span>
              <span>~/deployments (master)</span>
            </div>
            <div className="text-fg-dim/60">
              $ process completed (exit code 0)
            </div>
            <div className="flex items-center gap-2 mt-3 text-amber">
              <span>{"// backlog full. compiling next module..."}</span>
              <span className="h-3.5 w-2 bg-fg animate-pulse inline-block" />
            </div>
          </div>
        </motion.div> */}

        <UpNext />
      </motion.div>
    </section>
  );
}
