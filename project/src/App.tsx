import React from 'react';
import { useTranslation } from 'react-i18next';

// Componenti
import { Button } from './components/Button';
import { TokenStats } from './components/TokenStats';
import { Roadmap } from './components/Roadmap';
import { HalfImageSection } from './components/HalfImageSection';
import { SolanaSection } from './components/SolanaSection';

// Import loghi
import X_Logo from './images/X_logo.svg';
import tg_logo from './images/tg_logo.png';
import solsale from './images/solsale_logo.png';
import logoSolo from './images/logo_solo.png';
import diamondsLogo from './images/logo_solo.png';

// Icone Lucide React
import { Gem, Rocket, Users } from 'lucide-react';

function SectionDivider() {
  const { t } = useTranslation();

  return (
    <div className="my-0 flex items-center justify-center relative">
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
          alt={t('divider.diamondAlt')}
          className="w-8 h-8 object-contain"
        />
      </div>
    </div>
  );
}

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      {/* Sfondi mobile e desktop */}
      <div
        className="
          fixed 
          inset-0
          bg-cover bg-center bg-no-repeat
          md:hidden
          -z-10
        "
        style={{ backgroundImage: `url('/images/background_mobile.png')` }}
      />
      <div
        className="
          fixed 
          inset-0
          bg-cover bg-center bg-no-repeat
          hidden md:block
          -z-10
        "
        style={{ backgroundImage: `url('/images/background.png')` }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
          <section className="relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-8">
              <a
                href="https://x.com/DmnsGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={X_Logo}
                  alt="X Social"
                  className="w-8 h-8 object-contain"
                />
              </a>
              <a
                href="https://t.me/dmnstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={tg_logo}
                  alt="Telegram"
                  className="w-8 h-8 object-contain"
                />
              </a>
              <a
                href="https://solsale.app/presale/6G1jXBziz5JJHUP88R9db2fG66fUWHDm56fAoGen7Dz8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={solsale}
                  alt="SolSale"
                  className="w-10 h-10 object-contain"
                />
              </a>
            </div>
          </section>
        </header>

        {/* HERO */}
        <section className="py-16 text-center">
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
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <TokenStats />
          </div>
        </section>

        <SectionDivider />

        {/* IFRAME */}
        <section className="py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6 text-center">
              {t('iframe.title')}
            </h1>
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
            <iframe
              className="w-full h-[500px] rounded-lg overflow-hidden border-none"
              sandbox="allow-popups allow-same-origin allow-scripts allow-top-navigation allow-popups-to-escape-sandbox"
              frameBorder="0"
              scrolling="no"
              src="https://solsale.app/embed/?address=6G1jXBziz5JJHUP88R9db2fG66fUWHDm56fAoGen7Dz8&bgColor=%2312181F&fgColor=%2312181f&hasAnimation=true&hasBanner=true&hasSocialLinks=true&network=999999&padding=30&refer=&responsive=true&saleType=presale&theme=custom&txtColor=%23FFFFFF"
            />
          </div>
        </section>

        <SectionDivider />

        {/* WHO WE ARE */}
        {/* Se HalfImageSection di default ha "py-16", rimuovilo (py-0). */}
        <HalfImageSection
          title={t('sections.whoWeAre.title')}
          text={[
            t('sections.whoWeAre.text1'),
            t('sections.whoWeAre.text2'),
          ]}
          imgSrc="/images/diamonds_Money.png"
          imagePosition="left"
          icon={<Users className="w-20 h-20 text-gold-solid mb-4" />}
          bgClass="bg-[#FAF4E8] rounded-xl"
        />

        <SectionDivider />

        {/* MISSION */}
        <HalfImageSection
          title={t('sections.mission.title')}
          text={[
            t('sections.mission.text1'),
            t('sections.mission.text2'),
          ]}
          imgSrc="/images/community.png"
          imagePosition="right"
          icon={<Gem className="w-20 h-20 text-gold-solid mb-4" />}
          bgClass="bg-[#FFFFFF] rounded-xl"
        />

        <SectionDivider />

        {/* COMPETITIVE EDGE */}
        <HalfImageSection
          title={t('sections.competitiveEdge.title')}
          text={[
            t('sections.competitiveEdge.text1'),
            t('sections.competitiveEdge.text2'),
          ]}
          imgSrc="/images/rocket.png"
          imagePosition="left"
          icon={<Rocket className="w-20 h-20 text-gold-solid mb-4" />}
          bgClass="bg-[#FAF4E8] rounded-xl"
        />

        <SectionDivider />

        {/* SOLANA SECTION */}
        <SolanaSection />

        <SectionDivider />

        {/* ROADMAP */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gold text-center mb-12">
              {t('roadmapSection.title')}
            </h2>
            <Roadmap />
          </div>
        </section>

        <SectionDivider />

        {/* CTA */}
        <section className="py-16 text-center px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
              {t('cta.title')}
            </h3>
            <p
              className="text-gray-700 text-lg mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('cta.text') }}
            />
            <Button
              variant="primary"
              onClick={() =>
                window.open(
                  'https://solsale.app/presale/6G1jXBziz5JJHUP88R9db2fG66fUWHDm56fAoGen7Dz8',
                  '_blank'
                )
              }
              className="px-6 py-3"
            >
              {t('cta.button')}
            </Button>
          </div>
        </section>

        <SectionDivider />

        {/* SEZIONE SOCIAL */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8">
            {/* Link a X */}
            <a
              href="https://x.com/DmnsGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={X_Logo}
                alt="X Social"
                className="w-8 h-8 object-contain"
              />
            </a>
            {/* Link a Telegram */}
            <a
              href="https://t.me/dmnstoken"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={tg_logo}
                alt="Telegram"
                className="w-9 h-9 object-contain"
              />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center">
          <p className="text-gray-600 text-sm">
            {t('footer.rights')}
          </p>
        </footer>
      </div>
    </>
  );
}
