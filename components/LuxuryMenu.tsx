"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/collection" },
  { label: "Find Us", href: "/visit" },
  {
    label: "Gift Card",
    href: "https://app.gift-it.com.au/buy/beurrepastries?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnjmPyCx0jxIcIS-ibTAu936YNiaazqc45R_mdOxIGKRWOI67YpvPcEH5U93g_aem_kk4YdqApPPkO1HbCur9ZuQ",
    external: true,
  },
  { label: "Contact Us", href: "/contact" },
];

export default function LuxuryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Trigger — languette gauche avec "b." italic */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 cursor-pointer"
        style={{
          background: "rgba(26, 18, 8, 0.80)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "0 20px 20px 0",
          padding: "22px 16px 22px 10px",
          boxShadow: "2px 0 24px rgba(26,18,8,0.18)",
          border: "1px solid rgba(194, 96, 31, 0.3)",
          borderLeft: "none",
        }}
        animate={{
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
          x: isOpen ? -60 : 0,
        }}
        transition={{ duration: 0.4, ease: EASE_LUXURY }}
      >
        {/* "b." en Cormorant italique */}
        <span
          className="font-cormorant italic"
          style={{
            fontSize: "28px",
            color: "#c2601f",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          b.
        </span>
        {/* Séparateur fin */}
        <span
          style={{
            display: "block",
            width: "1px",
            height: "18px",
            background: "rgba(240, 237, 232, 0.2)",
          }}
        />
        {/* "Menu" vertical */}
        <span
          className="font-jost uppercase tracking-[0.45em]"
          style={{
            fontSize: "8px",
            fontWeight: 400,
            writingMode: "vertical-rl",
            color: "#f0ede8",
            opacity: 0.75,
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
              className="absolute top-8 right-8 p-2 cursor-pointer"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <line x1="4" y1="4" x2="24" y2="24" stroke="#f0ede8" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="24" y1="4" x2="4" y2="24" stroke="#f0ede8" strokeWidth="1" strokeOpacity="0.6" />
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
                    transition={{ duration: 0.85, delay: i * 0.06, ease: EASE_LUXURY }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 md:py-6"
                      style={{ textDecoration: "none" }}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
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
                        style={{ fontWeight: 300, color: "#f0ede8", opacity: 0.25 }}
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
                style={{ color: "#f0ede8", opacity: 0.25, fontWeight: 300 }}
              >
                33 Park Rd · Milton QLD 4064 · @beurrepastriesbne
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
