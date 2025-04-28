import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  // Base styles for all buttons
  const baseStyles =
    "font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50";

  // Variant styles
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
  };

  // Size styles
  const sizeStyles = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2.5 px-4",
    lg: "py-3 px-5 text-lg",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Loading state
  const loadingStyles = isLoading ? "opacity-70 cursor-not-allowed" : "";

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${loadingStyles} ${className}`;

  return (
    <button
      className={buttonStyles}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
