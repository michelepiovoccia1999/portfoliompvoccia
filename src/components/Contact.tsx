"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { Mail, Globe, GitFork, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, display: siteConfig.email },
  { icon: Globe, label: "LinkedIn", href: siteConfig.linkedin, display: "LinkedIn" },
  { icon: GitFork, label: "GitHub", href: siteConfig.github, display: "GitHub" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome richiesto";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email non valida";
    if (!form.message.trim()) e.message = "Messaggio richiesto";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = `mailto:${siteConfig.email}?subject=Contatto da ${form.name}&body=${encodeURIComponent(form.message)}%0A%0ADa: ${form.name} (${form.email})`;
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 gradient-text font-medium">
            Parliamo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Contattami</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
              Hai un progetto in mente o vuoi semplicemente fare una chiacchierata? Scrivimi!
            </p>
            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3 rounded-xl glass hover:scale-[1.02] transition-transform duration-300"
                >
                  <s.icon size={20} style={{ color: "var(--color-accent)" }} />
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: "var(--color-muted)" }}>
                      {s.label}
                    </p>
                    <p className="text-sm font-medium">{s.display}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Il tuo nome" : "La tua email"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-[var(--color-accent)] glass"
                  style={{ color: "var(--color-foreground)" }}
                />
                {errors[field] && (
                  <p className="text-xs mt-1 text-red-400">{errors[field]}</p>
                )}
              </div>
            ))}
            <div>
              <textarea
                placeholder="Il tuo messaggio"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200 focus:ring-1 focus:ring-[var(--color-accent)] glass"
                style={{ color: "var(--color-foreground)" }}
              />
              {errors.message && (
                <p className="text-xs mt-1 text-red-400">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              }}
            >
              Invia messaggio
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
