# REQUIREMENTS.md
## Sistema Integral de Gestión Empresarial (SIGE)

---

# 1. OBJETIVO DEL PROYECTO

Desarrollar un software web integral que optimice, automatice y conecte todos los procesos operativos, comerciales, logísticos, productivos y financieros de la empresa, basándose en:

- Documento 1: PROCESOS ATMD
- Documento 2: FLUJOGRAMA PLATAFORMA PROTOTIPO
- Estructura de costos unitarios por proceso

El sistema debe eliminar reprocesos manuales, centralizar la información, automatizar decisiones condicionales y permitir trazabilidad completa de cada servicio desde la valoración hasta el recaudo o pago.

---

# 2. STACK TECNOLÓGICO

## Frontend
- Next.js (App Router)
- TypeScript
- TailwindCSS
- React Hook Form
- Zustand o Redux Toolkit

## Backend
- Node.js
- Express o NestJS
- TypeScript
- PostgreSQL
- Prisma ORM

## Infraestructura
- Backend: Render
- Frontend: Netlify
- CDN / Seguridad / DNS: Cloudflare
- Base de datos: Render PostgreSQL

---

# 3. ARQUITECTURA GENERAL DEL SISTEMA

El sistema estará dividido en 4 grandes módulos:

1. MÓDULO COMERCIAL (VENTA & CRM)
2. MÓDULO OPERACIÓN (LOGÍSTICA, COMPRAS, ALMACÉN)
3. MÓDULO PRODUCCIÓN (ODP, ejecución, instalación, lavado)
4. MÓDULO FINANCIERO (FACTURACIÓN, CARTERA, PAGOS)

Todos los módulos deben estar interconectados mediante estados automáticos de proceso.

---

# 4. REQUERIMIENTOS FUNCIONALES

---

# 4.1 MÓDULO COMERCIAL (VENTA & CRM)

## 4.1.1 Proceso de Valoración / Asesoría

El sistema debe permitir:

- Registro de cliente:
  - Nombre completo
  - Número de cédula
  - Dirección
  - Celular
  - Correo electrónico
  - Fecha cumpleaños

- Registro de valoración
- Cálculo de costo unitario (Hora)
- Generación de cotización

## 4.1.2 Cotización

- Generar cotización editable
- Control de versiones
- Estado:
  - Pendiente
  - Aprobada
  - Rechazada

## 4.1.3 Decisión: ¿Cliente aprobó cotización?

Si:
- Sí → Generar ODS
- No → Cerrar proceso

---

# 4.2 MÓDULO LOGÍSTICA & OPERACIÓN

## 4.2.1 Generación de ODS (Orden de Servicio)

Entradas:
- Cotización aprobada

Proceso:
- Programación
- Asignación técnico
- Verificación de insumos

Estados:
- Programada
- En ejecución
- Finalizada
- Pendiente insumos

---

## 4.2.2 Verificación de Inventario

Decisión automática:
¿Hay existencias?

- Sí → Generar orden de salida
- No → Ir a proceso de compras

---

# 4.3 MÓDULO COMPRAS - ALMACÉN

## 4.3.1 Proceso de Compras

- Solicitud de insumos
- Cotización proveedores
- Selección proveedor
- Registro de compra
- Actualización inventario

## 4.3.2 Control de Inventario

- Entradas
- Salidas
- Kardex
- Costos unitarios
- Alertas de stock mínimo

---

# 4.4 MÓDULO PRODUCCIÓN

Incluye:

- Proceso de producción
- Producto terminado
- Instalación / mantenimiento / reparación
- Lavado

Flujo:

ODS →
Verificar insumos →
Ejecución →
Control calidad →
¿Cumple calidad?

- Sí → Producto listo despacho
- No → Reproceso hasta cumplir

Debe permitir:
- Firma de recibido técnico
- Programar despacho
- Registro tiempos ejecución (horas)

---

# 4.5 MÓDULO FINANCIERO

---

## 4.5.1 Facturación

Entrada:
- Orden de servicio ejecutada a satisfacción

Proceso:
1. Elaborar prefactura
2. Validar datos
   - ¿Datos correctos?
      - No → volver a prefactura
      - Sí → generar factura
3. Registro en cuentas por cobrar
4. Actualizar listado cartera

---

## 4.5.2 Gestión de Cartera

- Clasificación por:
  - 30 días
  - 60 días
  - 90 días

- Programación de cobros
- Verificación transferencias
- Generar recibo de caja
- Actualizar flujo de caja

---

## 4.5.3 Recuperación Cartera Morosa

Flujo:

Listado cartera →
Programación llamadas →
¿Cliente define modo y tiempo pago?

- No → volver a contacto
- Sí →
   - Efectivo → Programar recogida
   - Transferencia → Verificar banco

Luego:
- Registrar ingreso
- Generar recibo caja
- Registro contable

---

## 4.5.4 Proceso de Pagos

Entrada:
- Factura proveedor

Proceso:

1. Revisar requisitos mínimos
   - ¿Factura correcta?
      - No → devolver factura
      - Sí → causación

2. Ingresar a sistema contable
3. Programar pagos (5-15-30)
4. Registrar en flujo de caja
5. Realizar pago
6. Archivar

---

# 5. COSTOS UNITARIOS POR PROCESO

El sistema debe permitir configurar costos unitarios por:

- Valoración
- Cotización
- Pedido portal
- ODS
- ODP
- Almacenista
- Servicio ejecutado
- Orden de salida
- Compras
- Actualización inventario

Debe permitir:
- Cálculo automático de rentabilidad por servicio
- Reporte de margen bruto por orden

---

# 6. REQUERIMIENTOS NO FUNCIONALES

- Autenticación JWT
- Roles:
  - Comercial
  - Logística
  - Producción
  - Almacén
  - Cartera
  - Tesorería
  - Compras
  - Administrador

- Bitácora de cambios
- Historial por orden
- Auditoría financiera
- Seguridad HTTPS
- Backup automático diario

---

# 7. BASE DE DATOS (ENTIDADES PRINCIPALES)

- Users
- Roles
- Clientes
- Cotizaciones
- ODS
- ODP
- Inventario
- MovimientosInventario
- Compras
- FacturasVenta
- FacturasCompra
- Cartera
- Pagos
- FlujoCaja
- CostosUnitarios
- HistorialEstados

---

# 8. ESTIMACIÓN DE DESARROLLO

## Suposición salario Junior Full Stack LATAM:
USD $1,500 / mes

---

## Fases estimadas

| Fase | Duración |
|------|----------|
| Arquitectura & DB | 3 semanas |
| Módulo Comercial | 4 semanas |
| Logística & Inventario | 5 semanas |
| Producción | 4 semanas |
| Financiero | 5 semanas |
| Reportes & costos | 3 semanas |
| Testing & Deploy | 3 semanas |

Duración total estimada:  
**6 a 7 meses**

---

## Costo desarrollo

6 meses × $1,500 =  
USD $9,000

+ 1 mes adicional contingencia  
Total estimado proyecto:  
USD $10,500

---

# 9. COSTOS DE INFRAESTRUCTURA

## Backend - Render

- Plan recomendado: Standard
- $25 USD / mes
- PostgreSQL: $20 USD / mes

Total backend: $45 / mes

---

## Frontend - Netlify

- Plan Free inicialmente
- Escalable a Pro: $19 / mes

---

## Cloudflare

- Plan Free
- SSL + CDN

---

## Costo mensual estimado inicial:

$45 USD (backend + DB)

Escalado futuro:
$64 USD / mes (con Netlify Pro)

---

# 10. TIEMPO TOTAL PARA MVP

4 meses (versión mínima funcional con módulos básicos)

---

# 11. VISIÓN FUTURA

- Integración con World Office (API o exportación)
- App móvil técnicos
- Dashboard BI
- Automatización de cobranza por WhatsApp
- Firma digital
- Integración bancaria

---

# 12. RESULTADO ESPERADO

Un ERP interno modular que:

- Automatice decisiones condicionales
- Elimine reprocesos manuales
- Permita trazabilidad total
- Controle inventario en tiempo real
- Controle cartera y flujo de caja
- Calcule rentabilidad por orden

---

FIN DEL DOCUMENTO
