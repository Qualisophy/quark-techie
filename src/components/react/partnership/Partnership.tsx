import React, { useState } from "react";
import { Button } from "../shared/ui/Button";
import { Card } from "../shared/ui/Card";
import { Stepper, type Step } from "../shared/ui/Stepper";
import { ArrowUpRight, ShieldCheck, FileLock, EyeOff, ChevronDown } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { CTA } from "../shared/ui/CTA";

export const Partnership = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // --- LÓGICA DE MOUSE TRACKING (SOPORTE PARA SEGURIDAD Y FAQS) ---
  const [positions, setPositions] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, key: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions(prev => ({
      ...prev,
      [key]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
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
        "Te presentamos una solución integral con presupuestos transparentes, tiempos de entrega garantizados y la garantía de una ejecución estética bajo estándares de Apple y Glassmorphism.",
    },
  ];

  return (
    <section className="min-h-screen pt-40 pb-8 px-6 relative flex flex-col justify-center max-w-6xl mx-auto">
      {/* Cabecera */}
      <Reveal>
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
            El motor de tu agencia.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Tú pones la creatividad y la estrategia. Nosotros aportamos la
            ingeniería compleja bajo la estética que a tus clientes les encanta.
          </p>
        </div>
      </Reveal>

      {/* Tarjetas de Modelos */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <Reveal delay={150}>
          <Card className="h-full">
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
          <Card className="h-full">
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

      {/* Sección Confianza y Seguridad */}
      <Reveal delay={430}>
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] text-gray-400 font-medium uppercase">
                SEGURIDAD Y ÉTICA
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Tu propiedad intelectual, blindada.
            </h2>
            <p className="text-gray-400 font-light">
              Trabajamos bajo un estricto código de confidencialidad
              para que delegues tus proyectos con total tranquilidad y seguridad
              jurídica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* NDA */}
            <div 
              onMouseMove={(e) => handleMouseMove(e, 'sec-0')}
              onMouseEnter={() => setHoveredKey('sec-0')}
              onMouseLeave={() => setHoveredKey(null)}
              className="rounded-[2rem] bg-white/[0.03] border border-white/8 backdrop-blur-xl p-8 text-center md:text-left hover:bg-white/[0.06] transition-colors duration-300 relative overflow-hidden isolate"
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredKey === 'sec-0' ? 1 : 0,
                  background: `radial-gradient(400px circle at ${positions['sec-0']?.x || 0}px ${positions['sec-0']?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <div className="relative z-10">
                <div className="mb-4 flex justify-center md:justify-start">
                  <ShieldCheck className="w-10 h-10 text-[#288B88]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">NDAs Blindados</h3>
                <p className="text-gray-400 font-light">
                  Firmamos acuerdos de confidencialidad antes de cualquier intercambio de información.
                  Tu estrategia y la de tus clientes están protegidas por contrato desde el primer minuto.
                </p>
              </div>
            </div>

            {/* Propiedad Intelectual */}
            <div 
              onMouseMove={(e) => handleMouseMove(e, 'sec-1')}
              onMouseEnter={() => setHoveredKey('sec-1')}
              onMouseLeave={() => setHoveredKey(null)}
              className="rounded-[2rem] bg-white/[0.03] border border-white/8 backdrop-blur-xl p-8 text-center md:text-left hover:bg-white/[0.06] transition-colors duration-300 relative overflow-hidden isolate"
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredKey === 'sec-1' ? 1 : 0,
                  background: `radial-gradient(400px circle at ${positions['sec-1']?.x || 0}px ${positions['sec-1']?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <div className="relative z-10">
                <div className="mb-4 flex justify-center md:justify-start">
                  <FileLock className="w-10 h-10 text-[#E8D33F]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">IP 100% de la Agencia</h3>
                <p className="text-gray-400 font-light">
                  El código, los activos y toda la propiedad intelectual generada pertenecen íntegramente
                  a tu agencia. Renunciamos a cualquier derecho sobre el desarrollo realizado.
                </p>
              </div>
            </div>

            {/* Invisibilidad Total */}
            <div 
              onMouseMove={(e) => handleMouseMove(e, 'sec-2')}
              onMouseEnter={() => setHoveredKey('sec-2')}
              onMouseLeave={() => setHoveredKey(null)}
              className="rounded-[2rem] bg-white/[0.03] border border-white/8 backdrop-blur-xl p-8 text-center md:text-left hover:bg-white/[0.06] transition-colors duration-300 relative overflow-hidden isolate"
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredKey === 'sec-2' ? 1 : 0,
                  background: `radial-gradient(400px circle at ${positions['sec-2']?.x || 0}px ${positions['sec-2']?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <div className="relative z-10">
                <div className="mb-4 flex justify-center md:justify-start">
                  <EyeOff className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Invisibilidad Total</h3>
                <p className="text-gray-400 font-light">
                  Somos tu brazo tecnológico invisible. Nunca contactaremos con tu cliente ni revelaremos
                  nuestra participación; operamos bajo tu marca y tus procesos de comunicación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      
      {/* Sección FAQ (CON EFECTO HOVER INDIVIDUAL) */}
      <Reveal delay={380}>
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] text-gray-400 font-medium uppercase">
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Despeja tus dudas sobre el modelo de Partnership.
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre cómo trabajamos codo con codo con tu agencia.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "¿Cómo gestionáis la comunicación con el cliente final?", a: "Operamos bajo un modelo estricto de marca blanca. Toda la comunicación técnica se canaliza a través de vuestro equipo o mediante cuentas de correo corporativas de vuestra agencia. Nunca contactamos directamente con vuestro cliente sin autorización expresa." },
              { q: "¿Qué ocurre con el mantenimiento tras el lanzamiento?", a: "Ofrecemos planes de soporte y mantenimiento preventivo/correctivo post-lanzamiento. Podemos gestionar las actualizaciones directamente o formar a vuestro equipo para que tome el relevo técnico." },
              { q: "¿Cómo manejáis los cambios de alcance durante el desarrollo?", a: "Trabajamos con metodologías ágiles. Los cambios se evalúan en cada sprint; si el alcance varía significativamente, ajustamos el roadmap y el presupuesto de forma transparente antes de proceder con el desarrollo." },
              { q: "¿Cuáles son vuestros tiempos medios de respuesta?", a: "Para incidencias críticas en proyectos activos, el tiempo de respuesta es inferior a 4 horas. Para consultas comerciales o de nuevos proyectos, garantizamos una respuesta en menos de 24 horas laborales." }
            ].map((faq, idx) => (
              <div 
                key={idx}
                onMouseMove={(e) => handleMouseMove(e, `faq-${idx}`)}
                onMouseEnter={() => setHoveredKey(`faq-${idx}`)}
                onMouseLeave={() => setHoveredKey(null)}
                className="rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl overflow-hidden relative isolate"
              >
                {/* LINTERNA INDIVIDUAL FAQ */}
                <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                  style={{
                    opacity: hoveredKey === `faq-${idx}` ? 1 : 0,
                    background: `radial-gradient(400px circle at ${positions[`faq-${idx}`]?.x || 0}px ${positions[`faq-${idx}`]?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                  }}
                />
                
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left relative z-10"
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 text-white ${openFAQ === idx ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out relative z-10 ${
                    openFAQ === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-400 font-light text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Sección del Roadmap Dinámico */}
      <Reveal delay={400}>
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Nuestro flujo de colaboración
            </h2>
            <p className="text-gray-400 font-light">
              Un proceso de ingeniería riguroso para asegurar la excelencia en cada entrega.
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
    </section>
  );
};