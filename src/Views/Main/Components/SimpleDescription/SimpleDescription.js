import React from 'react';
import { useTranslation } from 'react-i18next';

function SimpleDescription() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es_ES')}>ES</button>
      <button onClick={() => changeLanguage('en_EN')}>EN</button>
      <h1>{t('title')}</h1>
    </div>
  );
}

export default SimpleDescription;
