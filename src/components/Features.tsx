import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Camera, ShieldCheck, BarChart3, Route, PackageCheck,
  Smartphone, Activity, Crosshair, Map, Users, Zap,
} from 'lucide-react';

const features = [
  {
    icon: <Crosshair className="w-5 h-5" />,
    title: 'Geofence Konum Kilidi',
    desc: 'Personel teslimat noktasına 50m yaklaşmadan işlem yapamaz. Uzaktan sahte check-in tamamen engellenir.',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/10',
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: 'Canlı Fotoğraf Zorunluluğu',
    desc: 'Galeri erişimi kapalı, sadece anlık çekim. Eski fotoğraflarla sahte kanıt sunulması teknik olarak imkansız.',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/10',
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: 'Canlı Harita Takibi',
    desc: 'Tüm personelin anlık konumlarını harita üzerinde canlı takip edin. Rota sapmaları anında tespit edilir.',
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-500/10',
  },
  {
    icon: <Route className="w-5 h-5" />,
    title: 'Dinamik Rota Yönetimi',
    desc: 'Günlük, haftalık veya aylık rota planlayın. Personele otomatik atama yapılır ve sapma analizi sağlanır.',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/10',
  },
  {
    icon: <PackageCheck className="w-5 h-5" />,
    title: 'Uçtan Uca Stok Takibi',
    desc: 'Araç yükleme, teslimat ve iade döngüsü eşzamanlı izlenir. Gün sonu mutabakatı ile fire sıfırlanır.',
    color: 'from-rose-500/20 to-pink-500/20',
    border: 'border-rose-500/10',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Teslimat Onay Sistemi',
    desc: 'Teslimat yapılan noktaya onay linki gönderilir. Firma onay/ret verebilir, tüm süreç kayıt altına alınır.',
    color: 'from-sky-500/20 to-indigo-500/20',
    border: 'border-sky-500/10',
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: 'Anomali & İtiraz Takibi',
    desc: 'Stok tutarsızlıkları, konum anomalileri ve personel itirazları tek merkezden yönetilir.',
    color: 'from-red-500/20 to-rose-500/20',
    border: 'border-red-500/10',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Offline Teslimat Desteği',
    desc: 'İnternet kesintilerinde teslimatlar kuyruğa alınır. Bağlantı geldiğinde otomatik senkronize edilir.',
    color: 'from-teal-500/20 to-emerald-500/20',
    border: 'border-teal-500/10',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Kapsamlı Raporlama',
    desc: 'Günlük saha özetleri, ziyaret tamamlama, atlanan durak analizi ve personel performans KPI\'ları.',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
      <div className="text-center mb-16">
        <div className="section-label">
          <Zap className="w-3.5 h-3.5" /> Platform Özellikleri
        </div>
        <h2 className="section-title">Sahada tam kontrolü ele alın</h2>
        <p className="section-desc">
          Geofence kilidi, canlı fotoğraf kanıtı, AI anomali tespiti ve kapsamlı raporlama ile 
          saha operasyonlarınızda manipülasyonu sıfırlayın.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative bg-surface/80 border ${feature.border} rounded-2xl p-6 hover:bg-surfaceHover transition-all duration-300 cursor-default overflow-hidden`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-primary mb-4 group-hover:border-primary/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-textMuted leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
