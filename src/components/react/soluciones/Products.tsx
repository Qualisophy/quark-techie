import React from "react";
import { Reveal } from "../shared/Reveal";
import { Card } from "../shared/ui/Card";
import { Button } from "../shared/ui/Button";
import { solutionsData } from "../../../data/solutions";

export const Products = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <Reveal>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-center">
          Soluciones de otro nivel.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto text-center font-light mb-24">
          Elige el ecosistema que impulsará tu próxima era digital.
        </p>
      </Reveal>

      {/* GRID 3 + 2 centrado */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {solutionsData.map((prod, i) => {
          const layout = "md:col-span-2";

          return (
            <Reveal key={prod.slug} delay={i * 200} className={layout}>
              <Card className={`group h-full isolate overflow-hidden ${
                prod.slug === "a-medida"
                  ? "bg-gradient-to-br from-white/[0.06] to-white/[0.02]\
                  border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.06)]"
                  : ""
                }`}
              >
                {/* Glow effect */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"
                  style={{ backgroundColor: prod.accent }}
                />

                {/* MAIN CONTAINER */}
                <div className="flex flex-col h-full relative z-10">

                  {/* TOP (crece dinámicamente) */}
                  <div className="flex flex-col flex-1">
                    <prod.icon
                      className="w-10 h-10 mb-8"
                      style={{ color: prod.accent }}
                      strokeWidth={1.5}
                    />

                    <h3 className="text-3xl font-semibold mb-4 text-white">
                      {prod.title}
                    </h3>

                    <p className="text-gray-400 font-light leading-relaxed">
                      {prod.short_description}
                    </p>
                  </div>

                  {/* BOTTOM (siempre abajo alineado) */}
                  <div className="mt-auto pt-8">
                    <p className="text-sm text-gray-500 mb-1">
                      A partir de
                    </p>

                    <p className="text-4xl font-semibold text-white mb-8">
                      {prod.starting_price}
                    </p>

                    <Button
                      href={
                        prod.slug === "a-medida"
                          ? "/contacto"
                          : `/soluciones/${prod.slug}`
                      }
                      variant="primary"
                      size="lg"
                      fullWidth
                    >
                      {prod.slug === "a-medida"
                        ? "Agendar Consultoría"
                        : "Ver Solución"}
                    </Button>
                  </div>

                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};