import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}) => {
  // Button styles based on variant
  const variantStyles = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "bg-transparent border border-gray-700 text-white hover:bg-gray-800",
  };

  // Button styles based on size
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `
    font-medium rounded-lg transition-colors
    flex items-center justify-center
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};