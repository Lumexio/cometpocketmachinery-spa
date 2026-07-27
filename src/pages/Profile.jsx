import React, { useState } from 'react';
import { User, Shield, CreditCard, Users, LogOut, Key, Check, AlertCircle, Award, Sparkles } from 'lucide-react';

export default function Profile() {
  const [name, setName] = useState('Lumexio Principal');
  const [email, setEmail] = useState('lumexio@cometpocket.online');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const teamMembers = [
    { name: 'Carlos Mendoza', role: 'Operations Manager (MerchantGo)', email: 'carlos@merchantgo.store', status: 'Active' },
    { name: 'Dr. Elena Vance', role: 'Clinical Lead (QuiroMedic)', email: 'vance@quiromedic.site', status: 'Active' },
    { name: 'Alex Rivera', role: 'Warehouse Lead (Stockmachine)', email: 'arivera@stockmachine.online', status: 'Invited' }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px 90px', maxWidth: '1024px' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <span className="badge">Enterprise Identity & Control</span>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>Account & Organization Command</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Manage your umbrella credentials, review Stripe multi-tenant billing allocations, and administer team invitations across Comet Pocket Machinery flagships.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
        
        {/* Left Column: Avatar & Billing Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary), #8e0e12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px',
              boxShadow: '0 8px 25px rgba(230, 36, 41, 0.4)'
            }}>
              <User size={46} color="#fff" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>{name}</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, display: 'inline-block', marginBottom: '16px' }}>
              🛡️ Ecosystem Principal Architect
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '22px' }}>
              Org ID: <code>org_cpm_root_01</code><br />
              Location Scope: Global Enterprise
            </p>
            <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: '8px', color: '#ff4b55', borderColor: 'rgba(255, 75, 85, 0.3)' }}>
              <LogOut size={16} /> Terminate Root Session
            </button>
          </div>

          {/* Stripe Billing & Plan Summary */}
          <div className="glass-card" style={{ borderLeft: '3px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', color: '#fff' }}>
              <CreditCard size={20} color="var(--primary)" />
              <h3 style={{ fontSize: '1.15rem' }}>Stripe Billing Details</h3>
            </div>
            <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Current Tier</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>Comet Apex Enterprise</span>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'rgba(0,255,102,0.15)', color: '#00ff66', borderRadius: '4px', fontWeight: 600 }}>ACTIVE</span>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.5 }}>
              Includes multi-tenant RLS isolation across StockMachine, MerchantGo, and QuiroMedic with zero API rate limits.
            </p>
            <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
              Launch Stripe Portal
            </button>
          </div>

        </div>

        {/* Right Column: Edit Settings & Team Table */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Profile Details Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#fff' }}>Identity & Security Verification</h3>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Full Architectural Title</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-glass)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Administrative Email Address</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-glass)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Update Root JWT Signing Secret / Password</label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input 
                    type="password" 
                    placeholder="••••••••••••••••••••" 
                    disabled 
                    style={{ flex: 1, padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '10px', color: '#666', fontSize: '0.95rem', cursor: 'not-allowed' }} 
                  />
                  <button type="button" className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                    <Key size={16} /> Request Rotation
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', alignItems: 'center', gap: '16px' }}>
                {saved && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00ff66', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Check size={16} /> Credentials Updated & Synced
                  </span>
                )}
                <button type="submit" className="btn-primary">
                  Save Identity Changes
                </button>
              </div>
            </form>
          </div>

          {/* Team Member Admin Table */}
          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>Cross-Service Team Roster</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Scoped via multi-tenant invitation codes</span>
              </div>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                + Invite Staff Member
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '12px 8px' }}>Staff Name</th>
                    <th style={{ padding: '12px 8px' }}>Assigned Domain & Role</th>
                    <th style={{ padding: '12px 8px' }}>Status</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((m, idx) => (
                    <tr key={idx} style={{ borderBottom: idx === teamMembers.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '14px 8px', fontWeight: 600, color: '#fff' }}>
                        {m.name}
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{m.email}</div>
                      </td>
                      <td style={{ padding: '14px 8px', color: 'var(--text-main)' }}>{m.role}</td>
                      <td style={{ padding: '14px 8px' }}>
                        <span style={{
                          padding: '3px 8px',
                          borderRadius: '999px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          backgroundColor: m.status === 'Active' ? 'rgba(0, 255, 102, 0.15)' : 'rgba(255, 184, 0, 0.15)',
                          color: m.status === 'Active' ? '#00ff66' : '#ffb800'
                        }}>
                          {m.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'right' }}>
                        <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }} className="hover:text-white">
                          Manage Access
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
