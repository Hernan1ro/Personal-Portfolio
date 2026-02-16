"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a2e",
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#4f46e5",
  },
  headerLeft: {},
  headerTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
  },
  headerSubtitle: {
    fontSize: 10,
    color: "#64748b",
    marginTop: 4,
  },
  headerRight: {
    textAlign: "right",
  },
  headerMeta: {
    fontSize: 9,
    color: "#64748b",
    marginTop: 2,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    marginBottom: 6,
  },
  modulesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },
  moduleCard: {
    width: "48%",
    padding: 10,
    backgroundColor: "#f8fafc",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  moduleTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 3,
  },
  moduleDesc: {
    fontSize: 8,
    color: "#64748b",
    lineHeight: 1.4,
  },
  disciplinesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
    marginBottom: 10,
  },
  disciplineTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#eef2ff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#c7d2fe",
  },
  disciplineText: {
    fontSize: 8,
    color: "#4338ca",
    fontFamily: "Helvetica-Bold",
  },
  cronogramaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  cronogramaRowAlt: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#f8fafc",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  cronogramaFase: {
    fontSize: 9,
    color: "#334155",
  },
  cronogramaDuracion: {
    fontSize: 9,
    color: "#4f46e5",
    fontFamily: "Helvetica-Bold",
  },
  totalBox: {
    backgroundColor: "#1a1a2e",
    borderRadius: 8,
    padding: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 10,
    color: "#94a3b8",
  },
  totalValue: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginTop: 2,
  },
  totalSub: {
    fontSize: 8,
    color: "#94a3b8",
    marginTop: 4,
  },
  economicRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  economicLabel: {
    fontSize: 9,
    color: "#334155",
  },
  economicValue: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginVertical: 6,
    marginHorizontal: 10,
  },
  netPaymentBox: {
    backgroundColor: "#fffbeb",
    borderRadius: 6,
    padding: 12,
    // marginTop: 5,
    borderWidth: 1,
    borderColor: "#fde68a",
  },
  netPaymentTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#92400e",
    marginBottom: 4,
  },
  netPaymentText: {
    fontSize: 8,
    color: "#78350f",
    lineHeight: 1.5,
  },
  paymentGrid: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },
  paymentCard: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8fafc",
    borderRadius: 6,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  paymentCardLabel: {
    fontSize: 8,
    color: "#64748b",
  },
  paymentCardValue: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginTop: 3,
  },
  paymentCardPercent: {
    fontSize: 8,
    color: "#4f46e5",
    marginTop: 2,
  },
  garantiaRow: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 4,
  },
  garantiaCheck: {
    fontSize: 9,
    color: "#16a34a",
  },
  garantiaText: {
    fontSize: 9,
    color: "#334155",
  },
  techGrid: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  techColumn: {
    flex: 1,
  },
  techTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 6,
  },
  techItem: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 3,
  },
  footer: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerCol: {},
  footerTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  footerText: {
    fontSize: 8,
    color: "#64748b",
    marginBottom: 2,
  },
  footerLink: {
    fontSize: 8,
    color: "#4f46e5",
    marginTop: 4,
  },
  infraRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  infraLabel: {
    fontSize: 9,
    color: "#334155",
  },
  infraValue: {
    fontSize: 9,
    color: "#1a1a2e",
  },
  infraNote: {
    fontSize: 7,
    color: "#94a3b8",
    marginTop: 6,
    paddingHorizontal: 10,
  },
});

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

export default function CotizacionPDF() {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerTitle}>Propuesta técnica y económica</Text>
            <Text style={styles.headerSubtitle}>
              Sistema integral de gestión empresarial (SIGE)
            </Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerMeta}>N°: ATMD-2026-001</Text>
            <Text style={styles.headerMeta}>Fecha: {fecha}</Text>
            <Text style={styles.headerMeta}>Vigencia: 30 días</Text>
          </View>
        </View>

        {/* Cliente */}
        <View style={styles.section}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontSize: 9, color: "#64748b", marginBottom: 2 }}>
                Preparado para
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>
                Atmósfera Decoraciones
              </Text>
              <Text style={{ fontSize: 8, color: "#64748b", marginTop: 2 }}>
                Empresa de decoración, mantenimiento y servicios
              </Text>
            </View>
            <View style={{ textAlign: "right" }}>
              <Text style={{ fontSize: 9, color: "#64748b", marginBottom: 2 }}>
                Elaborado por
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>
                Hernán Mercado
              </Text>
              <Text style={{ fontSize: 9, color: "#64748b" }}>
                Full Stack Developer
              </Text>
            </View>
          </View>
        </View>

        {/* Resumen */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumen ejecutivo</Text>
          <Text style={styles.paragraph}>
            Propuesta para el desarrollo de un Sistema Integral de Gestión Empresarial (SIGE) que
            optimizará, automatizará y conectará todos los procesos operativos, comerciales,
            logísticos, productivos y financieros de Atmósfera Decoraciones.
          </Text>
          <Text style={styles.paragraph}>
            El sistema eliminará reprocesos manuales, centralizará la información y permitirá
            trazabilidad completa desde la valoración hasta el recaudo, incrementando la eficiencia
            operativa y rentabilidad del negocio.
          </Text>
        </View>

        {/* Disciplinas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disciplinas involucradas</Text>
          <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
            Este proyecto abarca múltiples áreas de especialización, cada una esencial para
            entregar una solución robusta y profesional:
          </Text>
          <View style={styles.disciplinesGrid}>
            {[
              "Diseño UI/UX",
              "Desarrollo frontend",
              "Desarrollo backend",
              "Base de datos",
              "DevOps e infraestructura",
              "QA y testing",
            ].map((d) => (
              <View key={d} style={styles.disciplineTag}>
                <Text style={styles.disciplineText}>{d}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Alcance */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alcance del proyecto</Text>
          <View style={styles.modulesGrid}>
            <View style={styles.moduleCard}>
              <Text style={styles.moduleTitle}>Módulo comercial</Text>
              <Text style={styles.moduleDesc}>
                CRM, valoraciones, cotizaciones y gestión integral de clientes
              </Text>
            </View>
            <View style={styles.moduleCard}>
              <Text style={styles.moduleTitle}>Módulo operación</Text>
              <Text style={styles.moduleDesc}>
                Logística, compras, almacén e inventario en tiempo real
              </Text>
            </View>
            <View style={styles.moduleCard}>
              <Text style={styles.moduleTitle}>Módulo producción</Text>
              <Text style={styles.moduleDesc}>
                ODP, ejecución, instalación y control de calidad
              </Text>
            </View>
            <View style={styles.moduleCard}>
              <Text style={styles.moduleTitle}>Módulo financiero</Text>
              <Text style={styles.moduleDesc}>
                Facturación, cartera, pagos y flujo de caja
              </Text>
            </View>
          </View>
        </View>

        {/* Tecnologías */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stack tecnológico</Text>
          <View style={styles.techGrid}>
            <View style={styles.techColumn}>
              <Text style={styles.techTitle}>Frontend</Text>
              <Text style={styles.techItem}>• Next.js (App Router)</Text>
              <Text style={styles.techItem}>• TypeScript</Text>
              <Text style={styles.techItem}>• TailwindCSS</Text>
              <Text style={styles.techItem}>• React Hook Form</Text>
            </View>
            <View style={styles.techColumn}>
              <Text style={styles.techTitle}>Backend</Text>
              <Text style={styles.techItem}>• Node.js + NestJS</Text>
              <Text style={styles.techItem}>• TypeScript</Text>
              <Text style={styles.techItem}>• PostgreSQL</Text>
              <Text style={styles.techItem}>• Prisma ORM</Text>
            </View>
            <View style={styles.techColumn}>
              <Text style={styles.techTitle}>Infraestructura</Text>
              <Text style={styles.techItem}>• Render (Backend + DB)</Text>
              <Text style={styles.techItem}>• Netlify (Frontend)</Text>
              <Text style={styles.techItem}>• Cloudflare (CDN/SSL/R2)</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="LETTER" style={styles.page}>
        {/* Cronograma */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cronograma de desarrollo</Text>
          <Text style={{ fontSize: 8, color: "#64748b", marginBottom: 10 }}>
            Desarrollo intensivo de 3 meses con entregas incrementales
          </Text>
          <View style={{ flexDirection: "row", gap: 8, marginBottom: 10 }}>
            {cronograma.map((item, i) => (
              <View key={i} style={{ flex: 1, padding: 10, backgroundColor: "#f8fafc", borderRadius: 6, borderWidth: 1, borderColor: "#e2e8f0" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: "#eef2ff", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#4f46e5" }}>{i + 1}</Text>
                  </View>
                  <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: "#4f46e5", textTransform: "uppercase" }}>{item.mes}</Text>
                </View>
                <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#1a1a2e", marginBottom: 4 }}>{item.titulo}</Text>
                {item.tareas.map((t) => (
                  <Text key={t} style={{ fontSize: 7, color: "#64748b", marginBottom: 2 }}>✓ {t}</Text>
                ))}
              </View>
            ))}
          </View>
          <View style={{ padding: 8, backgroundColor: "#eef2ff", borderRadius: 4, borderWidth: 1, borderColor: "#c7d2fe", marginBottom: 6 }}>
            <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: "#3730a3" }}>Duración total: 3 meses</Text>
            <Text style={{ fontSize: 7, color: "#4338ca", marginTop: 2 }}>Al finalizar cada mes se entrega un avance funcional para revisión del cliente.</Text>
          </View>
          <View style={{ padding: 8, backgroundColor: "#f0fdf4", borderRadius: 4, borderWidth: 1, borderColor: "#bbf7d0" }}>
            <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: "#166534" }}>Garantía de cumplimiento</Text>
            <Text style={{ fontSize: 7, color: "#15803d", marginTop: 2 }}>Si el desarrollo se extiende más de 3 meses por responsabilidad del desarrollador, el cuarto mes será gratuito.</Text>
          </View>
        </View>

        {/* Propuesta económica */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Propuesta económica</Text>

          <Text
            style={{
              fontSize: 9,
              color: "#64748b",
              marginBottom: 8,
            }}
          >
            Desarrollo del sistema (3 meses)
          </Text>

          <View style={styles.economicRow}>
            <Text style={styles.economicLabel}>
              Mes 1 — Arquitectura, UI/UX, módulo comercial
            </Text>
            <Text style={styles.economicValue}>$2.700.000</Text>
          </View>
          <View style={styles.economicRow}>
            <Text style={styles.economicLabel}>
              Mes 2 — Logística, inventario, producción
            </Text>
            <Text style={styles.economicValue}>$2.700.000</Text>
          </View>
          <View style={styles.economicRow}>
            <Text style={styles.economicLabel}>
              Mes 3 — Financiero, reportes, testing y deploy
            </Text>
            <Text style={styles.economicValue}>$2.700.000</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.economicRow}>
            <Text style={{ ...styles.economicLabel, fontFamily: "Helvetica-Bold" }}>
              Total desarrollo
            </Text>
            <Text style={{ ...styles.economicValue, fontSize: 11 }}>
              $8.100.000 COP
            </Text>
          </View>

          <Text
            style={{
              fontSize: 9,
              color: "#64748b",
              marginBottom: 8,
              marginTop: 15,
            }}
          >
            Soporte mensual post-lanzamiento
          </Text>

          <View style={styles.economicRow}>
            <Text style={styles.economicLabel}>Soporte técnico mensual (30 horas incluidas)</Text>
            <Text style={styles.economicValue}>$490.000/mes</Text>
          </View>
          <Text style={{ fontSize: 7, color: "#94a3b8", marginTop: 4, paddingHorizontal: 10, lineHeight: 1.4 }}>
            Incluye: corrección de bugs, ajustes menores, monitoreo de servidores y atención a incidencias.
            Horas adicionales se cotizan por separado.
          </Text>

          <Text
            style={{
              fontSize: 9,
              color: "#64748b",
              marginBottom: 8,
              marginTop: 15,
            }}
          >
            Infraestructura mensual (a cargo del cliente)
          </Text>

          <View style={styles.infraRow}>
            <Text style={styles.infraLabel}>Backend — Render Starter (512 MB RAM, 0.5 CPU)</Text>
            <Text style={styles.infraValue}>~$29.400/mes</Text>
          </View>
          <View style={styles.infraRow}>
            <Text style={styles.infraLabel}>Base de datos — Render PostgreSQL Starter</Text>
            <Text style={styles.infraValue}>~$29.400/mes</Text>
          </View>
          <View style={styles.infraRow}>
            <Text style={styles.infraLabel}>Almacenamiento de imágenes — Cloudflare R2</Text>
            <Text style={styles.infraValue}>~$0 - $6.300/mes</Text>
          </View>
          <View style={styles.infraRow}>
            <Text style={styles.infraLabel}>Frontend — Netlify (plan gratuito)</Text>
            <Text style={styles.infraValue}>$0/mes</Text>
          </View>
          <View style={styles.infraRow}>
            <Text style={styles.infraLabel}>CDN/SSL — Cloudflare (plan gratuito)</Text>
            <Text style={styles.infraValue}>$0/mes</Text>
          </View>
          <Text style={styles.infraNote}>
            * Costos facturados directamente por los proveedores (~$59.000 - $65.000 COP/mes total)
          </Text>
          <Text style={{ fontSize: 7, color: "#94a3b8", paddingHorizontal: 10, marginTop: 2 }}>
            * Cloudflare R2: 10 GB/mes gratis. Imágenes almacenadas máx. 1 año, luego se respaldan y eliminan.
          </Text>

          {/* Total */}
          {/* <View style={styles.totalBox}>
            <View>
              <Text style={styles.totalLabel}>Inversión total en desarrollo</Text>
              <Text style={styles.totalValue}>$8.100.000 COP</Text>
              <Text style={styles.totalSub}>$2.700.000 netos mensuales × 3 meses + ~$62.000/mes infra</Text>
            </View>
          </View> */}
        </View>

        {/* Remuneración neta */}
        <View style={styles.netPaymentBox}>
          <Text style={styles.netPaymentTitle}>
            Importante: remuneración neta
          </Text>
          <Text style={styles.netPaymentText}>
            Los valores cotizados corresponden a remuneración neta para el desarrollador. Cualquier
            retención, impuesto o descuento aplicable según la normativa tributaria colombiana deberá
            ser asumido adicionalmente por el cliente, de manera que el monto efectivamente recibido
            sea el valor total especificado en esta cotización.
          </Text>
        </View>

        {/* Condiciones de pago */}
        <View style={{ ...styles.section, marginTop: 15 }}>
          <Text style={styles.sectionTitle}>Condiciones de pago</Text>
          <Text style={{ ...styles.paragraph, marginBottom: 10 }}>
            Pagos mensuales durante el desarrollo del proyecto:
          </Text>
          <View style={styles.paymentGrid}>
            <View style={styles.paymentCard}>
              <Text style={styles.paymentCardLabel}>Mes 1</Text>
              <Text style={styles.paymentCardValue}>$2.700.000</Text>
              <Text style={styles.paymentCardPercent}>Arquitectura y módulo comercial</Text>
            </View>
            <View style={styles.paymentCard}>
              <Text style={styles.paymentCardLabel}>Mes 2</Text>
              <Text style={styles.paymentCardValue}>$2.700.000</Text>
              <Text style={styles.paymentCardPercent}>Logística, inventario y producción</Text>
            </View>
            <View style={styles.paymentCard}>
              <Text style={styles.paymentCardLabel}>Mes 3</Text>
              <Text style={styles.paymentCardValue}>$2.700.000</Text>
              <Text style={styles.paymentCardPercent}>Financiero, reportes y deploy</Text>
            </View>
          </View>
          <View style={{ marginTop: 8, padding: 8, backgroundColor: "#f8fafc", borderRadius: 4, borderWidth: 1, borderColor: "#e2e8f0" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>Soporte mensual post-lanzamiento</Text>
                <Text style={{ fontSize: 7, color: "#64748b", marginTop: 2 }}>30 horas incluidas · Meses 4 y 5 gratuitos</Text>
              </View>
              <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: "#4f46e5" }}>$490.000/mes</Text>
            </View>
            <Text style={{ fontSize: 7, color: "#64748b", marginTop: 4 }}>
              Los primeros 2 meses de soporte tras finalizar el desarrollo son gratuitos como garantía de estabilización.
              A partir del mes 6 se aplica el cobro mensual.
            </Text>
          </View>
        </View>

        {/* Soporte post-lanzamiento */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soporte post-lanzamiento</Text>
          <Text style={{ fontSize: 8, color: "#64748b", marginBottom: 8 }}>
            El plan de soporte mensual ($490.000 COP/mes) incluye 30 horas y cubre los siguientes tipos de asistencia.
            Los primeros 2 meses posteriores al desarrollo son gratuitos como período de estabilización.
          </Text>
          <View style={{ flexDirection: "row", gap: 8, marginBottom: 10 }}>
            <View style={{ flex: 1, padding: 8, backgroundColor: "#f0fdf4", borderRadius: 4, borderWidth: 1, borderColor: "#bbf7d0" }}>
              <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#166534", marginBottom: 4 }}>Correctivo</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Corrección de bugs y errores</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Resolución de incidencias en producción</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Restauración ante caídas del servicio</Text>
            </View>
            <View style={{ flex: 1, padding: 8, backgroundColor: "#eff6ff", borderRadius: 4, borderWidth: 1, borderColor: "#bfdbfe" }}>
              <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#1e40af", marginBottom: 4 }}>Preventivo</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Monitoreo de servidores e infraestructura</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Actualizaciones de seguridad y dependencias</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Optimización de rendimiento</Text>
            </View>
            <View style={{ flex: 1, padding: 8, backgroundColor: "#faf5ff", borderRadius: 4, borderWidth: 1, borderColor: "#e9d5ff" }}>
              <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#6b21a8", marginBottom: 4 }}>Adaptativo</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Ajustes menores de funcionalidad</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Cambios en configuraciones y parámetros</Text>
              <Text style={{ fontSize: 7, color: "#334155" }}>✓ Adaptación a cambios del negocio</Text>
            </View>
          </View>
          <View style={{ padding: 8, backgroundColor: "#fffbeb", borderRadius: 4, borderWidth: 1, borderColor: "#fde68a", marginBottom: 10 }}>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#92400e", marginBottom: 4 }}>No incluido en soporte</Text>
            <Text style={{ fontSize: 7, color: "#78350f" }}>• Desarrollo de nuevos módulos o funcionalidades</Text>
            <Text style={{ fontSize: 7, color: "#78350f" }}>• Rediseño de interfaces existentes</Text>
            <Text style={{ fontSize: 7, color: "#78350f" }}>• Horas adicionales a las 30 incluidas</Text>
            <Text style={{ fontSize: 6, color: "#92400e", marginTop: 3 }}>Estos servicios se cotizan por separado</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ ...styles.techTitle, marginBottom: 6 }}>Incluido en el desarrollo</Text>
            {[
              "Capacitación al equipo (2 sesiones)",
              "Documentación técnica completa",
              "Manual de usuario",
            ].map((item) => (
              <View key={item} style={styles.garantiaRow}>
                <Text style={styles.garantiaCheck}>✓</Text>
                <Text style={styles.garantiaText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Cláusulas */}
          <View style={{ marginTop: 10, padding: 8, backgroundColor: "#f8fafc", borderRadius: 4, borderWidth: 1, borderColor: "#e2e8f0" }}>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#1a1a2e", marginBottom: 3 }}>Ajuste anual del valor de soporte</Text>
            <Text style={{ fontSize: 7, color: "#64748b", lineHeight: 1.4 }}>
              El valor del soporte mensual se ajustará anualmente en el mismo porcentaje de incremento del salario mínimo
              legal vigente (SMLV) en Colombia, aplicable a partir de enero de cada año.
            </Text>
          </View>
          <View style={{ marginTop: 6, padding: 8, backgroundColor: "#f0fdf4", borderRadius: 4, borderWidth: 1, borderColor: "#bbf7d0" }}>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#166534", marginBottom: 3 }}>Período de estabilización gratuito</Text>
            <Text style={{ fontSize: 7, color: "#15803d", lineHeight: 1.4 }}>
              Los primeros 2 meses de soporte técnico tras la entrega final del sistema (meses 4 y 5) serán
              completamente gratuitos, como garantía de estabilización y acompañamiento inicial.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <Text style={styles.footerTitle}>Desarrollador</Text>
            <Text style={styles.footerText}>Hernán Mercado</Text>
            <Text style={styles.footerText}>Full Stack Developer</Text>
            <Text style={styles.footerLink}>hernanmercado.com</Text>
          </View>
          <View style={{ ...styles.footerCol, textAlign: "right" }}>
            <Text style={styles.footerTitle}>Contacto</Text>
            <Text style={styles.footerText}>hernandmf@gmail.com</Text>
            <Text style={styles.footerText}>Colombia</Text>
            <Text style={{ ...styles.footerText, marginTop: 6, fontSize: 7 }}>
              Cotización válida por 30 días calendario
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
