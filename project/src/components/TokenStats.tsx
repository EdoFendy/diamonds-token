import React from 'react';
import { Coins, TrendingUp, Users2 } from 'lucide-react';
import { Card3D } from './Card3D';

export function TokenStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card3D>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#d4af37]/10 rounded-lg">
            <Coins className="w-8 h-8 text-gold-solid" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold">Total Supply</h3>
            <p className="text-gray-700">1,000,000,000 DMNS</p>
          </div>
        </div>
      </Card3D>
      <Card3D>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#d4af37]/10 rounded-lg">
            <TrendingUp className="w-8 h-8 text-gold-solid" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold">Fair Launch</h3>
            <p className="text-gray-700">No Pre-sale Advantage</p>
          </div>
        </div>
      </Card3D>
      <Card3D>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#d4af37]/10 rounded-lg">
            <Users2 className="w-8 h-8 text-gold-solid" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold">Community</h3>
            <p className="text-gray-700">100% Decentralized</p>
          </div>
        </div>
      </Card3D>
    </div>
  );
}
