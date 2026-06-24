import { ReactNode } from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  helperText?: string;
}

export function Input({
  label,
  error,
  icon,
  helperText,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-semibold text-navy-900">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          className={`w-full px-4 py-3 border-1.5 border-gray-300 rounded-12 font-body text-base text-navy-900 outline-none transition-colors placeholder:text-gray-600 focus:border-yellow-500 focus:bg-white ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute right-4 flex items-center text-gray-600">
            {icon}
          </div>
        )}
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
      {helperText && !error && (
        <span className="text-xs text-gray-600">{helperText}</span>
      )}
    </div>
  );
}
