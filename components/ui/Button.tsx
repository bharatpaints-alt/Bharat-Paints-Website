import { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost"
  | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  asLink = false,
  href = "#",
  onClick,
  disabled = false,
  className = "",
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-12 transition-all whitespace-nowrap";

  const sizeClasses = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-13 px-8 text-base",
  };

  const variantClasses = {
    primary:
      "bg-yellow-500 text-navy-900 shadow-cta hover:bg-yellow-600 active:scale-95",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-700 active:scale-95",
    accent:
      "bg-magenta-600 text-white shadow-cta hover:bg-magenta-500 active:scale-95",
    outline:
      "border-2 border-navy-900 text-navy-900 hover:bg-navy-50 active:scale-95",
    ghost: "text-navy-700 hover:text-navy-900 hover:underline",
    whatsapp:
      "bg-whatsapp text-white hover:bg-green-600 active:scale-95 shadow-cta",
  };

  const disabledClasses = disabled ? "opacity-50 pointer-events-none" : "";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (asLink) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
