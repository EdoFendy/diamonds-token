import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Section({ children, title, className = '' }: SectionProps) {
  return (
    <div
      className={`
        relative w-full max-w-7xl mx-auto px-4 
        mb-8 rounded-xl 
        bg-white/80 backdrop-blur-sm
        border border-[#d4af37]/20
        shadow-[0_0_20px_rgba(212,175,55,0.1)]
        ${className}
      `}
    >
      {title && (
        <h2 className="text-3xl font-bold text-gold py-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
