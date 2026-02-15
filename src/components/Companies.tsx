"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const companies = [
  { name: "SOFTIX S.A.S", color: "text-blue-400" },
  { name: "Sabia Soluciones y Finanzas", color: "text-emerald-400" },
  { name: "Customer Solutions", color: "text-purple-400" },
];

export default function Companies() {
  const { t } = useLanguage();

  const duplicated = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            {t.companies.title}
          </h2>
          <p className="text-muted">{t.companies.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {duplicated.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="flex items-center gap-3 px-8 py-5 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors duration-300">
                <div
                  className={`w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center font-bold text-lg ${company.color}`}
                >
                  {company.name.charAt(0)}
                </div>
                <span className="text-foreground font-medium whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
