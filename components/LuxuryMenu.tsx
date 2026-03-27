"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Beginning", href: "/about" },
  { label: "The Collection", href: "/collection" },
  { label: "Find Us", href: "/visit" },
  { label: "The Atelier", href: "/atelier" },
  { label: "Contact", href: "/contact" },
];

export default function LuxuryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setIsOpen(false), []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger — fixed left center */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 group cursor-pointer"
        animate={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
        transition={{ duration: 0.3 }}
      >
        {/* Losange SVG */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          className="transition-transform duration-700 ease-out group-hover:rotate-90"
        >
          <rect
            x="6.5"
            y="0.8"
            width="8.2"
            height="8.2"
            rx="0"
            transform="rotate(45 6.5 0.8)"
            stroke="#1a1208"
            strokeWidth="0.75"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>
        {/* Vertical "Menu" text */}
        <span
          className="font-jost text-[9px] tracking-[0.5em] uppercase"
          style={{
            fontWeight: 300,
            writingMode: "vertical-rl",
            color: "#1a1208",
            opacity: 0.4,
          }}
        >
          Menu
        </span>
      </motion.button>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col"
            style={{ backgroundColor: "#1a1208" }}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.75, ease: EASE_LUXURY }}
          >
            {/* Close button — top right */}
            <button
              onClick={close}
              aria-label="Close navigation"
              className="absolute top-8 right-8 group p-2 cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line
                  x1="3" y1="3" x2="19" y2="19"
                  stroke="#f0ede8" strokeWidth="0.75" strokeOpacity="0.4"
                  style={{ transition: "stroke-opacity 0.3s" }}
                />
                <line
                  x1="19" y1="3" x2="3" y2="19"
                  stroke="#f0ede8" strokeWidth="0.75" strokeOpacity="0.4"
                />
              </svg>
            </button>

            {/* Navigation list */}
            <nav className="flex flex-col justify-center flex-1 px-10 md:px-20 lg:px-28 py-16">
              {navItems.map((item, i) => (
                <div
                  key={item.href}
                  className="overflow-hidden border-b"
                  style={{ borderColor: "rgba(240, 237, 232, 0.07)" }}
                >
                  <motion.div
                    initial={{ y: "105%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "105%", opacity: 0 }}
                    transition={{
                      duration: 0.85,
                      delay: i * 0.06,
                      ease: EASE_LUXURY,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 md:py-6"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        className="font-cormorant italic"
                        style={{
                          fontSize: "clamp(34px, 5vw, 68px)",
                          color: pathname === item.href ? "#c2601f" : "#f0ede8",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.05,
                          transition: "color 0.3s",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="font-jost text-[10px] tracking-[0.35em] uppercase"
                        style={{
                          fontWeight: 300,
                          color: "#f0ede8",
                          opacity: 0.18,
                        }}
                      >
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Bottom info */}
            <motion.div
              className="px-10 md:px-20 lg:px-28 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE_LUXURY }}
            >
              <p
                className="font-jost text-[10px] tracking-[0.35em] uppercase"
                style={{ color: "#f0ede8", opacity: 0.18, fontWeight: 300 }}
              >
                Park Road · Milton · Brisbane · @beurrepastriesbne
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
