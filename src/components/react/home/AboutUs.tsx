import React from "react";
import { Button } from "../shared/ui/Button";
import { Reveal } from "../shared/Reveal";
import { ArrowUpRight } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-32 px-6 w-full max-w-7xl mx-auto">
        
        <Reveal>
          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-tight">
              Código de Alto Rendimiento.<br />
              <span className="font-bold">
                Soluciones que Evolucionan.
              </span>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {/* Bloque de Contenido */}
          <div className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl p-10 md:p-14 overflow-hidden group transition-colors duration-500">

            {/* Efectos de Luz */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#288B88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
            <div className="relative z-10 flex flex-col">
              
              {/* Texto */}
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                En <span className="font-semibold text-white">Quark Techie</span>{" "}
                transformamos la complejidad técnica en ventaja competitiva.
                Diseñamos y desarrollamos plataformas Fullstack a nivel
                subatómico, redefiniendo los límites de la velocidad, la
                escalabilidad y el SEO técnico para empresas que lideran el cambio.
              </p>

              {/* Botones */}
              <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
                
                <Button
                    href="/soluciones"
                    variant="primary"
                    size="md"
                >
                    Descubrir Soluciones
                </Button>

                <Button
                    href="/contacto"
                    variant="ghost"
                    size="md"
                >
                    Iniciar Consultoría <ArrowUpRight size={20} className="text-[#E8D33F]" />
                </Button>

              </div>

            </div>
          </div>
        </Reveal>

      </section>
    </div>
  );
};