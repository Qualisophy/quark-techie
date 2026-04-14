import React, { useState } from "react";
import { Button } from "../shared/ui/Button";
import { Card } from "../shared/ui/Card";
import { Stepper, type Step } from "../shared/ui/Stepper"; // <-- ¡Aquí está la magia!
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { CTA } from "../shared/ui/CTA";

export const Partnership = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Definimos los pasos con sus textos explicativos profesionales
  const roadmapSteps: Step[] = [
    {
      label: "Contacto Inicial",
      description:
        "Inicia el proceso compartiendo la visión de tu proyecto. Nuestro equipo técnico analizará tu solicitud para asignar a los arquitectos de software más adecuados según tu stack tecnológico.",
    },
    {
      label: "Discovery Call",
      description:
        "Agendamos una sesión estratégica para alinear expectativas, definir el alcance del producto y entender los desafíos técnicos específicos que tu agencia necesita resolver.",
    },
    {
      label: "Análisis Arquitectónico",
      description:
        "Nuestros ingenieros diseñan una estructura escalable, segura y eficiente. Creamos una hoja de ruta técnica detallada que garantiza que el código sea de nivel Silicon Valley.",
    },
    {
      label: "Propuesta Tecnológica",
      description:
        "Te presentamos una solución integral con presupuestos transparentes, tiempos de entrega garantizados y la garantía de una ejecución estética bajo estándares de Apple y Glassmorphism.",
    },
  ];

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 relative flex flex-col justify-center max-w-6xl mx-auto">
      {/* Cabecera */}
      <Reveal>
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
            El motor de tu agencia.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Tú pones la creatividad y la estrategia. Nosotros aportamos la
            ingeniería compleja bajo la estética que a tus clientes les encanta.
          </p>
        </div>
      </Reveal>

      {/* Tarjetas de Modelos */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <Reveal delay={150}>
          <Card className="h-full">
            <h3 className="text-3xl font-semibold mb-4 text-[#288B88]">
              White-label.
            </h3>
            <p className="text-gray-400 font-light text-lg">
              Actuamos como tu equipo técnico in-house. Firmamos NDAs y
              entregamos un código tan limpio que creerán que tienes ingenieros
              de Silicon Valley en nómina.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={300}>
          <Card className="h-full">
            <h3 className="text-3xl font-semibold mb-4 text-[#E8D33F]">
              Revenue Share.
            </h3>
            <p className="text-gray-400 font-light text-lg">
              ¿Nos recomiendas a tus clientes? Entramos en un modelo de
              partnership puro. Gana un porcentaje recurrente por elevar el
              estándar técnico de tus proyectos.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Sección del Roadmap Dinámico */}
      <Reveal delay={400}>
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Nuestro flujo de colaboración
            </h2>
            <p className="text-gray-400 font-light">
              Un proceso de ingeniería riguroso para asegurar la excelencia en
              cada entrega.
            </p>
          </div>

          <Stepper
            steps={roadmapSteps}
            currentStep={currentStep}
            className="mb-12"
          />

          <div className="flex justify-center gap-6 mt-12">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              &larr; Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentStep(
                  Math.min(roadmapSteps.length - 1, currentStep + 1),
                )
              }
              disabled={currentStep === roadmapSteps.length - 1}
            >
              Siguiente &rarr;
            </Button>
          </div>
        </div>
      </Reveal>
      {/* Llamada a la acción final */}
      <Reveal delay={450}>
        <CTA className="w-full text-center" />
      </Reveal>
    </section>
  );
};
