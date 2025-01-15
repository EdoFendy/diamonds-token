// App.tsx

import React from 'react';
import { Button } from './components/Button';
import { TokenStats } from './components/TokenStats';
import { Roadmap } from './components/Roadmap';
import { HalfImageSection } from './components/HalfImageSection';
import { SolanaSection } from './components/SolanaSection';

import background from './images/background.png';
import logoSolo from './images/logo_solo.png';
import diamondsLogo from './images/logo_solo.png';

import { Gem, Rocket, Users } from 'lucide-react';

// Divider with the diamond logo in the center
function SectionDivider() {
  return (
    <div className="my-12 flex items-center justify-center relative">
      {/* Horizontal line */}
      <div className="absolute w-full h-[2px] bg-[#d4af37]/40" />

      {/* Diamond logo in the center */}
      <div
        className="
          relative px-4 py-2 bg-white/80 backdrop-blur-sm
          border border-[#d4af37]/20
          shadow-[0_0_20px_rgba(212,175,55,0.1)]
          rounded-full
          flex items-center
        "
      >
        <img
          src={diamondsLogo}
          alt="Divider Diamond"
          className="w-8 h-8 object-contain"
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="relative min-h-screen text-gray-800 overflow-x-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Se vuoi lo sfondo fisso con effetto parallax,
        // mantieni backgroundAttachment: 'fixed', altrimenti rimuovi.
        backgroundAttachment: 'fixed',
      }}
    >
      {/* HEADER */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logoSolo} alt="DMNS Logo" className="w-24 h-auto object-contain" />
        <div className="flex gap-2">
          <Button variant="secondary" className="px-3 py-1 text-sm">
            Whitepaper
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src={logoSolo}
            alt="DMNS Big Logo"
            className="mx-auto w-36 md:w-44 h-auto object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            DMNS TOKEN
          </h1>
          <p className="text-lg md:text-xl text-gray-700 px-4 leading-relaxed">
            We are <strong>DMNS</strong>, innovators shaping the future through
            blockchain and decentralization. 
            Our mission is to revolutionize the economy with 
            a fair ecosystem powered by our token.
            <br />
            Don’t follow—lead. Don’t dream—create.
            <br />
            Join DMNS. Build the future.
          </p>
        </div>
      </section>

      {/* TOKEN STATS */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <TokenStats />
        </div>
      </section>

      <SectionDivider />

      {/* WHO WE ARE */}
      <HalfImageSection
        title="Who We Are"
        text={[
          "We are a global and decentralized community aiming to educate, inform, and engage people to promote financial autonomy for everyone.",
          "Through education and innovation, we intend to revolutionize how we manage money and resources, reducing reliance on centralized institutions. DiamondToken is the core of our project—our decentralized currency.",
        ]}
        imgSrc="src/images/diamonds_Money.png"
        imagePosition="left"
        icon={<Users className="w-20 h-20 text-gold-solid mb-4" />}
        bgClass="bg-[#FAF4E8]"
      />

      <SectionDivider />

      {/* COMMUNITY DRIVEN / MISSION */}
      <HalfImageSection
        title="Our Mission"
        text={[
          "Our goal is to provide privileged and timely access to growth opportunities, overcoming common pitfalls that limit crypto gains—like lack of information or late market entry.",
          "We are the first to buy our own token and share these opportunities, enabling our community members to reap benefits before they become widely available."
        ]}
        imgSrc="src/images/community.png"
        imagePosition="right"
        icon={<Gem className="w-20 h-20 text-gold-solid mb-4" />}
        bgClass="bg-[#FFFFFF]"
      />

      <SectionDivider />

      {/* COMPETITIVE ADVANTAGE / EARLY ACCESS */}
      <HalfImageSection
        title="Our Competitive Edge"
        text={[
          "We chose Solana to launch our token because it can handle high transaction volumes quickly and inexpensively, ensuring an optimal user experience and a scalable network for the project’s growth.",
          "Example: A token created on 07/04/2024 managed to increase its effective value by +54,000% in less than 20 days."
        ]}
        imgSrc="src/images/rocket.png"
        imagePosition="left"
        icon={<Rocket className="w-20 h-20 text-gold-solid mb-4" />}
        bgClass="bg-[#FAF4E8]"
      />

      <SectionDivider />

      {/* Sezione Solana (già ampliata) */}
      <SolanaSection />

      <SectionDivider />

      {/* ROADMAP */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gold text-center mb-12">Roadmap</h2>
          <Roadmap />
        </div>
      </section>

      <SectionDivider />

      {/* CTA / COMMUNITY GROWTH */}
      <section className="relative z-10 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
            Our Community Is Growing Fast
          </h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            It’s time to take action. Join the Fair Launch on 
            <strong> SolSale.app</strong> and be part of DMNS.
            <br />
            The DMNS token is now in Fair Launch.
          </p>
          <Button variant="primary" className="px-6 py-3">
            Participate in Fair Launch
          </Button>
        </div>
      </section>

      <SectionDivider />

      {/* FOOTER */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-gray-600 text-sm">
          © 2025 DMNS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
