"use client";
import { useState } from "react";
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
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="w-full bg-bg text-fg">
      <div
        className="
          mx-auto max-w-240 flex-col gap-4
          px-4 sm:px-8 xl:px-0
        "
      >
        <div className="border-t-2 border-fg"></div>
        <div className="border-t border-fg/30"></div>

        <div className="flex pt-5 sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-terminal-green"></span>
            </span>

            <p
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="font-display text-fg-dim cursor-default select-none"
            >
              <span className="text-terminal-green"></span>
              {hovered ? (
                <span className="hidden sm:inline"> zeke · frontend dev </span>
              ) : (
                <>
                  <span className="hidden sm:inline">
                    {" "}
                    © {year} zeke · compiled with next.js{" "}
                  </span>
                  <span className="sm:hidden inline-block">
                    {" "}
                    © {year} zeke <br /> compiled with next.js{" "}
                  </span>
                </>
              )}
              <span className="text-terminal-green"></span>
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
                  group flex h-8 w-8 items-center justify-center
                  rounded-none border-2 border-fg bg-panel
                  shadow-hard transition-all
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg hover:rotate-[-4deg]
                  active:translate-x-0 active:translate-y-0 active:shadow-none active:rotate-0
                "
              >
                <Icon
                  size={15.5}
                  className="text-fg transition-colors group-hover:text-terminal-green"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between pb-5 pt-2">
          <p className="font-display text-sm text-fg-dim/60 tracking-wide">
            entry_no: 0042 · last_commit: {year}-06-01 12:00:00 UTC
          </p>
          <p className="font-display text-sm text-fg-dim/60 tracking-wide">
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
