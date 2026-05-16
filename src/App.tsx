import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Features from './components/Features';
import AdminPanel from './components/AdminPanel';
import MobileApp from './components/MobileApp';
import HowItWorks from './components/HowItWorks';
import ProblemsVsSolutions from './components/ProblemsVsSolutions';
import AICenter from './components/AICenter';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const nextModalImage = () => setModalIndex((prev) => (prev + 1) % modalImages.length);
  const prevModalImage = () => setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

  return (
    <div id="top" className="relative min-h-screen bg-background text-textMain font-sans overflow-x-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[25%] h-[40%] bg-accent/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-15%] left-[15%] w-[40%] h-[30%] bg-primary/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <ImageModal
        open={modalOpen}
        images={modalImages}
        index={modalIndex}
        onClose={() => setModalOpen(false)}
        onNext={nextModalImage}
        onPrev={prevModalImage}
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
    </div>
  );
}

export default App;
