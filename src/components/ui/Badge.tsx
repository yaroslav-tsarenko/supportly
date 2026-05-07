import { type ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#EAF2FF] text-[#0B57D0]",
  success: "bg-[#DDF4E4] text-[#1A7F37]",
  warning: "bg-[#FFE4C2] text-[#9A5700]",
};

export default function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
