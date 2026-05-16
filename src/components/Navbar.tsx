import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Özellikler' },
  { href: '#admin', label: 'Admin Panel' },
  { href: '#mobile', label: 'Mobil Uygulama' },
  { href: '#how-it-works', label: 'Nasıl Çalışır' },
  { href: '#ai', label: 'AI Merkezi' },
  { href: '#contact', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollToTop}
          className="relative z-[60] flex items-center shrink-0 pr-4 transition-opacity duration-200 hover:opacity-90 bg-transparent border-none outline-none cursor-pointer"
        >
          <div className="flex items-center gap-2 font-black text-2xl sm:text-3xl tracking-tighter uppercase">
            <span className="text-white">SAHA</span>
            <span className="text-primary">TAKİP</span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-textMuted">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors duration-200 relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            Demo Talep Et
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-white/5 px-6 py-6 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all"
          >
            Demo Talep Et
          </a>
        </div>
      )}
    </nav>
  );
}
