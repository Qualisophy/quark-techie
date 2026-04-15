import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  prefix?: string; // Por si queremos poner "Ordenar por: " antes del valor
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  onChange,
  icon,
  prefix,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  return (
    <div
      className="relative inline-block text-left w-full sm:w-auto"
      ref={dropdownRef}
    >
      {/* Botón Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full sm:w-auto gap-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2.5 text-sm text-gray-300 hover:bg-white/[0.06] transition-colors outline-none focus:ring-2 focus:ring-[#288B88]/50"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-[#E8D33F]">{icon}</span>}
          <span>
            {prefix && <span className="opacity-50">{prefix} </span>}
            {selectedOption.label}
          </span>
        </div>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Menú Desplegable (Glassmorphism) */}
      <div
        className={`absolute right-0 sm:left-0 z-50 mt-2 w-56 origin-top-right rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-1.5 transition-all duration-200 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-0.5" role="menu">
          {options.map((option) => {
            const isActive = option.value === value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors ${
                  isActive
                    ? "bg-[#288B88]/20 text-[#288B88] font-medium"
                    : "text-gray-300 hover:bg-white/[0.06] hover:text-white"
                }`}
                role="menuitem"
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
