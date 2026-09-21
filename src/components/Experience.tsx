"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 gradient-text font-medium">
            Percorso
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Esperienza</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "var(--color-card-border)" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 z-10"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                }}
              />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "" : ""}`}>
                <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 glow">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase size={18} style={{ color: "var(--color-accent)" }} />
                    <span className="text-xs tracking-wider uppercase" style={{ color: "var(--color-muted)" }}>
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm mb-4 gradient-text font-medium">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.results.map((r) => (
                      <li
                        key={r}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--color-muted)" }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-accent)" }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
