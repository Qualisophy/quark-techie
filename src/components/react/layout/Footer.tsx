import React from "react";

export const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-8 px-6 mt-auto w-full bg-transparent border-t border-white/10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <a
            href="/"
            className="flex items-center gap-2.5 opacity-100 transition-opacity"
          >
            <img
              src="/logo_header.png"
              alt="Logo Empresa"
              className="w-6 h-6"
            />
            <span className="font-bold tracking-tighter text-base text-white uppercase">
              QUARK TECHIE
            </span>
          </a>
          <p className="text-gray-300 text-[14px] font-light max-w-[350px] leading-relaxed">
            Innovación tecnológica y soluciones digitales avanzadas en la
            frontera de la tecnología actual.
          </p>
        </div>

        {/* Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/5">
          {/* Columna 1: ¿Colaboramos? */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              ¿Colaboramos?
            </h4>
            <ul className="flex flex-col gap-2.5 text-gray-300 text-[13px] font-light">
              <li>
                <a
                  href="/soluciones"
                  className="hover:text-white transition-colors"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="/partnership"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Partnership{" "}
                  <span className="text-[10px] bg-[#288B88]/10 px-2 py-0.5 rounded-full text-[#288B88] border border-[#288B88]/20">
                    Empresas
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Encuentra Talento (Nueva) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Encuentra Talento
            </h4>
            <ul className="flex flex-col gap-2.5 text-gray-300 text-[13px] font-light">
              <li>
                <a
                  href="/talent-hub"
                  className="hover:text-white transition-colors"
                >
                  Talent Hub
                </a>
              </li>
              <li>
                {/* <a
                  href="/talent-hub/antiguos-alumnos"
                  className="hover:text-white transition-colors"
                >
                  Base de Candidatos
                </a> */}
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5 text-gray-300 text-[13px] font-light">
              <li>
                <a
                  href="/privacidad"
                  className="hover:text-white transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/terminos"
                  className="hover:text-white transition-colors"
                >
                  Términos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Contacto
            </h4>
            <div className="flex flex-col gap-4 text-gray-300 text-[13px] font-light">
              <a
                href="mailto:hello@quark-techie.com"
                className="hover:text-[#288B88] transition-colors flex items-center gap-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 group-hover:text-[#288B88]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                hello@quark-techie.com
              </a>
              <a
                href="tel:+34951768789"
                className="hover:text-[#288B88] transition-colors flex items-center gap-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 group-hover:text-[#288B88]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +34 951 768 789
              </a>
              <a
                href="https://maps.google.com/?q=Calle+Esteban+Salazar+Chapela+11,+Málaga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#288B88] transition-colors flex items-start gap-2 group leading-relaxed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 mt-1 group-hover:text-[#288B88]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Calle Esteban Salazar Chapela 11,
                  <br />
                  Málaga, España
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <p className="text-gray-500 text-[11px] font-light uppercase tracking-widest">
            QUARK TECHIE® - MARCA REGISTRADA {new Date().getFullYear()}
          </p>

          <div className="flex gap-6 items-center justify-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
