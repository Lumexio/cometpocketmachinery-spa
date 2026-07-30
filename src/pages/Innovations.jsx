import React from 'react';
import { Cpu, Radio, Shield, Zap, Terminal, Server, Wifi, Activity, CheckCircle2, Cloud, Sparkles } from 'lucide-react';

const roadmapInnovations = [
  {
    title: 'Comet POS Kiosk TX-900',
    category: 'Future Roadmap (Hospitality)',
    status: 'R&D Concept',
    desc: 'An exploratory ruggedized touch station concept designed for high-velocity bars operating MerchantGo SaaS software.',
    features: [
      'Seamless multi-room tablet software session auto-locking',
      'Digital Z-Report automated shift financial audit exports',
      'Dual-screen waitstaff order builder + customer billing display',
      'Instant offline mode with automated re-synchronization'
    ],
    accent: '#ff6b00'
  },
  {
    title: 'StockMachine Cloud Sensor Bridge',
    category: 'Future Roadmap (Inventory)',
    status: 'R&D Prototype',
    desc: 'Automated inventory verification telemetry designed to sync directly with stockmachine.online workspaces via zero-latency webhooks.',
    features: [
      'Automated stock depletion estimation alerts via REST API',
      'Instant low-stock warning triggers sent to manager dashboards',
      'Enterprise data security with isolated customer accounts',
      'Designed for industrial freezer and cold storage workflows'
    ],
    accent: '#e62429'
  },
  {
    title: 'QuiroMedic Clinical Telemetry Sync',
    category: 'Future Roadmap (Healthcare)',
    status: 'R&D Prototype',
    desc: 'A future clinical synchronization module to automatically relay vitals and diagnostic telemetry into QuiroMedic electronic health records.',
    features: [
      'Secure diagnostic vital metric ingestion to clinical charts',
      'End-to-end encrypted medical data storage in the cloud',
      'Automated patient record indexing via encrypted IDs',
      'Streamlined digital workflows for single doctors & clinics'
    ],
    accent: '#00b368'
  }
];

export default function Innovations() {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px 90px' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <span className="badge" style={{ background: 'rgba(0, 255, 102, 0.15)', color: '#00ff66', borderColor: 'rgba(0, 255, 102, 0.3)' }}>
          ● SaaS Architecture & Future R&D Roadmap
        </span>
        <h1 style={{ fontSize: '3.2rem', marginBottom: '18px' }}>
          Software Supremacy & Our <span style={{ color: '#00ff66' }}>Future Roadmap</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          At <strong>Comet Pocket Machinery</strong>, our active product lineup delivers immediate, zero-friction software SaaS platforms and generous free ecosystem utilities today. Explore how our R&D engineering facilities are also mapping out physical sensor concepts for our future strategic path!
        </p>
      </div>

      {/* ACTIVE SAAS HIGHLIGHT BANNER */}
      <div className="glass-card" style={{ marginBottom: '60px', background: 'radial-gradient(circle at right, rgba(230, 36, 41, 0.12) 0%, rgba(20,22,28,0.85) 100%)', border: '1px solid rgba(230, 36, 41, 0.35)', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff4d4d', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px' }}>
            <Sparkles size={16} /> Present-Day Active Products
          </div>
          <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '14px' }}>100% Cloud SaaS Platforms & Free Tools</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            No specialized hardware purchases or complex installations required! Our entire portfolio—from MerchantGo POS to StockMachine inventory—is ready to deploy immediately across your existing phones, tablets, laptops, and web browsers.
          </p>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
          <h4 style={{ color: '#fff', marginBottom: '14px', fontSize: '1.1rem' }}>Active Cloud SaaS Capabilities:</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', color: '#ccc' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="#00ff66" /> <span>Real-Time Device Synchronization Across All Stations</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="#00ff66" /> <span>Secure Cloud Backup & Simple Subscription Billing</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="#00ff66" /> <span>Generous Free Solo Starters & Express Workflows</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '14px', color: '#fff' }}>Future R&D Exploratory Concepts</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 48px', fontSize: '1.05rem' }}>
        A glimpse into what our engineering labs are exploring as our long-term hardware and sensor integration vision:
      </p>

      <div className="grid-3" style={{ gap: '35px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {roadmapInnovations.map((item, i) => (
          <div key={i} className="glass-card" style={{ borderLeft: `4px solid ${item.accent}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: item.accent, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ⚡ {item.category}
                </span>
                <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', color: '#ccc', fontWeight: 600 }}>
                  {item.status}
                </span>
              </div>

              <h3 style={{ fontSize: '1.7rem', marginBottom: '12px', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {item.desc}
              </p>

              <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Planned Architectural Highlights:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                {item.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ccc' }}>
                    <CheckCircle2 size={16} color={item.accent} style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Cloud size={16} color="#00ff66" /> Software SaaS Connect Ready
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Future Roadmap Path
              </span>
            </div>

          </div>
        ))}
      </div>



    </div>
  );
}
