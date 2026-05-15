import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Camera, ShieldCheck, BarChart3, Zap, Users, 
  ChevronRight, CheckCircle2, AlertCircle, Smartphone, 
  Route, Activity, PackageCheck, Crosshair, Map, 
  LayoutDashboard, Settings, Bell, Search, Menu, X, ArrowRight,
  Target, Fingerprint, Lock
} from 'lucide-react';

function App() {
  const [currentPcImage, setCurrentPcImage] = useState(0);
  const pcImages = [
    '/mockups/pc/canlıHarita.png',
    '/mockups/pc/anasayfa.png',
    '/mockups/pc/RotaTakip.png',
    '/mockups/pc/anasayfa_light.png',
    '/mockups/pc/canlı harita_light.png',
    '/mockups/pc/anamoli.png',
    '/mockups/pc/atlanan.png',
    '/mockups/pc/pffline.png',
    '/mockups/pc/süpheli.png'
  ];

  const [currentMobileImage1, setCurrentMobileImage1] = useState(0);
  const [currentMobileImage2, setCurrentMobileImage2] = useState(1);
  const mobileImages = [
    '/mockups/mobile/Screenshot_1.png',
    '/mockups/mobile/Screenshot_2.png',
    '/mockups/mobile/Screenshot_3.png',
    '/mockups/mobile/Screenshot_4.png',
    '/mockups/mobile/Screenshot_5.png',
    '/mockups/mobile/Screenshot_6.png'
  ];

  // Modal State
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

  useEffect(() => {
    const pcInterval = setInterval(() => {
      if (!modalOpen) setCurrentPcImage((prev) => (prev + 1) % pcImages.length);
    }, 4000);

    const mobileInterval = setInterval(() => {
      if (!modalOpen) {
        setCurrentMobileImage1((prev) => (prev + 1) % mobileImages.length);
        setCurrentMobileImage2((prev) => (prev + 2) % mobileImages.length);
      }
    }, 5000);

    return () => {
      clearInterval(pcInterval);
      clearInterval(mobileInterval);
    };
  }, [modalOpen]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-background text-textMain font-sans overflow-hidden selection:bg-primary/30">
      {/* Modal Slider */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={prevModalImage}
              className="absolute left-4 md:left-10 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-[110]"
            >
              <div className="flex items-center justify-center">
                 <span className="text-3xl">←</span>
              </div>
            </button>

            <button 
              onClick={nextModalImage}
              className="absolute right-4 md:right-10 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-[110]"
            >
               <div className="flex items-center justify-center">
                 <span className="text-3xl">→</span>
              </div>
            </button>

            <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={modalIndex}
                  src={modalImages[modalIndex]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(59,130,246,0.2)] rounded-lg"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
                {modalImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all ${i === modalIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[30%] right-[-10%] w-[30%] h-[50%] bg-accent/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] bg-primary/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)]">
        <div className="max-w-7xl mx-auto h-20 sm:h-24 px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center shrink-0 pr-4 transition-opacity duration-200 hover:opacity-90">
            <img src="/logo_nav.png" alt="SahaTakip" className="block h-12 sm:h-14 md:h-16 lg:h-[68px] w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
            <a href="#features" className="hover:text-white transition-colors">Özellikler</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Sistem</a>
            <a href="#solutions" className="hover:text-white transition-colors">Çözümler</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Demo Talep Et
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 md:pt-40 pb-16">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-xl">
            <div className="relative inline-block mb-10 group">
              {/* Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
              
              <div className="relative flex flex-col md:flex-row items-baseline gap-2 md:gap-5">
                <div className="relative">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white leading-none">
                    SAHA
                  </h2>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
                <div className="relative">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-primary leading-none drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    TAKİP
                  </h2>
                  {/* Vertical Scan Line */}
                  <motion.div 
                    className="absolute top-0 bottom-0 w-1 bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Status Indicator Underline */}
              <div className="mt-4 flex items-center gap-3">
                <motion.div 
                  className="h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase whitespace-nowrap opacity-70">
                  Operational System v2.0
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-xs font-medium mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Saha Operasyon Doğrulama Sistemi
            </div>
            <h1 className="text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-6">
              Saha ekipleriniz gerçekten <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-accent">tüm noktalara uğruyor mu?</span>
            </h1>
            <p className="text-lg text-textMuted mb-10 leading-relaxed">
              Dağıtım ve saha operasyonlarınızı varsayımlarla değil, <strong>matematiksel kanıtlarla</strong> yönetin. GPS doğrulaması ve zorunlu canlı fotoğraf ile operasyonel körlüğü bitirin.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center gap-2">
                Pilot Kullanım Başlat <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="bg-surface hover:bg-surfaceHover border border-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                Nasıl Çalışır?
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[750px] flex items-center lg:w-[130%] lg:-mr-[30%]"
          >
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('https://linear.app/cdn-cgi/imagedelivery/fO02fVymILecsOASEuiZqw/6df1bc59-7153-4dc7-a3f2-1fb0dbfbfb00/public')] bg-center bg-no-repeat opacity-20 pointer-events-none"></div>
            
            {/* Laptop Mockup - Rectangular Professional Style */}
            <div className="relative w-full z-10 flex flex-col items-center">
              {/* Screen / Browser Window */}
              <div 
                className="rounded-t-lg border-x-[10px] border-t-[10px] border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] flex flex-col w-full h-[560px] relative ring-1 ring-white/5 cursor-pointer group"
                onClick={() => openModal(pcImages, currentPcImage)}
              >
                <div className="h-10 bg-[#141414] border-b border-white/5 flex items-center px-5 gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-black/50 border border-white/5 rounded-md text-[10px] text-textMuted px-5 py-1 flex items-center gap-2 font-mono">
                      <Lock className="w-3 h-3 text-primary" />
                      sahatakip.net/dashboard
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 relative overflow-hidden bg-[#050505]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPcImage}
                      src={pcImages[currentPcImage]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>
                  
                  {/* Click Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium">
                      Tam Ekran Görüntüle
                    </div>
                  </div>
                  
                  {/* Glass glare */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-20"></div>
                </div>
              </div>

              {/* Laptop Base - Sharp Edge */}
              <div className="relative w-[110%] h-6 bg-[#1a1a1a] rounded-b-md border-x border-b border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-white/10"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-4 bg-[#0a0a0a] rounded-b-lg border-x border-b border-white/5 shadow-inner"></div>
              </div>
              
              {/* Ground Shadow */}
              <div className="w-[80%] h-1.5 bg-black/40 blur-[10px] mt-2 rounded-full opacity-40"></div>
            </div>
            
            {/* Glow behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </section>

        {/* TRUST METRICS */}
        <section className="border-y border-white/5 bg-surface/30 backdrop-blur-sm py-16 mb-40">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">10M+</div>
              <div className="text-sm text-textMuted font-medium">Doğrulanan Ziyaret</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">%99.9</div>
              <div className="text-sm text-textMuted font-medium">Teslimat Doğrulama</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">50m</div>
              <div className="text-sm text-textMuted font-medium">Hassas Geofence Limiti</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">Zero</div>
              <div className="text-sm text-textMuted font-medium">Sahte Ziyaret Toleransı</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-40">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Operasyon nasıl doğrulanır?</h2>
            <p className="text-textMuted text-lg">Saha personeli için tasarlanmış basit ama manipüle edilemez mobil deneyim ve iş akışı.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>
            
            {[
              { step: "1", title: "Rota Atanır", desc: "Yönetici günlük rotaları belirler, sistem optimize eder ve mobil uygulamaya düşer.", icon: <Route className="w-5 h-5"/> },
              { step: "2", title: "Sahaya İntikal", desc: "Personel markete gider. Canlı konum üzerinden merkeze anlık veri akışı başlar.", icon: <MapPin className="w-5 h-5"/> },
              { step: "3", title: "GPS Doğrulama", desc: "Markete 50m yaklaşmadan işlem yapılamaz. Uzaktan 'gittim' bildirimi engellenir.", icon: <Target className="w-5 h-5"/> },
              { step: "4", title: "Kanıtlı Teslimat", desc: "Sadece canlı kamera ile fotoğraf çekilir. Galeri erişimi teknik olarak yasaklıdır.", icon: <Fingerprint className="w-5 h-5"/> }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-primary mb-6 relative overflow-hidden group-hover:border-primary/50 transition-colors shadow-lg shadow-black">
                   <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   {s.icon}
                </div>
                <div className="text-xs font-bold text-primary mb-3 tracking-widest uppercase">ADIM 0{s.step}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{s.title}</h4>
                <p className="text-sm text-textMuted leading-relaxed max-w-[220px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MOBILE MOCKUP SHOWCASE */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
           <div className="bg-surface/50 border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Saha için tasarlandı,<br/>yönetim için üretildi.</h2>
                  <p className="text-textMuted text-lg mb-8 leading-relaxed">
                    Saha personeliniz karmaşık menülerle uğraşmaz. Sadece gideceği yeri görür, doğrulamayı yapar ve işini bitirir. Arka planda tüm metrikler merkeze saniyeler içinde iletilir.
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Tamamen native uygulama hissi (Offline-first mimari)",
                      "İnternet kesintilerinde otomatik kuyruğa alma",
                      "Batarya dostu arka plan GPS takibi",
                      "Barkod ve QR kod okuma entegrasyonu"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Phones Container */}
                <div className="relative h-[700px] w-full flex justify-center items-center">
                  {/* Phone 1 (Arkada) */}
                  <motion.div 
                    initial={{ x: 60, y: -30, rotate: 5, opacity: 0 }}
                    whileInView={{ x: 50, y: -30, rotate: 5, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute right-1/2 translate-x-[35%] md:translate-x-[45%] w-[300px] h-[620px] bg-black rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden z-10 flex flex-col cursor-pointer group"
                    onClick={() => openModal(mobileImages, currentMobileImage1)}
                  >
                    <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 flex justify-center">
                      <div className="w-36 h-5 bg-black rounded-b-2xl"></div>
                    </div>
                    <div className="bg-[#0f172a] h-full w-full relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentMobileImage1}
                          src={mobileImages[currentMobileImage1]} 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-cover object-top" 
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-30">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-medium">
                          Büyüt
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone 2 (Önde) */}
                  <motion.div 
                    initial={{ x: -60, y: 30, rotate: -2, opacity: 0 }}
                    whileInView={{ x: -50, y: 30, rotate: -2, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 -translate-x-[45%] md:-translate-x-[35%] w-[300px] h-[620px] bg-black rounded-[3rem] border-[8px] border-[#262626] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden z-20 flex flex-col cursor-pointer group"
                    onClick={() => openModal(mobileImages, currentMobileImage2)}
                  >
                    <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 flex justify-center">
                      <div className="w-36 h-5 bg-black rounded-b-2xl"></div>
                    </div>
                    <div className="bg-[#09090b] h-full w-full relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentMobileImage2}
                          src={mobileImages[currentMobileImage2]} 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-cover object-top" 
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-30">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-medium">
                          Büyüt
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
           </div>
        </section>

        {/* PROBLEMS VS SOLUTIONS */}
        <section id="solutions" className="max-w-7xl mx-auto px-6 mb-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Geleneksel takip sistemleri kolayca atlatılabilir.</h2>
            <p className="text-textMuted text-lg">Biz operasyonu sözlere değil, matematiksel ve görsel kanıtlara dayandırıyoruz.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/10 to-transparent p-8 lg:p-10">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                   <AlertCircle className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-semibold text-white">Saha Gerçekleri</h3>
               </div>
               <ul className="space-y-6">
                 {[
                   "Personelin markete gitmeden, uzaktan check-in yapması.",
                   "Eski fotoğrafların galeriden yüklenerek sahte kanıt sunulması.",
                   "Araç stoklarında gün sonu tutarsızlıklar ve kayıplar yaşanması.",
                   "Kontrolsüz bırakılan saha operasyonunda artan maliyetler."
                 ].map((t,i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                       <X className="w-3 h-3 text-red-400" />
                     </div>
                     <p className="text-white/70 text-sm leading-relaxed">{t}</p>
                   </li>
                 ))}
               </ul>
            </div>
            
            {/* Solution */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent p-8 lg:p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
               
               <div className="flex items-center gap-3 mb-8 relative z-10">
                 <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-semibold text-white">SahaTakip Çözümü</h3>
               </div>
               <ul className="space-y-6 relative z-10">
                 {[
                   <><strong className="text-white font-semibold">Geofence Kilidi:</strong> Konuma 50 metre yaklaşmadan sistem check-in işlemine kesinlikle izin vermez.</>,
                   <><strong className="text-white font-semibold">Canlı Kamera Zorunluluğu:</strong> Galeri erişimi kapalıdır. Anlık çekim yapılır, sahte fotoğraf engellenir.</>,
                   <><strong className="text-white font-semibold">Uçtan Uca Stok:</strong> Yükleme, teslimat ve iade döngüsü eşzamanlı izlenir ve stok açığı önlenir.</>,
                   <><strong className="text-white font-semibold">Tam Görünürlük:</strong> Yönetim paneli üzerinden her saniye kimin nerede olduğu canlı izlenir.</>
                 ].map((t,i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                       <CheckCircle2 className="w-3 h-3 text-primary" />
                     </div>
                     <p className="text-white/70 text-sm leading-relaxed">{t}</p>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="max-w-4xl mx-auto px-6 mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-[80px] rounded-full opacity-50"></div>
          <div className="bg-[#0a0a0a] border border-white/10 p-12 text-center relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Saha hakimiyetini ele alın.</h2>
              <p className="text-textMuted mb-10 text-lg max-w-xl mx-auto">
                Ücretsiz pilot süreç ile sistemin şirketinize uygunluğunu risk almadan test edin. Operasyonel körlüğe bugünden son verin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:demo@sahatakip.net?subject=Ücretsiz Pilot Talebi&body=Merhaba, SahaTakip sistemi için pilot kullanım başlatmak istiyoruz.%0D%0A%0D%0AŞirket Adı: %0D%0Aİletişim Kişisi: %0D%0ATelefon: "
                  className="bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] inline-flex justify-center items-center"
                >
                  Ücretsiz Pilot Başlat
                </a>
                <a 
                  href="mailto:satis@sahatakip.net?subject=SahaTakip Satış Görüşmesi Talebi&body=Merhaba, sisteminiz hakkında detaylı bilgi almak ve şirketimize uygunluğunu görüşmek istiyoruz."
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white py-4 px-8 rounded-xl text-sm font-semibold transition-all inline-flex justify-center items-center"
                >
                  Satış Ekibiyle Görüş
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="/logo_yatay.png" alt="SahaTakip Logo" className="h-10 w-auto object-contain opacity-90" />
          </div>
          <div className="text-sm text-textMuted">
            © {new Date().getFullYear()} SahaTakip. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6">
            <a href="mailto:info@sahatakip.net" className="text-sm text-textMuted hover:text-white transition-colors">info@sahatakip.net</a>
            <a href="#" className="text-sm text-textMuted hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-textMuted hover:text-white transition-colors">İletişim</a>
            <a href="#" className="text-sm text-textMuted hover:text-white transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
