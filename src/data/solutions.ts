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
}

// Simulamos una base de datos o CMS headless
export const solutionsData: Solution[] = [
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
