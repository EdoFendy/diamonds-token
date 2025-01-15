// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa i file di traduzione
import translationIT from './locales/it/translation.json';
import translationEN from './locales/en/translation.json';

// Oggetto resources con le lingue disponibili
const resources = {
  it: {
    translation: translationIT,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector) // per rilevare lingua da browser (e volendo da cookie, localStorage, etc.)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',   // se non si rileva nulla, default "en"
    supportedLngs: ['en', 'it'],
    detection: {
      // Configurazione del LanguageDetector
      // Puoi abilitare/disabilitare diversi "cachi" di rilevamento: querystring, cookie, localStorage, navigator...
      order: ['querystring', 'navigator', 'cookie', 'localStorage'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // react già protegge dagli XSS
    },
  });

export default i18n;
