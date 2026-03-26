"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const images = [
  { src: "/images/fraise.jpg", alt: "Fraise", span: "large" },
  { src: "/images/matcha.jpg", alt: "Matcha", span: "small" },
  { src: "/images/crepe.jpg", alt: "Crepe", span: "small" },
  { src: "/images/blanc.jpg", alt: "Blanc", span: "medium" },
  { src: "/images/poudre.jpg", alt: "Poudre", span: "medium" },
];

function GalleryImage({
  src,
  alt,
  span,
  index,
}: {
  src: string;
  alt: string;
  span: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const sizeMap: Record<string, { width: string; height: string }> = {
    large: { width: "100%", height: "clamp(320px, 45vw, 560px)" },
    medium: { width: "100%", height: "clamp(240px, 30vw, 380px)" },
    small: { width: "100%", height: "clamp(180px, 22vw, 280px)" },
  };

  const size = sizeMap[span];

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-sm"
      style={{ height: size.height }}
      initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
      animate={
        inView ? { opacity: 1, scale: 1.0, filter: "blur(0px)" } : {}
      }
      transition={{
        duration: 1.8,
        delay: index * 0.15,
        ease: EASE_LUXURY,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Light reveal overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "#f0ede8" }}
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 100% 0%)" } : {}}
        transition={{
          duration: 1.6,
          delay: index * 0.15 + 0.2,
          ease: EASE_LUXURY,
        }}
      />
    </motion.div>
  );
}

export default function GallerySection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      className="py-40 px-6"
      style={{ backgroundColor: "#f0ede8" }}
    >
      <div className="max-w-5xl mx-auto">
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
              Chapter 03 · The Light
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
              transition={{ duration: 1.6, delay: 0.15, ease: EASE_LUXURY }}
            >
              The light.
            </motion.h2>
          </div>
        </div>

        {/* Asymmetric mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Row 1: large left, small right stacked */}
          <div className="md:col-span-1 md:row-span-2">
            <GalleryImage
              src={images[0].src}
              alt={images[0].alt}
              span="large"
              index={0}
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <GalleryImage
              src={images[1].src}
              alt={images[1].alt}
              span="small"
              index={1}
            />
            <GalleryImage
              src={images[2].src}
              alt={images[2].alt}
              span="small"
              index={2}
            />
          </div>

          {/* Row 2: two medium */}
          <div className="md:col-span-1">
            <GalleryImage
              src={images[3].src}
              alt={images[3].alt}
              span="medium"
              index={3}
            />
          </div>
          <div className="md:col-span-1">
            <GalleryImage
              src={images[4].src}
              alt={images[4].alt}
              span="medium"
              index={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
