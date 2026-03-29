import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { COMPANY, HOUSE_TYPES } from '../constants/data';

const STATS = [
  { value: '60+',      label: 'Unit Tersedia' },
  { value: '2',        label: 'Tipe Rumah' },
  { value: '100%',     label: 'Legalitas SHM' },
  { value: 'Subsidi',  label: 'KPR Tersedia' },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function HeroSection() {
  return (
    <section
      id="hero"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/hero-background.png" alt="Puri Elena Kalisalak Batang" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,30,20,0.4) 0%, rgba(10,30,20,0.72) 55%, rgba(10,30,20,0.90) 100%)' }} />
      </div>

      {/* Content */}
      <div className="container hero-content-wrapper">
        <div style={{ maxWidth: '720px' }}>

          {/* Location badge */}
          <motion.div
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
              color: '#F0D98A', fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.4rem 1rem', borderRadius: '999px', marginBottom: '1.5rem',
            }}
          >
            <FiMapPin size={11} />
            {COMPANY.address}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 6vw, 4.25rem)',
              fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem',
            }}
          >
            Dijual Rumah<br />
            <span style={{ color: 'var(--color-gold)' }}>Puri Elena</span> Kalisalak
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginBottom: '0.5rem' }}
          >
            {COMPANY.tagline}
          </motion.p>

          {/* Starting price */}
          <motion.p
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.35 }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '2.25rem' }}
          >
            {HOUSE_TYPES[0].price}
          </motion.p>

        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          style={{
            marginTop: '3.5rem',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden',
          }}
          className="hero-stats"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '1.35rem 1rem', textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.2rem', letterSpacing: '0.04em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) { .hero-stats { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

export default HeroSection;
