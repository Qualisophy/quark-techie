import React from "react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/ui/Button";

export const Hero = () => {
  const navigateToAlumni = () => {
    window.location.href = "/talent-hub/antiguos-alumnos";
  };

  return (
    <Reveal>
      {/* RESTAURADO: Clases originales de la sección (pt-15) */}
      <section className="text-center pt-15 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[120px] rounded-full -z-10"></div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
          Talento certificado,
          <br /> resultados excepcionales.
        </h1>
        {/* Copywriting en minúsculas y enfocado a SEO */}
        <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Accede a nuestra red exclusiva de desarrolladores de software e
          ingenieros IT. Perfiles técnicos formados y rigurosamente validados
          por Quark Techie, listos para integrarse en tu equipo.
        </p>

        {/* <Button
          variant="primary"
          size="lg"
          onClick={navigateToAlumni}
          className="uppercase text-xs tracking-[0.2em]"
        >
          Explorar Talento IT
        </Button> */}
      </section>
    </Reveal>
  );
};
