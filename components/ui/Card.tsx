import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
}

export function Card({ children, hoverable = false, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-300 rounded-16 box-shadow-card overflow-hidden transition-all ${
        hoverable ? "hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
