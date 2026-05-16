import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 mb-20 lg:mb-28 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 blur-[80px] rounded-full opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#0a0a18] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="relative z-10 p-10 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Ücretsiz Pilot Kullanım
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Saha hakimiyetini{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">
              ele alın
            </span>
          </h2>

          <p className="text-textMuted mb-10 text-lg max-w-xl mx-auto leading-relaxed">
            Risk almadan test edin. Ücretsiz pilot süreç ile sistemin şirketinize uygunluğunu değerlendirin. 
            Operasyonel körlüğe bugünden son verin.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="mailto:demo@sahatakip.net?subject=Ücretsiz Pilot Talebi&body=Merhaba, SahaTakip sistemi için pilot kullanım başlatmak istiyoruz.%0D%0A%0D%0AŞirket Adı: %0D%0Aİletişim Kişisi: %0D%0ATelefon: "
              className="bg-primary hover:bg-cyan-600 text-white py-4 px-8 rounded-xl text-sm font-semibold transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] inline-flex justify-center items-center gap-2"
            >
              Ücretsiz Pilot Başlat <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:satis@sahatakip.net?subject=SahaTakip Satış Görüşmesi Talebi&body=Merhaba, sisteminiz hakkında detaylı bilgi almak ve şirketimize uygunluğunu görüşmek istiyoruz."
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white py-4 px-8 rounded-xl text-sm font-semibold transition-all inline-flex justify-center items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Satış Ekibiyle Görüş
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-textDim">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@sahatakip.net" className="hover:text-white transition-colors">info@sahatakip.net</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>İletişime geçin</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
