// SolanaSection.tsx
import React from 'react';
import { SolanaLogo } from './SolanaLogo';

export function SolanaSection() {
  return (
    <section className="py-20 flex justify-center">
      {/* Container bianco leggermente meno largo dello schermo */}
      <div className="
        w-full max-w-5xl mx-4 
        bg-white/80 backdrop-blur-sm
        border border-[#d4af37]/30
        shadow-[0_10px_30px_rgba(212,175,55,0.1)]
        rounded-xl
        p-8
      ">
        {/* Contenuto principale */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <SolanaLogo />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Why Solana?
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              Solana is a next-generation blockchain designed to deliver 
              exceptionally fast transactions at ultra-low costs. Leveraging its 
              unique <strong>Proof-of-History</strong> mechanism, Solana provides 
              scalability and security without sacrificing decentralization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Speed */}
              <div className="p-4 rounded-lg bg-white/90 border border-[#d4af37]/30 shadow-sm">
                <h3 className="text-lg font-bold text-gold mb-1">Speed</h3>
                <p className="text-sm text-gray-700">
                  Up to 65,000 TPS with near-instant finality.
                </p>
              </div>
              {/* Cost */}
              <div className="p-4 rounded-lg bg-white/90 border border-[#d4af37]/30 shadow-sm">
                <h3 className="text-lg font-bold text-gold mb-1">Cost</h3>
                <p className="text-sm text-gray-700">
                  Transactions from as low as $0.00025 each.
                </p>
              </div>
              {/* Ecosystem */}
              <div className="p-4 rounded-lg bg-white/90 border border-[#d4af37]/30 shadow-sm">
                <h3 className="text-lg font-bold text-gold mb-1">Ecosystem</h3>
                <p className="text-sm text-gray-700">
                  A fast-growing DeFi universe with countless DApps.
                </p>
              </div>
            </div>

            {/* Nuovo paragrafo sulla liquidità */}
            <div className="mt-8 space-y-4 text-gray-800">
              <p>
                <strong>High Liquidity:</strong>  
                &nbsp;Solana’s DeFi ecosystem boasts a robust and ever-expanding 
                liquidity pool. Major decentralized exchanges (DEXes) like Raydium, 
                Serum, and Orca facilitate high-volume trading with minimal slippage, 
                providing traders and liquidity providers with deep pools and 
                rapid settlement.
              </p>
              <p>
                This abundance of liquidity not only enhances trading efficiency 
                but also opens the door to yield farming, staking, and lending 
                opportunities across the network, making Solana a vibrant hub for 
                decentralized finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
