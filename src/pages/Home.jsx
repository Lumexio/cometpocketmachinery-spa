import React from 'react';
import { ExternalLink, ArrowRight, Activity } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { t } = useApp();

  const projects = [
    {
      title: 'StockMachine Service',
      badge: t('proj.stockmachine.badge'),
      domain: 'stockmachine.online',
      url: 'https://stockmachine.online',
      desc: t('proj.stockmachine.desc'),
      tags: ['Inventory System', 'VPS Domain Data', 'GitHub Releases'],
      color: '#e62429'
    },
    {
      title: 'MerchantGo POS & Cashout',
      badge: t('proj.merchantgo.badge'),
      domain: 'merchantgo.store',
      url: 'https://merchantgo.store',
      desc: t('proj.merchantgo.desc'),
      tags: ['Restaurant POS', 'Hosted Web App', 'Source Clients', 'No Public Installers'],
      color: '#ff6b00'
    },
    {
      title: 'QuiroMedic Health Records',
      badge: t('proj.quiromedic.badge'),
      domain: 'quiromedic.site',
      url: 'https://quiromedic.site',
      desc: t('proj.quiromedic.desc'),
      tags: ['Patient Records', 'Browser App', 'No Native Apps'],
      color: '#00b368'
    },
    {
      title: 'Lumexio Engineering Hub',
      badge: t('proj.lumexio.badge'),
      domain: 'lumexio.site',
      url: 'https://lumexio.site',
      desc: t('proj.lumexio.desc'),
      tags: ['System Architecture', 'Software Portfolio', 'Technical Excellence', 'Principal Command'],
      color: '#2cb67d'
    }
  ];

  return (
    <div className="animate-fade-in">

      {/* HERO SECTION */}
      <section style={{ padding: '90px 0 40px', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 179, 104, 0.15)', borderRadius: '999px', border: '1px solid rgba(0, 179, 104, 0.4)', marginBottom: '24px' }}>
            <Activity size={16} color="#00b368" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
              {t('home.hero.badge')}
            </span>
          </div>

          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '20px', color: 'var(--text-main)' }}>
            {t('home.hero.title')}
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            {t('home.hero.subtitle')}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#portfolio" className="btn-primary" style={{ fontSize: '1.05rem', padding: '15px 32px' }}>
              {t('home.hero.cta')} <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* PORTFOLIO SHOWCASE SECTION */}
      <section id="portfolio" style={{ padding: '40px 0 80px' }}>
        <div className="container">

          <div className="grid-3">
            {projects.map((p, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: `3px solid ${p.color}` }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', color: p.color }}>
                      {p.badge}
                    </span>
                    <a href={p.url} target="_blank" rel="noreferrer" title="Launch Production App">
                      <ExternalLink size={18} color="var(--text-muted)" className="hover:text-white transition-all" />
                    </a>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>{p.title}</h3>
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: p.color, fontWeight: 600, display: 'inline-block', marginBottom: '16px' }}>
                    ➔ {p.domain}
                  </a>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                    {p.tags.map((tag, idx) => (
                      <span key={idx} style={{ fontSize: '0.75rem', padding: '3px 9px', background: 'var(--bg-main)', borderRadius: '4px', color: 'var(--text-muted)', border: '1px solid var(--border-glass)' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a href={p.url} target="_blank" rel="noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: '0.2s all'
                  }} className="hover:border-glow">
                    {t('home.project.access')} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
