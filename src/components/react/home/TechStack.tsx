import React, { useState } from "react";
import {
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaReact,
  FaAngular,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaVial,
} from "react-icons/fa";
import {
  SiExpress,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiNextdotjs,
  SiCloudflare,
  SiKubernetes,
  SiVercel,
  SiRender,
  SiSelenium,
  SiRobotframework,
  SiCucumber,
  SiCypress,
  SiPostman,
  SiJira,
} from "react-icons/si";

export const TechStack = () => {
  // Estado para controlar qué icono está activo (tocado/hovered)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const stack = [
    // Backend
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Express", Icon: SiExpress },
    { name: "NestJS", Icon: SiNestjs },
    { name: "Python", Icon: FaPython },
    { name: "Java", Icon: FaJava },
    { name: "PHP", Icon: FaPhp },
    { name: "MySQL", Icon: SiMysql },
    { name: "MongoDB", Icon: SiMongodb },
    // Frontend
    { name: "Astro", Icon: SiAstro },
    { name: "React", Icon: FaReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Angular", Icon: FaAngular },
    // Cloud & DevOps
    { name: "AWS", Icon: FaAws },
    { name: "Cloudflare", Icon: SiCloudflare },
    { name: "Docker", Icon: FaDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "Vercel", Icon: SiVercel },
    { name: "Render", Icon: SiRender },
    { name: "Aiven", Icon: FaDatabase },
    // QA & Testing
    { name: "Selenium", Icon: SiSelenium },
    { name: "Robot", Icon: SiRobotframework },
    { name: "Playwright", Icon: FaVial },
    { name: "Cucumber", Icon: SiCucumber },
    { name: "Cypress", Icon: SiCypress },
    { name: "Postman", Icon: SiPostman },
    // Herramientas & Control de Versiones
    { name: "Jira", Icon: SiJira },
    { name: "Git", Icon: FaGitAlt },
    { name: "GitHub", Icon: FaGithub },
    { name: "GitLab", Icon: FaGitlab },
  ];

  const marqueeTechs = [...stack, ...stack];

  return (
    <section
      className="w-full flex flex-col items-center pt-24 pb-16"
      // Si el usuario toca en el fondo de la sección, se limpia el estado y se reanuda el carrusel
      onClick={() => setActiveIndex(null)}
    >
      {/* 1. CABECERA UNIFICADA */}
      <div className="text-center mb-12 max-w-4xl mx-auto px-6">
        <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          STACK TECNOLÓGICO
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Tecnologías de vanguardia que impulsan nuestro código.
        </h2>
      </div>

      {/* 2. CONTENEDOR DEL CARRUSEL */}
      <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.01]">
        <div
          className="flex animate-marquee w-max items-center whitespace-nowrap pt-8 pb-12"
          // En móvil pausamos pasándole 'paused' si hay un índice activo.
          // Si no, lo dejamos indefinido para que mande el CSS y el :hover de escritorio siga funcionando nativo.
          style={{
            animationPlayState: activeIndex !== null ? "paused" : undefined,
          }}
        >
          {marqueeTechs.map((tech, idx) => {
            const IconComponent = tech.Icon;
            // Comprobamos si este icono en concreto es el que el usuario ha tocado
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                className="mx-8 md:mx-12 flex flex-col items-center justify-center group cursor-pointer relative"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={(e) => {
                  // Evitamos que el toque se propague a la sección principal y cierre el tooltip
                  e.stopPropagation();
                  // Si tocamos el que ya está activo, lo apagamos. Si no, lo encendemos.
                  setActiveIndex(isActive ? null : idx);
                }}
              >
                {/* Logo SVG - Combina estado activo (móvil) y hover nativo (escritorio) */}
                <IconComponent
                  className={`w-12 h-12 transition-colors duration-300 relative z-10 ${
                    isActive
                      ? "text-white"
                      : "text-white/30 group-hover:text-white"
                  }`}
                />

                {/* Tooltip / Nombre de la tecnología */}
                <span
                  className={`text-[11px] font-semibold uppercase tracking-widest text-white/80 transition-all duration-300 absolute -bottom-8 whitespace-nowrap drop-shadow-md z-0 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inyección de CSS para la animación infinita */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        /* El hover de escritorio sigue pausando por CSS puro para mayor rendimiento */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
