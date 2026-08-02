import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-glass)',
      backgroundColor: 'rgba(8, 8, 10, 0.95)',
      padding: '60px 0 40px',
      marginTop: '80px',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--text-main)' }}>
              <Rocket size={24} color="var(--primary)" />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                COMET POCKET MACHINERY
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', maxWidth: '380px', marginBottom: '20px' }}>
              An umbrella for independently hosted operational software and local client tools.
            </p>
            <div style={{ display: 'flex', gap: '16px', color: 'var(--text-main)' }}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(230,36,41,0.1)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(230,36,41,0.3)' }}>
                VPS Hosted
              </span>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border-glass)' }}>
                Product-Specific Storage
              </span>
            </div>
          </div>

          {/* Software Flagships */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>Product Sites</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="https://stockmachine.online" target="_blank" rel="noreferrer" className="hover:text-white transition-all">StockMachine Inventory</a></li>
              <li><a href="https://merchantgo.store" target="_blank" rel="noreferrer" className="hover:text-white transition-all">MerchantGo POS & Cashout</a></li>
              <li><a href="https://quiromedic.site" target="_blank" rel="noreferrer" className="hover:text-white transition-all">QuiroMedic Health Records</a></li>

            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><span>VPS-Backed Inventory System</span></li>
              <li><span>Multi-Organization POS</span></li>
              <li><span>Clinical Health Suite</span></li>

            </ul>
          </div>

          {/* Leadership & Connect */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '16px', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>Leadership</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="https://lumexio.site" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Lumexio Architecture</a></li>
              <li><span>Global HQ & R&D Labs</span></li>
              <li><span>Contact: lumexio.dev@gmail.com</span></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom-flex">
          <p>© {new Date().getFullYear()} Comet Pocket Machinery Ecosystem.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Availability varies by product</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
