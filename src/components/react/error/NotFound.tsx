import React from "react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/ui/Button";
import { SmokeBackground } from "../shared/ui/SmokeBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden w-full">
      {/* 1. Luces corporativas de fondo (Teal y Dorado) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#288B88]/15 blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E8D33F]/10 blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

      {/* 2. Textura de ruido */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* 3. Humo (Color gris neutro para que coja los colores de las luces de atrás) */}
      <SmokeBackground color={0x9ca3af} opacity={0.25} />

      {/* 4. Contenido Principal */}
      <Reveal className="w-full max-w-3xl mx-auto text-center z-10 flex flex-col items-center px-6">
        {/* 404 Titánico */}
        <h1 className="text-[12rem] md:text-[22rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/5 mb-0 leading-none select-none drop-shadow-2xl">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          ¿Te has perdido?
        </h2>

        <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-lg mx-auto leading-relaxed">
          Parece que has llegado a una zona inexplorada. La ruta que buscas no
          existe o ha sido movida a otra dimensión.
        </p>

        {/* Botón sin icono */}
        <Button href="/" variant="outline" size="lg">
          Volver al Inicio
        </Button>
      </Reveal>
    </div>
  );
};
