import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './locales/es_ES/index.js';
import translationEN from './locales/en_EN/index.js';

const resources = {
  es_ES: {
    translation: translationES,
  },
  en_EN: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en_EN',
  debug: true,
});

export default i18n;
