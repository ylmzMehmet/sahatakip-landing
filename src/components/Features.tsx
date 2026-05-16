import React from 'react';
import { motion } from 'framer-motion';
import {
  Crosshair, Camera, Map, Route, PackageCheck,
  ShieldCheck, Activity, Smartphone, BarChart3, Layers,
} from 'lucide-react';

const features = [
  {
    icon: <Crosshair className="w-5 h-5" />,
    title: 'Geofence Konum Kilidi',
    desc: 'Teslimat noktasına 50m yaklaşmadan işlem yapılamaz. Uzaktan sahte check-in teknik olarak imkansızdır.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: 'Canlı Fotoğraf Kanıtı',
    desc: 'Galeri erişimi kapalı. Sadece anlık kamera çekimi. Eski fotoğraflarla manipülasyon engellenir.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: 'Canlı Harita İzleme',
    desc: 'Tüm personelin anlık konumlarını harita üzerinde takip edin. Rota sapmaları anında tespit edilir.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Route className="w-5 h-5" />,
    title: 'Dinamik Rota Yönetimi',
    desc: 'Günlük, haftalık veya aylık rota planlama. Personele otomatik atama ve sapma analizi.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: <PackageCheck className="w-5 h-5" />,
    title: 'Uçtan Uca Stok Takibi',
    desc: 'Araç yükleme, teslimat ve iade döngüsü eşzamanlı izlenir. Gün sonu mutabakatı ile fire sıfırlanır.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Teslimat Onay Sistemi',
    desc: 'Teslimat noktasına onay linki gönderilir. Firma onay/ret verebilir, süreç kayıt altına alınır.',
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: 'Anomali & İtiraz Takibi',
    desc: 'Stok tutarsızlıkları, konum anomalileri ve itirazlar tek merkezden yönetilir.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Offline Teslimat Desteği',
    desc: 'İnternet kesintisinde teslimatlar kuyruğa alınır. Bağlantı gelince otomatik senkronize edilir.',
    gradient: 'from-teal-400 to-emerald-500',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Kapsamlı Raporlama',
    desc: 'Saha özetleri, ziyaret tamamlama, atlanan durak analizi ve personel performans KPI\'ları.',
    gradient: 'from-blue-400 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28">
      {/* Section BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-card/30 to-transparent pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/[0.08] border border-brand/[0.15] text-brand text-[11px] font-bold tracking-widest uppercase mb-5">
            <Layers className="w-3 h-3" />
            Platform
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5 leading-tight">
            Operasyonlarınızı uçtan uca
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              kontrol altına alın
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Geofence kilidi, canlı fotoğraf, AI anomali tespiti ve kapsamlı raporlama ile
            saha operasyonlarınızda manipülasyonu sıfırlayın.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative bg-white/[0.015] border border-white/[0.04] rounded-2xl p-7 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                  {feature.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2.5 tracking-tight">{feature.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
