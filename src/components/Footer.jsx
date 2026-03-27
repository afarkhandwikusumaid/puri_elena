import React from 'react';
import { FiInstagram, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Logo from './Logo';
import { COMPANY } from '../constants/data';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const NAV_LINKS = [
  { label: 'Beranda',      id: '#hero' },
  { label: 'Tentang Kami', id: '#tentang-kami' },
  { label: 'Tipe Rumah',   id: '#tipe-rumah' },
  { label: 'Fasilitas',    id: '#fasilitas' },
  { label: 'Kontak',       id: '#kontak' },
];

const linkStyle = {
  background: 'none', border: 'none',
  color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem',
  cursor: 'pointer', padding: 0, transition: 'color 0.2s',
  textAlign: 'left', fontFamily: 'var(--font-sans)',
};

const headingStyle = {
  fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.2em',
  textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem',
};

/**
 * Footer — Multi-kolom, bebas emoji, ikon sosmed dari react-icons.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0E1A14', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
      <div className="container" style={{ padding: '4rem 2rem 2rem' }}>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}><Logo /></div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.85, maxWidth: '280px', marginBottom: '1.5rem' }}>
              {COMPANY.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { Icon: FiInstagram, label: 'Instagram' },
                { Icon: FiFacebook,  label: 'Facebook' },
                { Icon: FiYoutube,   label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer',
                    border: '1px solid rgba(201,168,76,0.25)', background: 'transparent',
                    color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = '#111'; e.currentTarget.style.borderColor = 'var(--color-gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'; }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={headingStyle}>Navigasi</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)} style={linkStyle}
                    onMouseEnter={e => (e.target.style.color = 'var(--color-gold)')}
                    onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Kontak</h4>
            {[
              { Icon: FiMapPin, text: COMPANY.address },
              { Icon: FiPhone,  text: COMPANY.phone.map(p => `${p.number} (${p.name})`).join('\n') },
              { Icon: FiMail,   text: COMPANY.email },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <item.Icon size={13} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
            © {year} Puri Elena Kalisalak Batang. Hak Cipta Dilindungi.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Kebijakan Privasi', 'Syarat & Ketentuan'].map(txt => (
              <button
                key={txt}
                style={{ ...linkStyle, fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => (e.target.style.color = 'var(--color-gold)')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.2)')}
              >
                {txt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

export default Footer;
