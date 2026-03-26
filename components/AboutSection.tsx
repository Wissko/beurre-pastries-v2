"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

function RevealText({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.6, delay, ease: EASE_LUXURY }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex"
      style={{ backgroundColor: "#faf8f4" }}
    >
      {/* Left: sticky image */}
      <div className="hidden lg:block w-[58%] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            ref={imageRef}
            className="w-full h-full"
            initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
            animate={
              imageInView
                ? { opacity: 1, scale: 1.0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 1.8, ease: EASE_LUXURY }}
          >
            <Image
              src="/images/art.jpg"
              alt="The craft"
              fill
              className="object-cover"
              sizes="58vw"
            />
          </motion.div>
        </div>
      </div>

      {/* Right: text */}
      <div className="w-full lg:w-[42%] flex flex-col justify-center px-8 lg:px-16 py-40">
        <RevealText delay={0.1}>
          <p
            className="font-jost text-xs tracking-[0.35em] uppercase mb-8 opacity-50"
            style={{ fontWeight: 300 }}
          >
            Chapter 01 · The Beginning
          </p>
        </RevealText>

        <RevealText delay={0.25}>
          <h2
            className="font-cormorant italic leading-[0.9] mb-12"
            style={{
              fontSize: "clamp(52px, 5.5vw, 80px)",
              color: "#1a1208",
              letterSpacing: "-0.02em",
            }}
          >
            Where it
            <br />
            begins.
          </h2>
        </RevealText>

        {/* Paragraphs staggered */}
        <RevealText delay={0.4}>
          <p
            className="font-jost leading-relaxed mb-6 opacity-75"
            style={{ fontSize: "15px", maxWidth: "480px", fontWeight: 300 }}
          >
            Will Leung grew up kneading dough before dawn — a habit formed in
            Christchurch, where he built a quiet reputation as LeBakerman. His
            hands learned precision through repetition, and patience through
            failure.
          </p>
        </RevealText>

        <RevealText delay={0.6}>
          <p
            className="font-jost leading-relaxed mb-6 opacity-75"
            style={{ fontSize: "15px", maxWidth: "480px", fontWeight: 300 }}
          >
            Brisbane called. He arrived with a laminated dough recipe, an eye
            for balance, and a conviction that great pastry asks nothing of you
            except attention.
          </p>
        </RevealText>

        <RevealText delay={0.8}>
          <p
            className="font-jost leading-relaxed opacity-75"
            style={{ fontSize: "15px", maxWidth: "480px", fontWeight: 300 }}
          >
            On Park Road in Milton — across from La Dolce Vita, alongside Bear
            Bones Coffee — beurre. became a morning ritual for those who know
            the difference.
          </p>
        </RevealText>

        {/* Decorative rule */}
        <motion.div
          className="mt-16 w-12 h-px"
          style={{ backgroundColor: "#c2601f" }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, delay: 1.0, ease: EASE_LUXURY }}
        />
      </div>

      {/* Mobile image */}
      <div className="lg:hidden absolute inset-0 -z-10 opacity-15">
        <Image
          src="/images/art.jpg"
          alt="The craft"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
