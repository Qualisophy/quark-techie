import React from "react";

const colors = { teal: "#288B88", gold: "#E8D33F" };

export const QuarkLogo = ({
  className = "w-10 h-10",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="grad1"
        x1="20"
        y1="20"
        x2="80"
        y2="80"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor={colors.teal} />
        <stop offset="100%" stopColor={colors.gold} />
      </linearGradient>
      <linearGradient
        id="grad2"
        x1="20"
        y1="80"
        x2="80"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor={colors.teal} />
        <stop offset="100%" stopColor={colors.gold} />
      </linearGradient>
    </defs>
    <path
      d="M 20 20 Q 50 10, 80 80 Q 50 90, 20 20"
      stroke="url(#grad1)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="20" cy="20" r="5" fill={colors.teal} />
    <circle cx="80" cy="80" r="3" fill={colors.gold} />
    <path
      d="M 20 80 Q 10 50, 80 20 Q 90 50, 20 80"
      stroke="url(#grad2)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="20" cy="80" r="5" fill={colors.teal} />
    <circle cx="80" cy="20" r="6" fill={colors.gold} />
  </svg>
);
