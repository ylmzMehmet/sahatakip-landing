import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ShieldCheck, CheckCircle2, X } from 'lucide-react';

const problems = [
  'Personelin markete gitmeden uzaktan check-in yapması',
  'Eski fotoğrafların galeriden yüklenerek sahte kanıt sunulması',
  'Araç stoklarında gün sonu tutarsızlıklar ve kayıplar yaşanması',
  'Kontrolsüz bırakılan saha operasyonunda artan maliyetler',
  'Hangi personelin hangi rotayı tamamladığının belirsiz olması',
];

const solutions = [
  { bold: 'Geofence Kilidi:', text: 'Konuma 50m yaklaşmadan check-in yapılamaz.' },
  { bold: 'Canlı Kamera:', text: 'Galeri erişimi kapalı. Anlık çekim ve fotoğraf kontrolü.' },
  { bold: 'Uçtan Uca Stok:', text: 'Yükleme, teslimat ve iade eşzamanlı izlenir.' },
  { bold: 'AI Anomali Tespiti:', text: 'Şüpheli davranış ve stok sapmaları otomatik tespit edilir.' },
  { bold: 'Tam Görünürlük:', text: 'Her saniye kimin nerede olduğu canlı izlenir.' },
];

export default function ProblemsVsSolutions() {
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
      <div className="text-center mb-14">
        <h2 className="section-title">Geleneksel takip sistemleri kolayca atlatılabilir</h2>
        <p className="section-desc">
          Biz operasyonu sözlere değil, matematiksel ve görsel kanıtlara dayandırıyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-red-500/15 bg-gradient-to-b from-red-500/[0.07] to-transparent p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">Saha Gerçekleri</h3>
          </div>
          <ul className="space-y-5">
            {problems.map((t, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{t}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/15 bg-gradient-to-b from-primary/[0.07] to-transparent p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">SahaTakip Çözümü</h3>
            </div>
            <ul className="space-y-5">
              {solutions.map((s, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <strong className="text-white/90 font-semibold">{s.bold}</strong> {s.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
