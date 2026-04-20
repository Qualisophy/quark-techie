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
      label: "Recepción de Propuesta",
      description:
        "Comparte la visión de tu proyecto. Analizaremos tu solicitud en menos de 24h para asignar a los arquitectos de software adecuados.",
    },
    {
      label: "Sesión Estratégica de Alineación",
      description:
        "Agendamos una consultoría técnica para alinear expectativas de negocio y entender los desafíos que tu agencia necesita delegar.",
    },
    {
      label: "Ingeniería de Sistemas y Escalabilidad",
      description:
        "Diseñamos una arquitectura escalable y segura. Creamos una hoja de ruta técnica detallada que garantiza una infraestructura sólida.",
    },
    {
      label: "Solución Integral y Ejecución",
      description:
        "Presentamos la propuesta final con presupuestos transparentes y ejecución estética premium bajo estándares de diseño vanguardistas.",
    },
  ];

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 relative flex flex-col justify-center max-w-6xl mx-auto">
      {/* Cabecera */}
      <Reveal>
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
            El motor tecnológico de tu agencia.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Tú aportas la visión estratégica y la creatividad; nosotros ejecutamos la ingeniería compleja. Eleva el estándar de tus proyectos con soluciones digitales robustas, escalables y estéticamente impecables, eliminando la necesidad de mantener un equipo técnico in-house.
          </p>
        </div>
      </Reveal>

      {/* Tarjetas de Modelos */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <Reveal delay={150}>
          <Card className="h-full">
            <h3 className="text-3xl font-semibold mb-4 text-[#288B88]">
              Partner de Marca Blanca.
            </h3>
            <p className="text-gray-400 font-light text-lg">
              Actuamos como tu brazo técnico invisible. Firmamos NDAs estrictos y entregamos un código tan limpio, documentado y optimizado que tus clientes percibirán un nivel de ejecución de élite.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={300}>
          <Card className="h-full">
            <h3 className="text-3xl font-semibold mb-4 text-[#E8D33F]">
              Modelo de Revenue Share.
            </h3>
            <p className="text-gray-400 font-light text-lg">
              Una alianza basada en el crecimiento mutuo. Entra en un modelo de partnership puro donde ganas un porcentaje recurrente por cada cliente que refieras a nuestra infraestructura.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Sección del Roadmap Dinámico */}
      <Reveal delay={400}>
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Tu camino hacia una infraestructura técnica superior.
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
