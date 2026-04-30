import React from "react";
import { Button } from "../shared/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";

export const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
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

          {/* NUEVO TEXTO HERO */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light tracking-tight mb-12">
            Transformamos la complejidad de tu negocio en software de alto
            rendimiento. Consultoría tecnológica y desarrollo a medida para
            empresas que buscan escalar.
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
              Contactar <ArrowUpRight size={20} className="text-[#E8D33F]" />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
