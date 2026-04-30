"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#f0ede8" }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: imageScale, opacity: imageOpacity }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 2.5, ease: EASE_LUXURY }}
      >
        <Image
          src="/images/beurre.jpg"
          alt="Beurre Pastries"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Cream overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(240, 237, 232, 0.62)" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Overline */}
        <motion.p
          className="font-jost text-xs tracking-[0.35em] uppercase mb-10 opacity-60"
          style={{ color: "#1a1208", fontWeight: 300 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: EASE_LUXURY }}
        >
          Park Road · Milton · Brisbane
        </motion.p>

        {/* Main title - curtain lift */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-cormorant italic leading-none"
            style={{
              color: "#c2601f",
              fontSize: "clamp(80px, 13vw, 160px)",
              letterSpacing: "-0.02em",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.8, delay: 0.6, ease: EASE_LUXURY }}
          >
            beurre.
          </motion.h1>
        </div>

        {/* Sub title */}
        <div className="overflow-hidden mt-3">
          <motion.p
            className="font-jost tracking-[0.55em] uppercase"
            style={{
              color: "#1a1208",
              fontSize: "clamp(10px, 1.4vw, 15px)",
              fontWeight: 300,
            }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.1, ease: EASE_LUXURY }}
          >
            Pastries
          </motion.p>
        </div>

        {/* Primary CTA */}
        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.35, ease: EASE_LUXURY }}
        >
          <Link
            href="/collection"
            className="group inline-flex items-center gap-4 rounded-full px-7 py-3 transition-transform duration-500 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c2601f]"
            style={{
              border: "1px solid rgba(26, 18, 8, 0.14)",
              background: "rgba(240, 237, 232, 0.72)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 12px 40px rgba(26, 18, 8, 0.08)",
              textDecoration: "none",
            }}
            aria-label="See the menu"
          >
            <span
              className="font-jost text-[11px] uppercase tracking-[0.38em]"
              style={{ color: "#1a1208", fontWeight: 300 }}
            >
              See the menu
            </span>
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-1"
              style={{
                backgroundColor: "rgba(194, 96, 31, 0.12)",
                color: "#c2601f",
              }}
            >
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
