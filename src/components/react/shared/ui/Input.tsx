import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full bg-black/50 border border-white/10 rounded-2xl p-5 text-white focus:border-secondary focus:bg-black/80 outline-none transition-all placeholder:text-gray-600 font-light ${className}`}
      {...props}
    />
  );
};
