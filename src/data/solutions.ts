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
  meta_title: string;
  meta_description: string;
  icon_name: string;
  accent_color: string;
  category: string;
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
    starting_price: "2,500€",
    meta_title:
      "Desarrollo de MVP para Startups | Arquitectura Validada | Quark Techie",
    meta_description:
      "Lanzamos tu Producto Mínimo Viable en 4 semanas. Desarrollo ágil con Astro, React y Node preparado para escalar y captar inversión.",
    icon_name: "Code2",
    accent_color: "#288B88",
    category: "Desarrollo & Web",
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
    starting_price: "Subvencionable 100%", // Optimizado para Kit Digital
    meta_title:
      "Transformación Digital y Migración Cloud para Empresas | Quark Techie",
    meta_description:
      "Modernizamos tus sistemas legacy. Auditoría, refactorización y migración a arquitecturas Cloud y Serverless para reducir costes y ganar agilidad.",
    icon_name: "Globe2",
    accent_color: "#E8D33F",
    category: "Consultoría & Estrategia",
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
    starting_price: "4,000€",
    meta_title:
      "Desarrollo E-Commerce Headless con Shopify y React | Quark Techie",
    meta_description:
      "Aumenta tus ventas y mejora tu SEO con una tienda online ultrarrápida. Arquitectura Headless conectando Shopify con frontend a medida.",
    icon_name: "Layers",
    accent_color: "#FFFFFF",
    category: "Desarrollo & Web",
  },
  {
    slug: "validacion-app-store",
    title: "Auditoría y Publicación App Store",
    short_description: "Superamos los estrictos guidelines de Apple y Google.",
    pain_point:
      "Meses de desarrollo e inversión pueden quedarse bloqueados por un rechazo inesperado. Las normativas de Apple y Google cambian constantemente, son implacables con el rendimiento, la seguridad de datos y los estándares de interfaz (Human Interface Guidelines).",
    solution_description:
      "Realizamos una auditoría técnica y funcional exhaustiva antes del submit. Identificamos vulnerabilidades, crashes ocultos y problemas de UI/UX, refactorizando el código necesario para asegurar un pase verde en los procesos de revisión de las tiendas.",
    deliverables: [
      "Auditoría profunda de código, memoria y seguridad",
      "Revisión estricta de UI/UX contra Guidelines oficiales",
      "Optimización de permisos y normativas de privacidad (GDPR/ATT)",
      "Gestión integral del proceso de Review y apelaciones",
    ],
    process: [
      {
        title: "Diagnóstico Inicial",
        description:
          "Análisis de la app frente a las políticas actuales de las stores.",
      },
      {
        title: "Testing Técnico",
        description:
          "QA en dispositivos reales buscando cuellos de botella y crashes.",
      },
      {
        title: "Refactorización & Compliance",
        description: "Ajustes de código y diseño para cumplir los requisitos.",
      },
      {
        title: "Submit & Aprobación",
        description:
          "Subida a producción y gestión de la comunicación con los revisores.",
      },
    ],
    starting_price: "1,500€",
    meta_title:
      "Validador de Apps iOS y Android | Evita Rechazos en App Store | Quark Techie",
    meta_description:
      "Auditamos la calidad de tu aplicación móvil y aseguramos el cumplimiento de los guidelines de Apple App Store y Google Play. Publicación garantizada.",
    icon_name: "Smartphone",
    accent_color: "#3b82f6",
    category: "Auditoría & QA",
  },
  {
    slug: "certificacion-smart-tv",
    title: "Certificación Apps Smart TV",
    short_description:
      "Adaptamos y validamos tu app para Tizen, webOS y Android TV.",
    pain_point:
      "La fragmentación de sistemas operativos en televisores exige un rendimiento impecable. Las Smart TVs, especialmente de gamas bajas, tienen severas limitaciones de memoria. Las marcas exigen controles de calidad (QA) extremos que los desarrolladores móviles tradicionales suelen desconocer.",
    solution_description:
      "Adaptación arquitectónica y testing riguroso en hardware real (laboratorio de TVs). Optimizamos el consumo de recursos, gestionamos la navegación adaptada a mando a distancia (D-Pad) y nos encargamos de todo el proceso de certificación con los fabricantes.",
    deliverables: [
      "Testing exhaustivo en laboratorio físico multipantalla",
      "Optimización drástica de memoria y memory leaks",
      "Adaptación de UX/UI para navegación D-Pad (control remoto)",
      "Acompañamiento en el proceso de QA con LG, Samsung o Google",
    ],
    process: [
      {
        title: "Auditoría de Arquitectura",
        description: "Evaluación del motor (ej. React Native / Web) para TV.",
      },
      {
        title: "QA Hardware Real",
        description: "Pruebas de estrés en modelos de TV antiguos y recientes.",
      },
      {
        title: "Ajustes de Rendimiento",
        description: "Refactorización enfocada en fluidez a 60fps.",
      },
      {
        title: "Certificación y Release",
        description: "Trámites y despliegue final en las stores de TV.",
      },
    ],
    starting_price: "2,000€",
    meta_title:
      "Certificación de Apps para Smart TV (Tizen, webOS, Android) | Quark Techie",
    meta_description:
      "Desarrollo, adaptación y auditoría de aplicaciones para Smart TV. Pasamos los controles de calidad de Samsung, LG y Google para publicar tu app en televisores.",
    icon_name: "Tv",
    accent_color: "#8b5cf6",
    category: "Auditoría & QA",
  },
  {
    slug: "agentes-digitalizadores",
    title: "Agente Digitalizador",
    short_description:
      "Soluciones tecnológicas llave en mano subvencionables para pymes.",
    pain_point:
      "Las pymes y corporaciones tradicionales necesitan modernizarse para competir, pero la barrera de entrada técnica es alta. Implementar un simple e-commerce o un sistema de gestión puede derivar en arquitecturas lentas y proyectos que nunca terminan por falta de guía experta.",
    solution_description:
      "Aportamos ingeniería de Silicon Valley al tejido empresarial local. Como Agentes Digitalizadores, no solo instalamos software; desarrollamos plataformas a medida (E-commerce, automatización de procesos, analítica) y te acompañamos en su adopción para asegurar un ROI inmediato.",
    deliverables: [
      "Desarrollo de E-Commerce Headless de alto rendimiento",
      "Sistemas de automatización y analítica de datos",
      "Diseño y despliegue de plataformas corporativas optimizadas",
      "Asesoramiento técnico continuo y soporte evolutivo",
    ],
    process: [
      {
        title: "Discovery Call",
        description:
          "Analizamos las ineficiencias y necesidades de tu negocio.",
      },
      {
        title: "Propuesta Tecnológica",
        description: "Seleccionamos las herramientas y arquitectura adecuadas.",
      },
      {
        title: "Desarrollo Ágil",
        description: "Implementación rápida de soluciones enfocadas a negocio.",
      },
      {
        title: "Formación y Despliegue",
        description:
          "Capacitamos a tu equipo para dominar las nuevas herramientas.",
      },
    ],
    starting_price: "Bono Kit Digital", // Optimizado para SEO
    meta_title:
      "Agente Digitalizador Oficial | Soluciones Kit Digital para Pymes | Quark Techie",
    meta_description:
      "Transforma tu pyme con nuestro equipo de ingenieros. Como Agentes Digitalizadores, implementamos e-commerce, automatización y presencia web de alto nivel.",
    icon_name: "Building",
    accent_color: "#10b981",
    category: "Consultoría & Estrategia",
  },
  {
    slug: "ia-automatizacion-flujos",
    title: "IA & Automatización de Flujos",
    short_description:
      "Modelos de IA y Chatbots avanzados para automatizar tu operativa 24/7.",
    pain_point:
      "Tareas manuales repetitivas, cuellos de botella en operaciones y una atención al cliente saturada que consumen tiempo y recursos valiosos, limitando la escalabilidad del negocio.",
    solution_description:
      "Integramos soluciones de Inteligencia Artificial adaptadas a tu negocio. Desde chatbots NLP avanzados para atención al cliente hasta flujos de trabajo automatizados (RPA) que conectan tus herramientas internas y multiplican la productividad de tu equipo.",
    deliverables: [
      "Desarrollo de Agentes de IA y Chatbots NLP",
      "Automatización de procesos robóticos (RPA)",
      "Integración de IA con ERPs y CRMs",
      "Dashboards de monitorización operativa",
    ],
    process: [
      {
        title: "Discovery de IA",
        description: "Identificación de procesos clave a automatizar.",
      },
      {
        title: "Diseño y Entrenamiento",
        description: "Configuración de modelos de IA y flujos lógicos.",
      },
      {
        title: "Integración de Sistemas",
        description: "Conexión de la IA con tus bases de datos y APIs.",
      },
      {
        title: "Despliegue Continuo",
        description: "Pruebas en entorno real y ajuste de precisión.",
      },
    ],
    starting_price: "Custom",
    meta_title:
      "Inteligencia Artificial Operativa y Automatización | Quark Techie",
    meta_description:
      "Optimiza tus procesos con Inteligencia Artificial. Desarrollamos chatbots avanzados y automatizamos flujos de trabajo para escalar tu operativa 24/7.",
    icon_name: "Bot",
    accent_color: "#F472B6",
    category: "IA & Datos",
  },
  {
    slug: "qa-automation-testing",
    title: "QA Automation & Testing",
    short_description:
      "Automatizamos tus pruebas de software para reducir errores en producción.",
    pain_point:
      "Bugs constantes en producción, regresiones tras cada actualización y un proceso de pruebas manuales lento que retrasa y encarece el lanzamiento de nuevas features.",
    solution_description:
      "Blindamos la estabilidad de tus sistemas construyendo pipelines de pruebas automatizadas (E2E, Integración, Unitarias) con herramientas líderes de la industria. Aseguramos que cada línea de código que sube a producción es robusta y estable.",
    deliverables: [
      "Framework de automatización a medida",
      "Testing End-to-End (E2E) y de APIs",
      "Integración en pipelines CI/CD",
      "Reportes de cobertura y rendimiento en tiempo real",
    ],
    process: [
      {
        title: "Auditoría de QA",
        description: "Análisis del estado actual y cobertura de pruebas.",
      },
      {
        title: "Diseño de Casos",
        description: "Definición de flujos críticos de negocio a blindar.",
      },
      {
        title: "Desarrollo de Scripts",
        description: "Programación de las pruebas automatizadas.",
      },
      {
        title: "Integración Continua",
        description: "Despliegue del testing automatizado en tu CI/CD.",
      },
    ],
    starting_price: "1,500€",
    meta_title:
      "Quality Assurance (QA) Automatizado y Testing de Software | Quark Techie",
    meta_description:
      "Acelera tus despliegues sin bugs. Servicios de QA Automation, testing de APIs y pruebas E2E integradas en tu pipeline de integración continua.",
    icon_name: "ShieldCheck",
    accent_color: "#14b8a6",
    category: "Auditoría & QA",
  },
  {
    slug: "desarrollo-avanzado-integraciones",
    title: "Desarrollo Avanzado & Integraciones",
    short_description:
      "Conectamos tus herramientas y construimos software a medida.",
    pain_point:
      "Sistemas aislados y desconectados que obligan a realizar doble entrada de datos, provocando errores humanos y falta de visibilidad técnica global del negocio.",
    solution_description:
      "Desarrollamos middleware, APIs REST/GraphQL y software customizado para conectar todo tu ecosistema digital. Eliminamos los silos de datos logrando que tu CRM, ERP y plataformas de terceros hablen el mismo idioma en tiempo real.",
    deliverables: [
      "Desarrollo de APIs REST/GraphQL a medida",
      "Middleware y Webhooks personalizados",
      "Integración segura de sistemas Legacy",
      "Arquitectura orientada a eventos y microservicios",
    ],
    process: [
      {
        title: "Mapeo de Sistemas",
        description: "Análisis de las herramientas y flujos de datos actuales.",
      },
      {
        title: "Diseño de Arquitectura",
        description: "Definición técnica del middleware y protocolos.",
      },
      {
        title: "Desarrollo de APIs",
        description: "Creación de los conectores y lógica de negocio.",
      },
      {
        title: "QA y Puesta en Marcha",
        description: "Testing de integración y despliegue seguro.",
      },
    ],
    starting_price: "4,000€",
    meta_title:
      "Ingeniería de Software a Medida e Integración de APIs | Quark Techie",
    meta_description:
      "Conectamos tus ERPs, CRMs y sistemas legacy. Desarrollo avanzado de APIs y middleware para automatizar y sincronizar tu ecosistema digital.",
    icon_name: "Network",
    accent_color: "#f59e0b",
    category: "Desarrollo & Web",
  },
  {
    slug: "re-tech-ia-talento",
    title: "Re-Tech: IA para Talento",
    short_description:
      "Nuestra plataforma SaaS impulsada por IA para la capacitación adaptativa.",
    pain_point:
      "Dificultad para mantener al equipo técnico actualizado con las últimas tecnologías y medir de forma objetiva sus habilidades y progreso dentro de la empresa.",
    solution_description:
      "Re-Tech es nuestra plataforma SaaS propietaria diseñada para la gestión inteligente del talento. Utiliza IA para evaluar el nivel de tus ingenieros y crear rutas de aprendizaje dinámicas (upskilling), elevando el nivel técnico global de tu equipo.",
    deliverables: [
      "Acceso corporativo a la plataforma SaaS Re-Tech",
      "Rutas de aprendizaje adaptativas generadas por IA",
      "Dashboards de analítica de talento y progreso",
      "Integración con tu LMS o herramientas internas",
    ],
    process: [
      {
        title: "Onboarding Corporativo",
        description: "Configuración de la plataforma para tu empresa.",
      },
      {
        title: "Evaluación Inicial",
        description: "Diagnóstico IA del nivel técnico actual del equipo.",
      },
      {
        title: "Rutas Adaptativas",
        description: "Generación de programas de upskilling personalizados.",
      },
      {
        title: "Seguimiento y Analítica",
        description: "Monitorización del progreso y ROI de la formación.",
      },
    ],
    starting_price: "Solicitar Demo",
    meta_title:
      "Re-Tech: Plataforma SaaS de IA para Gestión de Talento Tech | Quark Techie",
    meta_description:
      "Eleva el nivel de tu equipo técnico. Plataforma SaaS con Inteligencia Artificial para la evaluación y capacitación (upskilling) de ingenieros de software.",
    icon_name: "Sparkles",
    accent_color: "#c084fc",
    category: "IA & Datos",
  },
  {
    slug: "consultoria-it-talento-digital",
    title: "Consultoría IT & Talento Digital",
    short_description:
      "Diagnosticamos tu infraestructura y proveemos ingenieros especializados.",
    pain_point:
      "Falta de liderazgo técnico estratégico (CTO as a Service) y dificultad constante para reclutar y retener talento IT especializado en momentos críticos del proyecto.",
    solution_description:
      "Actuamos como tu partner tecnológico a largo plazo. Diagnosticamos tu arquitectura, diseñamos el roadmap de transformación y proveemos Staff Augmentation con nuestros mejores ingenieros para ejecutar y acelerar tu delivery.",
    deliverables: [
      "Servicio de CTO as a Service / Liderazgo Técnico",
      "Staff Augmentation (Ingenieros Senior)",
      "Auditoría profunda de Arquitectura (Due Diligence)",
      "Mentoring y estructuración para equipos internos",
    ],
    process: [
      {
        title: "Análisis de Necesidades",
        description: "Evaluación de tus retos técnicos y gaps de talento.",
      },
      {
        title: "Roadmap Estratégico",
        description: "Diseño del plan de acción y perfiles requeridos.",
      },
      {
        title: "Match de Talento",
        description:
          "Integración de nuestros ingenieros en tu equipo (Staff Augmentation).",
      },
      {
        title: "Delivery Continuo",
        description:
          "Acompañamiento, ejecución y revisión de código constante.",
      },
    ],
    starting_price: "Retainer / Proyecto",
    meta_title:
      "Consultoría Estratégica IT y Staff Augmentation | Quark Techie",
    meta_description:
      "Acelera tus proyectos con nuestro talento digital. Ofrecemos CTO as a Service, auditoría de arquitectura y provisión de ingenieros altamente especializados.",
    icon_name: "Users",
    accent_color: "#0ea5e9",
    category: "Consultoría & Estrategia",
  },
];
