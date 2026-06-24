import { ReactNode } from "react";

type BadgeVariant = "navy" | "magenta" | "yellow" | "success";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "navy", className = "" }: BadgeProps) {
  const variantClasses = {
    navy: "bg-navy-50 text-navy-700",
    magenta: "bg-magenta-50 text-magenta-700",
    yellow: "bg-yellow-50 text-yellow-700",
    success: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded-4 text-xs font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
