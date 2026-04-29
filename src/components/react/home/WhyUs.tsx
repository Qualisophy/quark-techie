import React, { useRef, useState } from "react";
import { Reveal } from "../shared/Reveal";

export const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-16 px-6 w-full max-w-7xl mx-auto">
        {/* CABECERA UNIFICADA QTW-69 */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          {/* Eyebrow */}
          <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
            VALOR DIFERENCIAL
          </p>
          
          {/* Título en Blanco */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            ¿Por qué confiar tu proyecto a Quark Techie?
          </h2>
          
          {/* Párrafo Descriptivo */}
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            No solo escribimos código; construimos los cimientos tecnológicos de tu éxito con un enfoque en calidad técnica, escalabilidad y visión de negocio.
          </p>
        </div>
        <Reveal delay={150}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // IMPORTANTE: He añadido 'isolate' y quitado el 'group' original para evitar ruidos
            className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl px-6 py-10 md:p-14 overflow-hidden isolate"
          >
            {/* 1. LA LINTERNA (Igual que en Contact.tsx) */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 hidden md:block"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
              }}
            />

            {/* 2. EL CONTENIDO (Con z-20 para estar SOBRE la linterna) */}
            <div className="relative z-20 flex flex-col md:flex-row gap-10 items-stretch">
              
              {/* BLOQUE DE IMAGEN */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative aspect-video md:aspect-auto">
                  <img
                      src="/WhyUs_definitivo.png"
                      alt="Propuesta de valor Quark Techie"
                      className="absolute inset-0 w-full h-full object-contain"
                  />
              </div>

              {/* BLOQUE DE TEXTO */}
              
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                
                
                <h2 className="text-[clamp(1rem,5.2vw,1.875rem)] md:text-3xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                    <span className="block">Excelencia en la ejecución técnica.</span>
                    
                </h2>

                <div className="text-base md:text-lg text-gray-400 font-light leading-relaxed w-full space-y-4">
                    <p>
                      <span className="font-semibold text-white">No solo escribimos código;</span>{" "}
                      Aplicamos una metodología de desarrollo rigurosa para transformar ideas en productos digitales robustos, priorizando la mantenibilidad y el rendimiento en cada línea de código.
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-sm md:text-base">
                      <li><span className="text-white font-medium">🛡️ Ingeniería:</span> Código limpio y mantenible sin deuda técnica.</li>
                      <li><span className="text-white font-medium">⚡ Velocidad:</span> Agilidad real para un Time-to-Market reducido.</li>
                      <li><span className="text-white font-medium">📈 Escalabilidad:</span> Arquitecturas modulares listas para crecer.</li>
                      <li><span className="text-white font-medium">🎯 Propósito:</span> Tecnología alineada con tu retorno de inversión.</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};