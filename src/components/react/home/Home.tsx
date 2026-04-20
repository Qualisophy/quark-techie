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
import { BentoGrid } from "./BentoGrid";

export const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION - Estilo Apple */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20">
        <Reveal
          delay={100}
          className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter text-white leading-[0.9] mb-8">
            Código.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#288B88] via-white to-[#E8D33F]">
              Evolucionado.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light tracking-tight mb-12">
            En Quark Techie transformamos la complejidad técnica en ventaja competitiva. Diseñamos y desarrollamos plataformas Fullstack a nivel subatómico para empresas que lideran el cambio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
            <Button href="/soluciones" size="lg">
              Descubrir Soluciones
            </Button>

            <Button
              href="/contacto"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              Iniciar Consultoría <ArrowUpRight size={20} className="text-[#E8D33F]" />
            </Button>
          </div>
        </Reveal>
      </section>

      {/* BENTO GRID - GLASSMORPHISM FEATURES */}

      <section className="py-32 px-6 w-full max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">
              Ingeniería de vanguardia.
              <br />
              Diseño de precisión.
            </h2>
            <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
              No solo construimos aplicaciones; forjamos activos digitales mediante una optimización obsesiva por el rendimiento.
            </p>
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
                    Performance al milisegundo.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">
                    Optimizamos cada línea de código para garantizar tiempos de carga instantáneos y dominar las Core Web Vitals.
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
                  Sistemas listos para el mañana.
                </h3>
                <p className="text-gray-400 font-light">
                  Infraestructuras elásticas que crecen orgánicamente con tu negocio.
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
                  Blindaje desde el núcleo.
                </h3>
                <p className="text-gray-400 font-light">
                  Protocolos de seguridad avanzada y cifrado para garantizar la integridad de tu ecosistema.
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
                    Tecnología de nivel subatómico.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">
                    Dominamos las herramientas que impulsan a las empresas: Astro, React, Node.js y Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BentoGrid />

    </div>
  );
};
