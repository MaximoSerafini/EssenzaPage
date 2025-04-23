import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  featured = false
}) => {
  return (
    <div 
      className={`
        rounded-lg overflow-hidden shadow-md transition-all duration-300
        ${featured ? 'bg-gradient-to-br from-blue-900 to-blue-950 text-white ring-2 ring-blue-400' : 'bg-white hover:shadow-lg'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};