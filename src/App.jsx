import React from 'react';
import './index.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HouseTypes from './components/HouseTypes';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import HowToBuy from './components/HowToBuy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';

/**
 * App — Komponen utama Puri Elena Kalisalak Batang.
 *
 * Urutan seksi:
 * 1. Navbar
 * 2. Hero
 * 3. HouseTypes     — Tipe Rumah
 * 4. Facilities     — Fasilitas
 * 5. GallerySection — Galeri
 * 6. WhyChooseUs    — Tentang Kami / Keunggulan
 * 7. HowToBuy       — Cara Pembelian
 * 8. Testimonials   — Testimoni
 * 9. FAQ
 * 10. ContactSection — Kontak
 * 11. Footer
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HouseTypes />
        <Facilities />
        <GallerySection />
        <WhyChooseUs />
        <HowToBuy />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
