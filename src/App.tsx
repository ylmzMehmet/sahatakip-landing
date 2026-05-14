import { motion } from 'framer-motion'
import { 
  MapPin, 
  Camera, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Users, 
  ChevronRight,
  Mail
} from 'lucide-react'
import './App.css'

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="app-container">
      {/* Background Decor */}
      <div className="glow accent-gradient" style={{ width: '600px', height: '600px', top: '-200px', right: '-100px' }} />
      <div className="glow" style={{ width: '400px', height: '400px', bottom: '100px', left: '-100px', background: '#6366f1' }} />

      <nav className="navbar glass">
        <div className="nav-content">
          <div className="logo">
            <ShieldCheck className="icon-cyan" size={32} />
            <span>SahaTakip</span>
          </div>
          <div className="nav-links">
            <a href="#features">Özellikler</a>
            <a href="#ai">AI Gücü</a>
            <a href="#contact" className="btn-small accent-gradient">Pilot Başvuru</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <motion.div 
          className="hero-badge glass"
          {...fadeIn}
        >
          <Zap size={14} className="icon-cyan" />
          <span>Yeni Nesil Saha Operasyon Yönetimi</span>
        </motion.div>

        <motion.h1 
          className="text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Saha Ekipleriniz Gerçekten <br />
          <span className="text-cyan">Her Noktaya Uğruyor mu?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          SahaTakip ile ziyaretleri GPS ve fotoğraf ile doğrulayın, 
          AI destekli analizlerle saha suistimallerini sıfıra indirin.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="mailto:info@sahatakip.net" className="btn-large accent-gradient">
            Ücretsiz Pilot Deneyin <ChevronRight size={20} />
          </a>
          <a href="#features" className="btn-large glass">Sistemi İncele</a>
        </motion.div>

        <motion.div 
          className="hero-mockup"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="mockup-container glass">
            <img src="/map-hero.png" alt="SahaTakip Dashboard" className="mockup-img" />
          </div>
          <p className="disclaimer-text">Görseller temsilidir, sistemin arka plan teknolojisini yansıtır.</p>
        </motion.div>
      </section>

      <section id="features" className="features-grid">
        <div className="section-header">
          <h2 className="text-gradient">Operasyonel Mükemmellik</h2>
          <p>Saha süreçlerinizi uçtan uca kontrol altına alın.</p>
        </div>

        <div className="cards-container">
          {[
            { 
              icon: <MapPin />, 
              title: "GPS Geofence Kontrolü", 
              desc: "Personelin markete 50 metre yaklaşmadan check-in yapmasını engelleyen akıllı doğrulama." 
            },
            { 
              icon: <Camera />, 
              title: "Fotoğraflı Kanıt", 
              desc: "Her teslimat ve ziyaret için zorunlu fotoğraf. Sahteciliği önleyen AI pHash analizi." 
            },
            { 
              icon: <BarChart3 />, 
              title: "Araç Stok Takibi", 
              desc: "Gün başı yükleme ve gün sonu mutabakat ile araç stok farklarını anlık tespit edin." 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="feature-card glass"
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-icon accent-gradient">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="ai" className="ai-section glass">
        <div className="ai-content">
          <div className="ai-badge">AI DESTEKLİ</div>
          <h2 className="text-gradient">Veriden Gelen Güven</h2>
          <p>Sıradan takip sistemlerinin ötesine geçin. AI algoritmalarımız saha verilerini işleyerek riskleri sizin yerinize bulur.</p>
          
          <ul className="ai-list">
            <li>
              <ShieldCheck className="icon-cyan" />
              <div>
                <strong>Trust Score:</strong>
                <span>Personel performansını 7 farklı metrikle puanlayan güvenilirlik motoru.</span>
              </div>
            </li>
            <li>
              <Zap className="icon-cyan" />
              <div>
                <strong>Anomali Korelasyonu:</strong>
                <span>Tekrarlayan şüpheli hareketleri ve suistimal kalıplarını otomatik tespit eder.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="ai-visual">
          <div className="visual-circle accent-gradient" />
          <div className="ai-preview-card glass">
            <img src="/map-hero.png" alt="AI Analysis Preview" className="ai-img" />
            <div className="visual-stats glass">
              <div className="stat-row">
                <span>Doğruluk Oranı</span>
                <span className="text-cyan">%99.4</span>
              </div>
              <div className="stat-bar"><div className="stat-fill" style={{ width: '99%' }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="cta-card accent-gradient">
          <h2>Dijital Dönüşümü Bugün Başlatın</h2>
          <p>Saha operasyonlarınızda verimliliği artırmak ve kayıpları önlemek için pilot programımıza katılın.</p>
          <div className="cta-buttons">
            <a href="mailto:info@sahatakip.net" className="btn-white">
              <Mail size={20} /> İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <ShieldCheck size={24} />
            <span>SahaTakip</span>
          </div>
          <p>© 2024 SahaTakip AI. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
