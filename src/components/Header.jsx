import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Settings, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useApp();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'var(--bg-secondary)',
      opacity: 0.95,
      borderBottom: '1px solid var(--border-glass)',
      padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand Logo & Name */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary), #8e0e12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(230, 36, 41, 0.4)'
          }}>
            <Rocket size={22} color="#fff" style={{ transform: 'rotate(-45deg)' }} />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', display: 'block' }}>
              {t('brand.title') || 'COMET POCKET'} <span style={{ color: 'var(--primary)' }}>MACHINERY</span>
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {t('brand.subtitle')}
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--primary)' : 'var(--text-main)', transition: '0.2s' }}>
            {t('nav.ecosystem')}
          </Link>
          <a href="https://lumexio.site" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: '0.2s' }}>
            {t('nav.founder')}
          </a>
        </nav>

        {/* Standard Brand Nav Header (Desktop) */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link to="/settings" title={t('nav.settings')} style={{
            padding: '10px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border-glass)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.2s'
          }}>
            <Settings size={20} color="var(--text-muted)" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: location.pathname === '/' ? 'var(--primary)' : 'var(--text-main)', fontSize: '1.2rem', fontWeight: 600 }}>
            {t('nav.ecosystem')}
          </Link>

          <a href="https://lumexio.site" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 600 }}>
            {t('nav.founder')}
          </a>
          <div style={{ height: '1px', background: 'var(--border-glass)', margin: '10px 0' }} />
          <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Settings size={20} /> {t('nav.settings')}
          </Link>
        </div>
      )}
    </header>
  );
}
