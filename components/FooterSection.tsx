"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="py-16 px-6 border-t"
      style={{
        backgroundColor: "#f0ede8",
        borderColor: "rgba(26, 18, 8, 0.1)",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: EASE_LUXURY }}
        >
          <div className="relative w-24 h-16">
            <Image
              src="/images/logobeurre.PNG"
              alt="beurre. Pastries"
              fill
              className="object-contain object-left"
              sizes="96px"
            />
          </div>
        </motion.div>

        {/* Center info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.2, ease: EASE_LUXURY }}
        >
          <p
            className="font-jost text-xs tracking-[0.3em] uppercase opacity-40"
            style={{ fontWeight: 300 }}
          >
            33 Park Rd · Milton QLD 4064
          </p>
          <p
            className="font-jost text-xs opacity-30 mt-2"
            style={{ fontWeight: 300 }}
          >
            © {new Date().getFullYear()} beurre. Pastries. All rights reserved
          </p>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: EASE_LUXURY }}
        >
          <a
            href="https://instagram.com/beurrepastriesbne"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-100"
            style={{ color: "#c2601f", opacity: 0.65, fontWeight: 300, textDecoration: "none" }}
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
