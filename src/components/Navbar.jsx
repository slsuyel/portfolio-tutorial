import React, { useState, useEffect } from 'react';
import { Menu, X, Code, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeSection, onCopyEmail }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3.5 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center">
              <span className="font-mono-code font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-sm">
                &lt;SH/&gt;
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base leading-none group-hover:text-indigo-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-400 font-mono-code mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0f172a]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onCopyEmail()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-white/10 transition-all hover:scale-105 active:scale-95"
            title="Copy email address"
          >
            <Send className="w-3.5 h-3.5 text-indigo-400" />
            <span>Copy Email</span>
          </button>
          
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 text-slate-200 border border-white/10 hover:bg-slate-700 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0f172a]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-indigo-600/20 hover:text-indigo-300 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono-code text-slate-500">→</span>
              </a>
            ))}
            
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  onCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 border border-white/10 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                Copy Email (slsuyel@gmail.com)
              </button>
              
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
              >
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
