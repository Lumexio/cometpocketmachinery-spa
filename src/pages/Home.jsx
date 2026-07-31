import React from 'react';
import { ExternalLink, ShieldCheck, Zap, Layers, Server, Activity, ArrowRight, Cpu, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'StockMachine Service',
    badge: 'Flagship System • LIVE',
    domain: 'stockmachine.online',
    url: 'https://stockmachine.online',
    desc: 'Our enterprise flagship inventory management platform. Track products across multiple warehouses, monitor real-time stock movements, and sync across desktop, web, and mobile devices.',
    tags: ['Inventory System', 'Multi-Location', 'Desktop & Mobile', 'Offline Sync'],
    color: '#e62429'
  },
  {
    title: 'MerchantGo POS & Cashout',
    badge: 'Core Platform • LIVE',
    domain: 'merchantgo.store',
    url: 'https://merchantgo.store',
    desc: 'Next-generation restaurant and bar point-of-sale suite. Features instant waiter PIN login, live table order synchronization across stations, and rapid Z-Report shift settlements ("Cortes de Caja").',
    tags: ['Restaurant POS', 'Rapid Checkout', 'Shared Tablet PIN', 'Shift Z-Reports'],
    color: '#ff6b00'
  },
  {
    title: 'QuiroMedic Health Records',
    badge: 'Clinical SaaS • LIVE',
    domain: 'quiromedic.site',
    url: 'https://quiromedic.site',
    desc: 'High-security patient health record and diagnostic monitoring suite for medical professionals and multidisciplinary clinical centers. Includes flexible onboarding for individual specialists or multi-doctor clinics.',
    tags: ['Patient Records', 'Clinical Diagnostics', 'Data Privacy', 'Solo & Clinic Plans'],
    color: '#00b368'
  },
  {
    title: 'Lumexio Engineering Hub',
    badge: 'Founder Brand • LIVE',
    domain: 'lumexio.site',
    url: 'https://lumexio.site',
    desc: 'The personal architecture showcase and technical command hub of Principal Architect Lumexio. Oversees platform design, cloud reliability, and UI/UX excellence across all brand endeavors.',
    tags: ['System Architecture', 'Software Portfolio', 'Technical Excellence', 'Principal Command'],
    color: '#2cb67d'
  }
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      
      {/* HERO SECTION */}
      <section style={{ padding: '90px 0 70px', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(230, 36, 41, 0.15)', borderRadius: '999px', border: '1px solid rgba(230, 36, 41, 0.4)', marginBottom: '24px' }}>
            <Sparkles size={16} color="var(--primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
              Next-Gen Enterprise Ecosystem & Roadmap Innovations
            </span>
          </div>

          <h1 style={{ fontSize: '4.2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '24px', background: 'linear-gradient(135deg, #ffffff 30%, var(--text-muted) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Practical. High-Utility.<br />
            <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'var(--primary)' }}>Technological Supremacy.</span>
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Welcome to the definitive portal of <strong>Comet Pocket Machinery</strong>. We engineer production-ready, highly synchronized software SaaS platforms and intuitive operational tools that power modern restaurants, clinical facilities, and enterprise inventories.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#portfolio" className="btn-primary" style={{ fontSize: '1.05rem', padding: '15px 32px' }}>
              Explore Flagship SaaS <ArrowRight size={18} />
            </a>
            <Link to="/innovations" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '15px 32px' }}>
              <Cpu size={18} color="var(--primary)" /> Roadmap & R&D Labs
            </Link>
          </div>

          {/* Core Architectural Stats Bar */}
          <div className="hero-stats-grid">
            <div>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>5 Live</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Production Flagships</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>99.99%</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cloud Uptime</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>100%</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Secure Data Isolation</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: '#00b368', fontFamily: 'var(--font-heading)' }}><Activity size={24} style={{ display: 'inline' }} /> Instant</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Real-Time Device Sync</span>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO SHOWCASE SECTION */}
      <section id="portfolio" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
            <span className="badge">Project Portfolio & Workspace Map</span>
            <h2 style={{ fontSize: '2.6rem', marginBottom: '16px' }}>Cohesive Engineering Flagships</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Every solution within our workspace inherits established design tokens, strict row-level security, and containerized deployment pipelines from our reference blueprint.
            </p>
          </div>

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

            {/* Teaser card for Innovations & Future Hardware Roadmap */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderTop: '3px solid #00ff66', background: 'linear-gradient(180deg, rgba(22,22,28,0.7) 0%, rgba(0,255,102,0.05) 100%)' }}>
              <Cpu size={54} color="#00ff66" style={{ marginBottom: '20px' }} className="animate-pulse" />
              <span className="badge" style={{ background: 'rgba(0,255,102,0.15)', color: '#00ff66', borderColor: 'rgba(0,255,102,0.3)' }}>Future R&D Roadmap</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Pocket Machinery Labs</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', maxWidth: '280px' }}>
                While our active focus is entirely on seamless SaaS tools and free utilities today, explore our future R&D roadmap for IoT machinery and physical sensors.
              </p>
              <Link to="/innovations" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', borderColor: '#00ff66', color: '#fff' }}>
                View Roadmap & Labs <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* CORE BRAND TENETS & ARCHITECTURE STANDARDS */}
      <section style={{ padding: '60px 0', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
            <span className="badge">Ecosystem Standards</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '14px' }}>Enforced Architectural Directives</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              How Comet Pocket Machinery maintains enterprise reliability and seamless developer collaboration across our monorepos.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '30px' }} className="grid-3">
            
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(230,36,41,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', border: '1px solid rgba(230,36,41,0.3)' }}>
                <ShieldCheck size={24} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>1. Built for High Reliability</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every solution in our suite is engineered for rock-solid stability. Our cloud deployment platforms and offline modes ensure uninterrupted daily service during your busiest operating hours.
              </p>
            </div>

            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(255,107,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', border: '1px solid rgba(255,107,0,0.3)' }}>
                <Layers size={24} color="#ff6b00" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>2. Ironclad Data Privacy</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Whether handling confidential clinical records in QuiroMedic or daily shift financial ledgers in MerchantGo, all customer data accounts are strictly isolated and securely encrypted in the cloud.
              </p>
            </div>

            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(0,179,104,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', border: '1px solid rgba(0,179,104,0.3)' }}>
                <Zap size={24} color="#00b368" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>3. Seamless Ecosystem Strategy</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We focus each solution on its dedicated strengths. MerchantGo excels at high-speed shift sales and cashout settlements ("El Corte"), while StockMachine provides advanced inventory tracking across your enterprise.
              </p>
            </div>

          </div>

        </div>
      </section>


    </div>
  );
}
