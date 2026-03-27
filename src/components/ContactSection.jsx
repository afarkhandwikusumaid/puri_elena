import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { COMPANY } from '../constants/data';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const INITIAL_FORM = { name: '', phone: '', type: '', message: '' };

/**
 * ContactSection — Form kontak + nomor WhatsApp Farkhan & Alan.
 * Tidak ada emoji — semua ikon dari react-icons/fi.
 */
function ContactSection() {
  const ref    = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm]   = useState(INITIAL_FORM);
  const [sent, setSent]   = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo, saya ${form.name}. Tertarik dengan ${form.type || 'rumah Puri Elena Kalisalak'}. No telp: ${form.phone}. Pesan: ${form.message}`;
    window.open(`https://wa.me/${COMPANY.phone[0].wa}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSent(false), 4000);
  };

  const INFO = [
    { icon: FiMapPin, label: 'Alamat',           value: COMPANY.address },
    { icon: FiPhone,  label: 'Telepon',          value: COMPANY.phone.map(p => `${p.number} (${p.name})`).join('\n') },
    { icon: FiMail,   label: 'Email',             value: COMPANY.email },
    { icon: FiClock,  label: 'Jam Operasional',   value: COMPANY.officeHours },
  ];

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--color-border)',
    fontSize: '0.875rem', outline: 'none', background: 'white',
    fontFamily: 'var(--font-sans)', transition: 'border-color 0.2s',
  };

  return (
    <section id="kontak" ref={ref} className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <motion.span variants={fadeUp} className="label-tag">Kontak</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Hubungi <span>Marketing Kami</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle" style={{ margin: '0 auto' }}>
            Tim kami siap membantu Anda menemukan tipe unit yang sesuai
            dan memproses KPR dengan mudah.
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">

          {/* Left — Info */}
          <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}>
            {INFO.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: 'var(--radius-md)', flexShrink: 0,
                  background: 'var(--color-primary-pale)', color: 'var(--color-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text)', fontWeight: 500, marginTop: '0.2rem', whiteSpace: 'pre-line' }}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp direct buttons */}
            <motion.div variants={fadeUp} style={{ marginTop: '1.75rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Chat via WhatsApp
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {COMPANY.phone.map(p => (
                  <a
                    key={p.name}
                    href={`https://wa.me/${p.wa}?text=Halo ${p.name}, saya tertarik dengan Puri Elena Kalisalak Batang`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ textDecoration: 'none', justifyContent: 'center', gap: '0.4rem' }}
                  >
                    <FiPhone size={14} />
                    {p.name} · {p.number}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            style={{
              background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)',
              padding: '2.5rem', border: '1px solid var(--color-border)',
            }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
              Kirim Pertanyaan
            </h3>

            {/* Name & Phone */}
            {[
              { name: 'name',  label: 'Nama Lengkap',    type: 'text', placeholder: 'Nama Anda', required: true },
              { name: 'phone', label: 'Nomor WhatsApp',  type: 'tel',  placeholder: '0812-xxxx-xxxx', required: true },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text)' }}>
                  {f.label}
                </label>
                <input
                  type={f.type} name={f.name} value={form[f.name]}
                  onChange={handleChange} placeholder={f.placeholder} required={f.required}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>
            ))}

            {/* Type select */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text)' }}>
                Tipe yang Diminati
              </label>
              <select
                name="type" value={form.type} onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                <option value="">Pilih tipe rumah...</option>
                <option value="Subsidi 30/60">Subsidi 30/60</option>
                <option value="Premium 40/84">Premium 40/84</option>
                <option value="Belum tahu, minta info">Belum tahu, minta info</option>
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text)' }}>
                Pesan <span style={{ color: 'var(--color-text-light)', fontWeight: 400 }}>(opsional)</span>
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                rows={3} placeholder="Tulis pertanyaan Anda..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
              <FiSend size={15} />
              {sent ? 'Terkirim ke WhatsApp' : 'Kirim via WhatsApp'}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{` @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } } `}</style>
    </section>
  );
}

export default ContactSection;
