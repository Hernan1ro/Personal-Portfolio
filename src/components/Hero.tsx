"use client";

import { useMemo } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  const floatingParticles = useMemo(() => {
    const particles = [
      { id: 0, size: 3, x: 10, y: 20, duration: 18, delay: 0, xOffset: 5 },
      { id: 1, size: 2, x: 25, y: 40, duration: 22, delay: 1, xOffset: -3 },
      { id: 2, size: 4, x: 40, y: 15, duration: 20, delay: 2, xOffset: 8 },
      { id: 3, size: 3, x: 60, y: 70, duration: 19, delay: 0.5, xOffset: -5 },
      { id: 4, size: 2, x: 75, y: 30, duration: 23, delay: 1.5, xOffset: 4 },
      { id: 5, size: 5, x: 15, y: 80, duration: 17, delay: 2.5, xOffset: -7 },
      { id: 6, size: 3, x: 85, y: 50, duration: 21, delay: 3, xOffset: 6 },
      { id: 7, size: 4, x: 50, y: 90, duration: 19, delay: 1, xOffset: -4 },
      { id: 8, size: 2, x: 30, y: 60, duration: 24, delay: 2, xOffset: 3 },
      { id: 9, size: 3, x: 70, y: 10, duration: 18, delay: 0, xOffset: -6 },
      { id: 10, size: 4, x: 5, y: 45, duration: 20, delay: 1.5, xOffset: 7 },
      { id: 11, size: 2, x: 90, y: 75, duration: 22, delay: 3, xOffset: -2 },
      { id: 12, size: 5, x: 45, y: 25, duration: 19, delay: 0.5, xOffset: 5 },
      { id: 13, size: 3, x: 65, y: 85, duration: 21, delay: 2.5, xOffset: -8 },
      { id: 14, size: 2, x: 20, y: 55, duration: 23, delay: 1, xOffset: 4 },
      { id: 15, size: 4, x: 80, y: 35, duration: 18, delay: 2, xOffset: -3 },
      { id: 16, size: 3, x: 35, y: 5, duration: 20, delay: 0, xOffset: 6 },
      { id: 17, size: 2, x: 55, y: 65, duration: 22, delay: 1.5, xOffset: -5 },
      { id: 18, size: 5, x: 95, y: 20, duration: 19, delay: 3, xOffset: 7 },
      { id: 19, size: 3, x: 12, y: 95, duration: 21, delay: 0.5, xOffset: -4 },
    ];
    return particles;
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient backgrounds */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)/15%,_transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-secondary)/10%,_transparent_50%)]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.name}
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-muted font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.role}
            </motion.h2>
            <motion.p
              className="text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/images/profile.jpeg"
                  alt="Hernán Mercado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
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
