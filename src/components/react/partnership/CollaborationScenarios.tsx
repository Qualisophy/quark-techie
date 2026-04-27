import React from "react";
import { Reveal } from "../shared/Reveal";
import { Card } from "../shared/ui/Card";

const scenarios = [
  {
    title: "Desbordamiento de equipo",
    description: "Si tu demanda supera tu capacidad operativa, nos integramos como una extensión de tu equipo para mantener los plazos de entrega sin sacrificar la calidad.",
    icon: "👥",
  },
  {
    title: "Stacks desconocidos",
    description: "No pierdas oportunidades por falta de experiencia en una tecnología específica. Cubrimos el gap técnico en proyectos que requieren stacks fuera de tu especialidad.",
    icon: "💻",
  },
  {
    title: "Rescate de proyectos críticos",
    description: "Intervenimos en proyectos en riesgo o con deuda técnica severa para estabilizar el código, asegurar la infraestructura y llevar el producto a buen puerto.",
    icon: "🚨",
  },
];

export const CollaborationScenarios = () => {
  return (
    <section className="pb-8 pt-8 px-6 w-full max-w-6xl mx-auto">
      <Reveal>
        <div className="text-center mb-16">
          <p className="text-[#288B88] font-semibold tracking-widest text-xs uppercase mb-3">
            CUÁNDO COLABORAR
          </p>
          
          <h2 className="text-3xl font-semibold text-white mb-4">
            Situaciones donde somos tu mejor aliado.
          </h2>
          
          <p className="text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Identifica el escenario que mejor se adapta a tu necesidad actual y permítenos potenciar la capacidad técnica de tu agencia.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {scenarios.map((item, index) => (
          <Reveal key={index} delay={index * 150}>
            <Card className="h-full group relative">
              
              <div className="flex flex-col h-full">
                {/* Icono con el mismo tamaño que el componente Partnership */}
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 w-fit">
                  {item.icon}
                </div>
                
                {/* Título H3 */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#288B88] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Contenido descriptivo */}
                <p className="text-gray-400 font-light text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};