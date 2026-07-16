import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart, Wallet, Warehouse, RotateCcw, Gift, FileText,
  Target, Navigation, Snowflake, Timer, Layers3,
} from 'lucide-react';

const salesModules = [
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: 'Satış & Sipariş Yönetimi',
    desc: 'Soğuk satış (merkez depodan sevk), sıcak satış (araçtan anında) ve dönemsel satış (araçtan teslim, toplu faturalama) — çok kademeli onay akışıyla.',
    gradient: 'from-brand to-brand-light',
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: 'Tahsilat & ERP Entegrasyonu',
    desc: 'Logo, Akınsoft ve Uyumsoft ile canlı entegrasyon. Tahsilat kayıtları, kasa mutabakatı ve dönemsel toplu faturalama otomatik işler.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Warehouse className="w-5 h-5" />,
    title: 'Depo & Stok Yönetimi',
    desc: 'Merkezi depo, ürün/ürün grubu kataloğu, araç stok sorumluluğu ve son kullanma tarihi yaklaşan lot takibi tek ekrandan.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: <RotateCcw className="w-5 h-5" />,
    title: 'İade Yönetimi',
    desc: 'Sahadan başlayan iade süreçleri, onay akışıyla merkeze kadar kayıt altında ve izlenebilir.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: 'Promosyon & Fiyat Listeleri',
    desc: 'Kampanya/promosyon hesaplama, müşteri bazlı fiyat listeleri ve cari risk/kredi limiti kontrolü sipariş anında devrede.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Dinamik Form Builder',
    desc: 'Ziyaret, rota başlangıç/bitiş, aktivite, sipariş, iade veya anomali anına bağlanan, kod yazmadan tasarlanan form yapısı.',
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Hedef & Prim Takibi',
    desc: 'Kampanya bazlı satış hedefleri, personel ilerleme takibi ve yönetici hedef dashboard\'ı.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: <Navigation className="w-5 h-5" />,
    title: 'Rota Optimizasyonu',
    desc: 'Gerçek bir VRPTW çözücüsüyle (Google OR-Tools) zaman penceresi, araç kapasitesi ve öncelik kısıtlarına göre otomatik rota planlama; çoklu personel için bölge optimizasyonu.',
    gradient: 'from-teal-400 to-emerald-500',
  },
  {
    icon: <Snowflake className="w-5 h-5" />,
    title: 'Ekipman Takibi',
    desc: 'Sahaya yerleştirilen ekipmanların (ör. dondurucu dolap) atama ve durum takibi tek ekrandan.',
    gradient: 'from-brand-light to-brand',
  },
  {
    icon: <Timer className="w-5 h-5" />,
    title: 'Mesai & Mola Takibi',
    desc: 'Personel mesai başlat/bitir kaydı, kategori bazlı günlük aktivite/mola takibi, masraf ve izin talebi onay akışı.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

export default function SalesOps() {
  return (
    <section id="sales" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/[0.08] border border-brand/[0.15] text-brand text-[11px] font-bold tracking-widest uppercase mb-5">
            <Layers3 className="w-3 h-3" />
            Satış & Operasyon
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5 leading-tight">
            Satıştan depoya,{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              sahanın tamamı
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Satış, tahsilat, iade, depo ve ekip yönetimi artık aynı platformda. Saha ekibiniz
            sahada ne yapıyorsa, sistem onu görüyor ve yönetiyor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {salesModules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-7 hover:bg-slate-50 hover:border-slate-300 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${mod.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white mb-5 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                  {mod.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-2.5 tracking-tight">{mod.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
