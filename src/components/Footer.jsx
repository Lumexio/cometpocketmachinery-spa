import React from 'react';
import { Rocket, Coffee } from 'lucide-react';

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
            <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--text-main)' }}>
              <div style={{display:"flex",flexDirection:"row",alignItems:"start",gap:"1rem"}}>
              <Rocket size={24} color="var(--primary)" />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                COMET POCKET MACHINERY
                </span>
              </div>
              <div style={{display:"flex",flexDirection:"row",alignItems:"start",gap:"1rem"}}>
              <a href="https://buy.stripe.com/aFa3cw4SR4iKerM8TgdnW00" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', opacity: 0.7, textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#ff9800'; }} onMouseOut={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'var(--text-main)'; }}>
                <Coffee size={16} />
                <span style={{ fontSize: '1rem' }}>Buy the dev a coffee</span>
                </a>
              </div>
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
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span>Availability varies by product</span>

          </div>
        </div>
      </div>
    </footer>
  );
}
