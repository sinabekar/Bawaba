import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { icon: 28, text: 16 },
  md: { icon: 36, text: 20 },
  lg: { icon: 48, text: 26 },
};

export default function BawabaLogo({
  variant = "dark",
  showWordmark = true,
  size = "md",
  className = "",
}: LogoProps) {
  const { icon } = sizes[size];
  const textColor = variant === "light" ? "#FFFFFF" : "#0F172A";
  const iconPrimary = variant === "light" ? "#FFFFFF" : "#0B6E4F";
  const iconAccent = "#C89B3C";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon: Gateway arch */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Arch body */}
        <path
          d="M4 32V18C4 10.268 10.268 4 18 4C25.732 4 32 10.268 32 18V32"
          stroke={iconPrimary}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left pillar */}
        <rect x="4" y="22" width="5" height="10" rx="1" fill={iconPrimary} />
        {/* Right pillar */}
        <rect x="27" y="22" width="5" height="10" rx="1" fill={iconPrimary} />
        {/* Base */}
        <rect x="2" y="31" width="32" height="3" rx="1.5" fill={iconAccent} />
        {/* Keystone accent */}
        <circle cx="18" cy="6" r="2.5" fill={iconAccent} />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: sizes[size].text,
            fontWeight: 800,
            color: textColor,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Bawaba
        </span>
      )}
    </div>
  );
}
