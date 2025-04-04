import React from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = "",
  hoverEffect = true,
}) => {
  return (
    <div 
      className={`
        bg-gray-800 rounded-xl p-6
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-400 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
};
