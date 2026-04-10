import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`w-full bg-white text-black font-medium py-5 rounded-2xl hover:scale-[1.02] transition-transform duration-300 flex justify-center items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
