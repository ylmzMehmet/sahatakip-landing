import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div id="top" className="relative min-h-screen bg-bg text-slate-900 font-sans overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Global BG Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.012]" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
