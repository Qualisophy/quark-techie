import React from "react";
import { Reveal } from "../shared/Reveal";
import { Code2, Zap, Layers, Target } from "lucide-react";

export const WhyUs = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-24 px-6 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
            VALOR DIFERENCIAL
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            ¿Por qué confiar tu proyecto a Quark Techie?
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            No solo escribimos código; construimos los cimientos tecnológicos de
            tu éxito con un enfoque en calidad técnica, escalabilidad y visión
            de negocio.
          </p>
        </div>

        <Reveal delay={150}>
          {/* CONTENIDO FLOTANTE */}
          <div className="relative w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {/* BLOQUE DE IMAGEN */}
            <div className="w-full md:w-1/2 relative aspect-video md:aspect-square max-w-md mx-auto flex items-center justify-center p-8">
              {/* 
                  He añadido un poco de padding (p-8) y ajustado el contenedor 
                  para que el logo respire y no se pegue a los bordes.
                */}
              <img
                src="/logo_header.png"
                alt="Logo Quark Techie"
                className="w-full h-full object-contain drop-shadow-2xl opacity-90"
              />
            </div>

            {/* BLOQUE DE TEXTO */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-[clamp(1.5rem,5.2vw,2.5rem)] font-semibold text-white tracking-tighter mb-6 leading-tight">
                <span className="block">
                  Excelencia en la ejecución técnica.
                </span>
              </h2>

              <div className="text-base md:text-lg text-gray-400 font-light leading-relaxed w-full space-y-10">
                <p>
                  <span className="font-semibold text-white">
                    No solo escribimos código;
                  </span>{" "}
                  Aplicamos una metodología de desarrollo rigurosa para
                  transformar ideas en productos digitales robustos, priorizando
                  la mantenibilidad y el rendimiento en cada línea de código.
                </p>

                {/* Lista mejorada con Iconos Lucide y estructura UI moderna */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  {/* Item 1: Ingeniería */}
                  <li className="flex items-start gap-4 text-left">
                    <div className="p-2.5 rounded-xl bg-[#288B88]/10 border border-[#288B88]/20 shrink-0">
                      <Code2
                        className="w-5 h-5 text-[#288B88]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium block mb-1">
                        Ingeniería
                      </span>
                      <span className="text-sm text-gray-400 block">
                        Código limpio sin deuda técnica.
                      </span>
                    </div>
                  </li>

                  {/* Item 2: Velocidad */}
                  <li className="flex items-start gap-4 text-left">
                    <div className="p-2.5 rounded-xl bg-[#288B88]/10 border border-[#288B88]/20 shrink-0">
                      <Zap
                        className="w-5 h-5 text-[#288B88]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium block mb-1">
                        Velocidad
                      </span>
                      <span className="text-sm text-gray-400 block">
                        Agilidad para Time-to-Market.
                      </span>
                    </div>
                  </li>

                  {/* Item 3: Escalabilidad */}
                  <li className="flex items-start gap-4 text-left">
                    <div className="p-2.5 rounded-xl bg-[#288B88]/10 border border-[#288B88]/20 shrink-0">
                      <Layers
                        className="w-5 h-5 text-[#288B88]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium block mb-1">
                        Escalabilidad
                      </span>
                      <span className="text-sm text-gray-400 block">
                        Arquitecturas modulares.
                      </span>
                    </div>
                  </li>

                  {/* Item 4: Propósito */}
                  <li className="flex items-start gap-4 text-left">
                    <div className="p-2.5 rounded-xl bg-[#288B88]/10 border border-[#288B88]/20 shrink-0">
                      <Target
                        className="w-5 h-5 text-[#288B88]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium block mb-1">
                        Propósito
                      </span>
                      <span className="text-sm text-gray-400 block">
                        Retorno de inversión real.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
