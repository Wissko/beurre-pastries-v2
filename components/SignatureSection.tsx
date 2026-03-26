"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export default function SignatureSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1a1208" }}
    >
      {/* Background image semi-transparent */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={inView ? { opacity: 1, scale: 1.0 } : {}}
        transition={{ duration: 2.0, ease: EASE_LUXURY }}
      >
        <Image
          src="/images/signature.jpg"
          alt="Signature"
          fill
          className="object-cover"
          style={{ opacity: 0.25 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(26, 18, 8, 0.72)" }}
        />
      </motion.div>

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Rule */}
        <motion.div
          className="w-px h-16 mx-auto mb-16"
          style={{ backgroundColor: "#c2601f", opacity: 0.6 }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, ease: EASE_LUXURY }}
        />

        <div className="overflow-hidden">
          <motion.p
            className="font-jost text-xs tracking-[0.4em] uppercase mb-10"
            style={{ color: "#c2601f", fontWeight: 300, opacity: 0.8 }}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease: EASE_LUXURY }}
          >
            A philosophy
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            className="font-cormorant italic leading-[1.1]"
            style={{
              color: "#faf8f4",
              fontSize: "clamp(44px, 7vw, 96px)",
              letterSpacing: "-0.02em",
            }}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1.8, delay: 0.5, ease: EASE_LUXURY }}
          >
            Every piece
            <br />
            tells a story.
          </motion.h2>
        </div>

        <div className="overflow-hidden mt-10">
          <motion.p
            className="font-jost leading-relaxed mx-auto"
            style={{
              color: "#faf8f4",
              opacity: 0.5,
              fontSize: "15px",
              maxWidth: "520px",
              fontWeight: 300,
            }}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 0.5 } : {}}
            transition={{ duration: 1.6, delay: 0.9, ease: EASE_LUXURY }}
          >
            A croissant is not just laminated butter and flour. It is the sum of
            a hundred small decisions: the temperature, the fold, the rest.
            Will chooses carefully. You taste the difference.
          </motion.p>
        </div>

        {/* Rule bottom */}
        <motion.div
          className="w-px h-16 mx-auto mt-16"
          style={{ backgroundColor: "#c2601f", opacity: 0.6 }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, delay: 1.2, ease: EASE_LUXURY }}
        />
      </div>
    </section>
  );
}
