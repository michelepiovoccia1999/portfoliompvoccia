"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { about } from "@/lib/data";

const features = [
  { icon: Code2, label: "Codice pulito" },
  { icon: Lightbulb, label: "Problem solving" },
  { icon: Rocket, label: "Performance" },
  { icon: Users, label: "Team player" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 gradient-text font-medium">
            Chi sono
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-muted)" }}
            >
              {about.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {about.highlights.map((h) => (
                <span
                  key={h}
                  className="px-4 py-2 rounded-full text-sm glass"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 glow"
              >
                <f.icon
                  size={28}
                  className="mx-auto mb-3"
                  style={{ color: "var(--color-accent)" }}
                />
                <p className="text-sm font-medium">{f.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
