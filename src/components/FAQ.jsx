import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiMessageSquare } from 'react-icons/fi';
import { FAQS, COMPANY } from '../constants/data';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

/**
 * FAQ — Accordion FAQ bersih tanpa emoji. Layout 1 kolom ditengah.
 */
function FAQ() {
  const ref    = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" ref={ref} className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header (Top) */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <motion.span variants={fadeUp} className="label-tag">FAQ</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Pertanyaan <span>Umum</span>
          </motion.h2>
        </motion.div>

        {/* Accordion (Middle) */}
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}>
          {FAQS.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} style={{ borderBottom: '1px solid var(--color-border)' }}>
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                style={{
                  width: '100%', textAlign: 'left', display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.25rem 0', background: 'none', border: 'none',
                  cursor: 'pointer', gap: '1rem',
                }}
              >
                <span style={{
                  fontWeight: 600, fontSize: '0.95rem',
                  color: open === i ? 'var(--color-primary)' : 'var(--color-text)',
                  transition: 'color 0.2s', flex: 1,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%',
                  background: open === i ? 'var(--color-primary)' : 'var(--color-bg)',
                  color: open === i ? 'white' : 'var(--color-text-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.25s',
                }}>
                  {open === i ? <FiMinus size={13} /> : <FiPlus size={13} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.8, paddingBottom: '1.25rem' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA & Subtitle (Bottom) */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{
            marginTop: '3.5rem', textAlign: 'center', background: 'var(--color-bg)',
            padding: '2rem', borderRadius: 'var(--radius-lg)'
          }}
        >
          <motion.p variants={fadeUp} style={{ fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '0.5rem', fontWeight: 500, lineHeight: 1.6 }}>
            Temukan jawaban atas pertanyaan yang paling sering diajukan calon pembeli Puri Elena Kalisalak.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Masih ada pertanyaan lain?
          </motion.p>
          <motion.a
            variants={fadeUp}
            href={`https://wa.me/${COMPANY.phone[0].wa}?text=Halo, saya punya pertanyaan tentang Puri Elena Kalisalak`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textDecoration: 'none', gap: '0.45rem', display: 'inline-flex' }}
          >
            <FiMessageSquare size={15} />
            Tanya Langsung
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;
