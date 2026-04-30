"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FooterSection from "@/components/FooterSection";

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "Your email" },
] as const;

type FormState = { name: string; email: string; message: string };

export default function ContactPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section
        className="relative min-h-screen py-40 px-6"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="max-w-xl mx-auto">
          <div ref={titleRef} className="mb-20">
            <div className="overflow-hidden">
              <motion.h1
                className="font-cormorant italic leading-none"
                style={{
                  fontSize: "clamp(52px, 7vw, 96px)",
                  color: "#1a1208",
                  letterSpacing: "-0.02em",
                }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.6, delay: 0.15, ease: EASE_LUXURY }}
              >
                Say hello.
              </motion.h1>
            </div>
          </div>

          {sent ? (
            <motion.p
              className="font-cormorant italic"
              style={{ fontSize: "32px", color: "#c2601f" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE_LUXURY }}
            >
              Thank you. We&apos;ll be in touch.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {fields.map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease: EASE_LUXURY }}
                >
                  <label
                    htmlFor={field.name}
                    className="block font-jost text-xs tracking-[0.25em] uppercase opacity-35 mb-3"
                    style={{ fontWeight: 300 }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={(e) => setForm((s) => ({ ...s, [field.name]: e.target.value }))}
                    className="w-full bg-transparent border-b font-jost py-3 outline-none"
                    style={{ borderColor: "rgba(26, 18, 8, 0.15)", color: "#1a1208", fontSize: "15px", fontWeight: 300 }}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.2, delay: 0.54, ease: EASE_LUXURY }}
              >
                <label htmlFor="message" className="block font-jost text-xs tracking-[0.25em] uppercase opacity-35 mb-3" style={{ fontWeight: 300 }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Say hello..."
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className="w-full bg-transparent border-b font-jost py-3 outline-none resize-none"
                  style={{ borderColor: "rgba(26, 18, 8, 0.15)", color: "#1a1208", fontSize: "15px", fontWeight: 300 }}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="font-jost text-xs tracking-[0.3em] uppercase py-4 px-10 border"
                style={{ borderColor: "#c2601f", color: "#c2601f", fontWeight: 300, background: "transparent", cursor: "pointer" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.7, ease: EASE_LUXURY }}
                whileHover={{ backgroundColor: "#c2601f", color: "#faf8f4" }}
              >
                Send
              </motion.button>
            </form>
          )}
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
