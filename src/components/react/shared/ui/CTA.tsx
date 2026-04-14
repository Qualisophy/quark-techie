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
        <Button href={href} variant="primary" size="lg">
          {buttonText} <ArrowUpRight size={20} />
        </Button>
    </div>
  );
};