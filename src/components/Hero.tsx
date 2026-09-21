"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-muted) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--color-muted)" }}
          >
            {siteConfig.role}
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ciao, sono{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="gradient-text"
            >
              {siteConfig.name.split(" ")[0]}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              }}
            >
              <Mail size={18} />
              Contattami
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--color-card-border)",
                color: "var(--color-foreground)",
              }}
            >
              Visualizza progetti
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} style={{ color: "var(--color-muted)" }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
