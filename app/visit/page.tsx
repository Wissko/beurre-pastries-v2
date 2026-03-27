"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FooterSection from "@/components/FooterSection";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const hours = [
  { day: "Wed – Fri", time: "7am · until sold out" },
  { day: "Sat – Sun", time: "7am · until sold out" },
  { day: "Mon – Tue", time: "Closed" },
];

export default function VisitPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <main>
      <section
        className="relative min-h-screen py-40 px-6 overflow-hidden"
        style={{ backgroundColor: "#f0ede8" }}
      >
        {/* Ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-cormorant italic whitespace-nowrap"
            style={{
              fontSize: "clamp(100px, 22vw, 320px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(194, 96, 31, 0.05)",
              letterSpacing: "-0.02em",
            }}
          >
            PARK RD
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div ref={titleRef} className="mb-28">
            <div className="overflow-hidden mb-6">
              <motion.p
                className="font-jost text-xs tracking-[0.35em] uppercase opacity-40"
                style={{ fontWeight: 300 }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.4, ease: EASE_LUXURY }}
              >
                Chapter 04 · Find Us
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="font-cormorant italic leading-none"
                style={{
                  fontSize: "clamp(60px, 8vw, 110px)",
                  color: "#1a1208",
                  letterSpacing: "-0.02em",
                }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.6, delay: 0.15, ease: EASE_LUXURY }}
              >
                Come find us.
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE_LUXURY }}
            >
              <p className="font-jost text-xs tracking-[0.3em] uppercase opacity-35 mb-7" style={{ fontWeight: 300 }}>Location</p>
              <p className="font-cormorant italic leading-snug mb-3" style={{ fontSize: "30px", color: "#1a1208" }}>
                Park Road<br />Milton, Brisbane
              </p>
              <p className="font-jost opacity-40 mt-2" style={{ fontSize: "13px", fontWeight: 300 }}>Opposite La Dolce Vita</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: 0.35, ease: EASE_LUXURY }}
            >
              <p className="font-jost text-xs tracking-[0.3em] uppercase opacity-35 mb-7" style={{ fontWeight: 300 }}>Hours</p>
              <div className="space-y-4">
                {hours.map(({ day, time }) => (
                  <div key={day}>
                    <p className="font-jost opacity-65" style={{ fontSize: "14px", fontWeight: 300 }}>{day}</p>
                    <p className="font-jost opacity-35" style={{ fontSize: "13px", fontWeight: 300 }}>{time}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: 0.5, ease: EASE_LUXURY }}
            >
              <p className="font-jost text-xs tracking-[0.3em] uppercase opacity-35 mb-7" style={{ fontWeight: 300 }}>Coffee</p>
              <p className="font-cormorant italic mb-10" style={{ fontSize: "26px", color: "#1a1208" }}>Bear Bones Coffee</p>
              <p className="font-jost text-xs tracking-[0.3em] uppercase opacity-35 mb-4" style={{ fontWeight: 300 }}>Follow</p>
              <a
                href="https://instagram.com/beurrepastriesbne"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jost text-xs tracking-[0.25em] uppercase"
                style={{ color: "#c2601f", opacity: 0.7, fontWeight: 300, textDecoration: "none" }}
              >
                @beurrepastriesbne
              </a>
            </motion.div>
          </div>

          <motion.div
            className="mt-28 w-12 h-px"
            style={{ backgroundColor: "#c2601f" }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.8, ease: EASE_LUXURY }}
          />
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
