import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiShield, FiTool } from 'react-icons/fi';
import { ADVANTAGES } from '../constants/data';

// Map each advantage to a clean FI icon
const ICONS = [FiBriefcase, FiMapPin, FiShield, FiTool];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

/**
 * WhyChooseUs — 4 keunggulan Puri Elena dengan react-icons.
 */
function WhyChooseUs() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="keunggulan-kami" ref={ref} className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span variants={fadeUp} className="label-tag">Keunggulan Kami</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Mengapa Memilih <span>Puri Elena</span>?
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle" style={{ margin: '0 auto' }}>
            Dipercaya oleh banyak keluarga di Kabupaten Batang dengan komitmen kualitas,
            transparansi, dan pelayanan terbaik.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          className="grid-4"
        >
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i} variants={fadeUp}
                style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-lg)',
                  padding: '2rem 1.5rem', border: '1px solid var(--color-border)',
                  textAlign: 'center', transition: 'var(--transition)',
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'var(--color-primary-pale)', color: 'var(--color-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.6rem' }}>
                  {adv.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  {adv.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      <style>{`
      `}</style>
    </section>
  );
}

export default WhyChooseUs;
