import React from "react";
import { Reveal } from "../shared/Reveal";
import { MessageSquareDashed, Users, Zap } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquareDashed,
      title: "1. Cuéntanos tu necesidad",
      description:
        "Analizamos tu stack tecnológico, cultura de empresa y el rol exacto que necesitas cubrir en tu equipo.",
    },
    {
      icon: Users,
      title: "2. Selección validada",
      description:
        "Filtramos nuestra base y te presentamos solo 2 o 3 perfiles que encajan al 100%. Cero pérdida de tiempo.",
    },
    {
      icon: Zap,
      title: "3. Onboarding ágil",
      description:
        "Cerramos los detalles y tu nuevo ingeniero comienza a picar código y aportar valor en menos de 48 horas.",
    },
  ];

  return (
    <section className="py-32 w-full relative z-10">
      <Reveal>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Integración inmediata.
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Un proceso sin fricciones diseñado para escalar tu equipo a la
            velocidad que exige el mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Línea conectora de fondo (sólo desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-white/10 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#288B88]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(40,139,136,0.15)]">
                  <Icon className="w-7 h-7 text-[#288B88]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};
