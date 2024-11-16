import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const variantClasses = {
  default: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  destructive: "bg-red-500 text-white",
  outline: "border border-gray-500 text-gray-500",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
