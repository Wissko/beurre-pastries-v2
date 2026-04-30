"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export default function WorkshopsSection() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="pt-0 pb-40"
      style={{ backgroundColor: "#faf8f4" }}
    >
      {/* Full-width image */}
      <motion.div
        ref={imageRef}
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(360px, 55vw, 680px)" }}
        initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
        animate={
          imageInView ? { opacity: 1, scale: 1.0, filter: "blur(0px)" } : {}
        }
        transition={{ duration: 1.8, ease: EASE_LUXURY }}
      >
        <Image
          src="/images/poudre.jpg"
          alt="The hands at work"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, #faf8f4)",
          }}
        />
      </motion.div>

      {/* Text below */}
      <div
        ref={titleRef}
        className="max-w-3xl mx-auto px-6 pt-20"
      >
        <div className="overflow-hidden mb-10">
          <motion.h2
            className="font-cormorant italic leading-none"
            style={{
              fontSize: "clamp(52px, 6.5vw, 88px)",
              color: "#1a1208",
              letterSpacing: "-0.02em",
            }}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1.6, delay: 0.15, ease: EASE_LUXURY }}
          >
            Made by hand.
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.p
            className="font-jost leading-relaxed opacity-65"
            style={{ fontSize: "15px", fontWeight: 300, maxWidth: "580px" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 0.65 } : {}}
            transition={{ duration: 1.5, delay: 0.4, ease: EASE_LUXURY }}
          >
            No shortcuts. No machines where hands will do. Beurre&apos;s pastries
            are shaped, scored, and finished with attention. The kind that
            takes years to develop and moments to disappear.
          </motion.p>
        </div>

        <motion.div
          className="mt-14 w-12 h-px"
          style={{ backgroundColor: "#c2601f" }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, delay: 0.7, ease: EASE_LUXURY }}
        />
      </div>
    </section>
  );
}
