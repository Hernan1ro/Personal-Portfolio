"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { MapPin, Calendar, Building } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            {t.experience.title}
          </h2>
          <p className="text-muted">{t.experience.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 mt-6" />

                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2 flex-wrap justify-start md:justify-end">
                      {index % 2 !== 0 && (
                        <span className="hidden md:block" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-primary-light font-medium">
                        {job.company}
                      </span>
                      <span className="text-muted text-sm">
                        · {job.industry}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted mb-4 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.period} · {job.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                    <ul className="space-y-2 text-left">
                      {job.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
