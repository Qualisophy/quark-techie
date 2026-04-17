import { Bot, Bug, Cpu, GraduationCap, Users, Sparkles } from "lucide-react";

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
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  accent: string;
}

// Simulamos una base de datos o CMS headless
export const solutionsData: Solution[] = [
  
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

  {
    slug: "a-medida",
    title: "Crea tu Solución a Medida",
    short_description:
      "Ingeniería sin límites. Diseñamos soluciones tecnológicas a medida para resolver retos únicos que no encajan en productos estándar.",
    pain_point:
      "No todas las empresas encajan en soluciones estándar. Cuando los procesos son únicos o complejos, las herramientas existentes se quedan cortas, obligando a hacer 'parches' que generan ineficiencias, dependencia técnica y falta de escalabilidad.",
    solution_description:
      "Construimos soluciones 100% a medida desde cero o evolucionando tus sistemas actuales. Desde plataformas internas hasta productos digitales complejos, adaptamos tecnología, arquitectura e IA a tus necesidades reales de negocio, sin limitaciones de herramientas predefinidas.",
    deliverables: [
      "Desarrollo de software totalmente personalizado",
      "Plataformas internas o productos digitales a medida",
      "Integraciones específicas y lógica de negocio avanzada",
      "Arquitectura técnica adaptada a escalabilidad futura",
      "Documentación completa y hand-off técnico",
    ],
    process: [
      {
        title: "Discovery Profundo",
        description: "Entendemos tu negocio, procesos y objetivos para definir una solución realista y efectiva.",
      },
      {
        title: "Definición Funcional & Técnica",
        description: "Traducimos necesidades en especificaciones claras, arquitectura y roadmap.",
      },
      {
        title: "Desarrollo Iterativo",
        description: "Construcción por fases con validaciones constantes para asegurar encaje con negocio.",
      },
      {
        title: "Entrega & Evolución",
        description: "Despliegue, documentación y acompañamiento para escalar la solución.",
      },
    ],
    starting_price: "Custom",
    icon: Sparkles,
    accent: "#E5E7EB",
  }
  
];
