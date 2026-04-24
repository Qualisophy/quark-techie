import React from "react";
import { Reveal } from "../shared/Reveal";

export const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-16 px-6 w-full max-w-7xl mx-auto">

        <Reveal delay={150}>
          {/* Cuadro */}
          <div className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl px-6 py-10 md:p-14 overflow-hidden group transition-colors duration-500">

            {/* Efectos de Luz */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#288B88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-stretch">

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
                    <span className="block whitespace-nowrap">Código de Alto Rendimiento.</span>
                    <span className="font-bold block whitespace-nowrap">
                    Soluciones que Evolucionan.
                    </span>
                </h1>

                <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed w-full">
                    En <span className="font-semibold text-white">Quark Techie</span>{" "}
                    transformamos la complejidad técnica en ventaja competitiva.
                    Diseñamos y desarrollamos plataformas Fullstack a nivel
                    subatómico, redefiniendo los límites de la velocidad, la
                    escalabilidad y el SEO técnico para empresas que lideran el cambio.
                </p>

              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};