"use client";

import ThemeToggle from "@/app/hooks/themeToggle";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: "about", href: "/about" },
    { label: "builds", href: "/builds" },
    { label: "pipeline", href: "/pipeline" },
  ];

  return (
    <header className="w-full bg-bg text-fg">
      <div className="mx-auto max-w-225 px-4 sm:px-8 xl:px-0">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="font-display text-xl font-semibold text-fg">
            <span className="text-terminal-green">{`zeke`}</span>
          </Link>

          <nav className="hidden items-center gap-6 font-display tracking-wider text-fg-dim md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-fg ${isActive ? "text-fg font-medium" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div ref={menuRef} className="relative flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-10 ml-2.25 flex h-9 w-8 items-center justify-center transition-all sm:hidden"
            >
              <AnimatedMenuIcon menuOpen={menuOpen} />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 top-full z-50 mt-4 w-fit min-w-32 rounded-none border-2 border-fg bg-panel p-4 shadow-hard"
                >
                  <nav className="flex flex-col gap-4 font-display tracking-wider text-fg-dim">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`transition-colors hover:text-fg ${isActive ? "text-fg font-medium" : ""}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="border-t-2 border-fg"></div>
      </div>
    </header>
  );
}

function AnimatedMenuIcon({ menuOpen }: { menuOpen: boolean }) {
  return (
    <motion.span
      animate={menuOpen ? "open" : "closed"}
      className="relative h-5 w-5"
    >
      <motion.span
        variants={{
          closed: { rotate: 0, y: -7 },
          open: { rotate: 45, y: 0 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-current"
      />

      <motion.span
        variants={{
          closed: { opacity: 1, scaleX: 1 },
          open: { opacity: 0, scaleX: 0 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-0.5 w-6 origin-left -translate-y-1/2 rounded-full bg-current"
      />

      <motion.span
        variants={{
          closed: { rotate: 0, y: 7 },
          open: { rotate: -45, y: 0 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-current"
      />
    </motion.span>
  );
}
