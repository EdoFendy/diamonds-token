import React from 'react';
import { Diamond } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-1.5 transform transition-all duration-300 hover:scale-105">
      <Diamond className="w-8 h-8 text-[#d4af37]" />
      <span className="text-2xl font-bold text-gold">
        DMNS
      </span>
    </div>
  );
}