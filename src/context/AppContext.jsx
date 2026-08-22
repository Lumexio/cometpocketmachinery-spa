import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('cpm-theme') || 'default');
  const [language, setLanguage] = useState(localStorage.getItem('cpm-lang') || 'en');

  useEffect(() => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('cpm-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('cpm-lang', language);
  }, [language]);

  const t = (key) => {
    const langDict = translations[language] || translations['en'];
    return langDict[key] || translations['en'][key] || key;
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
