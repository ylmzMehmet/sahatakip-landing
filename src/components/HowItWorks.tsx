import React from 'react';
import { motion } from 'framer-motion';
import { Route, MapPin, Target, Fingerprint, Settings } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Rota Atanır',
    desc: 'Yönetici günlük rotaları belirler, sistem optimize eder ve mobil uygulamaya düşer.',
    icon: <Route className="w-5 h-5" />,
  },
  {
    step: '02',
    title: 'Sahaya İntikal',
    desc: 'Personel markete gider. Canlı konum üzerinden merkeze anlık veri akışı başlar.',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    step: '03',
    title: 'GPS Doğrulama',
    desc: 'Markete 50m yaklaşmadan işlem yapılamaz. Uzaktan "gittim" bildirimi engellenir.',
    icon: <Target className="w-5 h-5" />,
  },
  {
    step: '04',
    title: 'Kanıtlı Teslimat',
    desc: 'Sadece canlı kamera ile fotoğraf çekilir. Galeri erişimi teknik olarak yasaklıdır.',
    icon: <Fingerprint className="w-5 h-5" />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
      <div className="text-center mb-16">
        <div className="section-label">
          <Settings className="w-3.5 h-3.5" /> İş Akışı
        </div>
        <h2 className="section-title">Operasyon nasıl doğrulanır?</h2>
        <p className="section-desc">
          Saha personeli için tasarlanmış basit ama manipüle edilemez iş akışı. 4 adımda operasyon doğrulama.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary mb-6 relative overflow-hidden group-hover:border-primary/40 transition-all duration-300 shadow-lg shadow-black/40 group-hover:shadow-primary/10">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              {s.icon}
            </div>
            <div className="text-xs font-bold text-primary mb-3 tracking-[0.2em] uppercase font-mono">
              ADIM {s.step}
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">{s.title}</h4>
            <p className="text-sm text-textMuted leading-relaxed max-w-[240px]">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
