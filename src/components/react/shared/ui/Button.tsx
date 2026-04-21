import React, { useState } from "react";

// Definimos las propiedades base
interface BaseProps {
  variant?: "primary" | "secondary" | "glass" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsLink;

interface Ripple {
  key: number;
  x: number;
  y: number;
  size: number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  href,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    if (onClick) onClick(event);

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const radius = Math.max(element.clientWidth, element.clientHeight);
    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;

    const newRipple: Ripple = { key: Date.now(), x, y, size: radius * 2 };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 500);
  };

  const sizeClasses = {
    // DE VUELTA A TU DISEÑO ORIGINAL: rounded-xl
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-4 text-base rounded-full",
    lg: "px-10 py-4 text-lg rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_4px_24px_rgba(255,255,255,0.15)]",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 shadow-[0_4px_24px_rgba(91,123,123,0.3)]",
    glass:
      "bg-white/[0.03] border border-white/10 backdrop-blur-md text-white hover:bg-white/[0.08] hover:border-white/20",
    ghost: "bg-transparent text-white hover:bg-white/5",
    outline:
      "bg-transparent text-white border border-white/20 hover:bg-white hover:text-black",
  };

  const rippleColor =
    variant === "primary" || variant === "outline"
      ? "rgba(0, 0, 0, 0.15)"
      : "rgba(255, 255, 255, 0.2)";

  const combinedClasses = `
    relative overflow-hidden
    inline-flex justify-center items-center gap-2 
    font-medium tracking-wide
    transition-all duration-300
    active:scale-[0.96] 
    disabled:opacity-40 disabled:pointer-events-none
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${fullWidth ? "w-full" : ""} 
    ${className}
  `;

  const innerContent = (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-effect {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-ripple { animation: ripple-effect 500ms ease-out forwards; }
      `}</style>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={createRipple}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      onClick={createRipple}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {innerContent}
    </button>
  );
};
