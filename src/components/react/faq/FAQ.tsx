import React from "react";
import { Reveal } from "../shared/Reveal";
// TODO: El equipo debe importar el componente Accordion desde shared/ui
import { Button } from "../shared/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const FAQ = () => {
  /* =======================================================================
    👨‍💻 ATENCIÓN EQUIPO:
    =======================================================================
    Aquí es donde definimos el contenido de las Preguntas Frecuentes.
    En el futuro, esto podría venir de una API, de Sanity o de un CMS headless.
    
    Reglas para estructurar los datos:
    1. 'title' acepta texto plano (string).
    2. 'content' acepta texto plano O etiquetas HTML/React (JSX) si 
       necesitáis incluir negritas, enlaces o saltos de línea estructurales.
  */
  const faqData = [
    {
      title: "¿Qué es exactamente la arquitectura 'Liquid Glass'?",
      content:
        "Es nuestro lenguaje de diseño propietario. Combina fondos oscuros, desenfoques profundos (backdrop-filter) y transparencias calculadas para crear interfaces que parecen físicas y modernas, inspiradas en los estándares más altos de Silicon Valley.",
    },
    {
      title: "¿Cuánto tarda Quark Techie en entregar un MVP?",
      content:
        "Nuestro estándar para un MVP funcional, escalable y con código limpio es de 4 a 6 semanas. No usamos plantillas, construimos desde cero utilizando frameworks modernos como Astro, React y Node.js.",
    },
    {
      title: "¿Ofrecéis mantenimiento después del lanzamiento?",
      content: (
        <>
          Sí. Entendemos que el software es un ente vivo. Ofrecemos planes de{" "}
          <strong>Retainer Tecnológico</strong> para asegurar actualizaciones de
          seguridad, mejoras de rendimiento y desarrollo continuo de nuevas
          features.
        </>
      ),
    },
    {
      title: "¿Firmáis acuerdos de confidencialidad (NDA)?",
      content:
        "Por supuesto. Operamos bajo estrictos estándares de seguridad y privacidad. Todo el código generado es propiedad de tu empresa al finalizar los pagos del proyecto.",
    },
  ];

  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col">
      {/* CABECERA DE LA PÁGINA */}
      <Reveal className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-white">
          Preguntas Frecuentes.
        </h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
          Transparencia absoluta. Todo lo que necesitas saber sobre nuestro
          proceso, stack tecnológico y metodología de trabajo.
        </p>
      </Reveal>

      {/* =======================================================================
        👨‍💻 TAREA PARA EL EQUIPO:
        1. Importad el componente <Accordion /> en la parte superior del archivo.
        2. Reemplazad el <div> punteado de abajo por el componente.
        3. Pasadle la variable 'faqData' a través de la prop 'items'.
        Nota: El componente ya gestiona el estilo Liquid Glass, ¡no añadáis clases 
        CSS de Tailwind adicionales al contenedor!
        =======================================================================
      */}
      <Reveal delay={200} className="w-full mb-24">
        {/* TODO: Reemplazar este div por el componente Accordion */}
        <div className="p-12 border-2 border-dashed border-white/20 rounded-3xl text-center flex flex-col items-center justify-center bg-white/[0.01]">
          <span className="text-gray-400 font-medium mb-2">
            Área reservada para el Acordeón
          </span>
          <code className="text-sm text-[#E8D33F] bg-black/50 px-3 py-1 rounded-lg">
            &lt;Accordion items=&#123;faqData&#125; /&gt;
          </code>
        </div>
      </Reveal>

      {/* SECCIÓN DE CIERRE (CTA) */}
      <Reveal
        delay={400}
        className="w-full text-center bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-12 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">
          ¿No encuentras lo que buscas?
        </h3>
        <p className="text-gray-400 font-light mb-8 max-w-lg mx-auto">
          Nuestros arquitectos de software están disponibles para resolver
          cualquier duda técnica o de negocio sobre tu proyecto.
        </p>
        <Button
          href="/contacto"
          variant="primary"
          size="lg"
          className="sm:w-auto mx-auto"
        >
          Contactar con el equipo <ArrowUpRight size={20} />
        </Button>
      </Reveal>
    </div>
  );
};
