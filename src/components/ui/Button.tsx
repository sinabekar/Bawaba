import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent" | "white";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/30",
  secondary:
    "bg-secondary text-white hover:bg-secondary-700 focus-visible:ring-secondary/30 shadow-[0_1px_2px_rgba(10,15,13,0.06),0_8px_20px_-6px_rgba(14,169,104,0.45)]",
  accent:
    "bg-accent text-primary hover:bg-accent/90 focus-visible:ring-accent/30",
  outline:
    "bg-transparent text-primary border border-primary/15 hover:bg-primary/[0.03] hover:border-primary/25 focus-visible:ring-primary/20",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",
  white:
    "bg-white text-primary hover:bg-gray-50 focus-visible:ring-white/30 shadow-sm",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-sm gap-2",
  xl: "h-15 px-9 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  leftIcon,
  rightIcon,
  loading,
  fullWidth,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-full
    transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : leftIcon}
      {children}
      {!loading && rightIcon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseStyles} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
