"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Rocket,
  Shield,
  Palette,
  Code2,
  Server,
  Database,
  Cloud,
  TestTube,
  ArrowRight,
  CalendarClock,
} from "lucide-react";

const PDFButton = dynamic(() => import("./PDFButton"), { ssr: false });

const fecha = new Date().toLocaleDateString("es-CO", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const cronograma = [
  {
    mes: "Mes 1",
    titulo: "Fundamentos y módulo comercial",
    tareas: ["Arquitectura del sistema", "Diseño UI/UX", "Base de datos", "CRM y cotizaciones"],
  },
  {
    mes: "Mes 2",
    titulo: "Operación y producción",
    tareas: ["Logística e inventario", "Compras y almacén", "Producción y calidad", "Órdenes de trabajo"],
  },
  {
    mes: "Mes 3",
    titulo: "Financiero y lanzamiento",
    tareas: ["Facturación y cartera", "Reportes y dashboards", "Testing integral", "Despliegue en producción"],
  },
];

const disciplinas = [
  { icon: Palette, nombre: "Diseño UI/UX", desc: "Interfaces intuitivas y experiencia de usuario profesional" },
  { icon: Code2, nombre: "Desarrollo frontend", desc: "Aplicación web moderna, rápida y responsive" },
  { icon: Server, nombre: "Desarrollo backend", desc: "API robusta, lógica de negocio y seguridad" },
  { icon: Database, nombre: "Base de datos", desc: "Modelado, optimización y migraciones" },
  { icon: Cloud, nombre: "DevOps e infraestructura", desc: "Despliegue, CI/CD, monitoreo y escalabilidad" },
  { icon: TestTube, nombre: "QA y testing", desc: "Pruebas funcionales, integración y calidad" },
];

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors">
              <Image src="/images/profile.jpeg" alt="Hernán Mercado" fill className="object-cover" />
            </a>
            <div>
              <h1 className="text-lg font-bold">Propuesta técnica y económica</h1>
              <p className="text-xs text-muted">SIGE — Atmósfera Decoraciones</p>
            </div>
          </div>
          <PDFButton />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Info cliente + cotización */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-2">Preparado para</p>
              <h2 className="text-xl font-bold">Atmósfera Decoraciones</h2>
              <p className="text-sm text-muted mt-1">Empresa de decoración, mantenimiento y servicios</p>
            </div>
            <div className="md:text-right">
              <p className="text-xs text-muted uppercase tracking-wider mb-2">Detalles de cotización</p>
              <p className="text-sm"><span className="text-muted">N°:</span> <span className="font-medium">ATMD-2026-001</span></p>
              <p className="text-sm"><span className="text-muted">Fecha:</span> <span className="font-medium">{fecha}</span></p>
              <p className="text-sm"><span className="text-muted">Vigencia:</span> <span className="font-medium">30 días</span></p>
            </div>
          </div>
        </section>

        {/* Resumen ejecutivo */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-4">Resumen ejecutivo</h2>
          <p className="text-muted leading-relaxed mb-4">
            Propuesta para el desarrollo de un <strong className="text-foreground">Sistema Integral de Gestión Empresarial (SIGE)</strong> que
            optimizará, automatizará y conectará todos los procesos operativos, comerciales, logísticos,
            productivos y financieros de Atmósfera Decoraciones.
          </p>
          <p className="text-muted leading-relaxed">
            El sistema eliminará reprocesos manuales, centralizará la información y permitirá trazabilidad
            completa desde la valoración hasta el recaudo, incrementando la eficiencia operativa y
            rentabilidad del negocio.
          </p>
        </section>

        {/* Disciplinas */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-2">Disciplinas involucradas</h2>
          <p className="text-muted text-sm mb-6">
            Este proyecto abarca múltiples áreas de especialización, cada una esencial para entregar una solución robusta y profesional.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {disciplinas.map((d) => (
              <div key={d.nombre} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <d.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">{d.nombre}</h3>
                  <p className="text-xs text-muted mt-1">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alcance */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Alcance del proyecto</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { titulo: "Módulo comercial", desc: "CRM, valoraciones, cotizaciones y gestión integral de clientes" },
              { titulo: "Módulo operación", desc: "Logística, compras, almacén e inventario en tiempo real" },
              { titulo: "Módulo producción", desc: "ODP, ejecución, instalación y control de calidad" },
              { titulo: "Módulo financiero", desc: "Facturación, cartera, pagos y flujo de caja" },
            ].map((m) => (
              <div key={m.titulo} className="flex items-start gap-3 p-4 rounded-lg bg-surface-light border border-border">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold">{m.titulo}</h3>
                  <p className="text-sm text-muted mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologías */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Stack tecnológico</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary-light">Frontend</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Next.js (App Router)</li>
                <li>• TypeScript</li>
                <li>• TailwindCSS</li>
                <li>• React Hook Form</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-primary-light">Backend</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Node.js + NestJS</li>
                <li>• TypeScript</li>
                <li>• PostgreSQL</li>
                <li>• Prisma ORM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-primary-light">Infraestructura</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Render (Backend + DB)</li>
                <li>• Netlify (Frontend)</li>
                <li>• Cloudflare (CDN/SSL/R2)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cronograma */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-2">Cronograma de desarrollo</h2>
          <p className="text-muted text-sm mb-6">Desarrollo intensivo de 3 meses con entregas incrementales</p>
          <div className="grid md:grid-cols-3 gap-5">
            {cronograma.map((item, i) => (
              <div key={i} className="relative p-5 rounded-xl bg-surface-light border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary text-sm font-bold">{i + 1}</span>
                  <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">{item.mes}</span>
                </div>
                <h3 className="font-semibold text-sm mb-3">{item.titulo}</h3>
                <ul className="space-y-2">
                  {item.tareas.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm">Duración total: 3 meses</p>
              <p className="text-xs text-muted mt-1">
                Al finalizar cada mes se entrega un avance funcional del sistema para revisión del cliente.
              </p>
            </div>
          </div>
          <div className="mt-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
            <Shield className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-green-400">Garantía de cumplimiento</p>
              <p className="text-xs text-muted mt-1">
                En caso de que el desarrollo se extienda más allá de los 3 meses previstos por responsabilidad del desarrollador,
                el cuarto mes de trabajo será completamente gratuito para el cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Propuesta económica */}
        <section className="bg-surface rounded-xl border border-border overflow-hidden">
          <div className="bg-gradient-to-br from-[#0a0a1a] to-[#111128] p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Propuesta económica</h2>

            <p className="text-sm text-slate-400 mb-4">Desarrollo del sistema (3 meses)</p>
            <div className="bg-white/5 rounded-lg p-5 space-y-3 border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Mes 1 — Arquitectura, UI/UX, módulo comercial</span>
                <span className="font-mono">$2.700.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Mes 2 — Logística, inventario, producción</span>
                <span className="font-mono">$2.700.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Mes 3 — Financiero, reportes, testing y deploy</span>
                <span className="font-mono">$2.700.000</span>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total desarrollo</span>
                  <span className="font-mono text-lg font-bold text-primary-light">$8.100.000 COP</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 mb-4 mt-6">Soporte mensual post-lanzamiento</p>
            <div className="bg-white/5 rounded-lg p-5 space-y-2 border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Soporte técnico mensual (30 horas incluidas)</span>
                <span className="font-mono text-sm">$490.000/mes</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Incluye: corrección de bugs, ajustes menores, monitoreo de servidores y atención a incidencias.
                Horas adicionales se cotizan por separado.
              </p>
            </div>

            <p className="text-sm text-slate-400 mb-4 mt-6">Infraestructura mensual (a cargo del cliente)</p>
            <div className="bg-white/5 rounded-lg p-5 space-y-2 border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Backend — Render Starter (512 MB RAM, 0.5 CPU)</span>
                <span className="font-mono text-sm">~$29.400/mes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Base de datos — Render PostgreSQL Starter</span>
                <span className="font-mono text-sm">~$29.400/mes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Almacenamiento de imágenes — Cloudflare R2</span>
                <span className="font-mono text-sm">~$0 - $6.300/mes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Frontend — Netlify (plan gratuito)</span>
                <span className="font-mono text-sm">$0/mes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">CDN/SSL — Cloudflare (plan gratuito)</span>
                <span className="font-mono text-sm">$0/mes</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                * Costos facturados directamente por los proveedores (~$59.000 - $65.000 COP/mes total)
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                * Cloudflare R2 incluye 10 GB/mes gratis. Las imágenes se almacenan por máximo 1 año,
                luego se respaldan y eliminan automáticamente.
              </p>
            </div>

            {/* Total */}
            <div className="mt-6 bg-primary/20 border border-primary/30 rounded-lg p-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-400">Inversión total en desarrollo</p>
                <p className="text-3xl sm:text-4xl font-bold mt-1">$8.100.000 <span className="text-lg font-normal text-slate-400">COP</span></p>
                <p className="text-sm text-slate-400 mt-2">$2.700.000 netos mensuales × 3 meses + ~$62.000/mes infra</p>
              </div>
              <Rocket className="w-14 h-14 text-primary/40 hidden sm:block" />
            </div>
          </div>
        </section>

        {/* Remuneración neta */}
        <section className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-400 mb-2">Importante: remuneración neta</h3>
              <p className="text-sm text-muted leading-relaxed">
                Los valores cotizados corresponden a <strong className="text-foreground">remuneración neta</strong> para el desarrollador.
                Cualquier retención, impuesto o descuento aplicable según la normativa tributaria colombiana
                deberá ser asumido adicionalmente por el cliente, de manera que el monto efectivamente recibido
                sea el valor total especificado en esta cotización.
              </p>
            </div>
          </div>
        </section>

        {/* Condiciones de pago */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Condiciones de pago</h2>
          <p className="text-muted text-sm mb-6">Pagos mensuales durante el desarrollo del proyecto:</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Mes 1", valor: "$2.700.000", desc: "Arquitectura y módulo comercial" },
              { label: "Mes 2", valor: "$2.700.000", desc: "Logística, inventario y producción" },
              { label: "Mes 3", valor: "$2.700.000", desc: "Financiero, reportes y deploy" },
            ].map((p) => (
              <div key={p.label} className="p-5 bg-surface-light rounded-lg border border-border text-center">
                <p className="text-xs text-muted">{p.label}</p>
                <p className="text-xl font-bold mt-2">{p.valor}</p>
                <p className="text-xs text-primary-light mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-surface-light rounded-lg border border-border">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Soporte mensual post-lanzamiento</p>
                <p className="text-xs text-muted mt-1">30 horas incluidas · Meses 4 y 5 gratuitos</p>
              </div>
              <p className="text-lg font-bold text-primary-light">$490.000/mes</p>
            </div>
            <p className="text-xs text-muted mt-2">
              Los primeros 2 meses de soporte tras finalizar el desarrollo son gratuitos como garantía de estabilización.
              A partir del mes 6 se aplica el cobro mensual.
            </p>
          </div>
        </section>

        {/* Garantías y soporte */}
        <section className="bg-surface rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Soporte post-lanzamiento</h2>
          <p className="text-muted text-sm mb-6">
            El plan de soporte mensual ($490.000 COP/mes) incluye 30 horas y cubre los siguientes tipos de asistencia.
            Los primeros 2 meses posteriores al desarrollo son gratuitos como período de estabilización.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-surface-light rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-green-400 text-sm">Soporte correctivo</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Corrección de bugs y errores</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Resolución de incidencias en producción</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Restauración ante caídas del servicio</li>
              </ul>
            </div>
            <div className="p-5 bg-surface-light rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-blue-400 text-sm">Soporte preventivo</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Monitoreo de servidores e infraestructura</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Actualizaciones de seguridad y dependencias</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Optimización de rendimiento</li>
              </ul>
            </div>
            <div className="p-5 bg-surface-light rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-purple-400 text-sm">Soporte adaptativo</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Ajustes menores de funcionalidad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Cambios en configuraciones y parámetros</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Adaptación a cambios del negocio</li>
              </ul>
            </div>
            <div className="p-5 bg-surface-light rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-amber-400 text-sm">No incluido en soporte</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Desarrollo de nuevos módulos o funcionalidades</li>
                <li>• Rediseño de interfaces existentes</li>
                <li>• Horas adicionales a las 30 incluidas</li>
              </ul>
              <p className="text-xs text-muted mt-3">Estos servicios se cotizan por separado</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-primary-light">Incluido en el desarrollo</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Capacitación al equipo (2 sesiones)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Documentación técnica completa</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Manual de usuario</li>
              </ul>
            </div>
          </div>

          {/* Cláusulas soporte */}
          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-3 p-4 bg-surface-light rounded-lg border border-border">
              <CalendarClock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold">Ajuste anual del valor de soporte</p>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  El valor del soporte mensual se ajustará anualmente en el mismo porcentaje de incremento
                  del salario mínimo legal vigente (SMLV) en Colombia, aplicable a partir de enero de cada año.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Shield className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-400">Período de estabilización gratuito</p>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Los primeros 2 meses de soporte técnico tras la entrega final del sistema (meses 4 y 5)
                  serán completamente gratuitos, como garantía de estabilización y acompañamiento inicial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA sutil */}
        <section className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">¿Listo para transformar la operación de tu negocio?</h3>
          <p className="text-muted text-sm mb-6 max-w-2xl mx-auto">
            Esta propuesta ha sido elaborada con base en mi experiencia desarrollando soluciones
            empresariales para múltiples clientes en diferentes industrias y países.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* <a
              href="mailto:hernandmf@gmail.com?subject=Aceptación%20Cotización%20SIGE%20-%20Atmosfera%20Decoraciones"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
            >
              <Mail size={16} />
              Aceptar propuesta
            </a> */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-primary/50 rounded-lg font-medium transition-colors"
            >
              Conocer más sobre mi trabajo
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Desarrollador</h4>
              <p>Hernán Mercado</p>
              <p>Full Stack Developer</p>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="text-primary-light hover:text-primary text-xs mt-2 inline-block">
                hernanmercado.com
              </a>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold text-foreground mb-2">Contacto</h4>
              <p>hernandmf@gmail.com</p>
              <p>Colombia</p>
              <p className="text-xs mt-2 text-muted/70">
                Cotización válida por 30 días calendario
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
