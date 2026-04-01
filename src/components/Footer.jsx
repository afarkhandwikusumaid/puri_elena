import React from 'react';
import { FiInstagram, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Logo from './Logo';
import { COMPANY } from '../constants/data';



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
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1.2fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}><Logo /></div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.85, maxWidth: '280px', marginBottom: '1.5rem' }}>
              {COMPANY.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { Icon: FiInstagram, label: 'Instagram', url: 'https://www.instagram.com/perumahan.puri.elena/' },
                { Icon: FiFacebook,  label: 'Facebook', url: '' },
                { Icon: FiYoutube,   label: 'YouTube', url: '' },
              ].map(({ Icon, label, url }) => (
                <button
                  key={label}
                  aria-label={label}
                  onClick={() => window.open(url, '_blank')}
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

          {/* Map Location */}
          <div>
            <h4 style={headingStyle}>Lokasi Kami</h4>
            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.25)' }}>
              <iframe
                src="https://maps.google.com/maps?q=-6.9279474,109.713155&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Puri Elena"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/search/perumahan+puri+elena+batang/@-6.9279474,109.713155,14.07z?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.8rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'var(--font-sans)' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              Buka di Google Maps <FiMapPin size={12} />
            </a>
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
