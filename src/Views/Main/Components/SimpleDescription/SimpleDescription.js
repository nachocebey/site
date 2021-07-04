import React from 'react';
import { useTranslation } from 'react-i18next';

function SimpleDescription() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('de')}>de</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('title')}</h1>
    </div>
  );
}

export default SimpleDescription;
