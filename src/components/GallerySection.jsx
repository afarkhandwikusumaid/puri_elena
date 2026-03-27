import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const GALLERY_IMAGES = [
  { src: '/galeri/dapur.jpg', alt: 'Dapur Puri Elena' },
  { src: '/galeri/dapurr.jpg', alt: 'Dapur' },
  { src: '/galeri/ruang belakang.jpg', alt: 'Ruang Belakang' },
  { src: '/galeri/ruangan.jpg', alt: 'Ruangan' },
  { src: '/galeri/ryang tengah.jpg', alt: 'Ruang Tengah' },
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

        {/* Gallery Grid */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          className="gallery-grid"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i} variants={fadeUp}
              className="gallery-item"
              style={{
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden', 
                background: 'var(--color-white)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                border: '1px solid var(--color-border)',
                aspectRatio: '1 / 1', // Square aspect ratio for a uniform grid
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
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default GallerySection;
