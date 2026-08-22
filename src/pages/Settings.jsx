import React, { useState, useEffect } from 'react';
import { Palette, Globe, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Settings() {
  const { theme, setTheme, language, setLanguage, t } = useApp();
  const [notification, setNotification] = useState(false);

  const themes = [
    { id: 'default', name: t('theme.default.name'), bg: '#0a0a0d', primary: '#e62429', desc: t('theme.default.desc') },
    { id: 'tokyo', name: t('theme.tokyo.name'), bg: '#1a1b26', primary: '#7aa2f7', desc: t('theme.tokyo.desc') },
    { id: 'electric', name: t('theme.electric.name'), bg: '#050b08', primary: '#00ff66', desc: t('theme.electric.desc') },
    { id: 'newspaper', name: t('theme.newspaper.name'), bg: '#f4f3ef', primary: '#222222', desc: t('theme.newspaper.desc') }
  ];

  const languages = [
    { code: 'en', name: t('lang.en.name'), region: 'EN' },
    { code: 'es', name: t('lang.es.name'), region: 'ES' },
    { code: 'fr', name: t('lang.fr.name'), region: 'FR' },
    { code: 'ja', name: t('lang.ja.name'), region: 'JA' },
    { code: 'ru', name: t('lang.ru.name'), region: 'RU' }
  ];

  const applyTheme = (tId) => {
    setTheme(tId);
    setNotification(true);
    setTimeout(() => setNotification(false), 2500);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px 90px', maxWidth: '880px' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <span className="badge">{t('settings.badge')}</span>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>{t('settings.title')}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          {t('settings.desc')}
        </p>
      </div>

      {notification && (
        <div style={{
          padding: '12px 20px',
          background: 'rgba(0, 255, 102, 0.15)',
          border: '1px solid #00ff66',
          borderRadius: '12px',
          color: '#00ff66',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontWeight: 600
        }}>
          <CheckCircle size={20} /> {t('settings.saved')}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
        
        {/* Section 1: Color Themes (Dual-Column Selection) */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', color: 'var(--text-main)' }}>
            <Palette size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.6rem' }}>{t('settings.themes.title')}</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
            {t('settings.themes.desc')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="grid-3">
            {themes.map((tItem) => (
              <div 
                key={tItem.id} 
                onClick={() => applyTheme(tItem.id)}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: tItem.bg,
                  border: theme === tItem.id ? `2px solid ${tItem.primary}` : '1px solid var(--border-glass)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative',
                  boxShadow: theme === tItem.id ? `0 0 20px rgba(230, 36, 41, 0.2)` : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: tItem.primary, display: 'inline-block', border: '2px solid #fff' }}></span>
                  {theme === tItem.id && (
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', background: tItem.primary, color: '#fff', borderRadius: '6px' }}>
                      {t('settings.themes.active')}
                    </span>
                  )}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: tItem.id === 'newspaper' ? '#111' : '#fff', fontFamily: 'var(--font-heading)' }}>{tItem.name}</h4>
                <p style={{ fontSize: '0.85rem', color: tItem.id === 'newspaper' ? '#555' : 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                  {tItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Localization */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', color: 'var(--text-main)' }}>
            <Globe size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.6rem' }}>{t('settings.i18n.title')}</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
            {t('settings.i18n.desc')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {languages.map((lang) => (
              <label 
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setNotification(true); setTimeout(() => setNotification(false), 2000); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: language === lang.code ? '1px solid var(--primary)' : '1px solid var(--border-glass)',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', padding: '4px 8px', background: 'rgba(150,150,150,0.1)', color: 'var(--text-main)', borderRadius: '6px' }}>
                    {lang.region}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)' }}>{lang.name}</span>
                </div>
                <input 
                  type="radio" 
                  name="lang" 
                  checked={language === lang.code} 
                  onChange={() => {}}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
              </label>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
