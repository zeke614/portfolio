// "use client";

// import { motion, type Variants } from "framer-motion";

// const container: Variants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
// };

// const item: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const line: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.15 } },
// };

// export default function HeroCodeVintage() {
//   return (
//     <section className="relative w-full bg-bg px-4 py-24 text-fg sm:px-8 xl:px-0 md:py-32">
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="mx-auto flex max-w-fit flex-col items-center gap-8 text-center"
//       >
//         <motion.p
//           variants={item}
//           className="font-display tracking-wide text-fg-dim"
//         >
//           // business brain, developer hands
//         </motion.p>

//         <motion.h1
//           variants={item}
//           className="font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl"
//         >
//           I build like an engineer,
//           <br />I think like an owner.
//         </motion.h1>

//         {/* the ledger page — ruled lines + a red margin rule, like an old accounting book */}
//         <motion.div
//           variants={item}
//           className="relative w-full border-2 border-fg bg-panel px-6 py-6 text-left shadow-hard sm:px-8"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(to bottom, transparent, transparent 27px, var(--color-line) 28px)",
//             backgroundPosition: "0 44px",
//           }}
//         >
//           <span className="absolute bottom-0 left-10 top-0 w-px bg-loss-red/50 sm:left-14" />

//           <div className="pl-6 sm:pl-8">
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed text-fg-dim"
//             >
//               {"// developer.ts"}
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed"
//             >
//               <span className="text-loss-red">class </span>
//               <span>Developer </span>
//               <span className="text-fg-dim">{"{"}</span>
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed"
//             >
//               <span className="text-amber">{"  role"}</span>
//               <span className="text-fg-dim"> = </span>
//               <span className="text-terminal-green">
//                 {'"software engineer"'}
//               </span>
//               <span className="text-fg-dim">;</span>
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed"
//             >
//               <span className="text-amber">{"  background"}</span>
//               <span className="text-fg-dim"> = </span>
//               <span className="text-terminal-green">
//                 {'"business & finance"'}
//               </span>
//               <span className="text-fg-dim">;</span>
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed"
//             >
//               <span className="text-amber">{"  location"}</span>
//               <span className="text-fg-dim"> = </span>
//               <span className="text-terminal-green">{'"Accra, Ghana"'}</span>
//               <span className="text-fg-dim">;</span>
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed"
//             >
//               <span className="text-amber">{"  builds"}</span>
//               <span className="text-fg-dim"> = </span>
//               <span className="text-terminal-green">{'"fintech tools"'}</span>
//               <span className="text-fg-dim">;</span>
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed"
//             >
//               <span className="text-amber">{"  selfTaught"}</span>
//               <span className="text-fg-dim"> = </span>
//               <span className="text-terminal-green">true</span>
//               <span className="text-fg-dim">;</span>
//             </motion.div>
//             <motion.div
//               variants={line}
//               className="whitespace-pre font-display text-[12px] leading-relaxed text-fg-dim"
//             >
//               {"}"}
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={item}
//           className="flex flex-wrap items-center justify-center gap-10 py-3"
//         >
//           <a
//             href="#work"
//             className="border-2 border-fg bg-terminal-green px-6 py-3 font-display text-sm font-medium text-bg shadow-hard transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-x-0 active:translate-y-0 active:shadow-none"
//           >
//             view work →
//           </a>
//           <a
//             href="/resume.pdf"
//             className="border-2 border-fg px-6 py-3 font-display text-sm font-medium text-fg shadow-hard transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-x-0 active:translate-y-0 active:shadow-none"
//           >
//             resume.pdf
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

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
    <section className="relative w-full bg-bg text-fg">
      <div
        className="
          mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-12
          px-4 sm:px-8 xl:px-0 pb-22 pt-18 md:grid-cols-[1.3fr_1fr] md:gap-10 md:py-30
        "
      >
        {/* left column — the pitch */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={item}
            className="font-display text-terminal-green tracking-wide"
          >
            // welcome | bienvenu | bienvenida | مرحباً
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
            className="max-w-md font-display leading-relaxed text-fg-dim"
          >
            software developer with a finance and{" "}
            <br className="sm:hidden block" /> business background. i don't just
            write code <br className="sm:hidden block" /> — i understand the
            math, risk, and logic <br className="sm:hidden block" /> behind what
            it's actually built to do.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/works"
              className="
                border-2 border-fg bg-terminal-green px-6 py-3
                font-display text-sm font-medium text-bg
                shadow-hard transition-all
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg
                active:translate-x-0 active:translate-y-0 active:shadow-none
              "
            >
              my works <LuArrowRight className="inline-block ml-1 size-4.5" />
            </Link>
            <a
              href="/resume.pdf"
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
              cat portfolio.md
            </span>
          </motion.div>
        </motion.div>

        {/* right column — the proof */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end pb-3 sm:pb-0 mr-[6.5px]"
        >
          <IdentitySnippet />
        </motion.div>
      </div>
    </section>
  );
}
