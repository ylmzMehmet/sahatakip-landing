import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, ShieldX, Radio } from 'lucide-react';

const stats = [
  { icon: <TrendingUp className="w-5 h-5" />, value: '%99.9', label: 'Teslimat Doğrulama', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { icon: <MapPin className="w-5 h-5" />, value: '50m', label: 'Geofence Hassasiyeti', color: 'text-brand', bg: 'bg-brand/10' },
  { icon: <ShieldX className="w-5 h-5" />, value: 'Sıfır', label: 'Sahte Ziyaret Toleransı', color: 'text-orange', bg: 'bg-orange/10' },
  { icon: <Radio className="w-5 h-5" />, value: '7/24', label: 'Canlı Saha İzleme', color: 'text-violet-400', bg: 'bg-violet-400/10' },
];

export default function TrustMetrics() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/50 to-bg pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 lg:p-8 text-center hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${stat.bg} ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm text-muted font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
