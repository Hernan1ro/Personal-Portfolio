"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { projects } from "@/lib/data";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { t, locale } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filters = [
    { key: "all", label: t.projects.filterAll },
    { key: "react", label: t.projects.filterReact },
    { key: "javascript", label: t.projects.filterJavascript },
    { key: "node", label: t.projects.filterNode },
  ];

  const filtered = projects.filter((p) => p.category.includes(activeFilter));
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            {t.projects.title}
          </h2>
          <p className="text-muted">{t.projects.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setActiveFilter(f.key);
                setShowAll(false);
              }}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors duration-200 ${
                activeFilter === f.key
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project) => (
            <div
              key={project.id}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    hoveredId === project.id ? project.gif : project.image
                  }
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized={hoveredId === project.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary-dark text-white text-xs rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={12} />
                    {t.projects.viewDemo}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-light hover:bg-border text-foreground text-xs rounded-lg font-medium transition-colors border border-border"
                  >
                    <Github size={12} />
                    {t.projects.viewCode}
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-light transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted mb-4 line-clamp-2">
                  {project.description[locale]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 text-foreground rounded-lg font-medium transition-colors duration-200"
            >
              {showAll ? (
                <>
                  {t.projects.showLess}
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  {t.projects.showMore}
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
