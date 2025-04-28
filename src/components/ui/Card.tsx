import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "error" | "success";
}

export function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  // Base styles
  const baseStyles = "p-6 rounded-xl shadow-md w-full";

  // Variant styles
  const variantStyles = {
    default: "bg-white",
    error: "bg-white border-l-4 border-red-500",
    success: "bg-white border-l-4 border-green-500",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
