import React from 'react';
import { motion } from 'framer-motion';
import {
  Map, MapPin, Route, UserCheck, FileText, BarChart3, Snowflake,
  Warehouse, Package, Truck, ClipboardCheck, Clock,
  LayoutDashboard, Users, Tag, ShoppingCart, RotateCcw, Gift, Wallet,
  FileBarChart, TrendingDown, Eye,
  Brain, ShieldAlert, AlertTriangle, Mic,
  UserCog, BadgeCheck, Target, TrendingUp, Building2, ReceiptText,
  Settings, Link2, Building,
  Monitor,
} from 'lucide-react';

const modules = [
  // Saha Yönetimi
  { icon: <Map className="w-4 h-4" />, title: 'Canlı Harita', desc: 'Personel anlık konum takibi', cat: 'saha' },
  { icon: <MapPin className="w-4 h-4" />, title: 'Ziyaret Noktaları & Grupları', desc: 'Teslimat ve ziyaret noktası yönetimi', cat: 'saha' },
  { icon: <Route className="w-4 h-4" />, title: 'Rota Şablonları & Takibi', desc: 'Günlük rota planlama, atama ve optimizasyon', cat: 'saha' },
  { icon: <UserCheck className="w-4 h-4" />, title: 'Personel İzleme', desc: 'Gün içi hareketler ve durak analizleri', cat: 'saha' },
  { icon: <FileText className="w-4 h-4" />, title: 'Dinamik Form Yönetimi', desc: 'Kod yazmadan form tasarımı ve yanıt takibi', cat: 'saha' },
  { icon: <BarChart3 className="w-4 h-4" />, title: 'Raf Payı Analizi', desc: 'AI destekli fotoğraf analizi ile raf sayımı', cat: 'saha' },
  { icon: <Snowflake className="w-4 h-4" />, title: 'Ekipman Takibi', desc: 'Sahadaki ekipmanların atama ve durum takibi', cat: 'saha' },

  // Lojistik & Stok
  { icon: <Warehouse className="w-4 h-4" />, title: 'Merkezi Depo', desc: 'Depo bazlı stok yönetimi', cat: 'lojistik' },
  { icon: <Package className="w-4 h-4" />, title: 'Ürün & Ürün Grupları', desc: 'Katalog ve kategori yönetimi', cat: 'lojistik' },
  { icon: <Truck className="w-4 h-4" />, title: 'Araç & Stoklar', desc: 'Araçlara stok girişi ve sorumluluk takibi', cat: 'lojistik' },
  { icon: <ClipboardCheck className="w-4 h-4" />, title: 'Teslimat Kayıtları', desc: 'Fotoğraflı kanıt ve kalan stok', cat: 'lojistik' },
  { icon: <Clock className="w-4 h-4" />, title: 'SKT Yaklaşan Ürünler', desc: 'Son kullanma tarihi yaklaşan lot takibi', cat: 'lojistik' },

  // Satış & Finans
  { icon: <LayoutDashboard className="w-4 h-4" />, title: 'Satış Dashboard', desc: 'Grafikler, istatistikler ve satış özeti', cat: 'satis' },
  { icon: <Users className="w-4 h-4" />, title: 'Müşteriler (Cari)', desc: 'Cari hesap ve risk/kredi limiti yönetimi', cat: 'satis' },
  { icon: <Tag className="w-4 h-4" />, title: 'Fiyat Listeleri', desc: 'Tenant/müşteri bazlı fiyatlandırma', cat: 'satis' },
  { icon: <ShoppingCart className="w-4 h-4" />, title: 'Sipariş Listesi', desc: 'Soğuk, sıcak ve dönemsel satış siparişleri', cat: 'satis' },
  { icon: <RotateCcw className="w-4 h-4" />, title: 'İadeler', desc: 'İade sipariş süreci ve onay akışı', cat: 'satis' },
  { icon: <Gift className="w-4 h-4" />, title: 'Promosyonlar', desc: 'Kampanya ve promosyon hesaplama', cat: 'satis' },
  { icon: <Wallet className="w-4 h-4" />, title: 'Tahsilatlar', desc: 'Tahsilat kayıtları ve kasa mutabakatı', cat: 'satis' },

  // Rapor & Denetim
  { icon: <FileBarChart className="w-4 h-4" />, title: 'Günlük Saha Özetleri', desc: 'Operasyon özeti ve performans KPI\'ları', cat: 'rapor' },
  { icon: <BarChart3 className="w-4 h-4" />, title: 'Ziyaret Tamamlama', desc: 'Ziyaret ve teslimat detay raporları', cat: 'rapor' },
  { icon: <TrendingDown className="w-4 h-4" />, title: 'Atlanan Durak Analizi', desc: 'Ziyaret edilmeyen noktaların analizi', cat: 'rapor' },
  { icon: <Clock className="w-4 h-4" />, title: 'Gün Sonu Mutabakatı', desc: 'Günlük stok doğrulama ve kapanış', cat: 'rapor' },
  { icon: <Eye className="w-4 h-4" />, title: 'Teslimat Denetimi', desc: 'Onay linkleri ve durak yanıtları', cat: 'rapor' },

  // AI & Güvenlik
  { icon: <Brain className="w-4 h-4" />, title: 'AI Analiz Merkezi', desc: 'Güvenilirlik puanları, stok tahmini', cat: 'ai' },
  { icon: <ShieldAlert className="w-4 h-4" />, title: 'Şüpheli Davranış Analizi', desc: 'Kritik anomali ve risk raporları', cat: 'ai' },
  { icon: <AlertTriangle className="w-4 h-4" />, title: 'Anomaliler', desc: 'Stok tutarsızlık, konum ve itiraz yönetimi', cat: 'ai' },
  { icon: <Mic className="w-4 h-4" />, title: 'Sesli Notlar', desc: 'AI ile sınıflandırılan sesli saha kayıtları', cat: 'ai' },

  // İK & Performans
  { icon: <UserCog className="w-4 h-4" />, title: 'Personel Yönetimi', desc: 'Bilgiler, harita ikon ve renk ayarları', cat: 'ik' },
  { icon: <BadgeCheck className="w-4 h-4" />, title: 'Saha Güven Pasaportu', desc: 'Doğrulanabilir güvenilirlik kaydı', cat: 'ik' },
  { icon: <Target className="w-4 h-4" />, title: 'Hedef Kampanyaları', desc: 'Satış hedefi tanımlama ve takip', cat: 'ik' },
  { icon: <TrendingUp className="w-4 h-4" />, title: 'Personel Hedefleri', desc: 'Bireysel hedef ilerleme takibi', cat: 'ik' },
  { icon: <Building2 className="w-4 h-4" />, title: 'Departman Yönetimi', desc: 'Organizasyon yapısı tanımlama', cat: 'ik' },
  { icon: <ReceiptText className="w-4 h-4" />, title: 'Masraf & İzin Onayları', desc: 'Personel taleplerinin onay akışı', cat: 'ik' },

  // Sistem Ayarları
  { icon: <Settings className="w-4 h-4" />, title: 'Saha Parametreleri', desc: 'Modül aç/kapa ve tenant bazlı ayarlar', cat: 'sistem' },
  { icon: <Link2 className="w-4 h-4" />, title: 'ERP Bağlantı Ayarları', desc: 'Logo, Akınsoft, Uyumsoft entegrasyonu', cat: 'sistem' },
  { icon: <Building className="w-4 h-4" />, title: 'Müşteri (Tenant) Yönetimi', desc: 'Çoklu firma/tenant yönetimi', cat: 'sistem' },
];

const categories = [
  { key: 'saha', label: 'Saha Yönetimi', count: 7 },
  { key: 'lojistik', label: 'Lojistik & Stok', count: 5 },
  { key: 'satis', label: 'Satış & Finans', count: 7 },
  { key: 'rapor', label: 'Rapor & Denetim', count: 5 },
  { key: 'ai', label: 'AI & Güvenlik', count: 4 },
  { key: 'ik', label: 'İK & Performans', count: 6 },
  { key: 'sistem', label: 'Sistem Ayarları', count: 3 },
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
            35+ modül ile{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              tam kontrol
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Saha, lojistik, satış, finans ve İK — operasyonunuzun her boyutunu tek bir merkezi panelden yönetin.
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
              transition={{ delay: i * 0.02 }}
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
