import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone, Navigation, Camera, WifiOff, Package, History, Bell,
  MapPin, ClipboardList, KeyRound, CheckCircle2, ChevronLeft, ChevronRight
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
  { icon: <Navigation className="w-4 h-4" />, title: 'Konum Doğrulama', desc: 'GPS ile otomatik konum kontrolü ve teslimat gönderme' },
  { icon: <Camera className="w-4 h-4" />, title: 'Canlı Fotoğraf', desc: 'Zorunlu anlık kamera çekimi, galeri erişimi kapalı' },
  { icon: <Package className="w-4 h-4" />, title: 'Stok Seçimi', desc: 'Araç stoğundan ürün ve miktar seçimi' },
  { icon: <WifiOff className="w-4 h-4" />, title: 'Offline Mod', desc: 'İnternet kesintisinde otomatik kuyruğa alma' },
  { icon: <History className="w-4 h-4" />, title: 'Geçmiş Kayıtlar', desc: 'Rota, teslimat ve stok geçmişi görüntüleme' },
  { icon: <Bell className="w-4 h-4" />, title: 'Bildirim Gönder', desc: 'Açıklama ve fotoğraf ile bildirim yapma' },
];

const managerFeatures = [
  { icon: <MapPin className="w-4 h-4" />, title: 'Canlı Takip', desc: 'Personel konumlarını anlık izleme' },
  { icon: <Package className="w-4 h-4" />, title: 'Stok Durumu', desc: 'Araç stoklarını anlık görüntüleme' },
  { icon: <ClipboardList className="w-4 h-4" />, title: 'Rota Atama', desc: 'Dinamik rota planlama ve atama' },
  { icon: <Bell className="w-4 h-4" />, title: 'Anomali Bildirimleri', desc: 'Anlık uyarı ve anomali tespiti' },
  { icon: <CheckCircle2 className="w-4 h-4" />, title: 'Teslimat Denetim', desc: 'Onay/ret durumlarını izleme' },
  { icon: <KeyRound className="w-4 h-4" />, title: 'Detaylı Teslimat', desc: 'Market bazlı teslimat detayları' },
];

interface MobileAppProps {
  onOpenModal: (images: string[], index: number) => void;
}

export default function MobileApp({ onOpenModal }: MobileAppProps) {
  const [activeTab, setActiveTab] = useState<'personel' | 'yonetici'>('personel');
  const [img1, setImg1] = useState(0);
  const [img2, setImg2] = useState(3);

  useEffect(() => {
    const t = setInterval(() => {
      setImg1(p => (p + 1) % mobileImages.length);
      setImg2(p => (p + 1) % mobileImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const currentFeatures = activeTab === 'personel' ? personnelFeatures : managerFeatures;

  return (
    <section id="mobile" className="relative py-20 lg:py-28 overflow-hidden">
      {/* BG Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/40 to-slate-50 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/[0.08] border border-brand/[0.15] text-brand text-[11px] font-bold tracking-widest uppercase mb-5">
            <Smartphone className="w-3 h-3" />
            Mobil Uygulama
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5">
            Sahaya özel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              mobil deneyim
            </span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Personel ve yönetici için ayrı arayüzler. Basit, hızlı ve manipüle edilemez.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Phones - Left (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[520px] sm:h-[600px] flex justify-center items-center"
          >
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/[0.08] blur-[100px] rounded-full pointer-events-none" />

            {/* Phone Back */}
            <div
              className="hidden sm:block absolute z-10 w-[230px] h-[480px] bg-[#0a0a14] rounded-[2.5rem] border-[6px] border-[#1a1a2e] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden cursor-pointer group"
              style={{ transform: 'translateX(40px) translateY(-15px) rotate(4deg)' }}
              onClick={() => onOpenModal(mobileImages, img1)}
            >
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center">
                <div className="w-28 h-4 bg-black rounded-b-xl" />
              </div>
              <div className="h-full w-full relative overflow-hidden bg-[#0a0a14]">
                {mobileImages.map((src, idx) => (
                  <img key={src} src={src} alt="" className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${idx === img1 ? 'opacity-100' : 'opacity-0'}`} />
                ))}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center bg-black/20">
                  <div className="bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10 text-white text-[10px] font-medium">Büyüt</div>
                </div>
              </div>
            </div>

            {/* Phone Front */}
            <div
              className="relative z-20 w-[250px] sm:w-[260px] h-[500px] sm:h-[520px] bg-[#08080f] rounded-[2.8rem] border-[6px] border-[#202040] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden group"
              style={{ transform: 'translateX(-30px) translateY(15px) rotate(-2deg)' }}
            >
              <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 flex justify-center">
                <div className="w-28 h-5 bg-black rounded-b-2xl" />
              </div>
              <div className="h-full w-full relative overflow-hidden group/screen">
                {mobileImages.map((src, idx) => (
                  <img key={src} src={src} alt="" className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${idx === img2 ? 'opacity-100' : 'opacity-0'}`} />
                ))}
                
                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/screen:opacity-100 transition-opacity z-20 pointer-events-none">
                  <button
                    onClick={(e) => { e.stopPropagation(); setImg2(p => (p - 1 + mobileImages.length) % mobileImages.length); }}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-bg transition-all pointer-events-auto"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setImg2(p => (p + 1) % mobileImages.length); }}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-bg transition-all pointer-events-auto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div 
                  className="absolute inset-0 opacity-0 group-hover/screen:opacity-100 transition-opacity z-10 flex items-center justify-center bg-black/20 cursor-pointer"
                  onClick={() => onOpenModal(mobileImages, img2)}
                >
                  <div className="bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10 text-white text-[10px] font-medium mt-12">Büyüt</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - Right (3 cols) */}
          <div className="lg:col-span-3">
            {/* Tab Switcher */}
            <div className="inline-flex bg-slate-100/50 border border-slate-200 rounded-2xl p-1.5 mb-8">
              <button
                onClick={() => setActiveTab('personel')}
                className={`px-6 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                  activeTab === 'personel'
                    ? 'bg-brand text-bg shadow-[0_0_20px_rgba(0,212,255,0.25)]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                👷 Saha Personeli
              </button>
              <button
                onClick={() => setActiveTab('yonetici')}
                className={`px-6 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                  activeTab === 'yonetici'
                    ? 'bg-brand text-bg shadow-[0_0_20px_rgba(0,212,255,0.25)]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                👔 Yönetici
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {activeTab === 'personel' ? 'Personel Uygulaması' : 'Yönetici Uygulaması'}
                </h3>
                <p className="text-muted text-sm mb-8 leading-relaxed max-w-md">
                  {activeTab === 'personel'
                    ? 'Karmaşık menüler yok. Ana sayfada durak listesi, konum doğrulama ile teslimat gönderme. Gün sonu mutabakat ve şifre değiştirme.'
                    : 'Sahaya inmeden tam görünürlük. Personel konumları, araç stokları, rota atama ve anlık anomali bildirimleri cebinizde.'
                  }
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {currentFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className={`w-8 h-8 rounded-lg ${activeTab === 'personel' ? 'bg-brand/[0.1] text-brand' : 'bg-violet-400/[0.1] text-violet-400'} flex items-center justify-center shrink-0`}>
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-slate-900 mb-0.5">{f.title}</h4>
                        <p className="text-[11px] text-dim leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
