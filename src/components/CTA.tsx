import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1a30] to-[#0a1020]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/[0.07] blur-[120px] rounded-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-emerald-400 text-[11px] font-bold tracking-widest uppercase mb-6">
              <Rocket className="w-3 h-3" />
              Ücretsiz Pilot
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Saha hakimiyetini
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-cyan-300">
                bugün ele alın
              </span>
            </h2>

            <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Risk almadan test edin. Ücretsiz pilot süreç ile sistemin şirketinize uygunluğunu değerlendirin.
              Operasyonel körlüğe son verin.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="mailto:demo@sahatakip.net?subject=Ücretsiz Pilot Talebi&body=Merhaba, SahaTakip sistemi için pilot kullanım başlatmak istiyoruz.%0D%0A%0D%0AŞirket Adı: %0D%0Aİletişim Kişisi: %0D%0ATelefon: "
                className="group inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-light text-bg font-semibold text-[15px] px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.25)] hover:shadow-[0_0_50px_rgba(0,212,255,0.4)]"
              >
                Ücretsiz Pilot Başlat
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="mailto:satis@sahatakip.net?subject=SahaTakip Satış Görüşmesi Talebi"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-white font-semibold text-[15px] px-8 py-4 rounded-2xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-brand" />
                Satış Ekibiyle Görüş
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-dim">
              <a href="mailto:info@sahatakip.net" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand/60" />
                info@sahatakip.net
              </a>
              <a href="mailto:demo@sahatakip.net" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand/60" />
                demo@sahatakip.net
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
