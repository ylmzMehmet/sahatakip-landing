import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Özellikler' },
  { href: '#admin', label: 'Admin Panel' },
  { href: '#mobile', label: 'Mobil Uygulama' },
  { href: '#how-it-works', label: 'Nasıl Çalışır' },
  { href: '#ai', label: 'AI Merkezi' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled
        ? 'py-2 bg-bg/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.03),0_8px_40px_rgba(0,0,0,0.4)]'
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 bg-transparent border-none cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-transparent flex items-center justify-center mr-2.5">
            <MapPin className="w-6 h-6 text-[#00d4ff] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
          </div>
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-white">SAHA</span>
            <span className="text-[#00d4ff] ml-1.5 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">TAKİP</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-2 py-1.5">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-[13px] font-medium text-muted hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.sahatakip.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-white font-semibold text-[13px] px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Giriş Yap
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-bg font-semibold text-[13px] px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:shadow-[0_0_35px_rgba(0,212,255,0.45)]"
          >
            Demo Talep Et
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-4 pb-6 border-t border-white/5 bg-bg/95 backdrop-blur-2xl space-y-1 mt-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl text-sm text-muted hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-30" />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href="https://app.sahatakip.net"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-all"
            >
              Giriş Yap
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center bg-brand text-bg font-semibold text-sm px-5 py-3.5 rounded-xl transition-all"
            >
              Demo Talep Et
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
