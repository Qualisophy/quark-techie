import React from "react";
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
    <section className="w-full flex flex-col items-center pt-24 pb-16">
      {/* 1. CABECERA UNIFICADA (Fuera del carrusel, manteniendo la consistencia de la web) */}
      <div className="text-center mb-12 max-w-4xl mx-auto px-6">
        <p className="text-[#288B88] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          STACK TECNOLÓGICO
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Tecnologías de vanguardia que impulsan nuestro código.
        </h2>
      </div>

      {/* 2. CONTENEDOR DEL CARRUSEL (Con bordes sutiles y fondo) */}
      <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.01]">
        {/* Añadimos pb-12 para dar espacio vertical y que el tooltip no se corte con el overflow-hidden */}
        <div className="flex animate-marquee w-max items-center whitespace-nowrap pt-8 pb-12">
          {marqueeTechs.map((tech, idx) => {
            const IconComponent = tech.Icon;
            return (
              <div
                key={idx}
                className="mx-8 md:mx-12 flex flex-col items-center justify-center group cursor-pointer relative"
              >
                {/* Logo SVG */}
                <IconComponent className="w-12 h-12 text-white/30 group-hover:text-white transition-colors duration-300 relative z-10" />

                {/* Tooltip / Nombre de la tecnología */}
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-8 whitespace-nowrap drop-shadow-md z-0 translate-y-2 group-hover:translate-y-0">
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
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
