import React from "react";
import { Reveal } from "../shared/Reveal";

export const WhyUs = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-32 px-6 w-full max-w-7xl mx-auto">

        <Reveal delay={150}>

          <div className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl px-6 py-10 md:p-14 overflow-hidden group transition-colors duration-500">

            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#288B88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>

            {/* Contenido con md:flex-row para que la Imagen esté a la IZQUIERDA y el Texto a la DERECHA */}
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-stretch">

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
                
                <p className="text-[#288B88] font-semibold tracking-widest text-xs uppercase mb-3">VALOR DIFERENCIAL</p>
                
                {/* Título Principal */}
                <h2 className="text-[clamp(1rem,5.2vw,1.875rem)] md:text-3xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                    <span className="block">¿Por qué confiar tu proyecto</span>
                    <span className="font-bold block">
                      a Quark Techie?
                    </span>
                </h2>

                {/* Subtítulo y Puntos fuertes con los ICONOS REPLICADOS */}
                <div className="text-base md:text-lg text-gray-400 font-light leading-relaxed w-full space-y-4">
                    <p>
                      <span className="font-semibold text-white">No solo escribimos código;</span>{" "}
                      construimos los cimientos tecnológicos de tu éxito con un enfoque en calidad técnica y visión de negocio.
                    </p>
                    
                    {/* Lista con los iconos */}
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