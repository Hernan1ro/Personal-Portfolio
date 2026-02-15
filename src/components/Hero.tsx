"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)/15%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-secondary)/10%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t.hero.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted font-light mb-6">
              {t.hero.role}
            </h2>
            <p className="text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors duration-200"
              >
                {t.hero.cta}
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-primary/50 text-foreground rounded-lg font-medium transition-colors duration-200"
              >
                <Mail size={16} />
                {t.hero.contact}
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Hernán Mercado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} className="text-muted" />
        </a>
      </div>
    </section>
  );
}
