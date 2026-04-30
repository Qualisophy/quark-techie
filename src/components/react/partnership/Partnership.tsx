import React, { useState } from "react";
import { Card } from "../shared/ui/Card";
import { Stepper, type Step } from "../shared/ui/Stepper";
import { ShieldCheck, FileLock, EyeOff, ChevronDown } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { CollaborationScenarios } from "./CollaborationScenarios";

export const Partnership = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // --- LÓGICA DE MOUSE TRACKING (SOPORTE PARA FAQS) ---
  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    key: string,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions((prev) => ({
      ...prev,
      [key]: { x: e.clientX - rect.left, y: e.clientY - rect.top },
    }));
  };

  const roadmapSteps: Step[] = [
    {
      label: "Contacto Inicial",
      description:
        "Inicia el proceso compartiendo la visión de tu proyecto. Nuestro equipo técnico analizará tu solicitud para asignar a los arquitectos de software más adecuados según tu stack tecnológico.",
    },
    {
      label: "Discovery Call",
      description:
        "Agendamos una sesión estratégica para alinear expectativas, definir el alcance del producto y entender los desafíos técnicos específicos que tu agencia necesita resolver.",
    },
    {
      label: "Análisis Arquitectónico",
      description:
        "Nuestros ingenieros diseñan una estructura escalable, segura y eficiente. Creamos una hoja de ruta técnica detallada que garantiza que el código sea de nivel Silicon Valley.",
    },
    {
      label: "Propuesta Tecnológica",
      description:
        "Te presentamos una solución integral con presupuestos transparentes, tiempos de entrega garantizados y la garantía de una ejecución estética bajo estándares modernos de la industria.",
    },
  ];

  return (
    <section className="min-h-screen pt-40 pb-8 px-6 relative flex flex-col justify-center max-w-6xl mx-auto">
      {/* 1. CABECERA Y HERO (Enganche + SEO) */}
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-white">
            El motor de tu agencia.
          </h1>
          <h2 className="text-xl md:text-2xl text-[#288B88] font-medium tracking-tight mb-8">
            Desarrollo de software y tecnología marca blanca para agencias
            creativas y de marketing.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Tú pones la creatividad y la estrategia. Nosotros aportamos la
            ingeniería compleja bajo la estética que a tus clientes les encanta.
          </p>
        </div>
      </Reveal>

      {/* 2. LOS DOLORES PRIMERO (Storytelling lógico) */}
      <CollaborationScenarios />

      {/* 3. LA SOLUCIÓN (Modelos de colaboración destacados con bordes) */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <Reveal delay={150}>
          <Card className="h-full border border-[#288B88]/40 hover:border-[#288B88] transition-colors duration-300 bg-gradient-to-b from-[#288B88]/5 to-transparent">
            <h3 className="text-3xl font-semibold mb-4 text-[#288B88]">
              White-label.
            </h3>
            <p className="text-gray-400 font-light text-lg">
              Actuamos como tu equipo técnico in-house. Firmamos NDAs y
              entregamos un código tan limpio que creerán que tienes ingenieros
              de Silicon Valley en nómina.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={300}>
          <Card className="h-full border border-[#E8D33F]/40 hover:border-[#E8D33F] transition-colors duration-300 bg-gradient-to-b from-[#E8D33F]/5 to-transparent">
            <h3 className="text-3xl font-semibold mb-4 text-[#E8D33F]">
              Revenue Share.
            </h3>
            <p className="text-gray-400 font-light text-lg">
              ¿Nos recomiendas a tus clientes? Entramos en un modelo de
              partnership puro. Gana un porcentaje recurrente por elevar el
              estándar técnico de tus proyectos.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* 4. CONFIANZA Y GARANTÍAS (Sin cajas, flotando libres) */}
      <Reveal delay={100}>
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] text-[#288B88] font-semibold uppercase">
                SEGURIDAD Y ÉTICA
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Tu propiedad intelectual, blindada.
            </h2>
            <p className="text-gray-400 font-light">
              Trabajamos bajo un estricto código de confidencialidad para que
              delegues tus proyectos con total tranquilidad y seguridad
              jurídica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-6">
            {/* NDA */}
            <div className="p-6 text-center">
              <div className="mb-6 flex justify-center">
                <ShieldCheck
                  className="w-12 h-12 text-[#288B88]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                NDAs Blindados
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Firmamos acuerdos de confidencialidad antes de cualquier
                intercambio de información. Tu estrategia y la de tus clientes
                están protegidas desde el primer minuto.
              </p>
            </div>

            {/* Propiedad Intelectual */}
            <div className="p-6 text-center">
              <div className="mb-6 flex justify-center">
                <FileLock
                  className="w-12 h-12 text-[#E8D33F]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                IP 100% de la Agencia
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                El código, los activos y toda la propiedad intelectual generada
                pertenecen íntegramente a tu agencia. Renunciamos a cualquier
                derecho sobre el desarrollo.
              </p>
            </div>

            {/* Invisibilidad Total */}
            <div className="p-6 text-center">
              <div className="mb-6 flex justify-center">
                <EyeOff className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Invisibilidad Total
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Somos tu brazo tecnológico invisible. Nunca contactaremos con tu
                cliente ni revelaremos nuestra participación; operamos 100% bajo
                tu marca.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 5. FLUJO DE COLABORACIÓN (Tu Stepper original intacto) */}
      <Reveal delay={150}>
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Nuestro flujo de colaboración
            </h2>
            <p className="text-gray-400 font-light">
              Un proceso de ingeniería riguroso para asegurar la excelencia en
              cada entrega.
            </p>
          </div>

          <Stepper
            steps={roadmapSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            className="mb-12"
          />
        </div>
      </Reveal>

      {/* 6. FAQS (Cierre de dudas) */}
      <Reveal delay={200}>
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] text-[#288B88] font-semibold uppercase">
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Despeja tus dudas sobre el modelo de Partnership.
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre cómo trabajamos codo con codo
              con tu agencia.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                q: "¿Cómo gestionáis la comunicación con el cliente final?",
                a: "Operamos bajo un modelo estricto de marca blanca. Toda la comunicación técnica se canaliza a través de vuestro equipo o mediante cuentas de correo corporativas de vuestra agencia. Nunca contactamos directamente con vuestro cliente sin autorización expresa.",
              },
              {
                q: "¿Qué ocurre con el mantenimiento tras el lanzamiento?",
                a: "Ofrecemos planes de soporte y mantenimiento preventivo/correctivo post-lanzamiento. Podemos gestionar las actualizaciones directamente o formar a vuestro equipo para que tome el relevo técnico.",
              },
              {
                q: "¿Cómo manejáis los cambios de alcance durante el desarrollo?",
                a: "Trabajamos con metodologías ágiles. Los cambios se evalúan en cada sprint; si el alcance varía significativamente, ajustamos el roadmap y el presupuesto de forma transparente antes de proceder con el desarrollo.",
              },
              {
                q: "¿Cuáles son vuestros tiempos medios de respuesta?",
                a: "Para incidencias críticas en proyectos activos, el tiempo de respuesta es inferior a 4 horas. Para consultas comerciales o de nuevos proyectos, garantizamos una respuesta en menos de 24 horas laborales.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                onMouseMove={(e) => handleMouseMove(e, `faq-${idx}`)}
                onMouseEnter={() => setHoveredKey(`faq-${idx}`)}
                onMouseLeave={() => setHoveredKey(null)}
                className="rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl overflow-hidden relative isolate hover:bg-white/[0.05] transition-colors"
              >
                <div
                  className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                  style={{
                    opacity: hoveredKey === `faq-${idx}` ? 1 : 0,
                    background: `radial-gradient(400px circle at ${positions[`faq-${idx}`]?.x || 0}px ${positions[`faq-${idx}`]?.y || 0}px, rgba(255,255,255,0.04), transparent 40%)`,
                  }}
                />

                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left relative z-10"
                >
                  <span className="text-white font-medium text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 text-white shrink-0 ml-4 ${openFAQ === idx ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out relative z-10 ${
                    openFAQ === idx
                      ? "max-h-60 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-400 font-light text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
