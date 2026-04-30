"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

function Reveal({
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
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.25, delay, ease: EASE_LUXURY }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function EditorialIntroSection() {
  return (
    <section
      className="relative px-6 py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: "#f7f3ed" }}
    >
      <div
        className="mx-auto max-w-5xl border-y px-0 py-14 sm:py-16 lg:py-18"
        style={{ borderColor: "rgba(26, 18, 8, 0.1)" }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-6 lg:sticky lg:top-20">
              <h2
                className="font-cormorant leading-[0.92] uppercase"
                style={{
                  color: "#1a1208",
                  fontSize: "clamp(28px, 4vw, 52px)",
                  letterSpacing: "0.03em",
                  fontWeight: 400,
                }}
              >
                A HAVEN OF CRAFT AND FLAVOUR, FOUND IN THE HEART OF MILTON.
              </h2>
            </div>
          </Reveal>

          <div className="max-w-2xl space-y-6">
            <Reveal delay={0.15}>
              <p
                className="font-jost leading-[1.95] text-[15px] sm:text-[15.5px] opacity-78"
                style={{
                  color: "rgba(26, 18, 8, 0.78)",
                  fontWeight: 300,
                  textWrap: "pretty",
                }}
              >
                Welcome to Beurre, where the art of French patisserie meets a
                restless curiosity for what comes next.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p
                className="font-jost leading-[1.95] text-[15px] sm:text-[15.5px] opacity-78"
                style={{
                  color: "rgba(26, 18, 8, 0.78)",
                  fontWeight: 300,
                  textWrap: "pretty",
                }}
              >
                Rooted in the time-honoured tradition of the classic croissant,
                we push beyond the familiar, exploring unconventional flavours
                and unexpected combinations, each one wrapped in the kind of
                golden, flaky, butter pastry that takes days to perfect.
              </p>
            </Reveal>

            <Reveal delay={0.41}>
              <p
                className="font-jost leading-[1.95] text-[15px] sm:text-[15.5px] opacity-78"
                style={{
                  color: "rgba(26, 18, 8, 0.78)",
                  fontWeight: 300,
                  textWrap: "pretty",
                }}
              >
                This is not just pastry. This is intention, craft, and a little
                obsession baked fresh, every morning.
              </p>
            </Reveal>

            <Reveal delay={0.52}>
              <div
                className="mt-8 h-px w-14"
                style={{ backgroundColor: "rgba(194, 96, 31, 0.55)" }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
