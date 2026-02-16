"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const companies = [
  { name: "SOFTIX S.A.S", logo: "/images/companies/softix.png" },
  { name: "Sabia Soluciones y Finanzas", logo: "/images/companies/sabia.png" },
  { name: "Customer Solutions", logo: "/images/companies/customer_solutions.webp" },
  { name: "Atlantic International University", logo: "/images/companies/atlantic.png" },
  { name: "Ambit", logo: "/images/companies/ambit.png" },
  { name: "Atenea", logo: "/images/companies/atenea.png" },
  { name: "Paqari", logo: "/images/companies/paqari.jpg" },
  { name: "USA Machinery", logo: "/images/companies/usa_machinery.svg" },
  { name: "Sukabet", logo: "/images/companies/sukabet.jpg" },
];

export default function Companies() {
  const { t } = useLanguage();



  const duplicated = [...companies, ...companies, ...companies, ...companies];

  return (
    <section id="companies" className="py-20">
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
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {duplicated.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="px-8 py-6 rounded-xl bg-surface border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative h-12 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    unoptimized={company.logo.endsWith('.svg')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
