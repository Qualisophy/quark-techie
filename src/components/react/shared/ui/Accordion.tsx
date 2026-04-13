import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Tipo para cada elemento del acordeón
export interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  allowMultiple?: boolean; // Por si algún día quieres que se puedan abrir varios a la vez
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className = "",
  allowMultiple = false,
}) => {
  // Por defecto, abrimos el primer elemento (índice 0)
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-[1.25rem] 
              bg-white/[0.03] border backdrop-blur-md
              transition-colors duration-500
              ${isOpen ? "border-white/20" : "border-white/10"}
            `}
          >
            {/* Cabecera / Botón (Trigger) */}
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left text-white hover:bg-white/[0.05] transition-colors"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              <span className="font-medium tracking-wide pr-4">
                {item.title}
              </span>

              {/* Icono animado del estado */}
              <span
                className={`
                  flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300
                  ${
                    isOpen
                      ? "bg-secondary/20 border-secondary/50 text-secondary rotate-180" // Estado abierto (Tono Cian/Teal)
                      : "bg-white/5 border-white/10 text-gray-400 rotate-0" // Estado cerrado
                  }
                `}
              >
                <ChevronDown size={16} strokeWidth={2.5} />
              </span>
            </button>

            {/* Contenido / Cuerpo animado con CSS Grid */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
