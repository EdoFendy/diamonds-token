// Roadmap.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

// New Roadmap data with shorter, more technical bullet points
const roadmapData = [
  {
    date: 'Q1 (Jan - Mar)',
    objective: '5,000 HOLDERS',
    items: [
      'Community + GitBook',
      'Fair Launch on SolSale',
      'Listings: CMC / CG / DexScreener / Dextools',
      'Airdrop Announcement',

    ],
  },
  {
    date: 'Q2 (Apr - Jun)',
    objective: '25,000 HOLDERS',
    items: [
      'Website Launch with Courses',
      'Wallet dApp',
      'Listing on Top 20 CEX',
      'Airdrop Activation',
      'Premium Academy + DAO Announcement'
    ],
  },
  {
    date: 'Q3 (Jul - Sep)',
    objective: '60,000 HOLDERS',
    items: [
      'DAO Development',
      'Listing on Top 10 CEX',
      'Airdrop Distribution + Premium Academy VIP',
      'NFT Collection Announcement + DAO Beta',
      
    ],
  },
  {
    date: 'Q4 (Oct - Dec)',
    objective: '100,000 HOLDERS',
    items: [
      'Full DAO Launch',
      'dApp Sentiment Score',
      'NFT Collection Launch + NFT Marketplace Announcement'
    ],
  },
];

export function Roadmap() {
  return (
    <div className="relative">
      {/* Golden vertical line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 bg-[#d4af37] w-[2px] h-full" />

      <div className="space-y-10 md:space-y-14">
        {roadmapData.map((stage, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col md:flex-row items-start md:items-center 
              ${index % 2 === 0 ? 'md:text-right md:justify-end' : 'md:text-left md:justify-start'}
            `}
          >
            {/* Icon + circle */}
            <div
              className={`
                flex-shrink-0 w-8 h-8 border-2 border-[#d4af37] text-gold-solid
                rounded-full flex items-center justify-center
                relative z-20
                ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}
              `}
            >
              <CheckCircle className="w-5 h-5" />
            </div>

            {/* Content */}
            <div
              className={`
                mt-4 md:mt-0 p-4 md:p-6 rounded-xl bg-white/90 border border-[#d4af37]/20
                shadow-[0_0_20px_rgba(212,175,55,0.05)]
                md:max-w-md
                relative z-10
                ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
              `}
            >
              <h4 className="text-sm font-bold text-[#d4af37] uppercase tracking-wider mb-1">
                {stage.date}
              </h4>
              <p className="text-gray-700 text-xs mb-2 font-medium italic">
                Objective: {stage.objective}
              </p>
              <ul className="list-disc list-inside text-gray-800">
                {stage.items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
