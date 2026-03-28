import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HOUSE_TYPES, COMPANY } from '../constants/data';
import { FiHome, FiDroplet, FiMaximize2, FiCheck, FiTruck } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

/**
 * HouseTypeCard — Kartu tipe rumah dengan detail lengkap.
 * Menampilkan foto, spek, fitur, dan tombol pemesanan.
 */
function HouseTypeCard({ house }) {
  const [activeTab, setActiveTab] = useState('fitur');

  const specItems = [
    { icon: <FiHome size={14} />, label: `${house.beds} Kamar Tidur` },
    { icon: <FiDroplet size={14} />, label: `${house.baths} Kamar Mandi` },
    { icon: <FiTruck size={14} />, label: `${house.garage} Garasi` },
    { icon: <FiMaximize2 size={14} />, label: house.lbLt },
  ];

  const cardBorder = house.highlight
    ? '2px solid var(--color-border)'
    : '1px solid var(--color-border)';

  return (
    <motion.article
      variants={fadeUp}
      style={{
        background: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: cardBorder,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Highlight Badge */}
      {house.highlight && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 10,
          background: 'var(--color-gold)',
          color: 'white',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.3rem 0.8rem',
          borderRadius: '999px',
        }}>
          ⭐ Populer
        </div>
      )}

      {/* House Image */}
      <div style={{ position: 'relative', height: '450px' }}>
        <img
          src={house.img}
          alt={house.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1B5E4B11, #C9A84C22)';
          }}
        />
        {/* Price Tag */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(27,94,75,0.9)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          padding: '0.4rem 0.9rem',
          borderRadius: '8px',
          fontSize: '0.85rem',
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
        }}>
          {house.price}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
        {/* Type Badge & Title */}
        <div>
          <span className={`badge ${house.highlight ? 'badge-gold' : 'badge-primary'}`} style={{ marginBottom: '0.5rem' }}>
            {house.badge}
          </span>
          <h3 style={{ fontSize: '1.4rem', fontFamily: '"Playfair Display", serif', color: 'var(--color-text)', marginTop: '0.35rem' }}>
            {house.label}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0' }}>
            {house.floors} Lantai · {house.lbLt}
          </p>
        </div>

        {/* Quick Specs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {specItems.map((spec, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', background: 'var(--color-bg)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
              <span style={{ color: 'var(--color-primary)' }}>{spec.icon}</span>
              {spec.label}
            </div>
          ))}
        </div>

        {/* Tab: Fitur / Spesifikasi */}
        <div>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '1rem', gap: '0' }}>
            {['fitur', 'spesifikasi'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: '0.6rem 0',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab ? `2px solid ${house.color}` : '2px solid transparent',
                  color: activeTab === tab ? house.color : 'var(--color-text-muted)',
                  fontWeight: activeTab === tab ? 600 : 500,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  marginBottom: '-1px',
                }}
              >
                {tab === 'fitur' ? 'Fitur' : 'Spesifikasi'}
              </button>
            ))}
          </div>

          {activeTab === 'fitur' ? (
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {house.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  <FiCheck size={13} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              {[
                ['Luas Bangunan', `${house.lb} m²`],
                ['Luas Tanah', `${house.lt} m²`],
                ['Jumlah Lantai', `${house.floors} Lantai`],
                ['Kamar Tidur', `${house.beds} Kamar Tidur`],
                ['Kamar Mandi', `${house.baths} Kamar Mandi`],
                ['Garasi', `${house.garage} Garasi`],
              ].map(([k, v]) => (
                <div key={k} style={{ background: 'var(--color-bg)', padding: '0.6rem 0.75rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{k}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>{v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/**
 * HouseTypes — Seksi tipe rumah: Subsidi 30/60 & Premium 40/84.
 * Data dari poster asli Puri Elena Kalisalak.
 */
function HouseTypes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tipe-rumah" ref={ref} className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <motion.span variants={fadeUp} className="label-tag">Tipe Rumah</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Pilih Tipe <span>Rumah Anda</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle" style={{ margin: '0 auto' }}>
            Tersedia dua tipe hunian yang dirancang untuk kenyamanan keluarga Indonesia.
            Harga terjangkau, kualitas premium, legalitas terjamin.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={stagger}
          className="grid-2"
        >
          {HOUSE_TYPES.map(house => (
            <HouseTypeCard key={house.id} house={house} />
          ))}
        </motion.div>

        {/* Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '2.5rem',
            background: 'var(--color-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>🎁 Bonus untuk setiap pembelian</div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.25rem' }}>
              FREE Kitchen Set atau Kanopi — Pilih Salah Satu!
            </div>
          </div>
          <a
            href={`https://wa.me/${COMPANY.phone[0].wa}?text=Halo, saya mau tanya soal bonus kitchen set atau kanopi di Puri Elena Kalisalak`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Claim Bonus Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HouseTypes;
