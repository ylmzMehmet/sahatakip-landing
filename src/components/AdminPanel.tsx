import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Map, MapPin, Truck, Users, Package,
  ClipboardCheck, WifiOff, FileBarChart, Route, Brain,
  BarChart3, AlertTriangle, Clock, Eye, UserCheck, TrendingDown, ShieldAlert, Monitor
} from 'lucide-react';

const modules = [
  { icon: <LayoutDashboard className="w-4 h-4" />, title: 'Ana Sayfa', desc: 'Grafikler, skorlar ve operasyon özeti', cat: 'core' },
  { icon: <Map className="w-4 h-4" />, title: 'Canlı Harita', desc: 'Personel anlık konum takibi', cat: 'core' },
  { icon: <MapPin className="w-4 h-4" />, title: 'Durak Yönetimi', desc: 'Teslimat ve ziyaret noktaları', cat: 'core' },
  { icon: <Truck className="w-4 h-4" />, title: 'Araç & Stoklar', desc: 'Araçlara stok girişi ve takibi', cat: 'core' },
  { icon: <Users className="w-4 h-4" />, title: 'Personel Yönetimi', desc: 'Bilgiler, harita ikon ve renk ayarları', cat: 'core' },
  { icon: <Package className="w-4 h-4" />, title: 'Ürün Kataloğu', desc: 'Ürün bilgileri ve kategori yönetimi', cat: 'core' },
  { icon: <ClipboardCheck className="w-4 h-4" />, title: 'Teslimat Kayıtları', desc: 'Fotoğraflı kanıt ve kalan stok', cat: 'ops' },
  { icon: <WifiOff className="w-4 h-4" />, title: 'Offline Teslimatlar', desc: 'Çevrimdışı kayıtların senkronizasyonu', cat: 'ops' },
  { icon: <FileBarChart className="w-4 h-4" />, title: 'Araç Teslimat Bilgileri', desc: 'Durak teslimatları ve firma onayları', cat: 'ops' },
  { icon: <Route className="w-4 h-4" />, title: 'Rota Takibi', desc: 'Günlük, haftalık, aylık rota atama', cat: 'ops' },
  { icon: <BarChart3 className="w-4 h-4" />, title: 'Stok Hareket Geçmişi', desc: 'Tüm stok giriş/çıkış hareketleri', cat: 'report' },
  { icon: <AlertTriangle className="w-4 h-4" />, title: 'Anomali & İtiraz', desc: 'Stok tutarsızlık ve itiraz yönetimi', cat: 'report' },
  { icon: <Clock className="w-4 h-4" />, title: 'Gün Sonu Mutabakatı', desc: 'Günlük stok doğrulama ve kapanış', cat: 'report' },
  { icon: <Eye className="w-4 h-4" />, title: 'Teslimat Denetimi', desc: 'Onay linkleri ve durak yanıtları', cat: 'report' },
  { icon: <UserCheck className="w-4 h-4" />, title: 'Personel Rota Geçmişi', desc: 'Gün içi hareketler ve durak analizleri', cat: 'report' },
  { icon: <TrendingDown className="w-4 h-4" />, title: 'Atlanan Durak Analizi', desc: 'Ziyaret edilmeyen noktaların analizi', cat: 'report' },
  { icon: <ShieldAlert className="w-4 h-4" />, title: 'Şüpheli Davranış Analizi', desc: 'Kritik anomali ve risk raporları', cat: 'ai' },
  { icon: <Brain className="w-4 h-4" />, title: 'AI Analiz Merkezi', desc: 'Güvenilirlik puanları, stok tahmini', cat: 'ai' },
];

const categories = [
  { key: 'core', label: 'Temel Yönetim', count: 6 },
  { key: 'ops', label: 'Operasyon', count: 4 },
  { key: 'report', label: 'Raporlama', count: 6 },
  { key: 'ai', label: 'AI & Analiz', count: 2 },
];

export default function AdminPanel() {
  return (
    <section id="admin" className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/[0.08] border border-brand/[0.15] text-brand text-[11px] font-bold tracking-widest uppercase mb-5">
            <Monitor className="w-3 h-3" />
            Admin Panel
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-5">
            18+ modül ile{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              tam kontrol
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Saha operasyonlarınızın her boyutunu tek bir merkezi panelden yönetin.
          </p>
        </motion.div>

        {/* Category Labels */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <div key={cat.key} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-[12px] font-medium text-slate-600">
              {cat.label}
              <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-900">{cat.count}</span>
            </div>
          ))}
        </div>

        {/* Module Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025 }}
              className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-9 h-9 rounded-xl bg-brand/[0.08] flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/[0.15] transition-colors">
                {mod.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-[13px] font-semibold text-slate-900 mb-0.5 truncate">{mod.title}</h4>
                <p className="text-[12px] text-dim leading-relaxed">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
