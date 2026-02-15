"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { skills } from "@/lib/data";

const skillColors: Record<string, string> = {
  html5: "text-orange-400 border-orange-400/30",
  css3: "text-blue-400 border-blue-400/30",
  javascript: "text-yellow-400 border-yellow-400/30",
  typescript: "text-blue-300 border-blue-300/30",
  react: "text-cyan-400 border-cyan-400/30",
  nextjs: "text-foreground border-foreground/30",
  redux: "text-purple-400 border-purple-400/30",
  tailwindcss: "text-cyan-300 border-cyan-300/30",
  sass: "text-pink-400 border-pink-400/30",
  vite: "text-purple-300 border-purple-300/30",
  astro: "text-orange-300 border-orange-300/30",
  nodejs: "text-green-400 border-green-400/30",
  express: "text-gray-300 border-gray-300/30",
  python: "text-yellow-300 border-yellow-300/30",
  django: "text-green-500 border-green-500/30",
  mysql: "text-blue-400 border-blue-400/30",
  postgresql: "text-blue-300 border-blue-300/30",
  mongodb: "text-green-400 border-green-400/30",
  firebase: "text-yellow-500 border-yellow-500/30",
  git: "text-orange-500 border-orange-500/30",
  docker: "text-blue-400 border-blue-400/30",
  aws: "text-yellow-500 border-yellow-500/30",
  figma: "text-pink-400 border-pink-400/30",
  zustand: "text-amber-400 border-amber-400/30",
};

export default function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: t.skills.categories.all },
    { key: "frontend", label: t.skills.categories.frontend },
    { key: "backend", label: t.skills.categories.backend },
    { key: "tools", label: t.skills.categories.tools },
  ];

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.skills.title}</h2>
          <p className="text-muted">{t.skills.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((skill) => {
            const color = skillColors[skill.icon] || "text-primary border-primary/30";
            return (
              <div
                key={skill.name}
                className={`group flex items-center gap-3 p-4 rounded-xl bg-surface border hover:bg-surface-light transition-all duration-300 ${color}`}
              >
                <span className="text-2xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                  #
                </span>
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
