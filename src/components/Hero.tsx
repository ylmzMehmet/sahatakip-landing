import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Play, Shield, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const pcImages = [
  '/mockups/pc/canlıHarita.png',
  '/mockups/pc/anasayfa.png',
  '/mockups/pc/RotaTakip.png',
  '/mockups/pc/anasayfa_light.png',
  '/mockups/pc/canlı harita_light.png',
  '/mockups/pc/anamoli.png',
  '/mockups/pc/atlanan.png',
  '/mockups/pc/pffline.png',
  '/mockups/pc/süpheli.png',
];

interface HeroProps {
  onOpenModal: (images: string[], index: number) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % pcImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Massive Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-brand/[0.07] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] bg-blue-600/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Radial Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <p 
            className="text-[15px] font-semibold text-[#00d4ff] tracking-wide"
            style={{ textShadow: '0 0 12px rgba(0, 212, 255, 0.6)' }}
          >
            Yeni AI Destekli Saha Operasyon Doğrulama Sistemi
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-0">
            <span className="text-white">Sahada her şey</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-cyan-300">
              kontrolünüz altında
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          GPS doğrulama, canlı fotoğraf kanıtı ve yapay zeka ile saha ekiplerinizin
          gerçekten tüm noktalara uğradığından <strong className="text-white/90">matematiksel olarak</strong> emin olun.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-light text-bg font-semibold text-[15px] px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.25),0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.4),0_4px_30px_rgba(0,0,0,0.3)]"
          >
            Ücretsiz Pilot Başlat
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-white font-semibold text-[15px] px-8 py-4 rounded-2xl transition-all duration-300"
          >
            <Play className="w-4 h-4 text-brand" />
            Nasıl Çalışır?
          </a>
        </motion.div>

        {/* Trust Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-16 text-[13px] text-dim"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kurulum Gerektirmez</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>2 Dakikada Başlayın</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-brand" />
            <span>50m Hassasiyet</span>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-b from-brand/10 via-brand/5 to-transparent rounded-[2rem] blur-xl pointer-events-none" />

          {/* Browser Chrome */}
          <div
            className="relative glow-border rounded-2xl overflow-hidden bg-bg-card shadow-[0_20px_80px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] cursor-pointer group"
            onClick={() => onOpenModal(pcImages, currentImage)}
          >
            {/* Top Bar */}
            <div className="h-11 bg-[#0d1220] border-b border-white/[0.04] flex items-center px-4 gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 bg-black/30 border border-white/[0.04] rounded-lg px-4 py-1.5 text-[11px] text-dim font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  sahatakip.net/dashboard
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

              {/* Screen Content */}
              <div className="relative aspect-[16/9.5] bg-[#080c14] overflow-hidden group/screen">
                {pcImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Dashboard ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                      idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
                    }`}
                  />
                ))}

                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover/screen:opacity-100 transition-opacity z-20 pointer-events-none">
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentImage(p => (p - 1 + pcImages.length) % pcImages.length); }}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-bg transition-all pointer-events-auto"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentImage(p => (p + 1) % pcImages.length); }}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-bg transition-all pointer-events-auto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 bg-brand/0 group-hover:bg-brand/[0.03] transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                  onClick={() => onOpenModal(pcImages, currentImage)}
                >
                  <div className="bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 text-white text-[13px] font-medium shadow-2xl">
                    🔍 Tam Ekran Görüntüle
                  </div>
                </div>
              </div>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-1.5 mt-5">
            {pcImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === currentImage ? 'w-7 h-1.5 bg-brand' : 'w-1.5 h-1.5 bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
