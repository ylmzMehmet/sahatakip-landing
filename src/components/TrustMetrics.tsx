import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '%99.9', label: 'Teslimat Doğrulama Oranı', desc: 'GPS + Fotoğraf kanıtı' },
  { value: '50m', label: 'Geofence Hassasiyeti', desc: 'Manipüle edilemez konum kilidi' },
  { value: 'Sıfır', label: 'Sahte Ziyaret Toleransı', desc: 'AI destekli anomali tespiti' },
  { value: '7/24', label: 'Canlı İzleme', desc: 'Gerçek zamanlı saha görünürlüğü' },
];

export default function TrustMetrics() {
  return (
    <section className="relative border-y border-white/5 bg-surface/50 backdrop-blur-sm py-10 lg:py-16 mb-16 lg:mb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-white/5">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center px-4"
          >
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm text-white/80 font-medium mb-1">{stat.label}</div>
            <div className="text-xs text-textDim">{stat.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
