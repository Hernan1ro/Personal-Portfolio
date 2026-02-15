"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "validation">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const values = [
      formData.get("name"),
      formData.get("email"),
      formData.get("subject"),
      formData.get("message"),
    ];

    if (values.some((v) => !v || String(v).trim() === "")) {
      setStatus("validation");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(
        "service_xatg6gi",
        "template_4x3byze",
        formRef.current,
        "STkwfQTM519ZxYxFL"
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.contact.title}</h2>
          <p className="text-muted">{t.contact.subtitle}</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection direction="left" delay={0.2} className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a
                  href="mailto:hernandmf@gmail.com"
                  className="text-muted hover:text-primary-light transition-colors text-sm"
                >
                  hernandmf@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{t.footer.location}</h3>
                <p className="text-muted text-sm">Colombia</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/Hernan1ro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/hernan1ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.name}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t.contact.subject}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
              />
              <textarea
                name="message"
                placeholder={t.contact.message}
                rows={5}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white rounded-lg font-medium transition-colors duration-200"
              >
                {status === "sending" ? (
                  t.contact.sending
                ) : (
                  <>
                    <Send size={16} />
                    {t.contact.send}
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2">{t.contact.success}</p>
              )}
              {status === "validation" && (
                <p className="text-red-400 text-sm mt-2">{t.contact.error}</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">{t.contact.errorSend}</p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
