"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  return (
    <main>
      <AboutSection />

      {/* ── Bento Section ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f0ede8" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Large cell – craft.jpg with overlay */}
          <motion.div
            className="relative md:col-span-2 overflow-hidden rounded-2xl"
            style={{ minHeight: "clamp(320px, 50vw, 600px)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: EASE_LUXURY }}
          >
            <Image
              src="/images/craft.jpg"
              alt="The craft"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,18,8,0.75) 0%, rgba(26,18,8,0.15) 60%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-10">
              <p
                className="font-cormorant italic text-white leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.01em" }}
              >
                The craft behind every layer.
              </p>
            </div>
          </motion.div>

          {/* life.jpg */}
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            style={{ minHeight: "clamp(220px, 30vw, 400px)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.1, ease: EASE_LUXURY }}
          >
            <Image
              src="/images/life.jpg"
              alt="The life at Beurre"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(26,18,8,0.22)" }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p
                className="font-jost text-white uppercase tracking-[0.25em] opacity-80"
                style={{ fontSize: "11px", fontWeight: 300 }}
              >
                The life
              </p>
            </div>
          </motion.div>

          {/* late.jpg */}
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            style={{ minHeight: "clamp(220px, 30vw, 400px)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE_LUXURY }}
          >
            <Image
              src="/images/late.jpg"
              alt="A late morning at Beurre"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(26,18,8,0.22)" }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p
                className="font-jost text-white uppercase tracking-[0.25em] opacity-80"
                style={{ fontSize: "11px", fontWeight: 300 }}
              >
                A morning ritual
              </p>
            </div>
          </motion.div>

          {/* Quote cell */}
          <motion.div
            className="md:col-span-2 flex items-center justify-center rounded-2xl py-16 px-10"
            style={{ backgroundColor: "#ede8e0" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.6, delay: 0.15, ease: EASE_LUXURY }}
          >
            <blockquote
              className="font-cormorant italic text-center leading-tight"
              style={{
                fontSize: "clamp(26px, 4vw, 54px)",
                color: "#1a1208",
                maxWidth: "820px",
                letterSpacing: "-0.01em",
              }}
            >
              &ldquo;No shortcuts. No machines where hands will do.&rdquo;
            </blockquote>
          </motion.div>

        </div>
      </section>

      <FooterSection />
    </main>
  );
}
