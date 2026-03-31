import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const GALLERY_IMAGES = [
  { src: '/galeri/premium1.jpg', alt: 'Premium 1', type: 'Premium' },
  { src: '/galeri/premium2.jpg', alt: 'Premium 2', type: 'Premium' },
  { src: '/galeri/premium3.jpg', alt: 'Premium 3', type: 'Premium' },
  { src: '/galeri/premium4.jpg', alt: 'Premium 4', type: 'Premium' },
  { src: '/galeri/premium5.jpg', alt: 'Premium 5', type: 'Premium' },
  { src: '/galeri/subsidi1.jpeg', alt: 'Subsidi 1', type: 'Subsidi' },
  { src: '/galeri/subsidi2.jpeg', alt: 'Subsidi 2', type: 'Subsidi' },
  { src: '/galeri/subsidi3.jpeg', alt: 'Subsidi 3', type: 'Subsidi' },
  { src: '/galeri/subsidi4.jpeg', alt: 'Subsidi 4', type: 'Subsidi' },
  { src: '/galeri/subsidi5.jpeg', alt: 'Subsidi 5', type: 'Subsidi' },
];

function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="galeri" ref={ref} className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span variants={fadeUp} className="label-tag">Galeri</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Galeri <span>Puri Elena</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle" style={{ margin: '0 auto' }}>
            Lihat lebih dekat kenyamanan dan desain elegan dari setiap sudut rumah kami.
          </motion.p>
        </motion.div>

        {/* Gallery Sections */}
        {['Premium', 'Subsidi'].map((type, index) => {
          const typeImages = GALLERY_IMAGES.filter(img => img.type === type);
          if (typeImages.length === 0) return null;

          return (
            <div key={type} style={{ marginBottom: index === 0 ? '4rem' : '0' }}>
              <motion.div
                initial="hidden" animate={inView ? 'show' : 'hidden'} variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '4px',
                  height: '24px',
                  background: type === 'Premium' ? 'var(--color-gold)' : 'var(--color-primary)',
                  borderRadius: '2px'
                }} />
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontFamily: '"Playfair Display", serif', 
                  color: 'var(--color-text)',
                  margin: 0
                }}>
                  Galeri {type}
                </h3>
              </motion.div>

              <motion.div
                initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
                className="gallery-grid"
              >
                {typeImages.map((img, i) => (
                  <motion.div
                    key={i} variants={fadeUp}
                    className="gallery-item"
                    style={{
                      borderRadius: 'var(--radius-md)', 
                      overflow: 'hidden', 
                      background: 'var(--color-white)',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      border: '1px solid var(--color-border)',
                      aspectRatio: '1 / 1', 
                      position: 'relative',
                    }}
                  >
                    <img
                      src={img.src} 
                      alt={img.alt}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 0.3s ease' 
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}

export default GallerySection;
