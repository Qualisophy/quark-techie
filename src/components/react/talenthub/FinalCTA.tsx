import React from "react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const FinalCTA = () => {
  const navigateToAlumni = () => {
    window.location.href = "/talent-hub/antiguos-alumnos";
  };

  return (
    <Reveal>
      <section className="text-center pt-16 pb-32 relative overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tighter leading-tight text-white">
          Tu próximo ingeniero clave <br className="hidden md:block" /> te está
          esperando.
        </h2>
        {/* <Button
          variant="primary"
          size="lg"
          onClick={navigateToAlumni}
          className="uppercase text-xs tracking-[0.2em]"
        >
          Explorar Talento IT
          <ArrowUpRight size={20} className="text-[#5B7B7B] ml-2" />
        </Button> */}
      </section>
    </Reveal>
  );
};
