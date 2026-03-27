import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPhoneCall, FiMapPin, FiCreditCard, FiKey } from 'react-icons/fi';
import { STEPS } from '../constants/data';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const STEP_ICONS = [FiPhoneCall, FiMapPin, FiCreditCard, FiKey];

/**
 * HowToBuy — Langkah-langkah cara pembelian unit Puri Elena.
 * Desktop: 4 kolom sejajar (grid)
 * Mobile: Vertical timeline dengan icon kotak lembut (meniru referensi gambar user)
 */
function HowToBuy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cara-beli" ref={ref} className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span variants={fadeUp} className="label-tag">Cara Pembelian</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Proses Mudah & <span>Transparan</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle" style={{ margin: '0 auto' }}>
            Hanya 4 langkah untuk memiliki rumah impian Anda di Puri Elena Kalisalak.
            Tim marketing kami siap membantu di setiap tahap.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={stagger}
          className="steps-wrapper"
        >
          {STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            // Render each step
            return (
              <motion.div key={i} variants={fadeUp} className="step-item">
                {/* Desktop horizontal connecting line */}
                {i < STEPS.length - 1 && <div className="step-line-desktop" />}

                {/* Number Circle (Dark Blue like reference) */}
                <div className="step-number">
                  {i + 1}
                </div>

                {/* Content Box */}
                <div className="step-content">
                  {/* Soft Icon Box */}
                  <div className="step-icon-box">
                    <Icon size={18} />
                  </div>
                  
                  {/* Text */}
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        /* Desktop Base Layout */
        .steps-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .step-item {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-line-desktop {
          position: absolute;
          top: 22px;
          left: 60%;
          width: 80%;
          height: 2px;
          background: var(--color-border);
          opacity: 0.6;
          z-index: 0;
        }

        .step-number {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #0B2C54; /* Dark blue from user reference */
          color: white;
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 12px rgba(11, 44, 84, 0.2);
        }

        .step-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .step-icon-box {
          width: 48px;
          height: 48px;
          background: #f0f4f8; /* Soft blue-grey */
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
        }

        .step-text h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .step-text p {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Mobile Vertical Timeline Layout (Reference style) */
        @media (max-width: 768px) {
          .steps-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-left: 0.5rem;
          }

          /* Vertical Connecting Line */
          .steps-wrapper::before {
            content: '';
            position: absolute;
            top: 15px;
            bottom: 40px;
            left: 21.5px; /* Center of the 28px circle + padding */
            width: 2px;
            background: var(--color-border);
            z-index: 0;
          }

          .step-line-desktop {
            display: none !important;
          }

          .step-item {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            gap: 1.25rem;
          }

          .step-number {
            width: 28px;
            height: 28px;
            font-size: 0.85rem;
            margin: 0; /* Reset desktop margin */
            margin-top: 6px; /* Align with title */
            flex-shrink: 0;
            box-shadow: none; /* Flatter for mobile */
          }

          .step-content {
            flex-direction: row;
            align-items: flex-start;
            gap: 1rem;
          }

          .step-icon-box {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #f4f7fa;
            flex-shrink: 0;
          }

          .step-icon-box svg {
            width: 18px;
            height: 18px;
          }

          .step-text h3 {
            margin-bottom: 0.25rem;
          }
        }

        /* Smaller mobile tweaks */
        @media (max-width: 480px) {
          .step-content { gap: 0.8rem; }
          .step-item { gap: 1rem; }
        }
      `}</style>
    </section>
  );
}

export default HowToBuy;
