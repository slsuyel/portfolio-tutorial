import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      }`}
    >
      {/* Outer Pulsing Glow Aura */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 blur-md opacity-75 animate-pulse"></div>

      {/* Main Interactive Button */}
      <button
        onClick={scrollToTop}
        className="relative p-3.5 rounded-2xl bg-[#0b0f17] border border-indigo-500/50 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden flex items-center justify-center"
        title="Scroll to Top"
        aria-label="Scroll to top of page"
      >
        {/* Shimmer Sweep Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

        {/* Animated Arrow Icon */}
        <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:text-white group-hover:-translate-y-1 transition-transform duration-300 animate-bounce" />
      </button>
    </div>
  );
}
