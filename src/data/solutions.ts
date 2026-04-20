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
      "Desarrollamos productos mínimos viables con una base técnica sólida en tiempo récord. No hacemos prototipos descartables; construimos la primera versión de tu software bajo estándares que permiten iterar y escalar sin reescrituras costosas.",
    pain_point:
      "Muchas startups lanzan rápido, pero sobre cimientos frágiles. El resultado es un producto difícil de mantener, con errores constantes y una escalabilidad bloqueada que obliga a empezar de cero justo cuando el negocio empieza a crecer.",
    solution_description:
      "Implementamos tu MVP en un ciclo optimizado de 4 semanas utilizando un stack moderno: Astro, React y Node. Nos enfocamos en las funcionalidades críticas para validar tu modelo de negocio, entregando un código limpio, documentado y preparado para evolucionar.",
    deliverables: ["Arquitectura modular: Estructura preparada para añadir nuevas funcionalidades sin comprometer la estabilidad.", "Desarrollo Fullstack optimizado: Código eficiente que garantiza tiempos de respuesta rápidos y una carga ligera.", "Seguridad y Gestión de Datos: Implementación de protocolos de autenticación y bases de datos siguiendo buenas prácticas.", "Infraestructura en la Nube: Configuración profesional para un despliegue continuo y fiable.", "Propiedad Total del Código: Entrega completa del repositorio. Tu software es un activo de tu empresa desde el primer día."],
    process: [
      {
        title: "Discovery",
        description: "Identificación de las core features necesarias para la validación.",
      },
      {
        title: "Arquitectura",
        description: "Selección de herramientas y diseño de la estructura de datos.",
      },
      {
        title: "Desarrollo Ágil",
        description: "Ciclos de construcción con visibilidad total del progreso.",
      },
      {
        title: "Handoff",
        description: "Testing final, despliegue y entrega de documentación técnica.",
      },
    ],
    starting_price: "$2,500",
  },
  {
    slug: "transformacion-digital",
    title: "Transformación Digital",
    short_description: "Ayudamos a empresas consolidadas a eliminar las barreras tecnológicas que frenan su crecimiento. Convertimos infraestructuras rígidas en sistemas ágiles y eficientes.",
    pain_point:
      "Sistemas lentos, silos de datos y una deuda técnica acumulada impiden a las corporaciones innovar. El mantenimiento de infraestructuras legacy supone un riesgo operativo constante.",
    solution_description:
      "Auditamos y migramos tu infraestructura a la nube usando estándares modernos (Serverless, Microservicios). Reducimos costes operativos y aumentamos la seguridad de los datos.",
    deliverables: [
      "Auditoría de Deuda Técnica: Análisis profundo de cuellos de botella y riesgos en el sistema actual.",
      "Plan de Migración Cloud/Serverless: Roadmap estratégico para una transición sin tiempos de inactividad.",
      "Refactorización a Frameworks Modernos: Evolución del código legacy hacia arquitecturas ágiles y mantenibles.",
      "Integración Continua (CI/CD): Implementación de pipelines automatizados para despliegues seguros y rápidos.",
      "Optimización de Seguridad y Datos: Blindaje de la infraestructura y cumplimiento de estándares modernos de cifrado.",
    ],
    process: [
      {
        title: "Auditoría de Sistemas",
        description: "Análisis exhaustivo del código legacy, infraestructura actual y detección de cuellos de botella técnicos.",
      },
      {
        title: "Estrategia de Migración",
        description: "Diseño de un roadmap detallado para la transición a la nube sin interrupciones en la operativa del negocio.",
      },
      {
        title: "Refactorización Ágil",
        description: "Migración progresiva de módulos críticos hacia arquitecturas modernas, escalables y seguras.",
      },
      {
        title: "Optimización y Cierre",
        description: "Implementación de CI/CD, monitorización avanzada y entrega de la nueva documentación técnica.",
      },
    ],
    starting_price: "Custom",
  },
  {
    slug: "e-commerce-headless",
    title: "E-Commerce Headless",
    short_description: "Desacoplamos el frontend de tu tienda para lograr una velocidad de carga instantánea y libertad total de diseño. Rendimiento impecable para maximizar tus ventas.",
    pain_point:
      "Las tiendas tradicionales sufren tiempos de carga lentos que destruyen la conversión. Las plantillas rígidas limitan la marca y el exceso de scripts penaliza el SEO.",
    solution_description:
      "Usamos arquitecturas Headless donde gestionas el inventario en Shopify y la experiencia de usuario se renderiza con React/Astro. Máximo SEO y navegación fluida.",
    deliverables: [
      "Frontend a medida en React/Astro: Interfaz única, ultrarrápida y optimizada para dispositivos móviles.",
      "Integración de API de Shopify/Swell: Conexión fluida con tu motor de e-commerce preferido sin sacrificar velocidad.",
      "Optimizaciones avanzadas de Web Vitals: Puntuaciones máximas en PageSpeed para dominar los resultados de búsqueda.",
      "Sistema de diseño (UI Kit) personalizado: Coherencia visual total y facilidad para iterar tu diseño en el futuro.",
      "Analítica avanzada e integraciones: Tracking de precisión para entender el comportamiento de tus clientes sin ralentizar la web.",
    ],
    process: [
      {
        title: "Estrategia UX/UI",
        description: "Diseño de interfaces de alto rendimiento enfocadas exclusivamente en la conversión (CRO) y el SEO.",
      },
      {
        title: "Integración Headless",
        description: "Configuración del motor de e-commerce y conexión de APIs para una gestión de inventario centralizada.",
      },
      {
        title: "Optimización Core",
        description: "Ajuste fino de tiempos de carga y renderizado para garantizar una navegación instantánea.",
      },
      {
        title: "Lanzamiento y SEO",
        description: "Migración de dominio, testing final de pasarelas de pago y despliegue en infraestructura escalable.",
      },
    ],
    starting_price: "$4,000",
  },
];
