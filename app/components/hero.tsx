"use client";

import { motion, type Variants } from "framer-motion";
import IdentitySnippet from "./identitySnippet";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { PiEyesFill } from "react-icons/pi";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-bg text-fg flex flex-col justify-center min-h-[calc(100vh-200px)] pb-22 pt-18 md:py-12 lg:py-24">
      <div
        className="
          mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-16 sm:gap-20
          px-4 sm:px-8 xl:px-0 md:grid-cols-[1.2fr_1fr] md:gap-5
        "
      >
        {/* left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div className="font-display text-sm tracking-wide text-amber">
            ./greet.sh "hello world"
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[30px] font-bold leading-[1.05]"
          >
            ezekiel a. amissah
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-display text-[22px] font-medium leading-[1.05]"
          >
            business brain,
            <br />
            developer hands.
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-md font-display leading-normal text-fg-dim"
          >
            software developer with a business and{" "}
            <br className="sm:hidden block" /> finance background. beyond just
            building user experiences, i understand the logic, risk and numbers
            behind <br className="sm:block hidden" /> what it's actually built
            to do. i think about why the product exists and who it serves, not
            just how it looks and works.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/builds"
              className="
                border-2 border-fg bg-terminal-green px-6 py-3
                font-display text-sm font-medium text-bg
                shadow-hard transition-all
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg
                active:translate-x-0 active:translate-y-0 active:shadow-none
              "
            >
              builds.log <LuArrowRight className="inline-block ml-1 size-4.5" />
            </Link>
            <a
              href="/ezekiel_a_amissah_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border-2 border-fg px-6 py-3
                font-display text-sm font-medium text-fg
                shadow-hard transition-all
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg
                active:translate-x-0 active:translate-y-0 active:shadow-none
              "
            >
              resume.pdf <PiEyesFill className="inline-block ml-1 size-4.5" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex gap-2 font-display text-xs text-fg-dim"
          >
            <span className="border-r-2 border-terminal-green pr-1 animate-pulse">
              commit a3f9e21 · cat portfolio.md
            </span>
          </motion.div>
        </motion.div>

        {/* right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center md:justify-end pb-3 sm:pb-0 mr-[6.5px]"
        >
          <IdentitySnippet />

          <motion.div
            variants={item}
            className="mt-18 sm:mt-8 flex flex-col gap-3 max-w-lg"
          >
            <div className="font-display text-sm text-amber tracking-wide">
              {"> ./execute_vision.sh"}
            </div>
            <div className="relative border-l-2 border-fg pl-4 py-1">
              <p className="font-display leading-relaxed text-fg-dim">
                to build products people rely on and work with world-class teams
                wherever great work gets done. to prove, as a boy from Ghana,
                that where you start doesn't decide where you end up.
                <span className="ml-1.5 inline-block h-3.5 w-1.5 bg-terminal-green animate-pulse align-middle" />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
