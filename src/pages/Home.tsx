import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TrustMetrics from '../components/TrustMetrics';
import Features from '../components/Features';
import SalesOps from '../components/SalesOps';
import HowItWorks from '../components/HowItWorks';
import AdminPanel from '../components/AdminPanel';
import MobileApp from '../components/MobileApp';
import ProblemsVsSolutions from '../components/ProblemsVsSolutions';
import AICenter from '../components/AICenter';
import CTA from '../components/CTA';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    document.title = 'SahaTakip | Satıştan Sahaya Tek Platform';
  }, []);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <ImageModal
        open={modalOpen}
        images={modalImages}
        index={modalIndex}
        onClose={() => setModalOpen(false)}
        onNext={() => setModalIndex(p => (p + 1) % modalImages.length)}
        onPrev={() => setModalIndex(p => (p - 1 + modalImages.length) % modalImages.length)}
      />

      <Hero onOpenModal={openModal} />
      <TrustMetrics />
      <Features />
      <SalesOps />
      <HowItWorks />
      <AdminPanel />
      <MobileApp onOpenModal={openModal} />
      <ProblemsVsSolutions />
      <AICenter />
      <CTA />
    </>
  );
}
