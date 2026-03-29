import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHome, FiDroplet, FiTruck, FiMap } from 'react-icons/fi';
import { FACILITIES } from '../constants/data';

// Icon per fasilitas — same index order as FACILITIES array
const FAC_ICONS = [FiHome, FiDroplet, FiTruck];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

function Facilities() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="fasilitas" ref={ref} className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="fac-grid">

          {/* Left */}
          <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}>
            <motion.span variants={fadeUp} className="label-tag">Fasilitas</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              Fasilitas <span>Lengkap</span>,<br />Harga Terjangkau
            </motion.h2>
            <div className="divider-gold" />
            <motion.p variants={fadeUp} className="section-subtitle" style={{ marginBottom: '1.75rem' }}>
              Setiap unit di Puri Elena Kalisalak dilengkapi fasilitas standar
              untuk kebutuhan keluarga modern Indonesia.
            </motion.p>

            <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FACILITIES.map((fac, i) => {
                const Icon = FAC_ICONS[i];
                return (
                  <motion.div
                    key={i} variants={fadeUp}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1rem 1.25rem',
                      background: 'var(--color-bg)', borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div style={{
                      width: '40px', height: '40px', borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-primary-pale)', color: 'var(--color-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)' }}>{fac.label}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{fac.desc}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: 'var(--color-success)', fontWeight: 700 }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            <div className="siteplan-img-wrap">
              <img
                src="/site-plan.png" alt="Siteplan Puri Elena"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'var(--color-primary-pale)'; }}
              />
            </div>
            
            <div style={{ 
              background: 'var(--color-white)', 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--color-border)',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: 'var(--radius-sm)',
                background: 'var(--color-primary-pale)', color: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <FiMap size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                  Siteplan Cluster Puri Elena
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  Tata letak kawasan rapi dengan sistem cluster, jalan lingkungan yang lebar, serta ruang terbuka hijau asri untuk kenyamanan keluarga Anda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{` @media (max-width: 768px) { .fac-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } } `}</style>
    </section>
  );
}

export default Facilities;
