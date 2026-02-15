"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Briefcase, Code, Building2, Cpu } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: "6+", label: t.about.stats.experience },
    { icon: Code, value: "30+", label: t.about.stats.projects },
    { icon: Building2, value: "3", label: t.about.stats.companies },
    { icon: Cpu, value: "20+", label: t.about.stats.technologies },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.about.title}</h2>
          <p className="text-muted">{t.about.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative mx-auto lg:mx-0">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/profile.jpg"
                alt="Hernán Mercado"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border border-primary/20 -z-10" />
          </div>

          <div className="space-y-5">
            <p className="text-muted leading-relaxed">{t.about.p1}</p>
            <p className="text-muted leading-relaxed">{t.about.p2}</p>
            <p className="text-muted leading-relaxed">{t.about.p3}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-light mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
