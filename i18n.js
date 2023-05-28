import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: require('./locales/en.json')
  },
  pt: {
    translation: require('./locales/pt.json')
  },
  'pt-BR': {
    translation: require('./locales/pt.json')
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'pt-BR'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;