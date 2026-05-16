import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone, CheckCircle2, MapPin, Camera, WifiOff,
  Navigation, ClipboardList, Lock, KeyRound, Bell, Package, History
} from 'lucide-react';

const mobileImages = [
  '/mockups/mobile/Screenshot_1.png',
  '/mockups/mobile/Screenshot_2.png',
  '/mockups/mobile/Screenshot_3.png',
  '/mockups/mobile/Screenshot_4.png',
  '/mockups/mobile/Screenshot_5.png',
  '/mockups/mobile/Screenshot_6.png',
];

const personnelFeatures = [
  { icon: <Navigation className="w-4 h-4" />, text: 'Konum doğrulama ile teslimat gönderme' },
  { icon: <Camera className="w-4 h-4" />, text: 'Zorunlu canlı fotoğraf çekimi' },
  { icon: <Package className="w-4 h-4" />, text: 'Araç stoğundan miktar seçimi' },
  { icon: <WifiOff className="w-4 h-4" />, text: 'Offline teslimat (internet kesintisinde)' },
  { icon: <History className="w-4 h-4" />, text: 'Rota ve teslimat geçmişi' },
  { icon: <Bell className="w-4 h-4" />, text: 'Bildirim yapma ve fotoğraf yükleme' },
];

const managerFeatures = [
  { icon: <MapPin className="w-4 h-4" />, text: 'Personel canlı konum takibi' },
  { icon: <Package className="w-4 h-4" />, text: 'Araç stok durumu görüntüleme' },
  { icon: <ClipboardList className="w-4 h-4" />, text: 'Rota atama ve yönetimi' },
  { icon: <Bell className="w-4 h-4" />, text: 'Anlık anomali bildirimleri' },
  { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Teslimat onay/ret denetimi' },
  { icon: <KeyRound className="w-4 h-4" />, text: 'Market bazlı teslimat detayları' },
];

interface MobileAppProps {
  onOpenModal: (images: string[], index: number) => void;
}

export default function MobileApp({ onOpenModal }: MobileAppProps) {
  const [activeTab, setActiveTab] = useState<'personel' | 'yonetici'>('personel');
  const [currentImg1, setCurrentImg1] = useState(0);
  const [currentImg2, setCurrentImg2] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg1(prev => (prev + 1) % mobileImages.length);
      setCurrentImg2(prev => (prev + 1) % mobileImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="mobile" className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
      <div className="text-center mb-14">
        <div className="section-label">
          <Smartphone className="w-3.5 h-3.5" /> Mobil Uygulama
        </div>
        <h2 className="section-title">
          Sahada kullanıma{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">
            özel tasarlandı
          </span>
        </h2>
        <p className="section-desc">
          Personel ve yönetici için ayrı arayüzler. Basit, hızlı ve manipüle edilemez mobil deneyim.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Mobile Phones */}
        <div className="relative h-[550px] sm:h-[650px] w-full flex justify-center items-center order-2 lg:order-1">
          {/* Phone 1 (Back) - Hidden on mobile */}
          <motion.div
            initial={{ x: 50, y: -20, rotate: 5, opacity: 0 }}
            whileInView={{ x: 50, y: -20, rotate: 5, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex absolute right-1/2 translate-x-[45%] w-[270px] h-[570px] bg-black rounded-[2.8rem] border-[7px] border-[#1a1a2e] shadow-2xl overflow-hidden z-10 flex-col cursor-pointer group"
            onClick={() => onOpenModal(mobileImages, currentImg1)}
          >
            <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 flex justify-center">
              <div className="w-32 h-5 bg-black rounded-b-2xl" />
            </div>
            <div className="bg-[#0f172a] h-full w-full relative overflow-hidden">
              {mobileImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                    idx === currentImg1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  alt={`Mobil ekran ${idx + 1}`}
                />
              ))}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] font-medium">
                  Büyüt
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone 2 (Front) */}
          <motion.div
            initial={{ x: -50, y: 20, rotate: -2, opacity: 0 }}
            whileInView={{ x: -50, y: 20, rotate: -2, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute md:left-1/2 md:-translate-x-[35%] w-[270px] sm:w-[280px] h-[540px] sm:h-[580px] bg-black rounded-[2.8rem] border-[7px] border-[#262640] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden z-20 flex flex-col cursor-pointer group"
            onClick={() => onOpenModal(mobileImages, currentImg2)}
          >
            <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 flex justify-center">
              <div className="w-32 h-5 bg-black rounded-b-2xl" />
            </div>
            <div className="bg-[#09090b] h-full w-full relative overflow-hidden">
              {mobileImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                    idx === currentImg2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  alt={`Mobil ekran ${idx + 1}`}
                />
              ))}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] font-medium">
                  Büyüt
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
        </div>

        {/* Right: Feature Tabs */}
        <div className="order-1 lg:order-2">
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('personel')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'personel'
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 text-textMuted hover:bg-white/10'
              }`}
            >
              👷 Personel
            </button>
            <button
              onClick={() => setActiveTab('yonetici')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'yonetici'
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 text-textMuted hover:bg-white/10'
              }`}
            >
              👔 Yönetici
            </button>
          </div>

          {activeTab === 'personel' ? (
            <motion.div key="personel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold text-white mb-3">Personel Uygulaması</h3>
              <p className="text-textMuted text-sm mb-6 leading-relaxed">
                Saha personeli için tasarlanmış minimalist arayüz. Karmaşık menüler yok, sadece yapılacak iş. 
                Ana sayfada durak listesi, konum doğrulama ile teslimat gönderme.
              </p>
              <ul className="space-y-3">
                {personnelFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {f.icon}
                    </div>
                    {f.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div key="yonetici" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold text-white mb-3">Yönetici Uygulaması</h3>
              <p className="text-textMuted text-sm mb-6 leading-relaxed">
                Sahaya inmeden tam görünürlük. Personel konumları, araç stokları, rota atama 
                ve anlık anomali bildirimleri cebinizde.
              </p>
              <ul className="space-y-3">
                {managerFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      {f.icon}
                    </div>
                    {f.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
