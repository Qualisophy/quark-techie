import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({
  className = "",
  ...props
}) => {
  return (
    <textarea
      className={`w-full bg-black/50 border border-white/10 rounded-2xl p-5 text-white focus:border-secondary focus:bg-black/80 outline-none transition-all placeholder:text-gray-600 font-light resize-none ${className}`}
      {...props}
    />
  );
};
