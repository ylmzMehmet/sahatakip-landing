import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AdminPanel from './components/AdminPanel';
import MobileApp from './components/MobileApp';
import ProblemsVsSolutions from './components/ProblemsVsSolutions';
import AICenter from './components/AICenter';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <div id="top" className="relative min-h-screen bg-bg text-white font-sans overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Global BG Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.012]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <ImageModal
        open={modalOpen}
        images={modalImages}
        index={modalIndex}
        onClose={() => setModalOpen(false)}
        onNext={() => setModalIndex(p => (p + 1) % modalImages.length)}
        onPrev={() => setModalIndex(p => (p - 1 + modalImages.length) % modalImages.length)}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero onOpenModal={openModal} />
        <TrustMetrics />
        <Features />
        <HowItWorks />
        <AdminPanel />
        <MobileApp onOpenModal={openModal} />
        <ProblemsVsSolutions />
        <AICenter />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
