"use client";

import { motion, type Variants } from "framer-motion";
import { LuMail, LuArrowRight } from "react-icons/lu";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const rowContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02, delayChildren: 0.15 } },
};

const rowItem: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

type Status = "active" | "done" | "pending" | "todo";

type TreeNode = {
  name: string;
  dir?: boolean;
  tag?: string;
  tagClass?: string;
  status?: Status;
  detail?: string;
  children?: TreeNode[];
};

const STATUS_STYLES: Record<Status, { icon: string; className: string }> = {
  active: { icon: "●", className: "text-terminal-green animate-pulse" },
  done: { icon: "✓", className: "text-fg-dim" },
  pending: { icon: "○", className: "text-amber" },
  todo: { icon: "□", className: "text-fg" },
};

const TREE: TreeNode[] = [
  {
    name: "staging",
    dir: true,
    tag: "active development",
    tagClass: "text-terminal-green",
    children: [
      {
        name: "assay-upgrades",
        dir: true,
        children: [
          {
            name: "pdf-exports.build",
            status: "active",
            detail: "professional, client-ready PDF exports",
          },
          {
            name: "project-comparison.build",
            status: "active",
            detail: "side-by-side project comparisons",
          },
          {
            name: "scenario-modeling.build",
            status: "active",
            detail: "best / base / worst-case scenario modeling",
          },
        ],
      },
      {
        name: "core-architecture",
        dir: true,
        children: [
          {
            name: "systems-fundamentals.study",
            status: "active",
            detail:
              "studying the absolute fundamentals of the internet and system architecture",
          },
          {
            name: "jse-certification.cert",
            status: "active",
            detail:
              "prepping for the JSE (JavaScript) certification with Cisco's JavaScript course",
          },
          {
            name: "cybersecurity-intro.cert",
            status: "active",
            detail: "Cisco's Introduction to Cybersecurity",
          },
        ],
      },
    ],
  },
  {
    name: "production",
    dir: true,
    tag: "recent commits",
    tagClass: "text-fg-dim",
    children: [
      {
        name: "data-analytics-seminar.done",
        status: "done",
        detail:
          "wrapped a rigorous 4-week seminar organised by the KNUST School of Business",
      },
    ],
  },
  {
    name: "queue",
    dir: true,
    tag: "short-term targets",
    tagClass: "text-amber",
    children: [
      {
        name: "next-build.pending",
        status: "pending",
        detail:
          "ship one more tool that solves a real-world problem before the year ends (won't build just anything for the sake of commits)",
      },
      {
        name: "dev-rig-upgrade.pending",
        status: "pending",
        detail: "upgrade to a high-end development rig to speed up workflow",
      },
      {
        name: "independence.pending",
        status: "pending",
        detail: "achieve full personal and financial independence",
      },
    ],
  },
  {
    name: "backlog",
    dir: true,
    tag: "the long game",
    tagClass: "text-fg",
    children: [
      {
        name: "first-role.todo",
        status: "todo",
        detail:
          "break through the saturated market and land a full-time entry-level role",
      },
      {
        name: "cold-email-reply.todo",
        status: "todo",
        detail: 'get a cold-email reply from "Big Tech" or a startup',
      },
      {
        name: "hackathon-win.todo",
        status: "todo",
        detail: "win a major hackathon",
      },
      {
        name: "global-tech-event.todo",
        status: "todo",
        detail: "attend a global tech event, in person",
      },
      {
        name: "live-life.todo",
        status: "todo",
        detail: "live life (the screen isn't everything)",
      },
    ],
  },
];

// each row's prefix is broken into fixed-width cells ("│   " or "    ")
// rendered as individual ch-wide spans, so rails stay pixel-perfect
// aligned down the whole tree regardless of glyph metrics.
type Row = {
  path: string;
  prefixCells: string[];
  connector: string;
  node: TreeNode;
};

function buildRows(
  nodes: TreeNode[],
  prefix: string[] = [],
  pathBase = "",
  rows: Row[] = [],
): Row[] {
  nodes.forEach((node, i) => {
    const isLast = i === nodes.length - 1;
    const connector = isLast ? "└─ " : "├─ ";
    const path = `${pathBase}/${node.name}`;
    rows.push({ path, prefixCells: prefix, connector, node });
    if (node.children) {
      buildRows(node.children, [...prefix, isLast ? "   " : "│  "], path, rows);
    }
  });
  return rows;
}

const ROWS = buildRows(TREE);
const DIR_COUNT = ROWS.filter((r) => r.node.dir).length;
const FILE_COUNT = ROWS.length - DIR_COUNT;

function Prefix({ cells, connector }: { cells: string[]; connector: string }) {
  return (
    <span className="inline-flex shrink-0 select-none font-display text-[13px] text-fg-dim/60 sm:text-sm">
      {cells.map((cell, i) => (
        <span key={i} className="inline-block w-[1.6ch] text-center">
          {cell[0]}
        </span>
      ))}
      <span className="inline-block whitespace-pre">{connector}</span>
    </span>
  );
}

export default function Pipeline() {
  return (
    <section className="relative w-full overflow-x-hidden bg-bg text-fg min-h-screen pb-22 pt-18 md:py-30">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-4 flex flex-col gap-12 sm:px-8 xl:px-0"
      >
        <motion.div variants={item} className="flex flex-col gap-5">
          <div className="font-display text-sm text-amber tracking-wide">
            $ cat /sys/pipeline.md
          </div>
          <h1 className="font-display text-[30px] font-bold leading-[1.1] text-fg">
            what i'm working on <br />
            <span className="text-terminal-green">right now.</span>
          </h1>
          <p className="font-display text-fg-dim leading-relaxed max-w-xl">
            a living file tree of my current focus, learning, and life goals. no
            extra, just what is currently going on in my world.
          </p>
        </motion.div>

        {/* the tree */}
        <motion.div variants={item} className="flex flex-col">
          <div className="mb-3 font-display text-lg font-bold text-fg">
            ~/pipeline
          </div>

          <motion.div
            variants={rowContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {ROWS.map((row) => (
              <motion.div
                key={row.path}
                variants={rowItem}
                className="flex items-start gap-2 py-1.5"
              >
                <Prefix cells={row.prefixCells} connector={row.connector} />

                {row.node.dir ? (
                  <span className="flex flex-wrap items-baseline gap-2 pt-px">
                    <span className="font-display font-semibold text-fg">
                      {row.node.name}/
                    </span>
                    {row.node.tag && (
                      <span
                        className={`font-display text-[15px] tracking-wide ${row.node.tagClass}`}
                      >
                        {row.node.tag}
                      </span>
                    )}
                  </span>
                ) : (
                  <span className="flex flex-col gap-0.5">
                    <span className="flex items-center gap-2">
                      <span
                        className={`font-display text-sm ${
                          STATUS_STYLES[row.node.status!].className
                        }`}
                      >
                        {STATUS_STYLES[row.node.status!].icon}
                      </span>
                      <span className="font-display text-fg text-[15px] font-medium">
                        {row.node.name}
                      </span>
                    </span>
                    {row.node.detail && (
                      <span className="pl-5 font-display text-sm leading-snug text-fg-dim/75">
                        {row.node.detail}
                      </span>
                    )}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* legend */}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {(
              [
                ["active", "in progress"],
                ["done", "shipped"],
                ["pending", "queued"],
                ["todo", "backlog"],
              ] as [Status, string][]
            ).map(([key, label]) => (
              <span
                key={key}
                className="flex items-center gap-1.5 font-display text-[13px] text-fg-dim"
              >
                <span className={STATUS_STYLES[key].className}>
                  {STATUS_STYLES[key].icon}
                </span>
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* email */}
        <motion.div variants={item} className="mt-10 mr-[6.5px] sm:mx-0">
          <div className="font-display text-sm text-amber tracking-wide mb-3">
            $ ./ping_ezekiel.sh --protocol=email
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-2 border-fg bg-panel shadow-hard p-5 sm:p-6 gap-6">
            <div className="flex flex-col gap-1 font-display">
              <div className="text-fg font-bold text-lg">
                initialize handshake
              </div>
              <div className="text-sm text-fg-dim">
                my inbox is open for engineering roles, freelance builds or just
                talking tech.
              </div>
            </div>

            <a
              href="mailto:ezekielarkohamissah@gmail.com"
              className="
                group inline-flex items-center justify-center gap-3 border-2 border-fg bg-terminal-green
                px-6 py-3 font-display text-sm font-bold text-bg shadow-hard transition-all
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg
                active:translate-x-0 active:translate-y-0 active:shadow-none whitespace-nowrap
              "
            >
              <LuMail size={16} />
              transmit_signal
              <LuArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
