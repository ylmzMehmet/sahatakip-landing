import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, TrendingUp, Camera, Sparkles, Cpu } from 'lucide-react';

const aiFeatures = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Güvenilirlik Puanı',
    desc: 'Her personelin anomali geçmişi, rota uyumu ve teslimat doğruluğu analiz edilerek güvenilirlik skoru hesaplanır.',
    gradient: 'from-brand to-blue-500',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Stok Tahmin Motoru',
    desc: 'Geçmiş satış ve teslimat verilerine dayalı stok ihtiyaçlarını önceden tahmin eder, fire oranını minimize eder.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: 'Fotoğraf Doğrulama',
    desc: 'Aynı fotoğrafın birden fazla kullanılıp kullanılmadığını tespit eder. Duplike ve sahte kanıtları yakalar.',
    gradient: 'from-amber-400 to-orange',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Anomali Kalıp Tespiti',
    desc: 'Tekrarlayan anomali kalıplarını tespit ederek sistematik kural ihlallerini ve riskleri ortaya çıkarır.',
    gradient: 'from-violet-400 to-purple-500',
  },
];

export default function AICenter() {
  return (
    <section id="ai" className="relative py-20 lg:py-28 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-50 pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/[0.04] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15] text-violet-400 text-[11px] font-bold tracking-widest uppercase mb-5">
            <Cpu className="w-3 h-3" />
            Yapay Zeka
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5">
            AI ile{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-brand to-brand-light">
              proaktif yönetim
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Makine öğrenmesi ile personel davranışlarını analiz edin, stok tahminleri yapın ve
            anomalileri sorun oluşmadan tespit edin.
          </p>
        </motion.div>

        {/* AI Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {aiFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-7 hover:bg-slate-50 hover:border-violet-500/[0.12] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Hover glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${f.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5 shadow-lg opacity-90`}>
                  {f.icon}
                </div>
                <h4 className="text-[15px] font-semibold text-slate-900 mb-2.5">{f.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
