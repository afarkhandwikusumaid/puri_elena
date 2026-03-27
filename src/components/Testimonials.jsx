import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { TESTIMONIALS } from '../constants/data';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const QuoteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1e3a8a" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.983 11.238L8.136 16H5.275L7.26 11.238H4.6V6H9.983v5.238zm9.3 0L17.436 16h-2.861L16.56 11.238h-2.66V6h5.383v5.238z" />
  </svg>
);

const avatars = [
  'https://i.pravatar.cc/100?img=11', // Pria
  'https://i.pravatar.cc/100?img=5',  // Wanita
  'https://i.pravatar.cc/100?img=8',  // Pria
];

// Dekorasi ombak kecil di ujung kanan bawah kartu
const DecorBlobs = ({ color1, color2 }) => (
  <>
    <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '120px', height: '120px', borderRadius: '50%', background: color1, opacity: 0.6, zIndex: 0 }} />
    <div style={{ position: 'absolute', bottom: '-5%', right: '5%', width: '80px', height: '80px', borderRadius: '50%', background: color2, opacity: 0.6, zIndex: 0 }} />
  </>
);

function Testimonials() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const itemWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section id="testimoni" ref={ref} className="section testi-section">
      <div className="container testi-container">
        
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
          className="testi-header-text"
        >
          <motion.span variants={fadeUp} className="label-tag">Testimoni</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Kata Pembeli <span>Kami</span>
          </motion.h2>
        </motion.div>

        {/* Mobile Wrapper starts here */}
        <div className="testi-mobile-wrapper">
          <motion.div
            initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
            className="testi-slider"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.article key={i} variants={fadeUp} className="testi-card">
                
                {/* Header: Avatar, Name, Role, Stars */}
                <div className="t-header">
                  <img src={avatars[i]} alt={t.name} className="t-avatar" loading="lazy" />
                  <div className="t-meta">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                  <div className="t-stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <FiStar key={si} size={12} fill="#ffc107" stroke="#ffc107" />
                    ))}
                  </div>
                </div>

                {/* Body: Quote icon & Text */}
                <div className="t-body">
                  <div className="t-quote-icon"><QuoteIcon /></div>
                  <p className="t-text">{t.text}</p>
                </div>

                {/* Decorative blobs on bottom right */}
                {i === 0 ? <DecorBlobs color1="#fed7aa" color2="#ffedd5" /> : 
                 i === 1 ? <DecorBlobs color1="#bfdbfe" color2="#dbeafe" /> : 
                           <DecorBlobs color1="#e0e7ff" color2="#bfdbfe" />}

              </motion.article>
            ))}
          </motion.div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="testi-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop Base Layout */
        .testi-section {
          background: var(--color-bg);
        }

        .testi-slider {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding-bottom: 1rem;
        }

        .testi-card {
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .t-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .t-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .t-meta {
          flex: 1;
        }

        .t-meta h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.15rem 0;
        }

        .t-meta p {
          font-size: 0.75rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.3;
        }

        .t-stars {
          display: flex;
          gap: 2px;
          padding-top: 4px;
          align-self: flex-start;
        }

        .t-body {
          display: flex;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .t-quote-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .t-text {
          font-size: 0.9rem;
          color: #374151;
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
        }

        .testi-dots {
          display: none;
        }

        /* Mobile Slider Layout */
        @media (max-width: 768px) {
          .testi-section {
            overflow: hidden; /* Prevent horizontal bleed */
          }
          
          .testi-mobile-wrapper {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .testi-slider {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            gap: 1rem;
            padding-bottom: 0.5rem;
            scrollbar-width: none;
            width: 100%;
          }

          .testi-slider::-webkit-scrollbar {
            display: none;
          }

          .testi-card {
            scroll-snap-align: center;
            width: 100%;
            flex: 0 0 100%;
            padding: 1.5rem;
            box-sizing: border-box;
          }

          .testi-dots {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-top: 1rem;
          }

          .dot {
            width: 12px;
            height: 4px;
            background: rgba(0,0,0,0.15);
            border-radius: 2px;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
          }

          .dot.active {
            background: var(--color-primary);
            width: 24px;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
