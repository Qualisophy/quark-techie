import React from "react";
import { Reveal } from "../shared/Reveal";
import { Rocket, Cog, Settings, Link, Activity, Workflow, ShoppingCart, Server } from "lucide-react";

export const WhatWeDo = () => {
  return (
    <div className="w-full flex flex-col items-center">
        <section className="py-32 px-6 w-full max-w-7xl mx-auto">
        <Reveal delay={150}>

            {/* Kicker */}
            <div className="text-center mb-6">
                <span className="text-sm md:text-lg tracking-[0.3em] text-gray-400 font-medium uppercase">
                    SERVICIOS
                </span>
            </div>

            {/* Cuadro */}
            <div className="relative w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl
                            px-6 py-10 md:p-14 overflow-hidden group transition-colors duration-500">

                {/* Efectos de Luz */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#288B88]/20 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>

                {/* BLOQUE SUPERIOR:Contenido */}
                <div className="relative z-10 flex flex-col md:flex-row gap-10 items-stretch">
              
                    {/* SUB-BLOQUE IZQUIERDO: Título y Párrafo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">

                        <h1 className="text-[clamp(1rem,5.2vw,1.875rem)] md:text-3xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                            Soluciones Técnicas para Retos Complejos.
                        </h1>

                        <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed w-full">
                            Transformamos visiones en productos digitales de alto   
                            rendimiento a través de un enfoque pragmático, tecnológico y   
                            orientado a resultados.  
                        </p>

                    </div>

                    {/* SUB-BLOQUE DERECHO: Imagen */}
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative aspect-video md:aspect-auto">
                        <img
                            src="https://www.intarex.com/wp-content/uploads/2022/06/Captura-de-Pantalla-2022-08-16-a-las-11-compressed-thegem-blog-default.webp"
                            alt="Quark Techie Logo"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* BLOQUE INFERIOR: Pilares de Servicio */}
                <div className="mt-20">

                    <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tighter">
                        Pilares de servicio
                    </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl p-6
                                        hover:bg-white/[0.06] transition-colors duration-300 flex flex-col justify-center h-full
                                        text-center md:text-left">
                            
                            <Rocket className="w-9 h-9 text-white mx-auto md:mx-0 mb-2" strokeWidth={1.5} />

                            <h3 className="text-white font-semibold text-lg mb-3 whitespace-nowrap">
                                MVP de Alto Impacto
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Convertimos tu idea en un producto funcional en tiempo récord.
                                Validamos tu modelo de negocio con arquitecturas escalables
                                preparadas para crecer desde el primer día.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl p-6
                                        hover:bg-white/[0.06] transition-colors duration-300 flex flex-col justify-center h-full
                                        text-center md:text-left">

                            <Settings className="w-9 h-9 text-white mx-auto md:mx-0 mb-2" strokeWidth={1.5} />
                            
                            <h3 className="text-white font-semibold text-lg mb-3 whitespace-nowrap">
                                Digitalización Estratégica
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Optimizamos procesos críticos mediante software personalizado.
                                Eliminamos cuellos de botella tecnológicos para potenciar la
                                eficiencia operativa de tu equipo.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl p-6
                                        hover:bg-white/[0.06] transition-colors duration-300 flex flex-col justify-center h-full
                                        text-center md:text-left">
                                            
                            <ShoppingCart className="w-9 h-9 text-white mx-auto md:mx-0 mb-2" strokeWidth={1.5} />
                            
                            <h3 className="text-white font-semibold text-lg mb-3 whitespace-nowrap">
                                Experiencias de Venta Pro
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Diseñamos plataformas de venta online optimizadas para la conversión.
                                Arquitecturas seguras y fluidas que garantizan una experiencia de usuario
                                superior y robusta.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-xl p-6
                                        hover:bg-white/[0.06] transition-colors duration-300 flex flex-col justify-center h-full
                                        text-center md:text-left">

                            <Server className="w-9 h-9 text-white mx-auto md:mx-0 mb-2" strokeWidth={1.5} />
                            
                            <h3 className="text-white font-semibold text-lg mb-3 whitespace-nowrap">
                                Ingeniería de Software
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Resolvemos retos complejos de infraestructura y arquitectura. Desde migraciones
                                de sistemas hasta la implementación de soluciones cloud de alta disponibilidad.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </Reveal>
        </section>
    </div>
  );
};