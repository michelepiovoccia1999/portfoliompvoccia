"use client";

import { ArrowUp, GitFork, Globe, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: "var(--color-card-border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti riservati.
        </p>

        <div className="flex items-center gap-4">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitFork size={18} style={{ color: "var(--color-muted)" }} className="hover:opacity-70 transition-opacity" />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Globe size={18} style={{ color: "var(--color-muted)" }} className="hover:opacity-70 transition-opacity" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email">
            <Mail size={18} style={{ color: "var(--color-muted)" }} className="hover:opacity-70 transition-opacity" />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-full glass hover:scale-110 transition-transform"
          aria-label="Torna su"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
