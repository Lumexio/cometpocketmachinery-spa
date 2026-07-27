import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Globe, Moon, Sun, Palette, CheckCircle, RefreshCw, ShieldAlert, Cpu } from 'lucide-react';

export default function Settings() {
  const [theme, setTheme] = useState('default');
  const [language, setLanguage] = useState('en');
  const [autoSync, setAutoSync] = useState(true);
  const [telemetry, setTelemetry] = useState(true);
  const [notification, setNotification] = useState(false);

  const themes = [
    { id: 'default', name: 'Standard Crimson Red (Brand Default)', bg: '#0a0a0d', primary: '#e62429', desc: 'Our timeless high-contrast dark mode with vibrant ruby accents.' },
    { id: 'tokyo', name: 'Tokyo Night Cyber', bg: '#1a1b26', primary: '#7aa2f7', desc: 'Cool violet and cobalt neon palette optimized for late-night engineering sessions.' },
    { id: 'electric', name: 'Electric Neon Laboratory', bg: '#050b08', primary: '#00ff66', desc: 'Ultra-vivid emerald highlights engineered for high-visibility POS displays and IoT monitors.' },
    { id: 'newspaper', name: 'Newspaper Monochrome Light', bg: '#f4f3ef', primary: '#222222', desc: 'Clean paper-contrast light appearance ideal for clinical reports and daylight terminals.' }
  ];

  const languages = [
    { code: 'en', name: 'English (International Standard)', region: 'EN' },
    { code: 'es', name: 'Español (Latam & España)', region: 'ES' },
    { code: 'fr', name: 'Français (Europe)', region: 'FR' },
    { code: 'ja', name: '日本語 (Japan)', region: 'JA' },
    { code: 'ru', name: 'Русский (Cyrillic Standard)', region: 'RU' }
  ];

  const applyTheme = (tId) => {
    setTheme(tId);
    if (tId === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', tId);
    }
    setNotification(true);
    setTimeout(() => setNotification(false), 2500);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px 90px', maxWidth: '880px' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <span className="badge">Application Preferences & Customization</span>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>Ecosystem Settings</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Configure color schemes, international localization, and real-time device synchronization preferences across all Comet Pocket Machinery applications.
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
          <CheckCircle size={20} /> Preferences persisted across local sessions and brand tokens.
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
        
        {/* Section 1: Color Themes (Dual-Column Selection) */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', color: '#fff' }}>
            <Palette size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.6rem' }}>Dual-Column Color Schemes & Appearance</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
            Select one of our four tailored appearance blueprints. Changes apply instantly to CSS custom variables across the interface without triggering state anomalies.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="grid-3">
            {themes.map((t) => (
              <div 
                key={t.id} 
                onClick={() => applyTheme(t.id)}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: t.bg,
                  border: theme === t.id ? `2px solid ${t.primary}` : '1px solid var(--border-glass)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative',
                  boxShadow: theme === t.id ? `0 0 20px rgba(230, 36, 41, 0.2)` : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: t.primary, display: 'inline-block', border: '2px solid #fff' }}></span>
                  {theme === t.id && (
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', background: t.primary, color: '#fff', borderRadius: '6px' }}>
                      ACTIVE THEME
                    </span>
                  )}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: t.id === 'newspaper' ? '#111' : '#fff', fontFamily: 'var(--font-heading)' }}>{t.name}</h4>
                <p style={{ fontSize: '0.85rem', color: t.id === 'newspaper' ? '#555' : 'var(--text-muted)', lineHeight: 1.4 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Localization */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', color: '#fff' }}>
            <Globe size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.6rem' }}>International Localization (I18n)</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
            Comet Pocket Machinery products fully support our 5 core enterprise languages: EN, ES, FR, JA, and RU.
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
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', padding: '4px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}>
                    {lang.region}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{lang.name}</span>
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

        {/* Section 3: Telemetry & Sync Protocol */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', color: '#fff' }}>
            <Cpu size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.6rem' }}>Sync & Cloud Telemetry</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.95rem' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Live Real-Time Order Sync</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Immediately sync waiter PIN tablet orders to cashier POS screens in MerchantGo.</span>
              </div>
              <button 
                type="button"
                onClick={() => setAutoSync(!autoSync)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  backgroundColor: autoSync ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  transition: '0.2s'
                }}
              >
                {autoSync ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Automated Audit Telemetry Logging</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Append transaction history and diagnostic metrics to IndexedDB & VPS logs on every operation.</span>
              </div>
              <button 
                type="button"
                onClick={() => setTelemetry(!telemetry)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  backgroundColor: telemetry ? '#00ff66' : 'rgba(255,255,255,0.1)',
                  color: telemetry ? '#000' : '#fff',
                  transition: '0.2s'
                }}
              >
                {telemetry ? 'ACTIVE' : 'MUTED'}
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
