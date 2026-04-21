import React from "react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/ui/Button";
import { Breadcrumb } from "../shared/ui/Breadcrumb";
import { CTA } from "../shared/ui/CTA";
import { CheckCircle2, TerminalSquare } from "lucide-react";
import type { Solution } from "../../../data/solutions";

interface SolutionDetailProps {
  solution: Solution;
}

export const SolutionDetail: React.FC<SolutionDetailProps> = ({ solution }) => {
  const breadcrumbItems = [
    { label: "Quark Techie", href: "/" },
    { label: "Soluciones", href: "/soluciones" },
    { label: solution.title },
  ];

  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-40 pb-20 px-6 flex flex-col items-center overflow-hidden">
        {/* Fondos corporativos */}
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#288B88]/10 blur-[120px] rounded-full pointer-events-none z-0 translate-y-[-50%]"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start">
          <Reveal className="mb-8">
            <Breadcrumb items={breadcrumbItems} size="sm" />
          </Reveal>

          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-[#E8D33F] mb-6">
              <TerminalSquare size={16} /> Arquitectura Validada
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight">
              {solution.title}.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mb-10">
              {solution.short_description}
            </p>
            <div className="flex items-center gap-4">
              <Button href="/contacto" size="lg">
                Agendar Discovery Call
              </Button>
              <div className="flex flex-col ml-4">
                <span className="text-sm text-gray-500 font-light">
                  Inversión desde
                </span>
                <span className="text-lg font-semibold text-white">
                  {solution.starting_price}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. EL RETO Y LA SOLUCIÓN */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-8">
        <Reveal>
          <div className="p-10 rounded-[2.5rem] bg-[#E8D33F]/5 border border-[#E8D33F]/20 backdrop-blur-md">
            <h3 className="text-sm font-semibold tracking-widest text-[#E8D33F] uppercase mb-4">
              El Reto
            </h3>
            <p className="text-lg font-light text-gray-300 leading-relaxed">
              {solution.pain_point}
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="p-10 rounded-[2.5rem] bg-[#288B88]/5 border border-[#288B88]/20 backdrop-blur-md">
            <h3 className="text-sm font-semibold tracking-widest text-[#288B88] uppercase mb-4">
              La Solución
            </h3>
            <p className="text-lg font-light text-gray-300 leading-relaxed">
              {solution.solution_description}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 3. ENTREGABLES */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
            Qué incluye exactamente.
          </h2>
          <div className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
            {solution.deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 md:px-10 border-b border-white/10 last:border-0 hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-gray-200 text-lg font-light">{item}</span>
                <CheckCircle2
                  className="w-6 h-6 text-[#E8D33F] shrink-0 ml-4"
                  strokeWidth={2}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 4. PROCESO */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            Nuestra Metodología.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:bg-white/[0.04] transition-colors h-full"
              >
                <div className="w-12 h-12 rounded-full bg-[#288B88]/20 flex items-center justify-center shrink-0 border border-[#288B88]/30 text-[#288B88] font-bold">
                  {index + 1}
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 5. CTA */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24">
        <Reveal>
          <CTA buttonText="Empezar a colaborar" className="!p-0">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
              Construyamos tu próxima ventaja competitiva.
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              Deja de perder tiempo y recursos en arquitecturas que no escalan.
              Nuestros ingenieros evaluarán tu caso en una sesión técnica sin
              compromiso para trazar el roadmap exacto de tu proyecto.
            </p>
          </CTA>
        </Reveal>
      </section>
    </div>
  );
};
