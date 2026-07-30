import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Settings, User, Compass, Cpu, ShieldCheck } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(10, 10, 13, 0.75)',
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
              COMET POCKET <span style={{ color: 'var(--primary)' }}>MACHINERY</span>
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              High-Utility Enterprise Ecosystem
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--primary)' : 'var(--text-main)', transition: '0.2s' }}>
            Ecosystem Portfolio
          </Link>
          <Link to="/innovations" style={{ color: location.pathname === '/innovations' ? 'var(--primary)' : 'var(--text-main)', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Cpu size={16} /> Roadmap & Labs
          </Link>
          <a href="https://lumexio.site" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: '0.2s' }}>
            Founder Architect
          </a>
        </nav>

        {/* Standard Brand Nav Header: User Avatar Chip + Settings Gear Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>


          <Link to="/settings" title="Application Settings" style={{
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

      </div>
    </header>
  );
}
