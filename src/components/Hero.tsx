import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

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
    <section className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-10 lg:pb-24">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Brand Title */}
          <div className="relative w-full mb-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg hidden lg:block" />
            <div className="flex flex-row items-baseline justify-center lg:justify-start gap-3 md:gap-5 w-full">
              <h2 className="text-[10vw] xs:text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase text-white leading-none">
                SAHA
              </h2>
              <h2 className="text-[10vw] xs:text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-primary leading-none">
                TAKİP
              </h2>
            </div>
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase whitespace-nowrap opacity-60">
                v2.0
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Saha Operasyon Doğrulama Sistemi
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-[1.15] tracking-tight mb-6">
            Saha ekipleriniz gerçekten{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-accent">
              tüm noktalara uğruyor mu?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-textMuted mb-8 leading-relaxed max-w-lg">
            Dağıtım ve saha operasyonlarınızı varsayımlarla değil, <strong className="text-white/90">matematiksel kanıtlarla</strong> yönetin. 
            GPS doğrulaması, zorunlu canlı fotoğraf ve AI destekli anomali tespiti ile sahada tam kontrol sağlayın.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="bg-primary hover:bg-cyan-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center gap-2"
            >
              Pilot Kullanım Başlat <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
            >
              Nasıl Çalışır?
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 mt-10 text-textDim text-xs">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Ücretsiz Pilot
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Kurulum Gerektirmez
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              7/24 Destek
            </div>
          </div>
        </motion.div>

        {/* Right - Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:w-[120%] lg:-mr-[20%]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative w-full z-10 flex flex-col items-center">
            <div
              className="rounded-t-lg border-x-[4px] md:border-x-[10px] border-t-[4px] md:border-t-[10px] border-[#1a1a2e] bg-[#0a0a1a] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] flex flex-col w-full aspect-[16/10] lg:h-[520px] relative ring-1 ring-white/5 cursor-pointer group"
              onClick={() => onOpenModal(pcImages, currentImage)}
            >
              <div className="h-6 md:h-9 bg-[#0f0f1f] border-b border-white/5 flex items-center px-3 md:px-5 gap-2 md:gap-4">
                <div className="flex gap-1 md:gap-1.5">
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-black/50 border border-white/5 rounded-md text-[8px] md:text-[10px] text-textMuted px-3 md:px-5 py-0.5 md:py-1 flex items-center gap-1 md:gap-2 font-mono">
                    <Lock className="w-2 h-2 md:w-3 md:h-3 text-primary" />
                    sahatakip.net/dashboard
                  </div>
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden bg-[#050510]">
                {pcImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                      idx === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    alt={`Dashboard ekranı ${idx + 1}`}
                  />
                ))}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium">
                    Tam Ekran Görüntüle
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[105%] md:w-[110%] h-2 md:h-5 bg-[#1a1a2e] rounded-b-md border-x border-b border-white/10 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 md:h-1 bg-white/10" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-40 h-2 md:h-4 bg-[#0a0a1a] rounded-b-lg border-x border-b border-white/5 shadow-inner" />
            </div>
            <div className="w-[80%] h-1.5 bg-black/40 blur-[10px] mt-2 rounded-full opacity-40" />
          </div>

          {/* Floating indicator dots */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {pcImages.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentImage ? 'w-6 bg-primary' : 'w-1.5 bg-white/15'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
