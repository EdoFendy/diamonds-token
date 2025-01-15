import React from 'react';

export function SolanaLogo() {
  return (
    <div className="relative w-32 h-32 transform perspective-1000 group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
      <div className="relative w-full h-full animate-float-slow">
        <svg viewBox="0 0 397 311" className="w-full h-full">
          <path
            className="fill-current text-purple-600"
            d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
          />
          <path
            className="fill-current text-blue-500"
            d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
          />
          <path
            className="fill-current text-purple-500"
            d="M332.3 120.8c-2.4-2.4-5.7-3.8-9.2-3.8H5.8c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.8-62.7z"
          />
        </svg>
      </div>
    </div>
  );
}