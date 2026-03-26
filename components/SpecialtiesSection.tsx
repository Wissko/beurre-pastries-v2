"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const specialties = [
  {
    name: "Croissant",
    description: "Classic laminated dough. 72-hour process, AOP butter. Honey-brown crust, open crumb, nothing to hide.",
    image: "/images/cafecroissant.jpg",
  },
  {
    name: "Pain au Chocolat",
    description: "Belgian dark chocolate, twice-wrapped in buttery layers. Best warm, first thing.",
    image: "/images/fraise.jpg",
  },
  {
    name: "Cinnamon Monkey Cube",
    description: "Pull-apart brioche, cinnamon sugar, baked in a block. Order it while you still can.",
    image: "/images/poudre.jpg",
  },
  {
    name: "Black Sesame Morning Bun",
    description: "Rolled in black sesame, glazed with yuzu. Edgy without trying.",
    image: "/images/matcha.jpg",
  },
  {
    name: "Pain Suisse",
    description: "Peanut butter, Belgian chocolate, morello cherries. Not traditional. Better.",
    image: "/images/blanc.jpg",
  },
  {
    name: "Seasonal Specials",
    description: "Bespoke creations that change with what's in season. Follow @beurrepastriesbne to know first.",
    image: "/images/confitur.jpg",
  },
];

function SpecialtyItem({
  item,
  index,
}: {
  item: (typeof specialties)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-8 lg:gap-16 py-10 border-b border-espresso/10 last:border-b-0 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.4, delay: index * 0.1, ease: EASE_LUXURY }}
    >
      {/* Number */}
      <span
        className="font-jost text-xs tracking-widest opacity-30 pt-4 shrink-0 w-8"
        style={{ fontWeight: 300 }}
      >
        0{index + 1}
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3
          className="font-cormorant italic leading-none mb-3"
          style={{
            fontSize: "clamp(36px, 4vw, 58px)",
            color: "#1a1208",
            letterSpacing: "-0.01em",
          }}
        >
          {item.name}
        </h3>
        <p
          className="font-jost opacity-55"
          style={{ fontSize: "14px", fontWeight: 300, maxWidth: "420px" }}
        >
          {item.description}
        </p>
      </div>

      {/* Image */}
      <motion.div
        className="shrink-0 hidden md:block"
        style={{
          width: "clamp(80px, 8vw, 120px)",
          height: "clamp(80px, 8vw, 120px)",
          position: "relative",
          borderRadius: "2px",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
        animate={inView ? { opacity: 1, scale: 1.0, filter: "blur(0px)" } : {}}
        transition={{
          duration: 1.6,
          delay: index * 0.1 + 0.3,
          ease: EASE_LUXURY,
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="120px"
        />
      </motion.div>
    </motion.div>
  );
}

export default function SpecialtiesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      className="py-40 px-6"
      style={{ backgroundColor: "#ede8e0" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Chapter heading */}
        <div ref={titleRef} className="mb-20">
          <div className="overflow-hidden mb-6">
            <motion.p
              className="font-jost text-xs tracking-[0.35em] uppercase opacity-45"
              style={{ fontWeight: 300 }}
              initial={{ y: "110%" }}
              animate={titleInView ? { y: 0 } : {}}
              transition={{ duration: 1.4, ease: EASE_LUXURY }}
            >
              Chapter 02 · The Craft
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              className="font-cormorant italic leading-none"
              style={{
                fontSize: "clamp(60px, 8vw, 110px)",
                color: "#1a1208",
                letterSpacing: "-0.02em",
              }}
              initial={{ y: "110%" }}
              animate={titleInView ? { y: 0 } : {}}
              transition={{
                duration: 1.6,
                delay: 0.15,
                ease: EASE_LUXURY,
              }}
            >
              The menu.
            </motion.h2>
          </div>
        </div>

        {/* Specialty list */}
        <div>
          {specialties.map((item, i) => (
            <SpecialtyItem key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
