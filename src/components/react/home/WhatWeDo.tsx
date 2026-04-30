import React, { useState } from "react";
import { Reveal } from "../shared/Reveal";
import {
  Rocket,
  Settings,
  ShoppingCart,
  Server,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../shared/ui/Button";

export const WhatWeDo = () => {
  // Lógica de tarjetas
  const [pillarPos, setPillarPos] = useState<{
    [key: number]: { x: number; y: number };
  }>({});
  const [pillarHover, setPillarHover] = useState<number | null>(null);

  const handlePillarMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPillarPos((prev) => ({
      ...prev,
      [index]: { x: e.clientX - rect.left, y: e.clientY - rect.top },
    }));
  };

  const pillarClasses =
    "rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl p-8 transition-colors duration-300 flex flex-col justify-center h-full text-center md:text-left relative overflow-hidden isolate group hover:bg-white/[0.05]";

  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-20 px-6 w-full max-w-7xl mx-auto">
        <Reveal delay={150}>
          {/* CABECERA OPTIMIZADA SEO */}
          <div className="text-center mb-16 max-w-4xl mx-auto px-4">
            <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
              SERVICIOS
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Servicios de Desarrollo de Software e Ingeniería a Medida.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Potenciamos agencias y empresas con soluciones digitales de alto
              impacto, combinando rigor técnico con una ejecución ágil y
              escalable.
            </p>
          </div>

          {/* PILARES DE SERVICIO (Directamente sin la tarjeta gigante encima) */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "MVP de Alto Impacto",
                  desc: "Convertimos tu idea en un producto funcional en tiempo récord. Validamos tu modelo con arquitecturas escalables.",
                },
                {
                  icon: Settings,
                  title: "Digitalización Estratégica",
                  desc: "Optimizamos procesos críticos mediante software personalizado. Eliminamos cuellos de botella tecnológicos.",
                },
                {
                  icon: ShoppingCart,
                  title: "Experiencias de Venta Pro",
                  desc: "Diseñamos plataformas de venta online optimizadas para la conversión. Arquitecturas seguras y fluidas.",
                },
                {
                  icon: Server,
                  title: "Ingeniería de Software",
                  desc: "Resolvemos retos complejos de infraestructura y arquitectura. Soluciones cloud de alta disponibilidad.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onMouseMove={(e) => handlePillarMouseMove(e, idx)}
                  onMouseEnter={() => setPillarHover(idx)}
                  onMouseLeave={() => setPillarHover(null)}
                  className={pillarClasses}
                >
                  <div
                    className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                    style={{
                      opacity: pillarHover === idx ? 1 : 0,
                      background: `radial-gradient(400px circle at ${pillarPos[idx]?.x || 0}px ${pillarPos[idx]?.y || 0}px, rgba(40,139,136,0.15), transparent 40%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <item.icon
                      className="w-10 h-10 text-white mx-auto md:mx-0 mb-4"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-white font-semibold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Button href="/soluciones" size="lg">
                Saber más sobre nuestras soluciones
                <ArrowUpRight size={20} className="text-[#5B7B7B] ml-2" />
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
