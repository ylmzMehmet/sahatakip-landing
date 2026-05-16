import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-2xl bg-brand text-bg flex items-center justify-center shadow-[0_10px_30px_rgba(0,212,255,0.4)] hover:shadow-[0_15px_40px_rgba(0,212,255,0.6)] hover:-translate-y-1.5 active:scale-95 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce-short" />
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-brand blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
