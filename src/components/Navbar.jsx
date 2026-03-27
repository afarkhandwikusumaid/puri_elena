import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { COMPANY } from '../constants/data';

// Urutan navbar disesuaikan dengan urutan seksi di App.jsx
const NAV_LINKS = [
  { label: 'Beranda',      href: '#hero' },
  { label: 'Tipe Rumah',   href: '#tipe-rumah' },
  { label: 'Fasilitas',    href: '#fasilitas' },
  { label: 'Galeri',       href: '#galeri' },
  { label: 'Keunggulan Kami', href: '#keunggulan-kami' },
  { label: 'Cara Beli',    href: '#cara-beli' },
  { label: 'Kontak',       href: '#kontak' },
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg        = scrolled ? 'rgba(255,255,255,0.97)' : 'transparent';
  const shadow    = scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none';
  const linkColor = scrolled ? '#1A202C' : '#FFFFFF';
  const blur      = scrolled ? 'blur(16px)' : 'none';

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigasi utama"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: bg, backdropFilter: blur,
          boxShadow: shadow, transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-label="Ke atas"
          >
            <Logo dark={scrolled} />
          </button>

          {/* Desktop links */}
          <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', padding: 0,
                    color: linkColor, fontSize: '0.875rem', fontWeight: 500,
                    cursor: 'pointer', transition: 'color 0.2s',
                    fontFamily: 'var(--font-sans)',
                  }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-gold)')}
                  onMouseLeave={e => (e.target.style.color = linkColor)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <a
            href={`https://wa.me/${COMPANY.phone[0].wa}?text=Halo, saya tertarik dengan rumah Puri Elena Kalisalak`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm nav-cta"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FiPhone size={13} />
            Hubungi Kami
          </a>

          {/* Hamburger — mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: scrolled ? '#1A202C' : '#fff', display: 'none',
            }}
          >
            <FiMenu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile menu (Slide from kanan) - SIBLING to prevent containing block clamping */}
      <AnimatePresence>
        {menuOpen && (
          <div className="mobile-only">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.6)', zIndex: 1001,
              }}
            />

            {/* Sidebar menu dari kanan */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '80%', maxWidth: '320px',
                background: 'var(--color-white)', zIndex: 1002,
                display: 'flex', flexDirection: 'column',
                padding: '2rem 1.5rem',
                boxShadow: '-4px 0 24px rgba(0,0,0,0.15)'
              }}
            >
              {/* Header inside sidebar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <Logo dark={true} size="sm" />
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--color-text)' }}
                  aria-label="Tutup menu"
                >
                  <FiX size={26} />
                </button>
              </div>

              {/* Sidebar Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {NAV_LINKS.map(link => (
                  <button
                    key={link.label}
                    onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                    style={{
                      textAlign: 'left', background: 'none', border: 'none',
                      padding: '0.75rem 0', fontSize: '1.05rem', fontWeight: 600,
                      color: 'var(--color-text)', cursor: 'pointer',
                      borderBottom: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Sidebar Footer CTA */}
              <a
                href={`https://wa.me/${COMPANY.phone[0].wa}?text=Halo, saya tertarik dengan rumah Puri Elena Kalisalak`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ marginTop: 'auto', textDecoration: 'none', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiPhone size={16} /> Hubungi via WhatsApp
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
