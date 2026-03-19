import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";

export const Partnership = () => (
  <section className="min-h-screen pt-40 pb-32 px-6 relative flex flex-col justify-center max-w-6xl mx-auto">
    <Reveal>
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
          El motor de tu agencia.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          Tú pones la creatividad y la estrategia. Nosotros aportamos la
          ingeniería compleja bajo la estética del{" "}
          <span className="text-white font-medium">Glassmorphism y Apple</span>{" "}
          que a tus clientes les encanta.
        </p>
      </div>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-8 mb-24">
      <Reveal delay={150}>
        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/8 backdrop-blur-2xl">
          <h3 className="text-3xl font-semibold mb-4 text-[#288B88]">
            White-label.
          </h3>
          <p className="text-gray-400 font-light text-lg">
            Actuamos como tu equipo técnico in-house. Firmamos NDAs y entregamos
            un código tan limpio que creerán que tienes ingenieros de Silicon
            Valley en nómina.
          </p>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/8 backdrop-blur-2xl">
          <h3 className="text-3xl font-semibold mb-4 text-[#E8D33F]">
            Revenue Share.
          </h3>
          <p className="text-gray-400 font-light text-lg">
            ¿Nos recomiendas a tus clientes? Entramos en un modelo de
            partnership puro. Gana un porcentaje recurrente por elevar el
            estándar técnico de tus proyectos.
          </p>
        </div>
      </Reveal>
    </div>

    <Reveal delay={450} className="w-full text-center">
      <a
        href="/contacto"
        className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-500"
      >
        Convertirse en Partner <ArrowUpRight size={20} />
      </a>
    </Reveal>
  </section>
);
