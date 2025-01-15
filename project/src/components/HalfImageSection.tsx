import React, { ReactNode } from 'react';

interface HalfImageSectionProps {
  title: string;
  text: string[]; // array di paragrafi
  imgSrc: string;
  imagePosition?: 'left' | 'right';
  bgClass?: string;
  icon?: ReactNode; // facoltativo, per un'icona grande
}

export function HalfImageSection({
  title,
  text,
  imgSrc,
  imagePosition = 'left',
  bgClass = 'bg-white',
  icon
}: HalfImageSectionProps) {
  // Se l'immagine è a sinistra, invertiamo le colonne in mzzzodo responsive
  const flexDirection = imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`relative py-16 ${bgClass}`}>
      <div className={`max-w-6xl mx-auto px-6 flex flex-col ${flexDirection} items-center gap-8`}>
        {/* Immagine */}
        <div className="flex-1 flex justify-center">
          <img
            src={imgSrc}
            alt="Placeholder"
            className="w-80 md:w-96 object-contain drop-shadow-xl"
          />
        </div>
        
        {/* Contenuto */}
        <div className="flex-1 text-center md:text-left">
          {icon && (
            <div className="flex justify-center md:justify-start mb-4">
              {icon}
            </div>
          )}
          <h2 className="text-3xl font-bold text-gold mb-4">{title}</h2>
          {text.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
