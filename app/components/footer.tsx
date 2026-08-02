"use client";

import { useEffect, useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/zeke614", icon: LuGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ezekielarkohamissah",
    icon: LuLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ezekielarkohamissah@gmail.com",
    icon: LuMail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const [lastCommit, setLastCommit] = useState<string>("fetching_sys_data...");

  // 2. Fetch the data on component mount
  useEffect(() => {
    async function fetchLastCommit() {
      try {
        const response = await fetch(
          "https://api.github.com/users/zeke614/events/public",
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const events = await response.json();

        // Filter for actual code pushes
        const pushes = events.filter(
          (event: any) => event.type === "PushEvent",
        );

        if (pushes.length > 0) {
          // timestamp of the most recent push
          const date = new Date(pushes[0].created_at);

          // legacy string format: YYYY-MM-DD HH:MM:SS UTC
          const formatted =
            date.toISOString().replace("T", " ").substring(0, 19) + " UTC";
          setLastCommit(formatted);
        } else {
          setLastCommit("no_recent_commits");
        }
      } catch (error) {
        setLastCommit("API_CONNECTION_FAILED");
      }
    }

    fetchLastCommit();
  }, []);

  return (
    <footer className="w-full bg-bg text-fg pb-4 sm:pb-8">
      <div className="mx-auto max-w-225 flex-col px-4 sm:px-8 xl:px-0">
        <div className="border-t-2 border-fg"></div>
        <div className="border-t border-fg/30 mt-1"></div>

        <div className="flex pt-6 sm:flex-row sm:items-center justify-between">
          {/* Interactive Status & Copyright (Pure CSS, No State) */}
          <div className="group flex items-start sm:items-center gap-3 cursor-default select-none">
            <span className="relative flex h-1.5 w-1.5 mt-2 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-terminal-green"></span>
            </span>

            <p className="font-display text-[15px] text-fg-dim transition-colors duration-200 group-hover:text-fg">
              {/* Default State */}
              <span className="block group-hover:hidden">
                <span className="hidden sm:inline">
                  © {year} · zeke · compiled with Next.js
                </span>
                <span className="sm:hidden inline-block leading-tight">
                  © {year} · zeke <br /> compiled with Next.js
                </span>
              </span>

              {/* Hover State */}
              <span className="hidden group-hover:block text-terminal-green">
                <span className="hidden sm:inline">
                  zeke · frontend dev · node_ghana
                </span>
                <span className="sm:hidden inline-block leading-tight">
                  zeke <br /> frontend dev
                </span>
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 mr-[6.5px]">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  group/btn flex h-8 w-8 items-center justify-center
                  rounded-none border-2 border-fg bg-panel
                  shadow-hard transition-all duration-200 ease-out
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg hover:rotate-[-4deg]
                  active:translate-x-0 active:translate-y-0 active:shadow-none active:rotate-0
                "
              >
                <Icon
                  size={15.5}
                  className="text-fg transition-colors group-hover/btn:text-terminal-green"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6 pb-2 sm:pb-0">
          <p className="font-display text-[11px] sm:text-xs text-fg-dim/60 tracking-wide">
            last_commit:{" "}
            <span
              className={
                lastCommit === "fetching_sys_data..."
                  ? "animate-pulse text-amber"
                  : ""
              }
            >
              {lastCommit}
            </span>
          </p>
          <div className="flex gap-2 font-display text-[11px] sm:text-xs text-fg-dim/60 tracking-[0.2em]">
            <span>v1.0.0</span>
            <span className="text-amber/60">{"// [EOF]"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
