"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["contact", "skills", "experience", "companies", "projects", "about", "hero"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: t.nav.home, id: "hero" },
    { href: "#companies", label: t.nav.companies, id: "companies" },
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#projects", label: t.nav.projects, id: "projects" },
    { href: "#experience", label: t.nav.experience, id: "experience" },
    { href: "#skills", label: t.nav.skills, id: "skills" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="flex items-center"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors">
              <Image
                src="/images/profile.jpeg"
                alt="Hernán Mercado"
                fill
                className="object-cover"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary-light bg-primary/10"
                    : "text-muted hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLocale}
              className="ml-3 cursor-pointer flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/50 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="uppercase font-medium">{locale}</span>
            </button>
            {/* <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/50 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button> */}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLocale}
              className="flex cursor-pointer items-center gap-1 px-2 py-1.5 text-sm rounded-lg border border-border text-muted"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="uppercase text-xs font-medium">{locale}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted hover:text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-primary-light bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-surface-light"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
