import React from "react";

type BadgeVariant = "default" | "primary" | "secondary" | "accent" | "success" | "muted";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-primary/[0.06] text-primary",
  secondary: "bg-secondary/10 text-secondary-700",
  accent: "bg-accent/15 text-accent-600",
  success: "bg-success/10 text-success",
  muted: "bg-gray-50 text-gray-500 border border-gray-200",
};

export default function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
