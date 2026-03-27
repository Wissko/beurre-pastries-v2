"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FooterSection from "@/components/FooterSection";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

type Specialty = {
  name: string;
  description: string;
  image: string | null;
  span?: "col-span-2" | "col-span-1";
  terracotta?: boolean;
};

const specialties: Specialty[] = [
  {
    name: "Croissant",
    description: "Laminated. Layered. Light.",
    image: "/images/cafecroissant.jpg",
    span: "col-span-2",
  },
  {
    name: "Pain au Chocolat",
    description: "Dark chocolate folded into butter pastry.",
    image: "/images/fraise.jpg",
  },
  {
    name: "Cinnamon Monkey Cube",
    description: "Warm spice. Pull-apart perfection.",
    image: "/images/poudre.jpg",
  },
  {
    name: "Black Sesame Morning Bun",
    description: "Yuzu glaze. A quiet intensity.",
    image: "/images/matcha.jpg",
    span: "col-span-2",
  },
  {
    name: "Pain Suisse",
    description: "Peanut butter, Belgian chocolate & morello cherries.",
    image: "/images/blanc.jpg",
  },
  {
    name: "Seasonal Specials",
    description: "Changing with the seasons. Always worth the wait.",
    image: null,
    terracotta: true,
  },
];

export default function CollectionPage() {
  return (
    <main style={{ backgroundColor: "#f0ede8" }}>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.p
          className="font-jost text-xs tracking-[0.35em] uppercase opacity-40 mb-6"
          style={{ fontWeight: 300, color: "#1a1208" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_LUXURY }}
        >
          Chapter 02 · The Collection
        </motion.p>
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-cormorant italic leading-none"
            style={{
              fontSize: "clamp(60px, 9vw, 120px)",
              color: "#1a1208",
              letterSpacing: "-0.02em",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.6, delay: 0.1, ease: EASE_LUXURY }}
          >
            The Collection
          </motion.h1>
        </div>
        <motion.p
          className="font-jost opacity-40"
          style={{ fontSize: "15px", fontWeight: 300, color: "#1a1208" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.4, delay: 0.4, ease: EASE_LUXURY }}
        >
          Baked fresh. Until they&apos;re gone.
        </motion.p>
      </section>

      {/* Bento Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {specialties.map((item, i) => (
            <motion.div
              key={item.name}
              className={`relative overflow-hidden rounded-2xl group ${item.span ?? "col-span-1"}`}
              style={{
                minHeight: item.span === "col-span-2" ? "clamp(280px, 35vw, 480px)" : "clamp(220px, 25vw, 360px)",
                backgroundColor: item.terracotta ? "#c2601f" : "#1a1208",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: i * 0.08, ease: EASE_LUXURY }}
            >
              {item.image && (
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: EASE_LUXURY }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
              )}

              {/* Gradient overlay */}
              {item.image && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.3) 50%, transparent 100%)",
                  }}
                />
              )}

              {/* Text */}
              <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 ${item.terracotta ? "justify-center items-center text-center" : ""}`}>
                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p
                    className="font-cormorant italic text-white leading-tight mb-2"
                    style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.01em" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="font-jost text-white opacity-70"
                    style={{ fontSize: "12px", fontWeight: 300, letterSpacing: "0.05em" }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
