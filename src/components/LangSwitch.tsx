import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/LangSwitch.scss'


const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

    useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="lang-switch">
      <button
        className={i18n.language === 'ja' ? 'active' : ''}
        onClick={() => changeLang('ja')}
        lang="ja"
      >
        日本語
      </button>
      <span>|</span>
      <button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => changeLang('en')}
        lang="en"
      >
        EN
      </button>
    </div>
  );
};

export default LangSwitch;
