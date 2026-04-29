import React, { useRef, useState } from "react";
import { Reveal } from "../shared/Reveal";
import { Rocket, Settings, ShoppingCart, Server, ArrowUpRight } from "lucide-react";
import { Button } from "../shared/ui/Button";

export const WhatWeDo = () => {
  // Lógica para el contenedor principal
  const mainRef = useRef<HTMLDivElement>(null);
  const [mainPos, setMainPos] = useState({ x: 0, y: 0 });
  const [mainHover, setMainHover] = useState(false);

  // Lógica para las 4 tarjetas de pilares
  const [pillarPos, setPillarPos] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [pillarHover, setPillarHover] = useState<number | null>(null);

  const handleMainMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMainPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handlePillarMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPillarPos(prev => ({
      ...prev,
      [index]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const pillarClasses = "rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl p-6 transition-colors duration-300 flex flex-col justify-center h-full text-center md:text-left relative overflow-hidden isolate";

  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-16 px-6 w-full max-w-7xl mx-auto">
        <Reveal delay={150}>
          <div className="text-center mb-6">
            <span className="text-sm md:text-lg tracking-[0.3em] text-gray-400 font-medium uppercase">
              SERVICIOS
            </span>
          </div>

          <div 
            ref={mainRef}
            onMouseMove={handleMainMouseMove}
            onMouseEnter={() => setMainHover(true)}
            onMouseLeave={() => setMainHover(false)}
            className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl px-6 py-10 md:p-14 overflow-hidden isolate"
          >
            {/* LINTERNA PRINCIPAL */}
            <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
              style={{
                opacity: mainHover ? 1 : 0,
                background: `radial-gradient(800px circle at ${mainPos.x}px ${mainPos.y}px, rgba(255,255,255,0.05), transparent 40%)`,
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-stretch">
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-[clamp(1rem,5.2vw,1.875rem)] md:text-3xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                  Soluciones Técnicas para Retos Complejos.
                </h1>
                <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed w-full">
                  Transformamos visiones en productos digitales de alto rendimiento a través de un enfoque pragmático, tecnológico y orientado a resultados.
                </p>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative aspect-video md:aspect-auto">
                <img
                  src="https://www.intarex.com/wp-content/uploads/2022/06/Captura-de-Pantalla-2022-08-16-a-las-11-compressed-thegem-blog-default.webp"
                  alt="Servicios Quark Techie"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* PILARES DE SERVICIO */}
            <div className="mt-20 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tighter">
                  Pilares de servicio
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Rocket, title: "MVP de Alto Impacto", desc: "Convertimos tu idea en un producto funcional en tiempo récord. Validamos tu modelo con arquitecturas escalables." },
                  { icon: Settings, title: "Digitalización Estratégica", desc: "Optimizamos procesos críticos mediante software personalizado. Eliminamos cuellos de botella tecnológicos." },
                  { icon: ShoppingCart, title: "Experiencias de Venta Pro", desc: "Diseñamos plataformas de venta online optimizadas para la conversión. Arquitecturas seguras y fluidas." },
                  { icon: Server, title: "Ingeniería de Software", desc: "Resolvemos retos complejos de infraestructura y arquitectura. Soluciones cloud de alta disponibilidad." }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onMouseMove={(e) => handlePillarMouseMove(e, idx)}
                    onMouseEnter={() => setPillarHover(idx)}
                    onMouseLeave={() => setPillarHover(null)}
                    className={pillarClasses}
                  >
                    {/* LINTERNA INDIVIDUAL POR PILAR */}
                    <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                      style={{
                        opacity: pillarHover === idx ? 1 : 0,
                        background: `radial-gradient(400px circle at ${pillarPos[idx]?.x || 0}px ${pillarPos[idx]?.y || 0}px, rgba(255,255,255,0.08), transparent 40%)`,
                      }}
                    />
                    
                    <div className="relative z-10">
                      <item.icon className="w-9 h-9 text-white mx-auto md:mx-0 mb-2" strokeWidth={1.5} />
                      <h3 className="text-white font-semibold text-lg mb-3 whitespace-nowrap">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button href="/soluciones" size="lg">
                  Saber más sobre nuestras soluciones
                  <ArrowUpRight size={20} className="text-[#5B7B7B] w-10 h-10 md:w-6 md:h-6" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};