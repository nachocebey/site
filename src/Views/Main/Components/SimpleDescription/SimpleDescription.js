import React from 'react';
import { useTranslation } from 'react-i18next';

function SimpleDescription() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>

    </div>
  );
}

export default SimpleDescription;
