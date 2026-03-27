"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WorkshopsSection from "@/components/WorkshopsSection";
import FooterSection from "@/components/FooterSection";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Lamination",
    description: "72-hour cold fermentation. Butter folded in precise layers.",
  },
  {
    number: "02",
    title: "Shaping",
    description: "Each piece formed by hand. No two exactly alike.",
  },
  {
    number: "03",
    title: "Timing",
    description: "Baked fresh each morning. Doors open at 7am.",
  },
];

export default function AtelierPage() {
  return (
    <main>
      <WorkshopsSection />

      {/* ── The Process ───────────────────────────────────── */}
      <section
        className="py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="font-jost text-xs tracking-[0.35em] uppercase opacity-35 mb-16"
            style={{ fontWeight: 300, color: "#1a1208" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.35, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: EASE_LUXURY }}
          >
            The Process
          </motion.p>

          <div className="flex flex-col md:flex-row gap-0 md:gap-0 relative">
            {/* Steps */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative pr-8 md:pr-12 pb-12 md:pb-0"
                  style={{
                    borderRight: i < steps.length - 1 ? "1px solid rgba(26,18,8,0.1)" : "none",
                    paddingLeft: i > 0 ? "2rem" : "0",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.4, delay: i * 0.15, ease: EASE_LUXURY }}
                >
                  {/* Mobile separator */}
                  {i > 0 && (
                    <div
                      className="md:hidden w-full h-px mb-12"
                      style={{ backgroundColor: "rgba(26,18,8,0.1)" }}
                    />
                  )}
                  <p
                    className="font-jost mb-5"
                    style={{ fontSize: "12px", fontWeight: 300, color: "#c2601f", letterSpacing: "0.15em" }}
                  >
                    {step.number}
                  </p>
                  <h3
                    className="font-cormorant italic mb-4 leading-tight"
                    style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#1a1208" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-jost leading-relaxed opacity-55"
                    style={{ fontSize: "14px", fontWeight: 300, color: "#1a1208" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Portrait image – sticky on desktop */}
            <motion.div
              className="hidden md:block shrink-0 ml-16"
              style={{ width: "220px" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.6, delay: 0.3, ease: EASE_LUXURY }}
            >
              <div
                className="sticky top-28 relative overflow-hidden rounded-2xl"
                style={{ height: "clamp(300px, 40vw, 420px)" }}
              >
                <Image
                  src="/images/p1.jpg"
                  alt="The process"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
