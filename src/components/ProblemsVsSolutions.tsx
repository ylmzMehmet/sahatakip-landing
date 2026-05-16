import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, AlertOctagon, ShieldCheck } from 'lucide-react';

const problems = [
  'Personelin markete gitmeden uzaktan check-in yapması',
  'Eski fotoğrafların galeriden yüklenerek sahte kanıt sunulması',
  'Araç stoklarında gün sonu tutarsızlıklar ve kayıp yaşanması',
  'Hangi rotanın tamamlandığının belirsiz kalması',
  'Kontrolsüz saha operasyonunda artan maliyetler',
];

const solutions = [
  { bold: 'Geofence Kilidi', text: '50m yaklaşmadan check-in yapılamaz' },
  { bold: 'Canlı Kamera', text: 'Galeri kapalı, anlık çekim zorunlu' },
  { bold: 'Uçtan Uca Stok', text: 'Yükleme-teslimat-iade eşzamanlı izleme' },
  { bold: 'AI Anomali Tespiti', text: 'Şüpheli davranış otomatik tespiti' },
  { bold: 'Tam Görünürlük', text: 'Canlı harita ile anlık konum izleme' },
];

export default function ProblemsVsSolutions() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5">
            Geleneksel sistemler{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange">
              kolayca atlatılır
            </span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Biz operasyonu sözlere değil, matematiksel ve görsel kanıtlara dayandırıyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.06] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/30 via-red-500/10 to-transparent" />

            <div className="relative p-8 lg:p-10 border border-red-500/[0.08] rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertOctagon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Saha Gerçekleri</h3>
                  <p className="text-[12px] text-red-400/70">Karşılaştığınız sorunlar</p>
                </div>
              </div>

              <ul className="space-y-4">
                {problems.map((t, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <div className="w-5 h-5 rounded-md bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="text-[13px] text-white/50 leading-relaxed">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.06] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-brand/30 via-brand/10 to-transparent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand/[0.08] blur-[80px] rounded-full pointer-events-none" />

            <div className="relative p-8 lg:p-10 border border-brand/[0.08] rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">SahaTakip Çözümü</h3>
                  <p className="text-[12px] text-brand/70">Kanıta dayalı çözümler</p>
                </div>
              </div>

              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <div className="w-5 h-5 rounded-md bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-brand" />
                    </div>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      <strong className="text-white/80 font-semibold">{s.bold}:</strong> {s.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
