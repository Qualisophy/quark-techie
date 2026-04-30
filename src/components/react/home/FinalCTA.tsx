import React from "react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/ui/Button";

export const FinalCTA = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-24 px-6 w-full max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter">
            ¿Listo para evolucionar tu software?
          </h2>
          <Button href="/contacto" size="lg">
            Hablemos de tu proyecto
          </Button>
        </Reveal>
      </section>
    </div>
  );
};
