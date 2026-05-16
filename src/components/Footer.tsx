import React from 'react';
import { MapPin } from 'lucide-react';

const footerLinks = [
  { label: 'Özellikler', href: '#features' },
  { label: 'Admin Panel', href: '#admin' },
  { label: 'Mobil Uygulama', href: '#mobile' },
  { label: 'AI Merkezi', href: '#ai' },
  { label: 'İletişim', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#040608]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <div className="w-9 h-9 rounded-xl bg-transparent flex items-center justify-center mr-2.5">
                <MapPin className="w-6 h-6 text-[#00d4ff] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
              </div>
              <span className="text-xl font-black tracking-tighter">
                <span className="text-white">SAHA</span>
                <span className="text-[#00d4ff] ml-1.5 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">TAKİP</span>
              </span>
            </div>
            <p className="text-[13px] text-dim leading-relaxed max-w-xs">
              GPS doğrulama, fotoğraflı kanıt ve AI destekli anomali tespiti ile saha operasyonlarınızı yönetin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-5 tracking-wide uppercase">Hızlı Erişim</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13px] text-dim hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-5 tracking-wide uppercase">İletişim</h4>
            <ul className="space-y-3 text-[13px] text-dim">
              <li><a href="mailto:info@sahatakip.net" className="hover:text-white transition-colors">info@sahatakip.net</a></li>
              <li><a href="mailto:demo@sahatakip.net" className="hover:text-white transition-colors">demo@sahatakip.net</a></li>
              <li><a href="https://www.sahatakip.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.sahatakip.net</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-dim">
            © {new Date().getFullYear()} SahaTakip. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-[12px] text-dim">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
