import React from 'react';
import { ExternalLink, ArrowRight, Activity } from 'lucide-react';

const projects = [
  {
    title: 'StockMachine Service',
    badge: 'Flagship System • LIVE',
    domain: 'stockmachine.online',
    url: 'https://stockmachine.online',
    desc: 'Inventory management Software as a service',
    tags: ['Inventory System', 'VPS Domain Data', 'GitHub Releases'],
    color: '#e62429'
  },
  {
    title: 'MerchantGo POS & Cashout',
    badge: 'Core Platform • LIVE',
    domain: 'merchantgo.store',
    url: 'https://merchantgo.store',
    desc: 'Restaurant, bar and generic point-of-sale',
    tags: ['Restaurant POS', 'Hosted Web App', 'Source Clients', 'No Public Installers'],
    color: '#ff6b00'
  },
  {
    title: 'QuiroMedic Health Records',
    badge: 'Clinical SaaS • LIVE',
    domain: 'quiromedic.site',
    url: 'https://quiromedic.site',
    desc: 'A web application for patient records and body measurements.',
    tags: ['Patient Records', 'Browser App', 'No Native Apps'],
    color: '#00b368'
  },
  {
    title: 'Lumexio Engineering Hub',
    badge: 'Founder Brand • LIVE',
    domain: 'lumexio.site',
    url: 'https://lumexio.site',
    desc: 'The personal architecture showcase and technical portfolio of Principal Architect Lumexio.',
    tags: ['System Architecture', 'Software Portfolio', 'Technical Excellence', 'Principal Command'],
    color: '#2cb67d'
  }
];

export default function Home() {
  return (
    <div className="animate-fade-in">

      {/* HERO SECTION */}
      <section style={{ padding: '90px 0 40px', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 179, 104, 0.15)', borderRadius: '999px', border: '1px solid rgba(0, 179, 104, 0.4)', marginBottom: '24px' }}>
            <Activity size={16} color="#00b368" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
              Comet Pocket Machinery
            </span>
          </div>

          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '20px', color: '#ffffff' }}>
            We solve your needs and we point to the stars
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Explore our products ecosystem.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#portfolio" className="btn-primary" style={{ fontSize: '1.05rem', padding: '15px 32px' }}>
              View Active Projects <ArrowRight size={18} />
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

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>{p.title}</h3>
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: p.color, fontWeight: 600, display: 'inline-block', marginBottom: '16px' }}>
                    🌐 {p.domain}
                  </a>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                    {p.tags.map((t, idx) => (
                      <span key={idx} style={{ fontSize: '0.75rem', padding: '3px 9px', background: 'rgba(0,0,0,0.4)', borderRadius: '4px', color: '#ccc', border: '1px solid rgba(255,255,255,0.05)' }}>
                        #{t}
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
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: '0.2s all'
                  }} className="hover:border-glow">
                    Access Production Service <ArrowRight size={16} />
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
