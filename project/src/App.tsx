// App.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from './components/Button';
import { TokenStats } from './components/TokenStats';
import { Roadmap } from './components/Roadmap';
import { HalfImageSection } from './components/HalfImageSection';
import { SolanaSection } from './components/SolanaSection';

import background from './images/background.png';
import logoSolo from './images/logo_solo.png';
import diamondsLogo from './images/logo_solo.png';

import { Gem, Rocket, Users } from 'lucide-react';

function SectionDivider() {
  const { t } = useTranslation();

  return (
    <div className="my-12 flex items-center justify-center relative">
      <div className="absolute w-full h-[2px] bg-[#d4af37]/40" />
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
          alt={t('divider.diamondAlt')} // <--- traducibile
          className="w-8 h-8 object-contain"
        />
      </div>
    </div>
  );
}

export default function App() {
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-screen text-gray-800 overflow-x-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* HEADER */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
  <Button className="px-3 py-1 text-sm">
    {t('header.whitepaper')}
  </Button>
</header>


      {/* HERO */}
      <section className="relative z-10 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src={logoSolo}
            alt={t('hero.bigLogoAlt')}
            className="mx-auto w-36 md:w-44 h-auto object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 px-4 leading-relaxed">
            {/* Unione del testo: prima parte + le due righe successive */}
            <span
              dangerouslySetInnerHTML={{
                __html: t('hero.descriptionPart1'),
              }}
            />
            <br />

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
        title={t('sections.whoWeAre.title')}
        text={[
          t('sections.whoWeAre.text1'),
          t('sections.whoWeAre.text2'),
        ]}
        imgSrc="src/images/diamonds_Money.png"
        imagePosition="left"
        icon={<Users className="w-20 h-20 text-gold-solid mb-4" />}
        bgClass="bg-[#FAF4E8]"
      />

      <SectionDivider />

      {/* MISSION */}
      <HalfImageSection
        title={t('sections.mission.title')}
        text={[
          t('sections.mission.text1'),
          t('sections.mission.text2'),
        ]}
        imgSrc="src/images/community.png"
        imagePosition="right"
        icon={<Gem className="w-20 h-20 text-gold-solid mb-4" />}
        bgClass="bg-[#FFFFFF]"
      />

      <SectionDivider />

      {/* COMPETITIVE EDGE */}
      <HalfImageSection
        title={t('sections.competitiveEdge.title')}
        text={[
          t('sections.competitiveEdge.text1'),
          t('sections.competitiveEdge.text2'),
        ]}
        imgSrc="src/images/rocket.png"
        imagePosition="left"
        icon={<Rocket className="w-20 h-20 text-gold-solid mb-4" />}
        bgClass="bg-[#FAF4E8]"
      />

      <SectionDivider />

      {/* SOLANA SECTION */}
      <SolanaSection />

      <SectionDivider />

      {/* ROADMAP */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gold text-center mb-12">
            {t('roadmapSection.title')}
          </h2>
          <Roadmap />
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="relative z-10 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
            {t('cta.title')}
          </h3>
          <p
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('cta.text') }}
          />
          <Button variant="primary" className="px-6 py-3">
            {t('cta.button')}
          </Button>
        </div>
      </section>

      <SectionDivider />

      {/* FOOTER */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-gray-600 text-sm">
          {t('footer.rights')}
        </p>
      </footer>
    </div>
  );
}
