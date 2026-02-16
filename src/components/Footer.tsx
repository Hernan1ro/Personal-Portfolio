"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <a
              href="#hero"
              className="text-xl font-bold text-primary-light tracking-tight font-mono"
            >
              {"{ H }"}
            </a>
            <span className="text-muted text-sm">
              © {year} Hernán Mercado. {t.footer.rights}
            </span>
          </div>

          {/* <div className="flex items-center gap-1 text-sm text-muted">
            {t.footer.builtWith}
            <Heart size={14} className="text-red-400 mx-1" />
          </div> */}

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Hernan1ro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/hernan1ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:hernandmf@gmail.com"
              className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
