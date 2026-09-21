"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork } from "lucide-react";
import Image from "next/image";
import { projects, siteConfig } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 gradient-text font-medium">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Progetti</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 glow"
            >
              {/* Project image */}
              <div className="h-48 relative overflow-hidden" style={{ background: "var(--color-card)" }}>
                {project.image && (
                  <Image
                    src={`/${project.image}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                )}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, rgba(59,130,246,${0.1 + i * 0.05}), rgba(139,92,246,${0.1 + i * 0.05}))`,
                  }}
                />
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold opacity-10">{project.title[0]}</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demo}
                    className="p-2.5 rounded-full glass hover:scale-110 transition-transform"
                    aria-label="Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={siteConfig.github}
                    className="p-2.5 rounded-full glass hover:scale-110 transition-transform"
                    aria-label="GitHub"
                  >
                    <GitFork size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "var(--color-card)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
