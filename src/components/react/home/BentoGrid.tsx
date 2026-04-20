import React from "react";
import { Button } from "../shared/ui/Button";
import {
  ChevronRight,
  Zap,
  Layers,
  Fingerprint,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "../shared/Reveal";

export const BentoGrid = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-32 px-6 w-full max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">
              Ingeniería a medida.
              <br />
              Diseño de precisión.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[380px]">
          {/* Card Grande 1 */}
          <Reveal delay={100} className="md:col-span-2 h-full">
            <div className="relative h-full w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl p-10 overflow-hidden group hover:bg-white/5 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#288B88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
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

          {/* Card Pequeña 1 */}
          <Reveal delay={200} className="md:col-span-1 h-full">
            <div className="relative h-full w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl p-10 overflow-hidden group hover:bg-white/5 transition-colors duration-500 flex flex-col justify-between items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#288B88] to-[#E8D33F] blur-xl absolute opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
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
            <div className="relative h-full w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl p-10 overflow-hidden group hover:bg-white/5 transition-colors duration-500 flex flex-col justify-between">
              <Fingerprint
                className="w-12 h-12 text-[#288B88]"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Seguridad Nativa
                </h3>
                <p className="text-gray-400 font-light">
                  Protección de datos desde la base estructural.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card Grande 2 */}
          <Reveal delay={400} className="md:col-span-2 h-full">
            <div className="relative h-full w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl p-10 overflow-hidden group hover:bg-white/5 transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[#E8D33F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Cpu className="w-12 h-12 text-white" strokeWidth={1.5} />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-white">
                    Stack Tecnológico.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">
                    React, Astro, Node, Tailwind. Empleamos las herramientas que
                    impulsan a las empresas tecnológicas líderes del mundo.
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
