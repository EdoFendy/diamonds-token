import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = '' }: Card3DProps) {
  return (
    <div
      className={`
        relative group overflow-hidden
        ${className}
      `}
    >
      <div
        className="
          relative p-6 rounded-xl
          bg-white/90 backdrop-blur-sm border border-[#d4af37]/20
          shadow-[0_0_20px_rgba(212,175,55,0.1)]
          transition-transform duration-300 transform perspective-1000
          group-hover:rotate-1 group-hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]
        "
      >
        {children}
      </div>
      {/* alone/gradiente dorato che appare all’hover */}
      <div
        className="
          absolute inset-0 pointer-events-none
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/20
          rounded-xl
          -z-10
        "
      />
    </div>
  );
}
