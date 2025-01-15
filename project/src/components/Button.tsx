import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string; // <---- AGGIUNTO
}

export function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        px-6 py-2 rounded-lg text-sm font-bold
        transform transition-all duration-300 hover:scale-[1.02]
        shadow-[0_0_10px_rgba(0,0,0,0.2)]
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
          : 'bg-black text-[#d4af37] border border-[#d4af37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
        }
      `}
    >
      {children}
    </button>
  );
}
