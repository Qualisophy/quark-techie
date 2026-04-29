import React, { useRef, useState } from "react"; // <-- Hooks necesarios
import { Reveal } from "../shared/Reveal";

export const AboutUs = () => {
  // --- LÓGICA DE MOUSE TRACKING REPLICADA ---
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
        {/* CABECERA UNIFICADA QTW-69 - SECCIÓN SERVICIOS */}
<div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto px-4">
  {/* Eyebrow */}
  <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
    Sobre Nosotros
  </p>
  
  {/* Título Principal en Blanco */}
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
    Soluciones Técnicas para Retos Complejos.
  </h2>
  
  {/* Párrafo Descriptivo */}
  <p className="text-gray-400 text-lg font-light leading-relaxed">
    En Quark Techie diseñamos arquitecturas escalables y plataformas Fullstack optimizadas para el SEO técnico, transformando desafíos complejos en infraestructuras digitales preparadas para el futuro.
  </p>
</div>
        <Reveal delay={150}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // isolate para manejar z-index internos y quitamos group original para limpiar
            className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl px-6 py-10 md:p-14 overflow-hidden isolate"
          >
            {/* 1. EFECTO LINTERNA (Z-10) */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 hidden md:block"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
              }}
            />

            {/* 2. CONTENIDO (Z-20) */}
            <div className="relative z-20 flex flex-col md:flex-row gap-10 items-stretch">
              {/* BLOQUE IZQUIERDO: Imagen */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative aspect-video md:aspect-auto">
                <img
                  src="/logo_header.png"
                  alt="Quark Techie Logo"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* BLOQUE DERECHO: Título y Párrafo */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-[clamp(1rem,5.2vw,1.875rem)] md:text-3xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                  <span className="block whitespace-nowrap">
                    Código de Alto Rendimiento.
                  </span>
                  <span className="font-bold block whitespace-nowrap">
                    Soluciones que Evolucionan.
                  </span>
                </h1>

                <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed w-full">
                  En <span className="font-semibold text-white">Quark Techie</span>{" "}
                  transformamos la complejidad técnica en ventaja competitiva.
                  Diseñamos y desarrollamos plataformas Fullstack a nivel
                  subatómico, redefiniendo los límites de la velocidad, la
                  escalabilidad y el SEO técnico para empresas que lideran el
                  cambio.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};