"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Briefcase, Code, Building2, Globe } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import CounterAnimation from "./CounterAnimation";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: "7+", label: t.about.stats.experience },
    { icon: Code, value: "30+", label: t.about.stats.projects },
    { icon: Building2, value: "8", label: t.about.stats.companies },
    { icon: Globe, value: "5", label: t.about.stats.countries },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.about.title}</h2>
          <p className="text-muted">{t.about.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative mx-auto lg:mx-0">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-border z-10">
                <Image
                  src="/images/profile.jpeg"
                  alt="Hernán Mercado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-border opacity-80">
                <Image
                  src="/images/desk.jpg"
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-5 mb-8">
              <p className="text-muted leading-relaxed">{t.about.p1}</p>
              <p className="text-muted leading-relaxed">{t.about.p2}</p>
              {/* <p className="text-muted leading-relaxed">{t.about.p3}</p> */}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-lg bg-surface border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                  <div className="text-lg font-semibold">
                    <CounterAnimation value={stat.value} duration={2000} />
                  </div>
                  <div className="text-[10px] text-muted leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
