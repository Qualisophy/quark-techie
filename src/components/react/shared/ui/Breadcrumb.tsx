import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  maxItems?: number; // Si hay más elementos que este número, se autocolapsa
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  maxItems,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3.5 py-1.5",
    lg: "text-base px-4.5 py-2",
  };

  const Separator = () => (
    <span className="flex-shrink-0 mx-1 opacity-30 text-white pointer-events-none select-none">
      <ChevronRight size={14} strokeWidth={2.5} />
    </span>
  );

  // Renderiza un "Crumb" individual
  const renderCrumb = (item: BreadcrumbItem, isLast: boolean) => {
    const isLink = item.href && !isLast;
    const Component = isLink ? "a" : "span";

    return (
      <Component
        href={isLink ? item.href : undefined}
        aria-current={isLast ? "page" : undefined}
        className={`
          inline-flex items-center gap-1.5 rounded-full whitespace-nowrap transition-all duration-200
          ${sizeClasses[size]}
          ${
            isLast
              ? "bg-white/[0.08] border border-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.2)] text-white cursor-default" // Activo
              : "text-gray-300 hover:bg-white/[0.12] hover:text-white hover:-translate-y-[1px] cursor-pointer" // Inactivo
          }
        `}
      >
        {item.icon && (
          <span className="opacity-70 flex-shrink-0">{item.icon}</span>
        )}
        {item.label}
      </Component>
    );
  };

  // Componente interno para el menú desplegable (Elipsis)
  const EllipsisDropdown = ({
    hiddenItems,
  }: {
    hiddenItems: BreadcrumbItem[];
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Cerrar si se hace clic fuera del menú
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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="relative z-[300]" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Mostrar rutas ocultas"
          className={`
            px-2.5 py-1.5 rounded-full text-white transition-all duration-200
            ${isOpen ? "bg-white/[0.12] opacity-100" : "opacity-50 hover:bg-white/[0.12] hover:opacity-100"}
          `}
        >
          <MoreHorizontal size={16} />
        </button>

        {/* El Menú Dropdown */}
        <div
          className={`
            absolute top-[calc(100%+8px)] left-0 min-w-[190px] rounded-[1rem] p-1.5
            bg-black/60 border border-white/10 backdrop-blur-2xl shadow-2xl z-[400]
            transition-all duration-200 origin-top-left
            ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          {hiddenItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/[0.12] hover:text-white cursor-pointer transition-colors"
            >
              {item.icon && <span className="opacity-70">{item.icon}</span>}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    );
  };

  // Lógica principal: Decide si mostrar todos o colapsar con elipsis
  const renderItems = () => {
    if (!maxItems || items.length <= maxItems) {
      // Mostrar todos
      return items.map((item, index) => (
        <React.Fragment key={index}>
          {renderCrumb(item, index === items.length - 1)}
          {index < items.length - 1 && <Separator />}
        </React.Fragment>
      ));
    }

    // Auto-Colapsar: Mostrar el primero, elipsis, y el último
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const middleItems = items.slice(1, -1);

    return (
      <>
        {renderCrumb(firstItem, false)}
        <Separator />
        <EllipsisDropdown hiddenItems={middleItems} />
        <Separator />
        {renderCrumb(lastItem, true)}
      </>
    );
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`
        inline-flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md
        max-w-full overflow-visible ${className}
      `}
    >
      {renderItems()}
    </nav>
  );
};
