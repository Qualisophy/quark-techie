import React, { useState } from "react";
import { BookOpen, SquareGanttChart, CheckCircle, Rocket } from "lucide-react";
import { Reveal } from "../shared/Reveal";

export const ValueProposition = () => {
  const [positions, setPositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions((prev) => ({
      ...prev,
      [index]: { x: e.clientX - rect.left, y: e.clientY - rect.top },
    }));
  };

  // Clase maestra para todas las tarjetas: bordes sutiles y fondo cristalino muy tenue
  const cardBase =
    "relative h-full w-full rounded-[2.5rem] overflow-hidden isolate transition-all duration-500 p-10 group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10";

  return (
    <section className="py-24 border-y border-white/5 relative z-10 w-full">
      <Reveal>
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-white">
            El valor de nuestra certificación.
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            No somos un portal de empleo. Somos una academia técnica que valida
            y certifica a cada ingeniero antes de presentártelo.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[380px] relative z-10">
        {/* Formación de Vanguardia (Grande) */}
        <Reveal delay={100} className="md:col-span-2 h-full">
          <div
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cardBase}
          >
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
              style={{
                opacity: hoveredIndex === 0 ? 1 : 0,
                background: `radial-gradient(600px circle at ${positions[0]?.x || 0}px ${positions[0]?.y || 0}px, rgba(40,139,136,0.1), transparent 40%)`,
              }}
            />
            <BookOpen
              className="w-12 h-12 text-[#63A3A4] mb-8"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-white tracking-tight">
                Formación de vanguardia.
              </h3>
              <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
                Programa intensivo diseñado por expertos para dominar las
                herramientas que impulsan a las empresas líderes.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Perfilado Especializado (Pequeña) */}
        <Reveal delay={200} className="md:col-span-1 h-full">
          <div
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cardBase}
          >
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
              style={{
                opacity: hoveredIndex === 1 ? 1 : 0,
                background: `radial-gradient(400px circle at ${positions[1]?.x || 0}px ${positions[1]?.y || 0}px, rgba(255,255,255,0.05), transparent 40%)`,
              }}
            />
            <SquareGanttChart
              className="w-12 h-12 text-white mb-8"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Perfilado especializado
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Asignación precisa de roles y stacks tecnológicos según el
              proyecto.
            </p>
          </div>
        </Reveal>

        {/* Validación Rigurosa (Pequeña) */}
        <Reveal delay={300} className="md:col-span-1 h-full">
          <div
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cardBase}
          >
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
              style={{
                opacity: hoveredIndex === 2 ? 1 : 0,
                background: `radial-gradient(400px circle at ${positions[2]?.x || 0}px ${positions[2]?.y || 0}px, rgba(217,197,143,0.1), transparent 40%)`,
              }}
            />
            <CheckCircle
              className="w-12 h-12 text-[#D9C58F] mb-8"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Validación rigurosa
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Pruebas técnicas reales que aseguran la excelencia estructural en
              cada línea.
            </p>
          </div>
        </Reveal>

        {/* Listos para el Desafío (Grande) */}
        <Reveal delay={400} className="md:col-span-2 h-full">
          <div
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cardBase}
          >
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
              style={{
                opacity: hoveredIndex === 3 ? 1 : 0,
                background: `radial-gradient(600px circle at ${positions[3]?.x || 0}px ${positions[3]?.y || 0}px, rgba(255,255,255,0.07), transparent 40%)`,
              }}
            />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#288B88]/10 blur-[80px] rounded-full -z-10 group-hover:bg-[#288B88]/20 transition-all duration-700"></div>
            <Rocket className="w-12 h-12 text-white mb-8" strokeWidth={1.5} />
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-white tracking-tight">
                Listos para el desafío.
              </h3>
              <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
                Profesionales con experiencia práctica preparados para impactar
                desde el primer día.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
