import React from 'react';
import { motion } from 'framer-motion';
import { Route, MapPin, Target, Fingerprint, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Rota Atanır',
    desc: 'Yönetici günlük rotaları belirler. Sistem optimize eder ve mobil uygulamaya düşer.',
    icon: <Route className="w-6 h-6" />,
    color: 'text-brand',
    bg: 'bg-brand/10',
    border: 'border-brand/20',
  },
  {
    num: '02',
    title: 'Sahaya İntikal',
    desc: 'Personel teslimat noktasına gider. Canlı konum üzerinden merkeze anlık veri akışı başlar.',
    icon: <MapPin className="w-6 h-6" />,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    num: '03',
    title: 'GPS Doğrulama',
    desc: 'Noktaya 50m yaklaşmadan işlem yapılamaz. Uzaktan sahte "gittim" bildirimi engellenir.',
    icon: <Target className="w-6 h-6" />,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    num: '04',
    title: 'Kanıtlı Teslimat',
    desc: 'Sadece canlı kamera ile fotoğraf çekilir. Galeri erişimi teknik olarak yasaklıdır.',
    icon: <Fingerprint className="w-6 h-6" />,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/[0.08] border border-brand/[0.15] text-brand text-[11px] font-bold tracking-widest uppercase mb-5">
            İş Akışı
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5">
            4 adımda operasyon doğrulama
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Basit ama manipüle edilemez iş akışı ile saha operasyonlarınızı kanıtlayın.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[3.2rem] left-[12%] right-[12%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-brand/30 via-emerald-400/30 via-amber-400/30 to-violet-400/30" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} mb-6 shadow-lg`}>
                  {step.icon}
                </div>

                {/* Step Number */}
                <span className={`text-[11px] font-bold ${step.color} tracking-[0.25em] uppercase font-mono mb-3`}>
                  ADIM {step.num}
                </span>

                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed max-w-[260px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
