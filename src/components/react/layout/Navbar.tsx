import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../shared/ui/Button";


export const Navbar = ({ currentPath }: { currentPath: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/soluciones", label: "Soluciones" },
    { href: "/partnership", label: "Partnership" },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-50 px-6 pt-6 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 w-full max-w-4xl rounded-full border backdrop-blur-2xl px-6 py-3 flex items-center justify-between ${
            scrolled
              ? "bg-[#0a0a0a]/60 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-1 outline-none group">
            <img 
              src="/logo_header.png" 
              alt="Logo Empresa" 
              className="w-8 h-8 object-contain transition-transform duration-1500 ease-in-out" 
            />
            <span className="text-xl font-bold tracking-tight text-white mt-1">
              QUARK <span className="font-light text-gray-400">TECHIE</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base tracking-wide transition-colors outline-none font-medium ${
                  currentPath === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href="/contacto" size="sm">
              Contacto
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl pt-32 px-6 flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-left text-4xl font-semibold tracking-tighter ${
                currentPath === link.href ? "text-white" : "text-gray-500"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button href="/contacto" size="lg">
            Contacto
          </Button>
        </div>
      )}
    </>
  );
};
