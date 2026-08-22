import React from 'react';
import { Rocket, Coffee } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-glass)',
      backgroundColor: 'var(--bg-secondary)',
      padding: '60px 0 40px',
      marginTop: '80px',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex',flexDirection:'column', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', color: 'var(--text-main)' }}>
              <div style={{display:"flex",flexDirection:"row",alignItems:"start",gap:"1rem"}}>
                <Rocket size={24} color="var(--primary)" />
                <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  {t('brand.title') || 'COMET POCKET'} <span style={{ color: 'var(--primary)' }}>MACHINERY</span>
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.5, opacity: 0.8, marginBottom: '8px' }}>
                {t('footer.desc')}
              </p>
              <div style={{display:"flex",flexDirection:"row",alignItems:"start",gap:"1rem"}}>
                <a href="https://buy.stripe.com/aFa3cw4SR4iKerM8TgdnW00" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', opacity: 0.7, textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#ff9800'; }} onMouseOut={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'var(--text-main)'; }}>
                  <Coffee size={16} />
                  <span style={{ fontSize: '1rem' }}>{t('footer.coffee')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Software Flagships */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>{t('footer.sites')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="https://stockmachine.online" target="_blank" rel="noreferrer" className="hover:text-white transition-all">{t('footer.sol1')}</a></li>
              <li><a href="https://merchantgo.store" target="_blank" rel="noreferrer" className="hover:text-white transition-all">{t('footer.sol2')}</a></li>
              <li><a href="https://quiromedic.site" target="_blank" rel="noreferrer" className="hover:text-white transition-all">{t('footer.sol3')}</a></li>
            </ul>
          </div>

          {/* Leadership & Connect */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>{t('footer.leadership')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="https://lumexio.site" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>{t('footer.lead1')}</a></li>
              <li><span>{t('footer.lead2')}</span></li>
              <li><span>{t('footer.lead3')}</span></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom-flex">
          <p>© {new Date().getFullYear()} {t('footer.copy')}</p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span>{t('footer.availability')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
