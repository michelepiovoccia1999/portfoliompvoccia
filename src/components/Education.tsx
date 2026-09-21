"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 gradient-text font-medium">
            Formazione
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Istruzione</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 glow">
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ background: "var(--color-card)" }}
                  >
                    <GraduationCap size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <span className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "var(--color-muted)" }}>
                      {edu.institution}
                    </p>
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "var(--color-card)",
                        color: "var(--color-accent)",
                      }}
                    >
                      Voto: {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
