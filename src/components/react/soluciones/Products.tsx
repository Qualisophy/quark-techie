import React from "react";
import { Code2, Globe2, Layers } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Card } from "../shared/ui/Card";
import { Button } from "../shared/ui/Button";

export const Products = () => {
  const products = [
    {
      title: "MVP Startup",
      price: "$2,500",
      desc: "Del concepto a la realidad en 4 semanas. Arquitectura validada.",
      icon: Code2,
      accent: "#288B88",
    },
    {
      title: "Transformación Digital",
      price: "Custom",
      desc: "Modernización de sistemas legacy para corporaciones.",
      icon: Globe2,
      accent: "#E8D33F",
    },
    {
      title: "E-Commerce Headless",
      price: "$4,000",
      desc: "Ventas sin límites con Shopify y React en el frontend.",
      icon: Layers,
      accent: "#FFFFFF",
    },
  ];

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

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((prod, i) => (
          <Reveal key={i} delay={i * 200}>
            <Card className="group h-[500px]">
              {/* Resplandor de hover de acento de color original */}
              <div
                className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"
                style={{ backgroundColor: prod.accent }}
              ></div>

              {/* Contenedor Flex para distribuir el contenido arriba y abajo */}
              <div className="flex flex-col justify-between h-full relative z-10">
                {/* Parte Superior de la tarjeta */}
                <div>
                  <prod.icon
                    className="w-10 h-10 mb-8"
                    style={{ color: prod.accent }}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-3xl font-semibold mb-4 text-white">
                    {prod.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    {prod.desc}
                  </p>
                </div>

                {/* Parte Inferior de la tarjeta */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">A partir de</p>
                  <p className="text-4xl font-semibold text-white mb-8">
                    {prod.price}
                  </p>
                  <Button
                    href="/contacto"
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    Configurar Solución
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
