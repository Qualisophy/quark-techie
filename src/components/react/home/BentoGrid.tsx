import React, { useRef, useState } from "react";
import { Zap, Layers, Fingerprint, Cpu } from "lucide-react";
import { Reveal } from "../shared/Reveal";

export const BentoGrid = () => {
  // Lógica de posiciones para cada una de las 4 cards
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

  // Estilo base de las cards para no repetir
  const cardClasses =
    "relative h-full w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl overflow-hidden isolate transition-colors duration-500";

  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-16 px-6 w-full max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
              NUESTRO ADN TÉCNICO
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-white">
              Ingeniería a medida.
              <br />
              Diseño de precisión.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light tracking-tight mb-12">
              Desarrollamos soluciones digitales de alto rendimiento mediante
              arquitecturas robustas y escalables. Convertimos retos técnicos
              complejos en productos fluidos que impulsan el crecimiento de tu
              negocio.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[380px]">
          {/* Card Grande 1 */}
          <Reveal delay={100} className="md:col-span-2 h-full">
            <div
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardClasses} p-10`}
            >
              <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 0 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[0]?.x || 0}px ${positions[0]?.y || 0}px, rgba(255,255,255,0.08), transparent 40%)`,
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Zap className="w-12 h-12 text-[#E8D33F]" strokeWidth={1.5} />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-white">
                    Rendimiento Extremo.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">
                    Optimizamos la carga al milisegundo. Construimos
                    arquitecturas modernas que retienen usuarios y dominan el
                    SEO.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card Pequeña 1 (ESCALABILIDAD) */}
          <Reveal delay={200} className="md:col-span-1 h-full">
            <div
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardClasses} p-10 flex flex-col justify-between items-center text-center`}
            >
              <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 1 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[1]?.x || 0}px ${positions[1]?.y || 0}px, rgba(255,255,255,0.08), transparent 40%)`,
                }}
              />
              <Layers
                className="w-12 h-12 text-white relative z-10"
                strokeWidth={1.5}
              />
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Escalabilidad
                </h3>
                <p className="text-gray-400 font-light">
                  Sistemas que crecen orgánicamente.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card Pequeña 2 */}
          <Reveal delay={300} className="md:col-span-1 h-full">
            <div
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardClasses} p-10 flex flex-col justify-between`}
            >
              <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 2 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[2]?.x || 0}px ${positions[2]?.y || 0}px, rgba(255,255,255,0.08), transparent 40%)`,
                }}
              />
              <Fingerprint
                className="w-12 h-12 text-[#288B88] relative z-10"
                strokeWidth={1.5}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Seguridad Nativa
                </h3>
                <p className="text-gray-400 font-light">
                  Protección de datos desde la base estructural.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card Grande 2 (ACTUALIZADA A ARQUITECTURA MODERNA) */}
          <Reveal delay={400} className="md:col-span-2 h-full">
            <div
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardClasses} p-10`}
            >
              <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 3 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[3]?.x || 0}px ${positions[3]?.y || 0}px, rgba(255,255,255,0.08), transparent 40%)`,
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Cpu className="w-12 h-12 text-white" strokeWidth={1.5} />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-white">
                    Arquitectura Moderna.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">
                    Diseñamos sistemas resilientes basados en microservicios,
                    entornos cloud y despliegue continuo. Código limpio y
                    testeable preparado para escalar sin límites.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
