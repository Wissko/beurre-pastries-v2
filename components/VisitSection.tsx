"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export default function VisitSection() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#f0ede8" }}
    >
      {/* Ghost typography background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-cormorant italic whitespace-nowrap"
          style={{
            fontSize: "clamp(100px, 22vw, 320px)",
            color: "transparent",
            WebkitTextStroke: `1px rgba(194, 96, 31, 0.07)`,
            letterSpacing: "-0.02em",
            userSelect: "none",
          }}
        >
          PARK RD
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div ref={titleRef} className="mb-20">
          <div className="overflow-hidden">
            <motion.h2
              className="font-cormorant italic leading-none"
              style={{
                fontSize: "clamp(60px, 8vw, 110px)",
                color: "#1a1208",
                letterSpacing: "-0.02em",
              }}
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1.6, delay: 0.15, ease: EASE_LUXURY }}
            >
              Come find us.
            </motion.h2>
          </div>
        </div>

        {/* Info columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE_LUXURY }}
          >
            <p
              className="font-jost text-xs tracking-[0.3em] uppercase opacity-40 mb-5"
              style={{ fontWeight: 300 }}
            >
              Location
            </p>
            <p
              className="font-cormorant italic leading-snug"
              style={{ fontSize: "28px", color: "#1a1208" }}
            >
              Park Road
              <br />
              Milton, Brisbane
            </p>
            <p
              className="font-jost opacity-50 mt-3"
              style={{ fontSize: "13px", fontWeight: 300 }}
            >
              Opposite La Dolce Vita
            </p>
          </motion.div>

          {/* Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.38, ease: EASE_LUXURY }}
          >
            <p
              className="font-jost text-xs tracking-[0.3em] uppercase opacity-40 mb-5"
              style={{ fontWeight: 300 }}
            >
              Hours
            </p>
            <div className="space-y-1 mb-8">
              {[
                ["Wednesday – Friday", "7am until sold out"],
                ["Saturday – Sunday", "7am until sold out"],
                ["Monday – Tuesday", "Closed"],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between gap-8 font-jost opacity-70"
                  style={{ fontSize: "14px", fontWeight: 300 }}
                >
                  <span>{day}</span>
                  <span className="opacity-70 shrink-0">{hours}</span>
                </div>
              ))}
            </div>

            <p
              className="font-jost text-xs tracking-[0.3em] uppercase opacity-40 mb-3"
              style={{ fontWeight: 300 }}
            >
              Coffee
            </p>
            <p
              className="font-jost opacity-60"
              style={{ fontSize: "14px", fontWeight: 300 }}
            >
              Bear Bones Coffee
            </p>
            <a
              href="https://instagram.com/beurrepastriesbne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-jost text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-100"
              style={{
                color: "#c2601f",
                opacity: 0.75,
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              @beurrepastriesbne
            </a>
          </motion.div>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, delay: 0.5, ease: EASE_LUXURY }}
        >
          <div className="w-full h-px mb-16" style={{ backgroundColor: "#1a1208", opacity: 0.1 }} />

          <p
            className="font-jost text-xs tracking-[0.3em] uppercase opacity-40 mb-10"
            style={{ fontWeight: 300 }}
          >
            Get in touch
          </p>

          {sent ? (
            <motion.p
              className="font-cormorant italic"
              style={{ fontSize: "28px", color: "#c2601f" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE_LUXURY }}
            >
              Thank you. We&apos;ll be in touch.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "Your email" },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6 + i * 0.12,
                    ease: EASE_LUXURY,
                  }}
                >
                  <label
                    htmlFor={field.name}
                    className="block font-jost text-xs tracking-[0.25em] uppercase opacity-40 mb-3"
                    style={{ fontWeight: 300 }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, [field.name]: e.target.value }))
                    }
                    className="w-full bg-transparent border-b font-jost py-3 outline-none transition-colors"
                    style={{
                      borderColor: "rgba(26, 18, 8, 0.2)",
                      color: "#1a1208",
                      fontSize: "15px",
                      fontWeight: 300,
                    }}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.2, delay: 0.84, ease: EASE_LUXURY }}
              >
                <label
                  htmlFor="message"
                  className="block font-jost text-xs tracking-[0.25em] uppercase opacity-40 mb-3"
                  style={{ fontWeight: 300 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Say hello..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full bg-transparent border-b font-jost py-3 outline-none resize-none"
                  style={{
                    borderColor: "rgba(26, 18, 8, 0.2)",
                    color: "#1a1208",
                    fontSize: "15px",
                    fontWeight: 300,
                  }}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="font-jost text-xs tracking-[0.3em] uppercase py-4 px-10 border transition-all"
                style={{
                  borderColor: "#c2601f",
                  color: "#c2601f",
                  fontWeight: 300,
                  background: "transparent",
                  cursor: "pointer",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.0, ease: EASE_LUXURY }}
                whileHover={{ backgroundColor: "#c2601f", color: "#faf8f4" }}
              >
                Send
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
