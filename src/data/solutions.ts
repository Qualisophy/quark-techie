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
  gallery?: SolutionImage[];
}

export interface SolutionImage {
  src: string;
  alt: string;
  caption?: string;
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
    slug: "auditoria-publicacion-stores",
    title: "Auditoría y Publicación en Stores",
    short_description:
      "Llevamos tu app móvil al éxito en Google Play y App Store.",
    pain_point:
      "Meses de desarrollo pueden quedarse estancados por un rechazo en las tiendas de aplicaciones. Las estrictas políticas de Apple y Google, los problemas de rendimiento ocultos y los fallos de UI/UX pueden hacer fracasar tu lanzamiento.",
    solution_description:
      "Auditamos tu aplicación móvil de forma exhaustiva para asegurar que cumple con todos los requisitos técnicos y de diseño de las tiendas. Solucionamos problemas de rendimiento, vulnerabilidades de seguridad y optimizamos la experiencia de usuario. Además, nos encargamos de todo el proceso burocrático de publicación y gestión de apelaciones.",
    deliverables: [
      "Auditoría completa de código, rendimiento y seguridad",
      "Revisión estricta de UI/UX contra Guidelines de Apple y Google",
      "Resolución de crashes, memory leaks y problemas técnicos",
      "Gestión total del proceso de publicación y comunicación con las stores",
      "Acompañamiento en el cumplimiento normativo (GDPR/ATT)",
    ],
    process: [
      {
        title: "Auditoría Profunda",
        description:
          "Análisis exhaustivo del código, UI/UX y cumplimiento normativo.",
      },
      {
        title: "Refactorización Estratégica",
        description:
          "Resolución de problemas técnicos y ajustes de diseño para cumplir con los guidelines.",
      },
      {
        title: "Testing Riguroso",
        description:
          "Pruebas exhaustivas en dispositivos reales para garantizar un rendimiento óptimo.",
      },
      {
        title: "Publicación Exitosa",
        description:
          "Gestión completa del proceso de submission, revisión y publicación final.",
      },
    ],
    starting_price: "1,500€",
    meta_title:
      "Auditoría y Publicación App Store y Google Play | Evita Rechazos | Quark Techie",
    meta_description:
      "Aseguramos la publicación de tu aplicación móvil en la App Store y Google Play. Auditamos el código, mejoramos el rendimiento y superamos las revisiones más estrictas.",
    icon_name: "Smartphone",
    accent_color: "#3b82f6",
    category: "Auditoría & QA",
  },
  {
    slug: "e-commerce-headless",
    title: "E-Commerce de Alto Rendimiento",
    short_description:
      "Tu tienda online lista para vender en tiempo récord. Sin fricciones técnicas.",
    pain_point:
      "Los emprendedores y pymes suelen perder meses en desarrollos interminables y complicaciones técnicas que frenan su crecimiento y agotan su presupuesto antes de vender la primera unidad.",
    solution_description:
      "Presentamos una solución 'llave en mano' diseñada para vender sin límites desde el primer día. Una plataforma e-commerce totalmente funcional, automatizada y escalable, que combina un diseño visual impactante con una infraestructura técnica robusta que opera en piloto automático.",
    deliverables: [
      "Plataforma e-commerce 'llave en mano' totalmente funcional",
      "Navegación Premium y diseño visualmente impactante",
      "Filtros avanzados de catálogo y búsqueda optimizada",
      "Login social (Google) en un solo clic",
      "Integración nativa con Stripe para pagos 100% seguros",
      "Panel administrativo con dashboard de métricas en tiempo real",
      "Automatización de emails (pedidos, estados y usuarios)",
    ],
    process: [
      {
        title: "Estrategia y Carga",
        description:
          "Definimos tu catálogo y configuramos la estructura de venta.",
      },
      {
        title: "Integración de Pagos",
        description:
          "Conexión nativa con Stripe para empezar a facturar de inmediato.",
      },
      {
        title: "Automatización",
        description:
          "Configuración del panel administrativo y flujos de email marketing.",
      },
      {
        title: "Lanzamiento Récord",
        description:
          "Tu negocio online operativo y rindiendo al máximo en pocas semanas.",
      },
    ],
    starting_price: "2,000€",
    meta_title:
      "E-Commerce Listo para Vender | Lanza tu Tienda en Tiempo Récord | Quark Techie",
    meta_description:
      "Olvídate de complicaciones técnicas. Lanzamos tu e-commerce profesional, automatizado y con pagos Stripe por solo 2.000€. ¡Empieza a vender ya!",
    icon_name: "Layers",
    accent_color: "#FFFFFF",
    category: "Desarrollo & Web",
    // Mantenemos tu galería de imágenes que ya funciona
    gallery: [
      {
        src: "/images/ecommerce/01.png",
        alt: "Catálogo de productos con filtrado avanzado",
        caption:
          "Navegación fluida y filtros dinámicos para que tus clientes encuentren exactamente lo que buscan en milisegundos.",
      },
      {
        src: "/images/ecommerce/02.png",
        alt: "Ficha de producto con gestión de variantes y cross-selling",
        caption:
          "Fichas diseñadas para convertir: selector visual de tallas/colores, listas de deseos y recomendaciones cruzadas inteligentes.",
      },
      {
        src: "/images/ecommerce/03.png",
        alt: "Proceso de checkout y cesta de la compra optimizada",
        caption:
          "Checkout sin fricciones en una sola pantalla: gestión de envíos, desglose de impuestos y transición impecable hacia el pago seguro.",
      },
      {
        src: "/images/ecommerce/04.png",
        alt: "Panel de cliente con historial y estado de pedidos",
        caption:
          "Área de cliente autogestionable. Aporta total transparencia y permite cancelar pedidos no enviados, reduciendo la carga de soporte.",
      },
      {
        src: "/images/ecommerce/05.png",
        alt: "Dashboard de métricas financieras y operativas",
        caption:
          "El centro de mandos de tu negocio: monitoriza ingresos reales, margen de beneficios y volumen de nuevos usuarios de un solo vistazo.",
      },
      {
        src: "/images/ecommerce/06.png",
        alt: "Panel de control de inventario y creación de catálogo",
        caption:
          "Gestión de inventario intuitiva. Crea, edita y administra tu oferta de productos sin necesidad de conocimientos técnicos.",
      },
      {
        src: "/images/ecommerce/07.png",
        alt: "Sistema de administración y logística de pedidos",
        caption:
          "Logística bajo control. Supervisa todas las transacciones, actualiza estados de envío y gestiona la facturación desde un entorno centralizado.",
      },
      {
        src: "/images/ecommerce/08.png",
        alt: "Base de datos y gestión de clientes (CRM)",
        caption:
          "CRM integrado para el control total de tu base de datos: revisa detalles de usuarios, audita cuentas y mantén la seguridad de tu plataforma.",
      },
    ],
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
