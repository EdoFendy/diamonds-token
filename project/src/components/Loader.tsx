import React, { useEffect, useState } from 'react';
import logoSolo from '../images/logo_solo.png';

type LoaderProps = {
  onFinish: () => void;
};

export function Loader({ onFinish }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let maxWait: ReturnType<typeof setTimeout>;

    // 1) Incremento progressivo fino al 90%
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + 10;
        }
        return prev;
      });
    }, 500);

    // 2) Fallback: dopo 8 secondi, se non è scattato `window.load`, mettiamo 100%
    maxWait = setTimeout(() => {
      setProgress(100);
    }, 8000);

    // 3) Evento `load` su window: quando TUTTE le risorse sono caricate
    const handleLoad = () => {
      clearTimeout(maxWait);
      setProgress(100);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearInterval(interval);
      clearTimeout(maxWait);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    // Quando progress è 100, aspettiamo un attimo e chiamiamo onFinish
    if (progress === 100) {
      const timer = setTimeout(() => {
        onFinish();
      }, 500); // Se vuoi un effetto "terminale" di mezzo secondo

      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <div
      className="
        fixed inset-0 flex flex-col items-center justify-center
        bg-white z-50
      "
    >
      {/* Logo */}
      <img
        src={logoSolo}
        alt="DMNS Logo"
        className="w-24 h-auto mb-4"
      />

      {/* Testo "Loading" */}
      <p className="text-xl font-semibold mb-2">Loading...</p>

      {/* Barra di avanzamento */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#bf953f]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
