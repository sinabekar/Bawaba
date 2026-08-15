import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { icon: 30, text: 16 },
  md: { icon: 38, text: 20 },
  lg: { icon: 50, text: 26 },
};

/**
 * Mark: a doorway (arch) with a bridge deck crossing through and past it —
 * literal "door + bridge" read as a single clean glyph, in a rounded-square
 * badge (the app-icon convention modern fintech/SaaS brands use — Mercury,
 * Ramp, Linear). The badge itself doesn't change with the light/dark page
 * variant; only the separate wordmark's color does, since the badge is
 * self-contained and reads fine on any background.
 */
export default function DorbrijLogo({
  variant = "dark",
  showWordmark = true,
  size = "md",
  className = "",
}: LogoProps) {
  const { icon } = sizes[size];
  const textColor = variant === "light" ? "#FFFFFF" : "#0A0F0D";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="10" fill="url(#dorbrij-badge)" />
        {/* Doorway */}
        <path
          d="M12 27V17a6 6 0 0 1 12 0v10"
          fill="#FFFFFF"
        />
        {/* Bridge deck, crossing through and past the doorway */}
        <rect x="6" y="19.25" width="24" height="2.6" rx="1.3" fill="#07341F" />
        <rect x="6" y="21.85" width="2.6" height="5.15" rx="1" fill="#07341F" />
        <rect x="27.4" y="21.85" width="2.6" height="5.15" rx="1" fill="#07341F" />
        <defs>
          <linearGradient id="dorbrij-badge" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1BD692" />
            <stop offset="1" stopColor="#0B8654" />
          </linearGradient>
        </defs>
      </svg>

      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: sizes[size].text,
            fontWeight: 800,
            color: textColor,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
          dir="ltr"
        >
          Dorbrij
        </span>
      )}
    </div>
  );
}
