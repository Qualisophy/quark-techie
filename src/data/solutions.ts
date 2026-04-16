<<<<<<< HEAD
=======
import { Bot, Bug, Cpu, GraduationCap, Users } from "lucide-react";

>>>>>>> qtw-38-ampliar-catalogo-soluciones
// Define el esquema exacto de nuestra solución (Interfaces TypeScript)
export interface ProcessStep {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  short_description: string;
  pain_point: string;
  solution_description: string;
  deliverables: string[];
  process: ProcessStep[];
  starting_price: string;
<<<<<<< HEAD
=======
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  accent: string;
>>>>>>> qtw-38-ampliar-catalogo-soluciones
}

// Simulamos una base de datos o CMS headless
export const solutionsData: Solution[] = [
<<<<<<< HEAD
  {
    slug: "mvp-startup",
    title: "MVP Startup",
    short_description:
      "Del concepto a la realidad en 4 semanas. Arquitectura validada.",
    pain_point:
      "Las startups pierden meses y miles de dólares desarrollando funcionalidades que nadie necesita en stacks tecnológicos obsoletos.",
    solution_description:
      "Construimos tu Producto Mínimo Viable (MVP) usando Astro, React y Node. Un producto funcional, rápido y preparado para pivotar, diseñado específicamente para validar tu modelo de negocio y atraer a tus primeros inversores.",
    deliverables: [
      "Arquitectura de software escalable",
      "Desarrollo Frontend & Backend",
      "Sistema de autenticación y base de datos",
      "Despliegue en producción (Vercel/AWS)",
      "Código fuente 100% en propiedad",
    ],
    process: [
      {
        title: "Discovery",
        description: "Definición del core loop y features críticas.",
      },
      {
        title: "Diseño & Arquitectura",
        description: "Wireframes y elección del stack.",
      },
      {
        title: "Desarrollo Ágil",
        description: "Sprints semanales con entregas iterativas.",
      },
      {
        title: "Lanzamiento",
        description: "QA, testing en producción y hand-off.",
      },
    ],
    starting_price: "$2,500",
  },
  {
    slug: "transformacion-digital",
    title: "Transformación Digital",
    short_description: "Modernización de sistemas legacy para corporaciones.",
    pain_point:
      "Sistemas lentos, deuda técnica masiva y silos de datos que impiden a las corporaciones competir con startups ágiles.",
    solution_description:
      "Auditamos, refactorizamos y migramos tu infraestructura a la nube. Implementamos arquitecturas modernas (Serverless, Microservicios) que reducen costes operativos y aumentan la velocidad de despliegue de tu equipo.",
    deliverables: [
      "Auditoría profunda de deuda técnica",
      "Plan de migración Cloud / Serverless",
      "Refactorización a frameworks modernos",
      "Integración continua (CI/CD)",
      "Capacitación del equipo interno",
    ],
    process: [
      {
        title: "Auditoría Profunda",
        description: "Análisis del código y cuellos de botella.",
      },
      {
        title: "Plan de Acción",
        description: "Roadmap de migración sin tiempos de caída.",
      },
      {
        title: "Refactorización",
        description: "Migración progresiva a nueva arquitectura.",
      },
      {
        title: "Despliegue y Monitorización",
        description: "Puesta en marcha y observabilidad.",
      },
    ],
    starting_price: "Custom",
  },
  {
    slug: "e-commerce-headless",
    title: "E-Commerce Headless",
    short_description: "Ventas sin límites con Shopify y React en el frontend.",
    pain_point:
      "Las tiendas online tradicionales sufren tiempos de carga lentos que destruyen la tasa de conversión y limitan la personalización de la marca.",
    solution_description:
      "Desacoplamos el frontend de tu e-commerce usando una arquitectura Headless. Gestionas el inventario en Shopify, pero la experiencia de usuario se renderiza instantáneamente con React y Astro, logrando un SEO inmejorable.",
    deliverables: [
      "Frontend a medida en React/Astro",
      "Integración de API de Shopify/Swell",
      "Optimizaciones avanzadas de Web Vitals",
      "Sistema de diseño (UI Kit) personalizado",
      "Analítica avanzada e integraciones",
    ],
    process: [
      {
        title: "UX/UI E-Commerce",
        description: "Diseño enfocado en conversión (CRO).",
      },
      {
        title: "Integración Headless",
        description: "Conexión del motor de pagos e inventario.",
      },
      {
        title: "Optimización de Rendimiento",
        description: "Ajuste fino de tiempos de carga.",
      },
      { title: "Go-Live", description: "Transición de dominio y lanzamiento." },
    ],
    starting_price: "$4,000",
  },
];
=======
  
  {
    slug: "ia-operativa",
    title: "Inteligencia Artificial Operativa",
    short_description:
      "Implementamos modelos de IA para optimizar procesos y automatizar operaciones críticas con asistentes inteligentes 24/7.",
    pain_point:
      "Las empresas están perdiendo miles de euros en tareas manuales, atención al cliente ineficiente y toma de decisiones basada en intuición en lugar de datos. La IA se percibe como compleja, cara o difícil de integrar en sistemas existentes.",
    solution_description:
      "Diseñamos e implementamos soluciones de Inteligencia Artificial adaptadas a tu negocio: desde chatbots avanzados hasta automatización de procesos internos y análisis predictivo. Integramos la IA directamente en tu stack actual sin fricción, generando impacto desde el primer mes.",
    deliverables: [
      "Desarrollo de chatbots IA (web, WhatsApp, APIs)",
      "Automatización de procesos internos con IA",
      "Integración con sistemas existentes (CRM, ERP, APIs)",
      "Modelos de análisis predictivo y reporting inteligente",
      "Panel de control y monitorización de rendimiento",
    ],
    process: [
      {
        title: "Análisis de Oportunidades",
        description: "Identificamos procesos automatizables y quick wins con mayor ROI.",
      },
      {
        title: "Diseño de Solución",
        description: "Definimos arquitectura IA, flujos conversacionales y lógica de negocio.",
      },
      {
        title: "Desarrollo & Entrenamiento",
        description: "Entrenamos modelos y desarrollamos integraciones a medida.",
      },
      {
        title: "Despliegue & Optimización",
        description: "Lanzamiento progresivo con mejora continua basada en datos reales.",
      },
    ],
    starting_price: "Custom",
    icon: Bot,
    accent: "#A78BFA",
  },
  
  {
    slug: "qa-automatizado",
    title: "QA Automation & Testing",
    short_description:
      "Automatizamos tus tests para eliminar errores en producción y acelerar tus releases sin comprometer calidad.",
    pain_point:
      "Los errores en producción dañan la reputación, generan pérdidas económicas y consumen tiempo del equipo técnico. El testing manual no escala y ralentiza el desarrollo.",
    solution_description:
      "Implementamos un sistema de testing automatizado end-to-end adaptado a tu stack (Playwright, Cypress, etc.). Detectamos errores antes de que impacten a tus usuarios y reducimos drásticamente el tiempo de despliegue.",
    deliverables: [
      "Suite de tests automatizados (E2E, integración y unitarios)",
      "Configuración de CI/CD con testing automático",
      "Framework de testing escalable",
      "Reportes automáticos de errores y cobertura",
      "Documentación técnica y hand-off al equipo",
    ],
    process: [
      {
        title: "Auditoría QA",
        description: "Evaluamos tu estado actual de testing y detectamos riesgos.",
      },
      {
        title: "Diseño de Estrategia",
        description: "Definimos qué automatizar, herramientas y cobertura objetivo.",
      },
      {
        title: "Implementación",
        description: "Desarrollo de tests e integración en pipelines CI/CD.",
      },
      {
        title: "Optimización Continua",
        description: "Mantenimiento, mejora de cobertura y reducción de falsos positivos.",
      },
    ],
    starting_price: "$1500",
    icon: Bug,
    accent: "#EF4444",
  },
  
  {
    slug: "integraciones",
    title: "Desarrollo Avanzado & Integraciones",
    short_description:
      "Conectamos tus sistemas y desarrollamos software a medida para eliminar silos de datos y escalar tu negocio.",
    pain_point:
      "Herramientas desconectadas, procesos duplicados y datos inconsistentes generan ineficiencias, errores operativos y pérdida de oportunidades de negocio.",
    solution_description:
      "Diseñamos e implementamos integraciones robustas entre tus sistemas (ERP, CRM, APIs externas) y desarrollamos soluciones a medida que centralizan tu operativa. Todo pensado para escalar sin fricciones.",
    deliverables: [
      "Integración entre ERPs, CRMs y herramientas SaaS",
      "Desarrollo de APIs y microservicios",
      "Automatización de flujos de datos",
      "Software a medida orientado a negocio",
      "Arquitectura escalable y documentada",
    ],
    process: [
      {
        title: "Análisis de Sistemas",
        description: "Mapeamos herramientas actuales y puntos de fricción.",
      },
      {
        title: "Arquitectura Técnica",
        description: "Diseñamos una solución robusta y escalable.",
      },
      {
        title: "Desarrollo & Integración",
        description: "Construcción e integración de servicios y APIs.",
      },
      {
        title: "Testing & Despliegue",
        description: "Validación completa y puesta en producción segura.",
      },
    ],
    starting_price: "$4000",
    icon: Cpu,
    accent: "#F59E0B",
  },

  {
    slug: "saas",
    title: "Re-Tech: IA para Talento",
    short_description:
      "Plataforma SaaS con IA para formación adaptativa y gestión inteligente del talento técnico.",
    pain_point:
      "Las empresas invierten en formación sin medir resultados reales. Los equipos técnicos se estancan, la rotación aumenta y no existe una estrategia clara de crecimiento del talento.",
    solution_description:
      "Nuestra plataforma SaaS utiliza IA para crear rutas de aprendizaje personalizadas, medir el progreso en tiempo real y alinear el desarrollo del talento con los objetivos del negocio.",
    deliverables: [
      "Plataforma SaaS accesible desde web",
      "Sistema de aprendizaje adaptativo con IA",
      "Dashboards de rendimiento y progreso",
      "Evaluación automática de habilidades técnicas",
      "Integración con sistemas internos de RRHH",
    ],
    process: [
      {
        title: "Onboarding",
        description: "Configuración de la plataforma según estructura de la empresa.",
      },
      {
        title: "Modelado de Talento",
        description: "Definición de roles, skills y objetivos.",
      },
      {
        title: "Activación IA",
        description: "Generación de rutas personalizadas para cada usuario.",
      },
      {
        title: "Seguimiento & Optimización",
        description: "Análisis de datos y mejora continua del rendimiento.",
      },
    ],
    starting_price: "Solicitar Demo",
    icon: GraduationCap,
    accent: "#3B82F6",
  },

  {
    slug: "consultoria",
    title: "Consultoría IT & Talento Digital",
    short_description:
      "Tu partner tecnológico para escalar con seguridad: estrategia, arquitectura y talento especializado.",
    pain_point:
      "Decisiones tecnológicas mal planteadas, falta de visión estratégica y escasez de talento cualificado frenan el crecimiento y generan sobrecostes a largo plazo.",
    solution_description:
      "Actuamos como extensión de tu equipo. Analizamos tu situación actual, diseñamos un roadmap claro y ejecutamos con ingenieros especializados. Reducimos incertidumbre y aceleramos resultados.",
    deliverables: [
      "Auditoría completa de sistemas e infraestructura",
      "Roadmap tecnológico alineado a negocio",
      "Definición de arquitectura y buenas prácticas",
      "Asignación de talento IT especializado",
      "Acompañamiento estratégico continuo",
    ],
    process: [
      {
        title: "Diagnóstico",
        description: "Evaluación técnica y detección de cuellos de botella.",
      },
      {
        title: "Estrategia",
        description: "Diseño de roadmap y prioridades de ejecución.",
      },
      {
        title: "Ejecución",
        description: "Implementación con equipo técnico especializado.",
      },
      {
        title: "Escalado",
        description: "Optimización continua y crecimiento sostenible.",
      },
    ],
    starting_price: "Retainer / Proyecto",
    icon: Users,
    accent: "#10B981",
  },
  
];
>>>>>>> qtw-38-ampliar-catalogo-soluciones
