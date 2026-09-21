"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 gradient-text font-medium">
            Competenze
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Tech Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-5 gradient-text">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--color-card)] transition-colors cursor-default"
                  >
                    <span className="text-lg w-8 text-center">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
