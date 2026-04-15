import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonText?: string;
  href?: string;
}

export const CTA: React.FC<CTAProps> = ({
  buttonText = "Empezar Colaboración",
  href = "/contacto",
  className = "",
  children, // <-- Añadimos children a las props
  ...props
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-[2.5rem]
        p-12 text-center
        ${className}
      `}
      {...props}
    >
      {/* Renderizamos el texto persuasivo aquí */}
      {children}

      {/* Renderizamos el botón debajo */}
      <div className={children ? "mt-10" : ""}>
        <Button
          href={href}
          variant="primary"
          size="lg"
          className="inline-flex items-center gap-2"
        >
          {buttonText} <ArrowUpRight size={20} />
        </Button>
      </div>
    </div>
  );
};
