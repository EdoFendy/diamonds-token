// SolanaSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SolanaLogo } from './SolanaLogo';

export function SolanaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 flex justify-center">
      <div className="
        w-full max-w-5xl mx-4 
        bg-white/80 backdrop-blur-sm
        border border-[#d4af37]/30
        shadow-[0_10px_30px_rgba(212,175,55,0.1)]
        rounded-xl
        p-8
      ">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <SolanaLogo />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              {t('solana.title')}
            </h2>
            <p
              className="text-gray-800 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t('solana.paragraph1'),
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Speed */}
              <div className="p-4 rounded-lg bg-white/90 border border-[#d4af37]/30 shadow-sm">
                <h3 className="text-lg font-bold text-gold mb-1">
                  {t('solana.speedTitle')}
                </h3>
                <p className="text-sm text-gray-700">
                  {t('solana.speedDesc')}
                </p>
              </div>
              {/* Cost */}
              <div className="p-4 rounded-lg bg-white/90 border border-[#d4af37]/30 shadow-sm">
                <h3 className="text-lg font-bold text-gold mb-1">
                  {t('solana.costTitle')}
                </h3>
                <p className="text-sm text-gray-700">
                  {t('solana.costDesc')}
                </p>
              </div>
              {/* Ecosystem */}
              <div className="p-4 rounded-lg bg-white/90 border border-[#d4af37]/30 shadow-sm">
                <h3 className="text-lg font-bold text-gold mb-1">
                  {t('solana.ecosystemTitle')}
                </h3>
                <p className="text-sm text-gray-700">
                  {t('solana.ecosystemDesc')}
                </p>
              </div>
            </div>

            {/* Liquidity */}
            <div className="mt-8 space-y-4 text-gray-800">
              <p>
                <strong>{t('solana.liquidityTitle')}</strong>&nbsp;
                {t('solana.liquidityText1')}
              </p>
              <p>{t('solana.liquidityText2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
