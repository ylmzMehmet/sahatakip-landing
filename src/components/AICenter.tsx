import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Camera, Shield, Sparkles } from 'lucide-react';

const aiFeatures = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Personel Güvenilirlik Puanı',
    desc: 'Her personelin anomali geçmişi, rota uyumu ve teslimat doğruluğu analiz edilerek güvenilirlik skoru hesaplanır.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Stok Tahmin Motoru',
    desc: 'Geçmiş satış ve teslimat verilerine dayalı olarak stok ihtiyaçlarını önceden tahmin eder, fire oranını minimize eder.',
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: 'Fotoğraf Doğrulama',
    desc: 'Aynı fotoğrafın birden fazla kullanılıp kullanılmadığını tespit eder. Duplike ve sahte kanıtları otomatik yakalar.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Anomali Kalıp Tespiti',
    desc: 'Tekrarlayan anomali kalıplarını tespit ederek sistematik kural ihlallerini ve organizasyonel riskleri ortaya çıkarır.',
  },
];

export default function AICenter() {
  return (
    <section id="ai" className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
      <div className="relative bg-gradient-to-br from-surface via-[#0d0d20] to-surface border border-white/5 rounded-3xl p-8 md:p-14 overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-14">
            <div className="section-label">
              <Brain className="w-3.5 h-3.5" /> AI Analiz Merkezi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Yapay zeka ile{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-primary to-accent">
                proaktif saha yönetimi
              </span>
            </h2>
            <p className="text-textMuted text-base max-w-2xl mx-auto">
              Makine öğrenmesi algoritmaları ile personel davranışlarını analiz edin, stok tahminleri yapın 
              ve anomali kalıplarını sorun oluşmadan tespit edin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4 group-hover:bg-violet-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-textMuted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
