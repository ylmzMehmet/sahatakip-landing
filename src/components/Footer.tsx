import React from 'react';

const footerLinks = [
  { label: 'Özellikler', href: '#features' },
  { label: 'Admin Panel', href: '#admin' },
  { label: 'Mobil Uygulama', href: '#mobile' },
  { label: 'AI Merkezi', href: '#ai' },
  { label: 'İletişim', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030308] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase mb-3">
              <span className="text-white">SAHA</span>
              <span className="text-primary">TAKİP</span>
            </div>
            <p className="text-sm text-textDim leading-relaxed max-w-xs">
              Saha operasyonlarınızı GPS doğrulama, fotoğraflı kanıt ve AI destekli anomali tespiti ile yönetin.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2.5">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-textDim hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-2.5 text-sm text-textDim">
              <li>
                <a href="mailto:info@sahatakip.net" className="hover:text-white transition-colors">
                  info@sahatakip.net
                </a>
              </li>
              <li>
                <a href="mailto:demo@sahatakip.net" className="hover:text-white transition-colors">
                  demo@sahatakip.net
                </a>
              </li>
              <li>
                <a href="https://www.sahatakip.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.sahatakip.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-textDim">
            © {new Date().getFullYear()} SahaTakip. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6 text-xs text-textDim">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
