// TokenStats.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Coins, TrendingUp, Users2 } from 'lucide-react';
import { Card3D } from './Card3D';

export function TokenStats() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card3D>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#d4af37]/10 rounded-lg">
            <Coins className="w-8 h-8 text-gold-solid" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold">
              {t('tokenStats.totalSupplyTitle')}
            </h3>
            <p className="text-gray-700">
              {t('tokenStats.totalSupplyValue')}
            </p>
          </div>
        </div>
      </Card3D>

      <Card3D>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#d4af37]/10 rounded-lg">
            <TrendingUp className="w-8 h-8 text-gold-solid" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold">
              {t('tokenStats.fairLaunchTitle')}
            </h3>
            <p className="text-gray-700">
              {t('tokenStats.fairLaunchDesc')}
            </p>
          </div>
        </div>
      </Card3D>

      <Card3D>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#d4af37]/10 rounded-lg">
            <Users2 className="w-8 h-8 text-gold-solid" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold">
              {t('tokenStats.communityTitle')}
            </h3>
            <p className="text-gray-700">
              {t('tokenStats.communityDesc')}
            </p>
          </div>
        </div>
      </Card3D>
    </div>
  );
}
