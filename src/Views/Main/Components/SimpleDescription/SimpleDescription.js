import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SimpleDescription() {
  const { t, i18n } = useTranslation();
  return <h1>{t('Welcome to React')}</h1>;
}
