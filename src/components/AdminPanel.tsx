import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Map, MapPin, Truck, Users, Package,
  ClipboardCheck, WifiOff, FileBarChart, Route, Brain,
  BarChart3, AlertTriangle, Clock, Eye, UserCheck, TrendingDown, ShieldAlert
} from 'lucide-react';

const adminModules = [
  { icon: <LayoutDashboard className="w-4 h-4" />, title: 'Ana Sayfa', desc: 'Grafikler, skorlar ve operasyon özeti' },
  { icon: <Map className="w-4 h-4" />, title: 'Canlı Harita', desc: 'Personel takibi ve anlık konum izleme' },
  { icon: <MapPin className="w-4 h-4" />, title: 'Durak Yönetimi', desc: 'Teslimat ve ziyaret noktalarının yönetimi' },
  { icon: <Truck className="w-4 h-4" />, title: 'Araç & Stoklar', desc: 'Araçlara stok girişi ve takibi' },
  { icon: <Users className="w-4 h-4" />, title: 'Personel Yönetimi', desc: 'Personel bilgileri, harita ikon ve renk ayarları' },
  { icon: <Package className="w-4 h-4" />, title: 'Ürün Kataloğu', desc: 'Ürün bilgileri ve kategori yönetimi' },
  { icon: <ClipboardCheck className="w-4 h-4" />, title: 'Teslimat Kayıtları', desc: 'Fotoğraflı kanıt ve kalan stok bilgisi' },
  { icon: <WifiOff className="w-4 h-4" />, title: 'Offline Teslimatlar', desc: 'Çevrimdışı kayıtların otomatik senkronizasyonu' },
  { icon: <FileBarChart className="w-4 h-4" />, title: 'Araç Teslimat Bilgileri', desc: 'Duraklara yapılan teslimat ve firma onay durumları' },
  { icon: <Route className="w-4 h-4" />, title: 'Rota Takibi', desc: 'Günlük, haftalık, aylık rota atama ve izleme' },
  { icon: <BarChart3 className="w-4 h-4" />, title: 'Stok Hareket Geçmişi', desc: 'Tüm stok giriş/çıkış hareketleri' },
  { icon: <AlertTriangle className="w-4 h-4" />, title: 'Anomali & İtiraz', desc: 'Stok tutarsızlık ve itiraz yönetimi' },
  { icon: <Clock className="w-4 h-4" />, title: 'Gün Sonu Mutabakatı', desc: 'Günlük stok doğrulama ve kapanış' },
  { icon: <Eye className="w-4 h-4" />, title: 'Teslimat Denetimi', desc: 'Onay linkleri ve durak yanıtları' },
  { icon: <UserCheck className="w-4 h-4" />, title: 'Personel Rota Geçmişi', desc: 'Gün içi hareketler ve durak analizleri' },
  { icon: <TrendingDown className="w-4 h-4" />, title: 'Atlanan Durak Analizi', desc: 'Planlanıp ziyaret edilmeyen noktalar' },
  { icon: <ShieldAlert className="w-4 h-4" />, title: 'Şüpheli Davranış Analizi', desc: 'Kritik anomali ve risk raporları' },
  { icon: <Brain className="w-4 h-4" />, title: 'AI Analiz Merkezi', desc: 'Güvenilirlik puanları, stok tahmini, fotoğraf kontrolü' },
];

export default function AdminPanel() {
  return (
    <section id="admin" className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
      <div className="bg-surface/60 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="section-label">
              <LayoutDashboard className="w-3.5 h-3.5" /> Admin Paneli
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Güçlü yönetim paneli,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">
                tam kontrol
              </span>
            </h2>
            <p className="text-textMuted text-base max-w-2xl mx-auto">
              18+ modül ile saha operasyonlarınızın her boyutunu tek bir merkezi panelden yönetin. 
              Canlı haritadan AI analizine kadar her şey elinizin altında.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {adminModules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-transparent hover:border-white/5 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  {mod.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">{mod.title}</h4>
                  <p className="text-xs text-textDim leading-relaxed">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
